import React from 'react';
import { Download } from 'lucide-react';
import { downloadOutlinePng } from '../utils/generateOutlinePng';

interface WireframeOverlayProps {
  active: boolean;
  onToggle: () => void;
  onOpenOutlineModal: () => void;
}

export const WireframeOverlay: React.FC<WireframeOverlayProps> = ({
  active,
  onToggle,
  onOpenOutlineModal,
}) => {
  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Blueprint Grid Lines */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(143, 180, 157, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(143, 180, 157, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Screen Outline Border with corner marks */}
      <div className="absolute inset-2 border-2 border-dashed border-[#8FB49D]/40 pointer-events-none">
        {/* Top-left corner */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#E61E2B]" />
        {/* Top-right corner */}
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#E61E2B]" />
        {/* Bottom-left corner */}
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#E61E2B]" />
        {/* Bottom-right corner */}
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#E61E2B]" />
      </div>

      {/* Floating Blueprint HUD in bottom-left */}
      <div className="absolute bottom-6 left-6 pointer-events-auto bg-[#070A09]/95 border border-[#8FB49D]/50 rounded-2xl p-4 shadow-2xl backdrop-blur-xl flex flex-col space-y-2 max-w-xs">
        <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#8FB49D]">
          <span className="w-2 h-2 rounded-full bg-[#E61E2B] animate-ping" />
          <span className="font-bold">ARCHITECTURAL BLUEPRINT MODE</span>
        </div>
        <p className="text-[11px] text-[#A2ADA7] font-mono-tech leading-snug">
          Live layout dimensions, hierarchy tags, and coordinate grids are active.
        </p>
        <div className="pt-2 flex items-center space-x-2">
          <button
            onClick={downloadOutlinePng}
            className="flex-1 py-1.5 px-3 rounded-lg bg-[#E61E2B] hover:bg-[#FF2E3E] text-white text-[10px] font-mono-tech tracking-wider uppercase flex items-center justify-center space-x-1"
          >
            <Download className="w-3 h-3" />
            <span>SAVE PNG</span>
          </button>
          <button
            onClick={onOpenOutlineModal}
            className="py-1.5 px-3 rounded-lg bg-[#141C18] text-[#8FB49D] border border-[#8FB49D]/30 text-[10px] font-mono-tech hover:bg-[#1C2621]"
          >
            VIEW BLUEPRINT
          </button>
          <button
            onClick={onToggle}
            className="py-1.5 px-2.5 rounded-lg bg-white/10 text-white text-[10px] font-mono-tech hover:bg-white/20"
          >
            EXIT
          </button>
        </div>
      </div>
    </div>
  );
};
