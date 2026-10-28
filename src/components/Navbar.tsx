import React, { useState } from 'react';
import { Search, Menu, X, Download, Volume2, VolumeX, ImagePlus, Layers } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface NavbarProps {
  onOpenOutline: () => void;
  onOpenPhotoManager: () => void;
  onOpenSearch: () => void;
  wireframeActive: boolean;
  onToggleWireframe: () => void;
  currentSlideIndex: number;
  totalSlides: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenOutline,
  onOpenPhotoManager,
  onOpenSearch,
  wireframeActive,
  onToggleWireframe,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(audioEngine.isMuted);

  const handleAudioToggle = () => {
    const muted = audioEngine.toggleMute();
    setIsMuted(muted);
  };

  const scrollToSection = (id: string) => {
    audioEngine.playClick(900);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gradient-to-b from-[#0A0D0C]/90 via-[#0A0D0C]/60 to-transparent backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left Nav items (as seen in user's image) */}
        <div className="flex items-center space-x-8">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="flex items-center space-x-2 group"
          >
            <span className="font-syne font-extrabold text-xl tracking-wider text-white group-hover:text-[#E61E2B] transition-colors">
              BUILT<span className="text-[#E61E2B]">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-7 text-[11px] font-mono-tech tracking-[0.22em] text-[#8E9893]">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-white transition-colors uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#E61E2B] after:transition-all"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('portraits')}
              className="hover:text-white transition-colors uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#A31C1B] after:transition-all flex items-center space-x-1"
            >
              <span>PORTRAITS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#A31C1B]" />
            </button>
            <button
              onClick={() => scrollToSection('engineering')}
              className="hover:text-white transition-colors uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#8FB49D] after:transition-all"
            >
              SYSTEMS
            </button>
            <button
              onClick={() => scrollToSection('collection')}
              className="hover:text-white transition-colors uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#E61E2B] after:transition-all"
            >
              COLLECTION
            </button>
            <button
              onClick={() => scrollToSection('journal')}
              className="hover:text-white transition-colors uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#E61E2B] after:transition-all"
            >
              JOURNAL
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-white transition-colors uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#E61E2B] after:transition-all"
            >
              ABOUT
            </button>
          </nav>
        </div>

        {/* Right side tools: Outline PNG exporter, Photo customizer, Sound, Search, Hamburger */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Export Outline PNG button (Requested by user) */}
          <button
            onClick={() => {
              audioEngine.playClick(1100);
              onOpenOutline();
            }}
            className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono-tech tracking-wider uppercase transition-all bg-[#121A17] hover:bg-[#182420] text-[#8FB49D] border border-[#8FB49D]/30 hover:border-[#8FB49D] hover:shadow-[0_0_15px_rgba(143,180,157,0.25)]"
            title="View & Download Website Outline PNG"
          >
            <Download className="w-3.5 h-3.5 text-[#8FB49D]" />
            <span className="hidden lg:inline">Outline PNG</span>
          </button>

          {/* Upload / Replace Photos button */}
          <button
            onClick={() => {
              audioEngine.playClick(900);
              onOpenPhotoManager();
            }}
            className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono-tech tracking-wider uppercase transition-all bg-[#1F1214] hover:bg-[#2C1417] text-[#FF4D5A] border border-[#E61E2B]/40 hover:border-[#E61E2B] hover:shadow-[0_0_15px_rgba(230,30,43,0.3)]"
            title="Upload or change with your own photos"
          >
            <ImagePlus className="w-3.5 h-3.5 text-[#E61E2B]" />
            <span className="hidden sm:inline">My Photos</span>
          </button>

          {/* Wireframe toggle */}
          <button
            onClick={() => {
              audioEngine.playClick(750);
              onToggleWireframe();
            }}
            className={`p-2 rounded-full transition-all border ${
              wireframeActive
                ? 'bg-[#E61E2B]/20 text-[#FF4D5A] border-[#E61E2B]'
                : 'bg-[#101614] text-[#8E9893] border-white/10 hover:text-white'
            }`}
            title="Toggle Wireframe Blueprint Overlay"
          >
            <Layers className="w-4 h-4" />
          </button>

          {/* Audio toggle */}
          <button
            onClick={handleAudioToggle}
            className={`p-2 rounded-full transition-all border ${
              !isMuted
                ? 'bg-[#8FB49D]/20 text-[#8FB49D] border-[#8FB49D]/50'
                : 'bg-[#101614] text-[#8E9893] border-white/10 hover:text-white'
            }`}
            title={isMuted ? 'Unmute Audio Ambience' : 'Mute Audio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Search trigger (from user screenshot) */}
          <button
            onClick={() => {
              audioEngine.playClick(1000);
              onOpenSearch();
            }}
            className="p-2 text-[#8E9893] hover:text-white transition-colors"
            title="Search Portfolio"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#8E9893] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0D0C]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-4 text-xs font-mono-tech tracking-[0.25em]">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left text-white py-2 border-b border-white/5 hover:text-[#E61E2B]"
            >
              01 // HOME
            </button>
            <button
              onClick={() => scrollToSection('portraits')}
              className="text-left text-[#A31C1B] font-bold py-2 border-b border-white/5 hover:text-white"
            >
              02 // 6-POSE PORTRAITS
            </button>
            <button
              onClick={() => scrollToSection('engineering')}
              className="text-left text-[#8E9893] hover:text-white py-2 border-b border-white/5"
            >
              03 // AI & SYSTEMS
            </button>
            <button
              onClick={() => scrollToSection('collection')}
              className="text-left text-[#8E9893] hover:text-white py-2 border-b border-white/5"
            >
              04 // COLLECTION
            </button>
            <button
              onClick={() => scrollToSection('journal')}
              className="text-left text-[#8E9893] hover:text-white py-2 border-b border-white/5"
            >
              05 // JOURNAL
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-[#8E9893] hover:text-white py-2 border-b border-white/5"
            >
              06 // ABOUT
            </button>
          </div>

          <div className="pt-4 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOutline();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-[#8FB49D]/10 text-[#8FB49D] border border-[#8FB49D]/30 text-xs font-mono-tech"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD WEBSITE OUTLINE PNG</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPhotoManager();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-[#E61E2B]/10 text-[#FF4D5A] border border-[#E61E2B]/30 text-xs font-mono-tech"
            >
              <ImagePlus className="w-4 h-4" />
              <span>UPLOAD YOUR OWN PHOTOS</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
