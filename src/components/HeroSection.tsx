import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Maximize2, Sparkles, RefreshCw } from 'lucide-react';
import { PortfolioSlide } from '../types';
import { audioEngine } from '../utils/audioEngine';

interface HeroSectionProps {
  slides: PortfolioSlide[];
  currentSlide: number;
  onChangeSlide: (index: number) => void;
  onExploreClick: () => void;
  onOpenDetailModal: (slide: PortfolioSlide) => void;
  onOpenPhotoManager: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  slides,
  currentSlide,
  onChangeSlide,
  onExploreClick,
  onOpenDetailModal,
  onOpenPhotoManager,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  const activeSlide = slides[currentSlide] || slides[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleNext = () => {
    audioEngine.playSlideTransition();
    onChangeSlide((currentSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    audioEngine.playSlideTransition();
    onChangeSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#0A0D0C] overflow-hidden flex items-center pt-20"
    >
      {/* Background Radial Ambiance & Wet Floor Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-to-bottom neon crimson beam (matching user's reference) */}
        <div
          className="absolute left-[38%] md:left-[42%] top-0 bottom-0 w-24 md:w-36 bg-gradient-to-b from-[#E61E2B]/0 via-[#E61E2B]/20 to-[#E61E2B]/35 blur-2xl transform -skew-x-6 pointer-events-none animate-pulse-glow"
        />

        {/* Central sharp laser line */}
        <div
          className="absolute left-[39%] md:left-[43%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#E61E2B]/10 via-[#FF2E3E]/70 to-[#E61E2B]/80 blur-[1px] transform -skew-x-6 opacity-80"
        />

        {/* Floor red light reflection pool */}
        <div className="absolute bottom-0 left-[20%] right-[30%] h-44 bg-gradient-to-t from-[#E61E2B]/25 via-[#E61E2B]/10 to-transparent blur-3xl" />

        {/* Ambient Dark Teal/Emerald haze on corners */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#8FB49D]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#E61E2B]/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
        
        {/* Left Column: Automotive Subject with Parallax Depth */}
        <div className="lg:col-span-6 relative flex items-center justify-center order-2 lg:order-1">
          <div
            className="relative w-full max-w-xl group cursor-pointer transition-transform duration-700 ease-out"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`,
            }}
            onClick={() => onOpenDetailModal(activeSlide)}
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => setIsHoveringImage(false)}
          >
            {/* Soft Ambient Rim Light */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#8FB49D]/20 via-transparent to-[#E61E2B]/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Main Stage Image Container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0D1210]">
              <img
                src={activeSlide.image}
                alt={`${activeSlide.titleRed} ${activeSlide.titleWhite}`}
                className="w-full h-[380px] sm:h-[480px] md:h-[540px] object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Wet asphalt dark reflection gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-[#0A0D0C]/60 pointer-events-none" />

              {/* Live Badge Overlay */}
              <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono-tech tracking-widest text-[#8FB49D]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E61E2B] animate-pulse" />
                <span>{activeSlide.badge}</span>
              </div>

              {/* Interactive Inspect button on hover */}
              <div className={`absolute bottom-4 left-4 z-20 flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#E61E2B]/40 text-xs font-mono-tech text-white transition-all duration-300 ${isHoveringImage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                <Maximize2 className="w-3.5 h-3.5 text-[#E61E2B]" />
                <span>CLICK TO INSPECT DETAIL</span>
              </div>
            </div>

            {/* Quick action to replace photo directly */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenPhotoManager();
              }}
              className="absolute -bottom-3 right-6 z-30 px-3 py-1 rounded-full bg-[#121815]/90 hover:bg-[#1c2621] text-[10px] font-mono-tech tracking-wider text-[#8FB49D] border border-white/15 flex items-center space-x-1.5 transition-all shadow-lg hover:border-[#8FB49D]"
            >
              <RefreshCw className="w-3 h-3 text-[#E61E2B]" />
              <span>CUSTOMIZE WITH MY PHOTO</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Editorial Typography (Faithful to Screenshot) */}
        <div className="lg:col-span-6 relative z-10 flex flex-col justify-center order-1 lg:order-2 pl-0 lg:pl-6">
          
          {/* Header kicker: SAME ROADS \n NEW PERSPECTIVES (stacked like reference photo) */}
          <div className="flex items-start space-x-3 mb-4">
            <span className="w-4 h-[2px] bg-[#E61E2B] mt-2 shrink-0" />
            <div className="flex flex-col">
              <span className="text-[11px] sm:text-xs font-mono-tech tracking-[0.35em] text-[#8FB49D] uppercase leading-tight font-medium">
                SAME ROADS
              </span>
              <span className="text-[11px] sm:text-xs font-mono-tech tracking-[0.35em] text-[#8FB49D] uppercase leading-tight font-medium mt-0.5">
                NEW PERSPECTIVES
              </span>
            </div>
          </div>

          {/* Master Headline: BUILT DIFFERENTLY with 01 / 03 ticker */}
          <div className="relative mb-6 flex items-start justify-between">
            <div>
              {/* The Crimson Red First Word "BUILT" */}
              <h1 className="font-editorial font-black text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] tracking-tight leading-[0.88] text-[#E61E2B] drop-shadow-[0_4px_35px_rgba(230,30,43,0.45)] select-none">
                {activeSlide.titleRed}
              </h1>

              {/* The Crisp White Second Word "DIFFERENTLY" */}
              <h2 className="font-editorial italic font-normal text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.95] text-[#F5F5F0] select-none mt-1">
                {activeSlide.titleWhite}
              </h2>

              {/* Horizontal underline accent as seen in the artwork */}
              <div className="w-16 h-[2px] bg-[#E61E2B] mt-5 shadow-[0_0_12px_#E61E2B]" />
            </div>

            {/* Counter 01 / 03 placed to the right of the headline */}
            <div className="hidden sm:flex flex-col items-center justify-center font-mono-tech tracking-widest pl-6 pt-4 select-none">
              <span className="text-[#E61E2B] font-bold text-sm">
                {String(currentSlide + 1).padStart(2, '0')}
              </span>
              <div className="w-4 h-[1px] bg-white/20 my-1" />
              <span className="text-[#65726B] text-xs">
                {String(slides.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Body editorial description */}
          <p className="text-sm sm:text-base text-[#8E9893] max-w-md font-light leading-relaxed mb-8">
            {activeSlide.description}
          </p>

          {/* Bottom Controls Row: Explore CTA & Detail Card Preview */}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            
            {/* Pill Button: EXPLORE -> (as in user screenshot) */}
            <button
              onClick={() => {
                audioEngine.playClick(850);
                onExploreClick();
              }}
              className="group relative inline-flex items-center space-x-4 px-8 py-3.5 rounded-full bg-[#111715]/80 hover:bg-[#1a2320] text-xs font-mono-tech tracking-[0.25em] text-white border border-white/20 hover:border-[#E61E2B] transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(230,30,43,0.4)]"
            >
              <span className="uppercase">EXPLORE</span>
              <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#E61E2B] group-hover:translate-x-1 transition-all duration-300">
                <ArrowRight className="w-3.5 h-3.5 text-[#F5F5F0]" />
              </span>
            </button>

            {/* Slide Arrows */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-[#101614] border border-white/10 text-[#8E9893] hover:text-white hover:border-[#8FB49D] transition-colors"
                title="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-[#101614] border border-white/10 text-[#8E9893] hover:text-white hover:border-[#E61E2B] transition-colors"
                title="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile-only counter */}
            <div className="sm:hidden flex items-center space-x-1 font-mono-tech text-xs tracking-widest pl-2">
              <span className="text-[#E61E2B] font-bold">
                {String(currentSlide + 1).padStart(2, '0')}
              </span>
              <span className="text-[#65726B]">/</span>
              <span className="text-[#65726B]">
                {String(slides.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Bottom Right Floating Preview Card (Faithful to Screenshot!) */}
          <div className="mt-8 lg:mt-10 self-start sm:self-end">
            <div
              onClick={() => {
                audioEngine.playShutter();
                onOpenDetailModal(activeSlide);
              }}
              className="group cursor-pointer flex items-center space-x-3.5 p-2.5 rounded-2xl bg-[#101614]/85 backdrop-blur-md border border-white/10 hover:border-[#8FB49D] transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(143,180,157,0.2)]"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden relative border border-white/15">
                <img
                  src={activeSlide.detailImage}
                  alt="Pose Angle Preview"
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-1 right-1">
                  <Sparkles className="w-3 h-3 text-[#FF2E3E]" />
                </div>
              </div>
              <div className="pr-3 text-left">
                <span className="text-[10px] font-mono-tech text-[#8FB49D] tracking-widest block uppercase">
                  ACTIVE POSE DETAIL
                </span>
                <span className="text-xs font-semibold text-white group-hover:text-[#E61E2B] transition-colors">
                  {activeSlide.year}
                </span>
                <span className="text-[11px] text-[#8E9893] block mt-0.5 font-light">
                  Click to inspect studio setup
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Slide Indicators Navigation at Bottom */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              audioEngine.playClick(900);
              onChangeSlide(idx);
            }}
            className={`transition-all duration-500 rounded-full ${
              idx === currentSlide
                ? 'w-8 h-1.5 bg-[#E61E2B] shadow-[0_0_10px_#E61E2B]'
                : 'w-2 h-1.5 bg-white/20 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
