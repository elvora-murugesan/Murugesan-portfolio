import React, { useState, useRef } from 'react';
import { X, Upload, Image as ImageIcon, Check, RefreshCw, Sparkles, User, Layers } from 'lucide-react';
import { PortfolioSlide, GalleryItem } from '../types';
import { audioEngine } from '../utils/audioEngine';

interface PhotoUploaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: PortfolioSlide[];
  onUpdateSlideImage: (slideIndex: number, heroImg: string, detailImg?: string) => void;
  gallery: GalleryItem[];
  onAddGalleryItem: (item: GalleryItem) => void;
  creatorPhoto: string;
  onUpdateCreatorPhoto: (photoUrl: string) => void;
  onResetDefaults: () => void;
}

export const PhotoUploaderModal: React.FC<PhotoUploaderModalProps> = ({
  isOpen,
  onClose,
  slides,
  onUpdateSlideImage,
  creatorPhoto,
  onUpdateCreatorPhoto,
  onAddGalleryItem,
  onResetDefaults,
}) => {
  const [activeTab, setActiveTab] = useState<'hero' | 'gallery' | 'profile'>('hero');
  const [heroUrlInput, setHeroUrlInput] = useState('');
  const [detailUrlInput, setDetailUrlInput] = useState('');
  const [newGalleryTitle, setNewGalleryTitle] = useState('');
  const [newGalleryCategory, setNewGalleryCategory] = useState<'Automotive' | 'Details' | 'Night Run' | 'Editorial'>('Automotive');
  const [newGalleryImage, setNewGalleryImage] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const heroFileInputRef = useRef<HTMLInputElement | null>(null);
  const detailFileInputRef = useRef<HTMLInputElement | null>(null);
  const galleryFileInputRef = useRef<HTMLInputElement | null>(null);
  const profileFileInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen) return null;

  const showSuccess = (msg: string) => {
    audioEngine.playShutter();
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleHeroFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdateSlideImage(0, event.target.result as string);
          showSuccess('Hero image updated successfully with your photo!');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDetailFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdateSlideImage(0, slides[0].image, event.target.result as string);
          showSuccess('Detail preview card updated with your photo!');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdateCreatorPhoto(event.target.result as string);
          showSuccess('Creator portrait updated with your photo!');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddGalleryWork = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGalleryImage || !newGalleryTitle) return;

    const newItem: GalleryItem = {
      id: `custom-${Date.now()}`,
      title: newGalleryTitle,
      category: newGalleryCategory,
      image: newGalleryImage,
      aspectRatio: 'aspect-[4/3]',
      location: 'Custom Shoot',
      camera: 'User Camera',
      iso: '100',
      shutter: '1/250s',
      description: 'Custom photo added by portfolio creator.'
    };

    onAddGalleryItem(newItem);
    setNewGalleryTitle('');
    setNewGalleryImage('');
    showSuccess('New photo added to your collection!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#0B0F0D] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#101614]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#E61E2B]/15 border border-[#E61E2B]/40 flex items-center justify-center">
              <ImageIcon className="w-4 h-4 text-[#E61E2B]" />
            </div>
            <div>
              <span className="text-[10px] font-mono-tech tracking-widest text-[#8FB49D] uppercase">
                PHOTO STUDIO & PERSONALIZATION
              </span>
              <h3 className="font-editorial text-lg text-white">
                Drop Your Photos Into the Portfolio
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

        {/* Tab Selector */}
        <div className="px-6 py-2.5 bg-[#090C0B] border-b border-white/5 flex items-center space-x-3 text-xs font-mono-tech">
          <button
            onClick={() => setActiveTab('hero')}
            className={`flex items-center space-x-2 py-1.5 px-3 rounded-lg transition-colors ${
              activeTab === 'hero' ? 'bg-[#E61E2B] text-white' : 'text-[#8E9893] hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>HERO & DETAIL CARD</span>
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center space-x-2 py-1.5 px-3 rounded-lg transition-colors ${
              activeTab === 'gallery' ? 'bg-[#E61E2B] text-white' : 'text-[#8E9893] hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>ADD TO GALLERY</span>
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center space-x-2 py-1.5 px-3 rounded-lg transition-colors ${
              activeTab === 'profile' ? 'bg-[#E61E2B] text-white' : 'text-[#8E9893] hover:text-white'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>ABOUT PORTRAIT</span>
          </button>
        </div>

        {/* Feedback message */}
        {successMsg && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono-tech flex items-center space-x-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-editorial text-lg text-white mb-1">
                  Replace Hero Subject Photo
                </h4>
                <p className="text-xs text-[#8E9893] font-mono-tech">
                  Upload your car, vehicle, or photography to take center stage with the red laser streak!
                </p>
              </div>

              {/* Current Hero Preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-white/10 relative bg-[#070908] aspect-[16/10]">
                  <img
                    src={slides[0]?.image}
                    alt="Current Hero"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 px-2 py-1 rounded bg-black/70 text-[10px] font-mono-tech text-[#8FB49D]">
                    CURRENT HERO
                  </span>
                </div>

                <div className="flex flex-col justify-center space-y-3">
                  <input
                    type="file"
                    ref={heroFileInputRef}
                    accept="image/*"
                    onChange={handleHeroFileUpload}
                    className="hidden"
                  />
                  <button
                    onClick={() => heroFileInputRef.current?.click()}
                    className="w-full py-3 rounded-xl bg-[#141C18] hover:bg-[#1C2621] border border-[#8FB49D]/40 hover:border-[#8FB49D] text-xs font-mono-tech text-[#8FB49D] flex items-center justify-center space-x-2 transition-all shadow-md"
                  >
                    <Upload className="w-4 h-4" />
                    <span>CHOOSE FILE FROM DEVICE</span>
                  </button>

                  <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#6D7873]">
                    <span className="flex-1 h-[1px] bg-white/10" />
                    <span>OR PASTE IMAGE URL</span>
                    <span className="flex-1 h-[1px] bg-white/10" />
                  </div>

                  <div className="flex space-x-2">
                    <input
                      type="url"
                      placeholder="https://example.com/your-car.jpg"
                      value={heroUrlInput}
                      onChange={(e) => setHeroUrlInput(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-lg bg-black/50 border border-white/10 text-xs text-white focus:outline-none focus:border-[#E61E2B]"
                    />
                    <button
                      onClick={() => {
                        if (heroUrlInput) {
                          onUpdateSlideImage(0, heroUrlInput);
                          setHeroUrlInput('');
                          showSuccess('Hero photo updated from URL!');
                        }
                      }}
                      className="px-4 py-2 rounded-lg bg-[#E61E2B] hover:bg-[#FF2E3E] text-white text-xs font-mono-tech"
                    >
                      APPLY
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Right Detail Thumbnail replacement */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="font-editorial text-lg text-white mb-1">
                  Replace Macro Detail Card
                </h4>
                <p className="text-xs text-[#8E9893] font-mono-tech mb-4">
                  The small bottom-right preview card showing close-up curvature.
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden border border-white/15 bg-black shrink-0">
                    <img
                      src={slides[0]?.detailImage}
                      alt="Detail Card"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <input
                      type="file"
                      ref={detailFileInputRef}
                      accept="image/*"
                      onChange={handleDetailFileUpload}
                      className="hidden"
                    />
                    <button
                      onClick={() => detailFileInputRef.current?.click()}
                      className="px-4 py-2 rounded-lg bg-[#141C18] border border-[#8FB49D]/30 text-xs font-mono-tech text-[#8FB49D] hover:bg-[#1C2621] transition-all"
                    >
                      Upload Macro Detail Photo
                    </button>

                    <div className="flex space-x-2">
                      <input
                        type="url"
                        placeholder="Detail Image URL"
                        value={detailUrlInput}
                        onChange={(e) => setDetailUrlInput(e.target.value)}
                        className="flex-1 px-3 py-1.5 rounded-lg bg-black/50 border border-white/10 text-xs text-white focus:outline-none focus:border-[#8FB49D]"
                      />
                      <button
                        onClick={() => {
                          if (detailUrlInput) {
                            onUpdateSlideImage(0, slides[0].image, detailUrlInput);
                            setDetailUrlInput('');
                            showSuccess('Detail preview photo updated!');
                          }
                        }}
                        className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-mono-tech text-white hover:bg-white/20"
                      >
                        Set
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <form onSubmit={handleAddGalleryWork} className="space-y-4">
              <div>
                <h4 className="font-editorial text-lg text-white mb-1">
                  Add Your Photo to Collection
                </h4>
                <p className="text-xs text-[#8E9893] font-mono-tech">
                  Expand the gallery with your own automotive and creative shots.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-[#8FB49D] mb-1">
                  PHOTO TITLE
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Midnight Highway Silhouette"
                  value={newGalleryTitle}
                  onChange={(e) => setNewGalleryTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white focus:outline-none focus:border-[#E61E2B]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-[#8FB49D] mb-1">
                  CATEGORY
                </label>
                <select
                  value={newGalleryCategory}
                  onChange={(e) => setNewGalleryCategory(e.target.value as any)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#111714] border border-white/10 text-sm text-white focus:outline-none focus:border-[#E61E2B]"
                >
                  <option value="Automotive">Automotive</option>
                  <option value="Details">Details</option>
                  <option value="Night Run">Night Run</option>
                  <option value="Editorial">Editorial</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-[#8FB49D] mb-1">
                  IMAGE SOURCE
                </label>
                <div className="flex space-x-2 mb-2">
                  <input
                    type="url"
                    placeholder="Paste Image URL"
                    value={newGalleryImage}
                    onChange={(e) => setNewGalleryImage(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white focus:outline-none focus:border-[#E61E2B]"
                  />
                  <input
                    type="file"
                    ref={galleryFileInputRef}
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (ev) => {
                          if (ev.target?.result) {
                            setNewGalleryImage(ev.target.result as string);
                          }
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => galleryFileInputRef.current?.click()}
                    className="px-4 py-2 rounded-xl bg-[#141C18] border border-[#8FB49D]/30 text-xs font-mono-tech text-[#8FB49D]"
                  >
                    File
                  </button>
                </div>

                {newGalleryImage && (
                  <div className="w-32 h-24 rounded-lg overflow-hidden border border-white/20 mt-2">
                    <img src={newGalleryImage} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#E61E2B] hover:bg-[#FF2E3E] text-white text-xs font-mono-tech tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(230,30,43,0.4)]"
              >
                ADD PHOTO TO GALLERY
              </button>
            </form>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-editorial text-lg text-white mb-1">
                  Creator Profile Portrait
                </h4>
                <p className="text-xs text-[#8E9893] font-mono-tech">
                  Put your own portrait or photo into the About Creator section.
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-32 h-40 rounded-2xl overflow-hidden border border-white/20 bg-black shrink-0">
                  <img src={creatorPhoto} alt="Creator" className="w-full h-full object-cover" />
                </div>

                <div className="space-y-3">
                  <input
                    type="file"
                    ref={profileFileInputRef}
                    accept="image/*"
                    onChange={handleProfileFileUpload}
                    className="hidden"
                  />
                  <button
                    onClick={() => profileFileInputRef.current?.click()}
                    className="px-5 py-2.5 rounded-xl bg-[#141C18] hover:bg-[#1C2621] border border-[#8FB49D]/30 text-xs font-mono-tech text-[#8FB49D] flex items-center space-x-2"
                  >
                    <Upload className="w-4 h-4" />
                    <span>UPLOAD YOUR PORTRAIT</span>
                  </button>
                  <p className="text-[11px] text-[#6D7873] font-mono-tech">
                    Recommended: Vertical portrait aspect ratio (4:5)
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer with Reset to Defaults button */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#101614] flex items-center justify-between">
          <button
            onClick={() => {
              onResetDefaults();
              showSuccess('Reset to original vintage sage Porsche assets!');
            }}
            className="flex items-center space-x-2 text-xs font-mono-tech text-[#8E9893] hover:text-white transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>RESET TO ORIGINAL PORSCHE THEME</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono-tech uppercase"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
