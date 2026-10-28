import React from 'react';
import { ArrowUp, Download, ImagePlus, Mail } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface FooterProps {
  onOpenOutline: () => void;
  onOpenPhotoManager: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenOutline,
  onOpenPhotoManager,
  onOpenContact,
}) => {
  const scrollToTop = () => {
    audioEngine.playClick(1000);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#060807] border-t border-white/10 pt-16 pb-12 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Left */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-editorial text-3xl sm:text-4xl text-white">
              <span className="text-[#E61E2B] font-bold">BUILT</span> DIFFERENTLY.
            </h3>
            <p className="text-xs sm:text-sm text-[#8E9893] max-w-sm font-light leading-relaxed">
              Automotive cinematography, mechanical preservation, and high-contrast atmospheric art. Crafted with precision in Sage Green, Neon Crimson, and Obsidian.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs font-mono-tech text-[#8FB49D]">
              <span className="w-2 h-2 rounded-full bg-[#E61E2B] animate-pulse" />
              <span>COLOR PALETTE ENGINE ACTIVE</span>
            </div>
          </div>

          {/* Center Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono-tech tracking-[0.25em] text-[#8FB49D] uppercase">
              NAVIGATION & BLUEPRINTS
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-mono-tech text-[#8E9893]">
              <button
                onClick={onOpenOutline}
                className="text-left hover:text-white transition-colors flex items-center space-x-1.5 text-[#8FB49D]"
              >
                <Download className="w-3.5 h-3.5 text-[#E61E2B]" />
                <span>EXPORT WEBSITE OUTLINE (PNG FORMAT)</span>
              </button>
              <button
                onClick={onOpenPhotoManager}
                className="text-left hover:text-white transition-colors flex items-center space-x-1.5 text-[#FF5A67]"
              >
                <ImagePlus className="w-3.5 h-3.5 text-[#E61E2B]" />
                <span>UPLOAD YOUR OWN CAR PHOTOS</span>
              </button>
              <button
                onClick={onOpenContact}
                className="text-left hover:text-white transition-colors flex items-center space-x-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>COMMISSION & INQUIRY BRIEF</span>
              </button>
            </div>
          </div>

          {/* Right Column: Fast Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div className="text-right">
              <span className="text-[10px] font-mono-tech text-[#6D7873] block">
                GLOBAL HEADQUARTERS
              </span>
              <span className="text-xs font-mono-tech text-white block mt-1">
                STUTTGART // TOKYO // LOS ANGELES
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 p-3.5 rounded-full bg-[#121A17] hover:bg-[#1C2621] border border-white/15 text-white hover:border-[#8FB49D] transition-all flex items-center space-x-2 text-xs font-mono-tech"
            >
              <ArrowUp className="w-4 h-4 text-[#E61E2B]" />
              <span>RETURN TO TOP</span>
            </button>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-tech text-[#6D7873] gap-4">
          <div>
            © {new Date().getFullYear()} BUILT DIFFERENTLY STUDIO. ALL AUTOMOTIVE RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#8FB49D]">#E61E2B</span>
            <span>·</span>
            <span className="text-[#8FB49D]">#8FB49D</span>
            <span>·</span>
            <span className="text-[#8FB49D]">#0A0D0C</span>
            <span>·</span>
            <span className="text-[#8FB49D]">#F5F5F0</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
