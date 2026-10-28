import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { Camera, MapPin, Maximize2, ImagePlus } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface CollectionSectionProps {
  items: GalleryItem[];
  onOpenLightbox: (item: GalleryItem) => void;
  onOpenPhotoManager: () => void;
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({
  items,
  onOpenLightbox,
  onOpenPhotoManager,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Automotive', 'Details', 'Night Run', 'Editorial'];

  const filteredItems =
    activeCategory === 'All'
      ? items
      : items.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    audioEngine.playClick(950);
    setActiveCategory(cat);
  };

  return (
    <section id="collection" className="py-24 px-6 bg-[#0A0D0C] relative">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#E61E2B]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#8FB49D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-tech tracking-[0.3em] text-[#8FB49D] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E61E2B]" />
              <span>ARCHIVE & VISUAL CHRONICLES</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white">
              The <span className="text-[#E61E2B] italic font-serif">Curated</span> Works
            </h2>
            <p className="text-[#8E9893] text-sm sm:text-base mt-2 max-w-lg font-light">
              High-velocity motion, atmospheric neon reflections, and tactile craftsmanship framed through raw medium format optics.
            </p>
          </div>

          {/* Action to upload / personalize */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                audioEngine.playClick(1000);
                onOpenPhotoManager();
              }}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[#141C18] hover:bg-[#1C2621] text-xs font-mono-tech tracking-wider text-[#8FB49D] border border-[#8FB49D]/30 hover:border-[#8FB49D] transition-all shadow-md"
            >
              <ImagePlus className="w-3.5 h-3.5 text-[#E61E2B]" />
              <span>REPLACE WITH YOUR PHOTOS</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2 rounded-full text-xs font-mono-tech tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-[#E61E2B] text-white shadow-[0_0_20px_rgba(230,30,43,0.4)]'
                    : 'bg-[#101513] text-[#8E9893] border border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                audioEngine.playShutter();
                onOpenLightbox(item);
              }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#101614] border border-white/10 hover:border-[#8FB49D]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#070908]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Ambient Red Edge Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C] via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badge Category */}
                <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono-tech tracking-wider text-[#8FB49D]">
                  {item.category}
                </div>

                {/* Hover Inspect Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <div className="p-3 rounded-full bg-[#E61E2B] text-white shadow-[0_0_25px_rgba(230,30,43,0.8)] transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Item Info & EXIF details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-editorial text-xl text-white group-hover:text-[#8FB49D] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8E9893] font-light mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* EXIF Metadata Pill Bar */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-tech text-[#8E9893]">
                  <div className="flex items-center space-x-1.5 truncate">
                    <MapPin className="w-3 h-3 text-[#E61E2B] shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 shrink-0 text-[#8FB49D]">
                    <Camera className="w-3 h-3" />
                    <span>{item.camera.split(' ')[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
