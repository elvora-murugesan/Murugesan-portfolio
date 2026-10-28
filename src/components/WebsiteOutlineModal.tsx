import React, { useEffect, useState } from 'react';
import { X, Download, Eye, Layers, CheckCircle2, FileCode, Palette } from 'lucide-react';
import { generateWebsiteOutlinePng, downloadOutlinePng } from '../utils/generateOutlinePng';
import { audioEngine } from '../utils/audioEngine';

interface WebsiteOutlineModalProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleWireframeMode: () => void;
  wireframeActive: boolean;
}

export const WebsiteOutlineModal: React.FC<WebsiteOutlineModalProps> = ({
  isOpen,
  onClose,
  onToggleWireframeMode,
  wireframeActive,
}) => {
  const [outlineDataUrl, setOutlineDataUrl] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'preview' | 'specs' | 'tokens'>('preview');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const url = generateWebsiteOutlinePng();
      setOutlineDataUrl(url);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownload = () => {
    audioEngine.playShutter();
    downloadOutlinePng();
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl">
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col bg-[#0A0E0C] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0F1412]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#E61E2B]/15 border border-[#E61E2B]/40 flex items-center justify-center">
              <Layers className="w-4 h-4 text-[#E61E2B]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono-tech tracking-wider text-[#8FB49D] uppercase">
                  ARCHITECTURAL WIREFRAME BLUEPRINT
                </span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono-tech bg-[#E61E2B]/20 text-[#FF4D5A]">
                  PNG FORMAT
                </span>
              </div>
              <h3 className="font-editorial text-lg text-white">
                Website Outline & Layout Specifications
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Download PNG Button */}
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#E61E2B] hover:bg-[#FF2E3E] text-white text-xs font-mono-tech tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(230,30,43,0.5)]"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>DOWNLOADED PNG!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD OUTLINE PNG</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                audioEngine.playClick(800);
                onClose();
              }}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs inside modal */}
        <div className="px-6 py-2.5 bg-[#090C0B] border-b border-white/5 flex items-center justify-between text-xs font-mono-tech">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex items-center space-x-1.5 py-1 px-3 rounded-md transition-colors ${
                activeTab === 'preview'
                  ? 'bg-white/10 text-white'
                  : 'text-[#8E9893] hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-[#8FB49D]" />
              <span>PNG OUTLINE PREVIEW</span>
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`flex items-center space-x-1.5 py-1 px-3 rounded-md transition-colors ${
                activeTab === 'specs'
                  ? 'bg-white/10 text-white'
                  : 'text-[#8E9893] hover:text-white'
              }`}
            >
              <FileCode className="w-3.5 h-3.5 text-[#E61E2B]" />
              <span>COMPONENT ARCHITECTURE</span>
            </button>
            <button
              onClick={() => setActiveTab('tokens')}
              className={`flex items-center space-x-1.5 py-1 px-3 rounded-md transition-colors ${
                activeTab === 'tokens'
                  ? 'bg-white/10 text-white'
                  : 'text-[#8E9893] hover:text-white'
              }`}
            >
              <Palette className="w-3.5 h-3.5 text-[#8FB49D]" />
              <span>DESIGN TOKENS</span>
            </button>
          </div>

          <button
            onClick={onToggleWireframeMode}
            className={`hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-md text-[11px] font-mono-tech transition-colors border ${
              wireframeActive
                ? 'bg-[#E61E2B]/20 text-[#FF4D5A] border-[#E61E2B]'
                : 'bg-transparent text-[#8E9893] border-white/10 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{wireframeActive ? 'WIREFRAME MODE: ON' : 'WIREFRAME MODE: OFF'}</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#080B0A]">
          {activeTab === 'preview' && (
            <div className="flex flex-col items-center">
              <div className="w-full mb-4 flex items-center justify-between text-xs font-mono-tech text-[#8E9893]">
                <span>SCHEMATIC DIMENSIONS: 1600 × 2400 PIXELS · 300 DPI EQUIVALENT</span>
                <span className="text-[#8FB49D]">FORMAT: HIGH-RESOLUTION TRANSPARENT / MATTE PNG</span>
              </div>

              {/* Rendered Canvas Image Preview */}
              <div className="w-full max-w-3xl rounded-2xl overflow-hidden border border-white/20 shadow-2xl relative bg-[#060807] group">
                {outlineDataUrl ? (
                  <img
                    src={outlineDataUrl}
                    alt="Website Outline & Architecture Wireframe"
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <div className="h-96 flex items-center justify-center text-zinc-500 font-mono-tech">
                    Synthesizing outline graphic...
                  </div>
                )}

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={handleDownload}
                    className="p-3 rounded-xl bg-black/80 backdrop-blur-md border border-[#E61E2B] text-white shadow-xl hover:bg-[#E61E2B] transition-colors"
                    title="Export PNG to disk"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="mt-6 flex items-center space-x-4">
                <button
                  onClick={handleDownload}
                  className="px-8 py-3 rounded-full bg-[#E61E2B] hover:bg-[#FF2E3E] text-white text-xs font-mono-tech tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(230,30,43,0.5)] flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD FULL OUTLINE PNG</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="border border-white/10 rounded-2xl p-6 bg-[#0D1210]">
                <h4 className="font-editorial text-xl text-white mb-2">
                  Structural Section Hierarchy
                </h4>
                <p className="text-xs text-[#8E9893] font-mono-tech mb-6">
                  SPECIFIED FOR DESKTOP & MOBILE RESPONSIVE ADAPTATION
                </p>

                <div className="space-y-4 text-xs font-mono-tech">
                  <div className="p-4 rounded-xl bg-black/40 border border-[#8FB49D]/20">
                    <span className="text-[#E61E2B] font-bold block mb-1">01. FIXED NAVIGATION BAR</span>
                    <p className="text-[#A2AFA8]">
                      Fixed 80px blur header. Logo 'BUILT.', navigation anchors (Home, Collection, Journal, About), plus utilities: Outline PNG Exporter, Sound Synthesizer, Photo Personalizer.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-[#E61E2B]/30">
                    <span className="text-[#E61E2B] font-bold block mb-1">02. HERO STAGE (100VH)</span>
                    <p className="text-[#A2AFA8]">
                      Two-column split view: Left side features the sage-green sports car rear quarter on wet reflective asphalt with neon red taillights. Center has the vertical crimson light streak. Right side features 'BUILT' in serif red (#E61E2B) and 'DIFFERENTLY' in serif ivory (#F5F5F0), 01/03 slide ticker, 'EXPLORE' pill button, and the macro aerodynamic detail preview card.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-[#8FB49D]/20">
                    <span className="text-[#8FB49D] font-bold block mb-1">03. COLOR MATRIX & BENCHMARK STRIP</span>
                    <p className="text-[#A2AFA8]">
                      Interactive palette swatch board showcasing exact color hex codes with 1-click clipboard copy.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-[#8FB49D]/20">
                    <span className="text-[#8FB49D] font-bold block mb-1">04. CURATED WORKS ARCHIVE (MASONRY GRID)</span>
                    <p className="text-[#A2AFA8]">
                      Filterable categories (Automotive, Details, Night Run, Editorial). Hover zoom with camera EXIF metadata (camera model, ISO, exposure). Lightbox inspector with high-res zoom.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-[#8FB49D]/20">
                    <span className="text-[#8FB49D] font-bold block mb-1">05. JOURNAL / BEHIND THE SCENES</span>
                    <p className="text-[#A2AFA8]">
                      Editorial cards with issue number, reading time, tags, cover image, and full article drawer reader.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-[#8FB49D]/20">
                    <span className="text-[#8FB49D] font-bold block mb-1">06. ABOUT THE ARTIST & INQUIRY</span>
                    <p className="text-[#A2AFA8]">
                      Artist portrait with rim lighting, philosophy statement, production arsenal inventory, and direct commission inquiry modal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tokens' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="border border-white/10 rounded-2xl p-6 bg-[#0D1210]">
                <h4 className="font-editorial text-xl text-white mb-4">
                  Visual Tokens & Typographic Scale
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono-tech">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-[#E61E2B] font-bold block mb-2">PRIMARY ACCENT</span>
                    <div className="text-xl font-bold text-[#E61E2B] mb-1">#E61E2B (Neon Crimson)</div>
                    <p className="text-[#8E9893]">Used for high-contrast focal titles, laser light beam, active tags, and primary CTAs.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-[#8FB49D] font-bold block mb-2">SECONDARY SURFACE</span>
                    <div className="text-xl font-bold text-[#8FB49D] mb-1">#8FB49D (Sage Metallic)</div>
                    <p className="text-[#8E9893]">Vehicle finish, micro-labels, coordinate borders, and balanced subtle contrasts.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-white font-bold block mb-2">CANVAS BASE</span>
                    <div className="text-xl font-bold text-white mb-1">#0A0D0C (Deep Obsidian)</div>
                    <p className="text-[#8E9893]">Ultra-matte dark atmospheric surface absorbing reflections and maximizing neon punch.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-[#F5F5F0] font-bold block mb-2">EDITORIAL TYPOGRAPHY</span>
                    <div className="text-xl font-bold text-[#F5F5F0] mb-1">#F5F5F0 (Pure Ivory)</div>
                    <p className="text-[#8E9893]">Playfair Display + Cinzel serifs paired with Space Grotesk technical mono.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0F1412] flex items-center justify-between text-xs font-mono-tech text-[#8E9893]">
          <span>SCHEMATIC ENGINE V1.0 · READY FOR EXPORT</span>
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 text-[#E61E2B] hover:text-white transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>EXPORT PNG</span>
          </button>
        </div>

      </div>
    </div>
  );
};
