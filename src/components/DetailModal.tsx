import React from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';
import { PortfolioSlide } from '../types';
import { audioEngine } from '../utils/audioEngine';

interface DetailModalProps {
  slide: PortfolioSlide | null;
  onClose: () => void;
  onExploreGallery: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  slide,
  onClose,
  onExploreGallery,
}) => {
  if (!slide) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0B0F0D] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0F1412]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#8FB49D]/15 border border-[#8FB49D]/30 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#8FB49D]" />
            </div>
            <div>
              <span className="text-[10px] font-mono-tech tracking-widest text-[#8FB49D] uppercase">
                {slide.badge}
              </span>
              <h3 className="font-editorial text-lg text-white">
                Engineering & Design Inspection
              </h3>
            </div>
          </div>

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

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Primary Car Image */}
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-black relative group">
              <img
                src={slide.image}
                alt={slide.titleRed}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-xs font-mono-tech text-white">
                <span className="text-[#E61E2B] font-bold">WIDE PERSPECTIVE</span> // REAR QUARTER
              </div>
            </div>

            {/* Macro Detail Curve */}
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-black relative group">
              <img
                src={slide.detailImage}
                alt="Macro curve"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-xs font-mono-tech text-white">
                <span className="text-[#8FB49D] font-bold">MACRO APEX</span> // CRIMSON REFLECTION
              </div>
            </div>

          </div>

          {/* Description */}
          <div className="border border-white/10 rounded-2xl p-6 bg-[#0E1311] space-y-4">
            <h4 className="font-editorial text-2xl text-white">
              <span className="text-[#E61E2B] font-bold">{slide.titleRed}</span> {slide.titleWhite}
            </h4>
            <p className="text-sm text-[#8E9893] leading-relaxed font-light">
              {slide.description} Designed with an obsessive balance of vintage motorsport curves and modern hypercar lighting. The celadon sage bodywork absorbs warm ambient glow while reflecting linear crimson beams with razor precision.
            </p>

            {/* Technical Specs List */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {slide.specs.map((spec, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[10px] font-mono-tech text-[#8FB49D] block uppercase">
                    {spec.label}
                  </span>
                  <span className="text-xs font-semibold text-white block mt-0.5 truncate">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0F1412] flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#8E9893]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#8FB49D]" />
            <span>ORIGINAL ONE-OFF AUTOMOTIVE ART COMMISSION</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onExploreGallery();
            }}
            className="px-6 py-2 rounded-full bg-[#E61E2B] hover:bg-[#FF2E3E] text-white text-xs font-mono-tech tracking-wider uppercase transition-colors"
          >
            VIEW IN FULL GALLERY
          </button>
        </div>

      </div>
    </div>
  );
};
