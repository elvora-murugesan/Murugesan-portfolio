import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';
import { audioEngine } from '../utils/audioEngine';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl">
      <div className="relative w-full max-w-6xl h-[90vh] flex flex-col md:flex-row bg-[#0B0F0D] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={() => {
            audioEngine.playClick(800);
            onClose();
          }}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:border-[#E61E2B] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left/Center: High Res Photo Frame */}
        <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain p-2 md:p-6 select-none"
          />

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              audioEngine.playSlideTransition();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              audioEngine.playSlideTransition();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 text-white/80 hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Info Sidebar */}
        <div className="w-full md:w-80 lg:w-96 bg-[#0E1412] p-6 border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-[10px] font-mono-tech tracking-widest text-[#8FB49D] uppercase mb-1">
                <span>CATEGORY</span>
                <span>//</span>
                <span className="text-[#E61E2B]">{item.category}</span>
              </div>
              <h3 className="font-editorial text-2xl text-white leading-tight">
                {item.title}
              </h3>
            </div>

            <p className="text-xs text-[#8E9893] leading-relaxed font-light">
              {item.description}
            </p>

            {/* EXIF Data Grid */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <span className="text-[10px] font-mono-tech tracking-widest text-[#8FB49D] uppercase block">
                EXPOSURE METRICS
              </span>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-[10px] text-[#6E7B74] block">CAMERA</span>
                  <span className="text-white text-[11px] truncate block">{item.camera}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-[10px] text-[#6E7B74] block">LOCATION</span>
                  <span className="text-white text-[11px] truncate block">{item.location}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-[10px] text-[#6E7B74] block">ISO</span>
                  <span className="text-[#8FB49D] text-[11px] block">{item.iso}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-[10px] text-[#6E7B74] block">SHUTTER</span>
                  <span className="text-[#E61E2B] text-[11px] block">{item.shutter}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-tech text-[#8E9893]">
            <span>MEDIUM FORMAT RAW</span>
            <span className="text-[#8FB49D]">RGB / REC.709</span>
          </div>
        </div>

      </div>
    </div>
  );
};
