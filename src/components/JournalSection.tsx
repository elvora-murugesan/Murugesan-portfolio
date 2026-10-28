import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/portfolioData';
import { ArrowUpRight, BookOpen, Clock, X } from 'lucide-react';
import { JournalArticle } from '../types';
import { audioEngine } from '../utils/audioEngine';

export const JournalSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  const openArticle = (article: JournalArticle) => {
    audioEngine.playClick(900);
    setActiveArticle(article);
  };

  return (
    <section id="journal" className="py-24 px-6 bg-[#080B0A] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-tech tracking-[0.3em] text-[#8FB49D] uppercase mb-2">
              <BookOpen className="w-3.5 h-3.5 text-[#E61E2B]" />
              <span>THE JOURNAL & FIELD NOTES</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white">
              Behind the <span className="text-[#E61E2B] italic">Lens</span>
            </h2>
          </div>
          <p className="text-[#8E9893] text-sm max-w-md font-light leading-relaxed">
            Essays on medium-format exposure, analog automotive preservation, and the architecture of neon light streaks.
          </p>
        </div>

        {/* Journal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              onClick={() => openArticle(article)}
              className="group cursor-pointer rounded-2xl bg-[#0E1311] border border-white/10 hover:border-[#E61E2B]/50 transition-all duration-300 p-6 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
            >
              <div>
                {/* Article Header info */}
                <div className="flex items-center justify-between text-[10px] font-mono-tech text-[#8FB49D] mb-4">
                  <span>ISSUE NO. 0{idx + 1}</span>
                  <div className="flex items-center space-x-1 text-[#8E9893]">
                    <Clock className="w-3 h-3 text-[#E61E2B]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Article Cover Image */}
                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-6 relative">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1311] via-transparent to-transparent opacity-60" />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono-tech tracking-wider text-[#8FB49D]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-editorial text-xl sm:text-2xl text-white group-hover:text-[#E61E2B] transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-[#8E9893] leading-relaxed font-light">
                  {article.summary}
                </p>
              </div>

              {/* Read button */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-[#8FB49D] group-hover:text-white transition-colors">
                <span className="tracking-wider">READ ESSAY</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#E61E2B]" />
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0C110F] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 text-xs font-mono-tech text-[#8FB49D] mb-4">
              <span>{activeArticle.date}</span>
              <span>·</span>
              <span className="text-[#E61E2B]">{activeArticle.readTime}</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl text-white mb-6 leading-tight">
              {activeArticle.title}
            </h2>

            <div className="aspect-[16/8] rounded-2xl overflow-hidden mb-8 border border-white/10">
              <img
                src={activeArticle.coverImage}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#B0BCB5] font-light leading-relaxed">
              <p>
                When approaching high-performance machines under nocturnal studio conditions, light becomes sculpture rather than mere illumination. The custom sage green metallic finish on the chassis reacts dynamically to linear neon sources, creating sharp specular highlights along the flared rear arches.
              </p>
              <p>
                In this series, we paired an analog medium format sensor with a narrow 100mm focal plane, allowing the razor-thin crimson light blade to cut vertically through the composition. The result is what you experience on the hero stage: a dialogue between mechanical heritage and futuristic neon noir.
              </p>
              <blockquote className="border-l-2 border-[#E61E2B] pl-4 italic text-white my-6 font-editorial text-lg">
                "Speed is fleeting, but curvature captured under crimson light is eternal."
              </blockquote>
              <p>
                Every stitch on the bespoke cockpit trim, every analog needle deflection, and every reflection on the rain-slicked asphalt tells the same unified narrative: timeless engineering, built differently.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 rounded-full bg-[#E61E2B] text-white text-xs font-mono-tech tracking-wider uppercase hover:bg-[#FF2E3E] transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
