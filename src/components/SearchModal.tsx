import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { GalleryItem, JournalArticle } from '../types';
import { audioEngine } from '../utils/audioEngine';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  gallery: GalleryItem[];
  journals: JournalArticle[];
  onSelectGalleryItem: (item: GalleryItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  gallery,
  onSelectGalleryItem,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredGallery = query.trim()
    ? gallery.filter(
        (g) =>
          g.title.toLowerCase().includes(query.toLowerCase()) ||
          g.category.toLowerCase().includes(query.toLowerCase()) ||
          g.location.toLowerCase().includes(query.toLowerCase()) ||
          g.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/85 backdrop-blur-2xl">
      <div className="relative w-full max-w-2xl bg-[#0B0F0D] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center space-x-3 bg-[#0F1412]">
          <Search className="w-5 h-5 text-[#E61E2B] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search Porsche, Rear Quarter, Night Run, Specs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-white text-base focus:outline-none placeholder:text-[#6D7873]"
          />
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

        {/* Results */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-3">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs font-mono-tech text-[#6D7873]">
              TYPE KEYWORDS LIKE "964", "CRIMSON", "MONACO", "COCKPIT"
            </div>
          ) : filteredGallery.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono-tech text-[#8E9893]">
              NO MATCHES FOUND FOR "{query}"
            </div>
          ) : (
            filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectGalleryItem(item);
                  onClose();
                }}
                className="group cursor-pointer p-3 rounded-xl bg-[#121815] hover:bg-[#1A231F] border border-white/5 hover:border-[#8FB49D]/40 flex items-center justify-between transition-all"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-black shrink-0 border border-white/10">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-editorial text-sm text-white group-hover:text-[#8FB49D] transition-colors">
                      {item.title}
                    </h5>
                    <span className="text-[10px] font-mono-tech text-[#6D7873]">
                      {item.category} · {item.location}
                    </span>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-[#8E9893] group-hover:text-[#E61E2B] group-hover:translate-x-1 transition-all" />
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
