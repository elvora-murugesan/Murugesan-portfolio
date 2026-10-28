import React, { useState } from 'react';
import { X, Send, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial Automotive',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    audioEngine.playShutter();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl">
      <div className="relative w-full max-w-xl bg-[#0B0F0D] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0F1412]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#E61E2B]/15 border border-[#E61E2B]/40 flex items-center justify-center">
              <Mail className="w-4 h-4 text-[#E61E2B]" />
            </div>
            <div>
              <span className="text-[10px] font-mono-tech tracking-widest text-[#8FB49D] uppercase">
                DIRECT INQUIRY
              </span>
              <h3 className="font-editorial text-lg text-white">
                Initiate a Commission or Shoot
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

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-editorial text-2xl text-white">
                Transmission Received
              </h4>
              <p className="text-xs font-mono-tech text-[#8E9893] max-w-sm">
                Thank you. We review every brief carefully and will respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono-tech text-[#8FB49D] mb-1">
                  YOUR NAME / STUDIO
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Elena Rostova"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white focus:outline-none focus:border-[#E61E2B]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-[#8FB49D] mb-1">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  placeholder="elena@studio.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white focus:outline-none focus:border-[#E61E2B]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-[#8FB49D] mb-1">
                  PROJECT SCOPE
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#111714] border border-white/10 text-sm text-white focus:outline-none focus:border-[#E61E2B]"
                >
                  <option value="Commercial Automotive">Commercial Automotive Campaign</option>
                  <option value="Editorial Shoot">Editorial / Magazine Cover</option>
                  <option value="Bespoke One-Off">Bespoke Vehicle Commission</option>
                  <option value="Fine Art Print">Fine Art Print Acquisition</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-[#8FB49D] mb-1">
                  PROJECT BRIEF / VISION
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about the vehicle, dates, location, and aesthetic expectations..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white focus:outline-none focus:border-[#E61E2B] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#E61E2B] hover:bg-[#FF2E3E] text-white text-xs font-mono-tech tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(230,30,43,0.4)] flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT BRIEF</span>
                </button>
              </div>

              <div className="pt-2 flex items-center justify-center space-x-2 text-[11px] font-mono-tech text-[#6D7873]">
                <MapPin className="w-3.5 h-3.5 text-[#8FB49D]" />
                <span>Berlin · Stuttgart · Los Angeles · Tokyo</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
