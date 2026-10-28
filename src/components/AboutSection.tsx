import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface AboutSectionProps {
  onOpenContact: () => void;
  onOpenPhotoManager: () => void;
  creatorPhoto: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenContact,
  onOpenPhotoManager,
  creatorPhoto,
}) => {
  return (
    <section id="about" className="py-24 px-6 bg-[#0A0D0C] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Creator Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Crimson aura */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#E61E2B]/20 to-[#8FB49D]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0F1412] aspect-[4/5]">
                <img
                  src={creatorPhoto}
                  alt="Visual Director & Photographer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-mono-tech tracking-[0.25em] text-[#8FB49D] uppercase block mb-1">
                    AI & DATA SCIENCE · AUTOMATION
                  </span>
                  <h3 className="font-editorial text-2xl text-white">
                    PORTFOLIO CREATOR
                  </h3>
                  <p className="text-xs text-[#8E9893] mt-1">
                    Engineering Background · Computer Vision & Automation
                  </p>
                </div>
              </div>

              {/* Photo customization trigger */}
              <button
                onClick={onOpenPhotoManager}
                className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono-tech text-[#8FB49D] hover:text-white hover:border-[#8FB49D] transition-all"
              >
                Switch Pose / Photo
              </button>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Equipment */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono-tech tracking-[0.3em] text-[#8FB49D] uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#E61E2B]" />
                <span>ENGINEERING PHILOSOPHY</span>
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl text-white leading-tight">
                Architecting Intelligence Through <span className="text-[#E61E2B] italic">Automation Systems</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#8E9893] font-light leading-relaxed">
              AI and Data Science student with a foundational engineering background and an obsession with automation. Combining real-time perception models, scalable telemetry pipelines, and rigorous systems discipline with a bold, contemporary design aesthetic.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10">
              <div>
                <span className="font-editorial text-3xl sm:text-4xl text-[#E61E2B] block">
                  6
                </span>
                <span className="text-[11px] font-mono-tech text-[#8FB49D] uppercase tracking-wider">
                  Studio Poses
                </span>
              </div>
              <div>
                <span className="font-editorial text-3xl sm:text-4xl text-white block">
                  120+
                </span>
                <span className="text-[11px] font-mono-tech text-[#8FB49D] uppercase tracking-wider">
                  FPS Edge Vision
                </span>
              </div>
              <div>
                <span className="font-editorial text-3xl sm:text-4xl text-[#8FB49D] block">
                  100%
                </span>
                <span className="text-[11px] font-mono-tech text-[#8FB49D] uppercase tracking-wider">
                  Likeness Locked
                </span>
              </div>
            </div>

            {/* Technical Stack Inventory */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono-tech tracking-[0.25em] text-[#8FB49D] uppercase">
                SYSTEMS & AI ARSENAL
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono-tech text-[#B2BDB7]">
                <div className="p-2.5 rounded-lg bg-[#0F1412] border border-white/5 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#E61E2B]" />
                  <span>PyTorch & TensorRT</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0F1412] border border-white/5 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#8FB49D]" />
                  <span>ROS 2 & SLAM</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0F1412] border border-white/5 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span>Distributed Kafka</span>
                </div>
              </div>
            </div>

            {/* Commission CTA Button */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => {
                  audioEngine.playClick(1000);
                  onOpenContact();
                }}
                className="group px-8 py-3.5 rounded-full bg-[#E61E2B] hover:bg-[#FF2E3E] text-white text-xs font-mono-tech tracking-[0.2em] uppercase flex items-center space-x-3 transition-all shadow-[0_0_25px_rgba(230,30,43,0.4)]"
              >
                <span>INITIATE COMMISSION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#8E9893]">
                <ShieldCheck className="w-4 h-4 text-[#8FB49D]" />
                <span>Available for Worldwide Directing & Shoots</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
