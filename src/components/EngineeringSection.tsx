import React from 'react';
import { ENGINEERING_PROJECTS } from '../data/portfolioData';
import { Cpu, ArrowUpRight, Activity, Terminal } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const EngineeringSection: React.FC = () => {
  return (
    <section id="engineering" className="py-24 px-6 bg-[#090D0B] relative border-t border-white/[0.08]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#A31C1B]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#06110C] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-tech tracking-[0.3em] text-[#8FB49D] uppercase mb-2">
              <Cpu className="w-3.5 h-3.5 text-[#A31C1B]" />
              <span>AI & DATA SCIENCE · AUTOMATION SYSTEMS</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white">
              Engineering <span className="text-[#A31C1B] italic">Pipelines</span>
            </h2>
          </div>
          <p className="text-[#8E9893] text-sm max-w-md font-light leading-relaxed">
            Scalable automation architectures, real-time edge computer vision, and distributed event systems engineered for sub-millisecond execution.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ENGINEERING_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0D1210] border border-white/10 hover:border-[#8FB49D]/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#8FB49D] mb-4">
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-3.5 h-3.5 text-[#A31C1B]" />
                    <span>SYSTEM_0{idx + 1}</span>
                  </div>
                  <span className="text-[#6D7873]">{project.category}</span>
                </div>

                {/* Title */}
                <h3 className="font-editorial text-2xl sm:text-3xl text-white group-hover:text-[#F2EEE8] transition-colors mb-3 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#8E9893] leading-relaxed font-light mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#131A17] border border-white/5 text-[10px] font-mono-tech tracking-wider text-[#8FB49D]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Pill & Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#F2EEE8]">
                  <Activity className="w-3.5 h-3.5 text-[#A31C1B]" />
                  <span>{project.metrics}</span>
                </div>

                <button
                  onClick={() => audioEngine.playClick(1100)}
                  className="p-2 rounded-full bg-white/5 group-hover:bg-[#A31C1B] text-[#8FB49D] group-hover:text-white transition-all"
                  title="Inspect Architecture"
                >
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
