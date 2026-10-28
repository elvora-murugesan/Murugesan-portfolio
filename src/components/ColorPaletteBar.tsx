import React, { useState } from 'react';
import { Copy, Check, Palette } from 'lucide-react';
import { COLOR_PALETTE_TOKENS } from '../data/portfolioData';
import { audioEngine } from '../utils/audioEngine';

export const ColorPaletteBar: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    audioEngine.playClick(1200);
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="w-full bg-[#080B0A] border-y border-white/[0.08] py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-white/5 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#E61E2B]/10 border border-[#E61E2B]/30 flex items-center justify-center">
              <Palette className="w-4 h-4 text-[#E61E2B]" />
            </div>
            <div>
              <h4 className="text-xs font-mono-tech tracking-[0.25em] text-[#8FB49D] uppercase">
                BRAND COLOR MATRIX
              </h4>
              <p className="text-sm font-editorial text-white">
                Extracted from the Automotive Editorial Vision
              </p>
            </div>
          </div>
          <div className="text-xs font-mono-tech text-[#8E9893]">
            CLICK ANY SWATCH TO COPY COLOR HEX
          </div>
        </div>

        {/* Swatch Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {COLOR_PALETTE_TOKENS.map((token) => {
            const isCopied = copiedHex === token.hex;
            const isLight = token.hex === '#F5F5F0' || token.hex === '#8FB49D';

            return (
              <div
                key={token.hex}
                onClick={() => handleCopy(token.hex)}
                className="group cursor-pointer rounded-xl bg-[#0F1412] p-3 border border-white/10 hover:border-white/30 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Visual Color Pill */}
                <div
                  className="w-full h-14 rounded-lg relative overflow-hidden mb-3 border border-white/10 flex items-end justify-end p-1.5 transition-transform group-hover:scale-102"
                  style={{ backgroundColor: token.hex }}
                >
                  <div
                    className={`p-1 rounded bg-black/40 backdrop-blur-sm ${
                      isLight ? 'text-black' : 'text-white'
                    }`}
                  >
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                    )}
                  </div>
                </div>

                {/* Token Data */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tech font-bold text-xs text-white">
                      {token.hex}
                    </span>
                    {isCopied && (
                      <span className="text-[10px] font-mono-tech text-[#E61E2B] animate-pulse">
                        COPIED
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] font-medium text-[#8FB49D] truncate">
                    {token.name}
                  </div>
                  <div className="text-[10px] text-[#6E7B74] leading-tight line-clamp-2">
                    {token.role}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
