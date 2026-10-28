import React, { useState, useEffect } from 'react';
import { PORTRAIT_POSES } from '../data/portfolioData';
import { PortraitPose } from '../types';
import { Play, Pause, Download, Eye, Sliders, ChevronLeft, ChevronRight, Check, Film, ShieldCheck } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface PoseAnimationStageProps {
  onOpenLightbox: (item: any) => void;
}

export const PoseAnimationStage: React.FC<PoseAnimationStageProps> = ({ onOpenLightbox }) => {
  const [activePoseIndex, setActivePoseIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [downloadedFile, setDownloadedFile] = useState<string | null>(null);

  const activePose = PORTRAIT_POSES[activePoseIndex] || PORTRAIT_POSES[0];

  // Auto-play animation cycle
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActivePoseIndex((prev) => (prev + 1) % PORTRAIT_POSES.length);
        audioEngine.playSlideTransition();
      }, 3200);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleSelectPose = (index: number) => {
    audioEngine.playSlideTransition();
    setActivePoseIndex(index);
  };

  const handlePrev = () => {
    audioEngine.playSlideTransition();
    setActivePoseIndex((prev) => (prev - 1 + PORTRAIT_POSES.length) % PORTRAIT_POSES.length);
  };

  const handleNext = () => {
    audioEngine.playSlideTransition();
    setActivePoseIndex((prev) => (prev + 1) % PORTRAIT_POSES.length);
  };

  const handleDownloadSingle = (pose: PortraitPose) => {
    audioEngine.playShutter();
    const link = document.createElement('a');
    link.href = pose.image;
    link.download = pose.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadedFile(pose.filename);
    setTimeout(() => setDownloadedFile(null), 2500);
  };

  return (
    <section id="portraits" className="py-24 px-6 bg-[#080B0A] relative border-t border-white/[0.08] overflow-hidden">
      {/* Background Ambience: Deep Forest Green (#06110C) & Restrained Crimson (#A31C1B) */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#06110C] rounded-full blur-[140px] pointer-events-none opacity-80" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#A31C1B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-tech tracking-[0.3em] text-[#8FB49D] uppercase mb-2">
              <Film className="w-3.5 h-3.5 text-[#A31C1B]" />
              <span>THE 6-POSE ANIMATION & PORTRAIT COLLECTION</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white">
              Photographic <span className="text-[#A31C1B] italic">Continuity</span>
            </h2>
            <p className="text-[#8E9893] text-sm sm:text-base mt-2 max-w-xl font-light">
              Exact identity preservation across six distinct studio postures. Charcoal-grey hoodie (#30312F), signature browline sunglasses, and neutral 5600K key lighting with restrained crimson separation.
            </p>
          </div>

          {/* Animation Controls: Play / Pause Auto-Cycle & Download Active */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                audioEngine.playClick(1000);
                setIsPlaying(!isPlaying);
              }}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-mono-tech tracking-wider uppercase transition-all shadow-md ${
                isPlaying
                  ? 'bg-[#A31C1B] text-white shadow-[0_0_20px_rgba(163,28,27,0.5)]'
                  : 'bg-[#141C18] text-[#8FB49D] border border-[#8FB49D]/30 hover:border-[#8FB49D]'
              }`}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'PAUSE ANIMATION CYCLE' : 'PLAY ANIMATION CYCLE'}</span>
            </button>

            <button
              onClick={() => handleDownloadSingle(activePose)}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[#121A17] hover:bg-[#1A2622] text-[#F2EEE8] border border-white/15 text-xs font-mono-tech transition-colors"
              title={`Download ${activePose.filename}`}
            >
              {downloadedFile === activePose.filename ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">DOWNLOADED</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-[#A31C1B]" />
                  <span>EXPORT {activePose.filename}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: The Large Animated Portrait Canvas */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden bg-[#070A09] border border-white/15 shadow-2xl group">
              
              {/* Subtle Rim Glow on Stage */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#06110C] via-transparent to-[#A31C1B]/20 rounded-3xl blur-xl opacity-60" />

              {/* Dynamic Image Container with smooth transition */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-black flex items-center justify-center">
                <img
                  key={activePose.id}
                  src={activePose.image}
                  alt={activePose.name}
                  className="w-full h-full object-cover sm:object-contain object-center transition-all duration-700 ease-out animate-fade-in group-hover:scale-102"
                />

                {/* Subtle Matte Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Floating Pose Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono-tech text-[#8FB49D]">
                  <span className="w-2 h-2 rounded-full bg-[#A31C1B] animate-pulse" />
                  <span>{activePose.poseNumber} // {activePose.name.toUpperCase()}</span>
                </div>

                {/* File Name Stamp */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono-tech text-[#8E9893]">
                  {activePose.filename}
                </div>

                {/* Manual Navigation Controls over Canvas */}
                <div className="absolute inset-y-0 left-3 flex items-center z-20">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 text-white/80 hover:text-white transition-colors"
                    title="Previous Pose"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </div>

                <div className="absolute inset-y-0 right-3 flex items-center z-20">
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 text-white/80 hover:text-white transition-colors"
                    title="Next Pose"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Inspect Fullscreen Button */}
                <div className="absolute bottom-4 right-4 z-20">
                  <button
                    onClick={() => onOpenLightbox({
                      id: activePose.id,
                      title: activePose.name,
                      category: 'Portraits',
                      image: activePose.image,
                      camera: activePose.cameraAngle,
                      location: 'Studio Session',
                      iso: '100',
                      shutter: '1/200s',
                      description: activePose.description
                    })}
                    className="p-2.5 rounded-full bg-black/70 hover:bg-[#A31C1B] border border-white/15 text-white transition-colors shadow-lg"
                    title="View Fullscreen High-Resolution"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

            {/* Pose Scrub Bar / Mini Ticker */}
            <div className="mt-4 flex items-center justify-between text-xs font-mono-tech text-[#8E9893]">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8FB49D]" />
                <span>IDENTITY LOCKED · NATURAL SKIN TONE</span>
              </span>
              <span className="text-[#A31C1B]">
                {String(activePoseIndex + 1).padStart(2, '0')} / {String(PORTRAIT_POSES.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Right Column: Pose Architecture & Lighting Diagnostics */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Active Pose Header */}
            <div className="border border-white/10 rounded-2xl p-6 bg-[#0E1311]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono-tech text-[#A31C1B] font-bold">
                  POSE SPECIFICATION 0{activePoseIndex + 1}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono-tech bg-white/5 border border-white/10 text-[#8FB49D]">
                  3:2 / HIGH-RES
                </span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-white mb-2">
                {activePose.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#8E9893] leading-relaxed font-light mb-4">
                {activePose.description}
              </p>

              {/* Ideal Usage */}
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 mb-4">
                <span className="text-[10px] font-mono-tech text-[#8FB49D] block uppercase">
                  IDEAL WEBSITE INTEGRATION
                </span>
                <span className="text-xs text-white block mt-0.5 font-medium">
                  {activePose.idealUsage}
                </span>
              </div>

              {/* Studio Lighting Breakdown */}
              <div className="space-y-2 pt-2 border-t border-white/5">
                <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#8FB49D] mb-1">
                  <Sliders className="w-3.5 h-3.5 text-[#A31C1B]" />
                  <span>LIGHTING & OPTICS DIAGNOSTIC</span>
                </div>

                <div className="space-y-1.5 text-[11px] font-mono-tech">
                  <div className="flex items-start space-x-2">
                    <span className="text-[#F2EEE8] w-16 shrink-0">KEY:</span>
                    <span className="text-[#8E9893]">{activePose.lightingSpecs.key}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-[#8FB49D] w-16 shrink-0">AMBIENT:</span>
                    <span className="text-[#8E9893]">{activePose.lightingSpecs.ambient}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-[#A31C1B] w-16 shrink-0">RIM:</span>
                    <span className="text-[#8E9893]">{activePose.lightingSpecs.rim}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnails of all 6 poses for rapid 1-click switching */}
            <div className="space-y-2">
              <span className="text-xs font-mono-tech text-[#8E9893] tracking-widest block uppercase">
                SELECT STUDIO POSE:
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {PORTRAIT_POSES.map((pose, idx) => {
                  const isCurrent = idx === activePoseIndex;
                  return (
                    <button
                      key={pose.id}
                      onClick={() => handleSelectPose(idx)}
                      className={`group relative rounded-xl overflow-hidden aspect-[3/4] border transition-all duration-300 ${
                        isCurrent
                          ? 'border-[#A31C1B] ring-2 ring-[#A31C1B]/40 scale-105'
                          : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                      }`}
                    >
                      <img
                        src={pose.image}
                        alt={pose.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-mono-tech text-white">
                        0{idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
