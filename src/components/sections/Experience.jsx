import React from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { data } from '../../data';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-5 relative overflow-hidden"
      style={{
        background: 'var(--ocean-experience)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
              Professional Engineering Experience
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-400">
              Hands-on enterprise systems development, production microservices, and workflow automation.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline Container */}
        <div className="relative border-l border-cyan-600/40 dark:border-cyan-500/25 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          {data.experience.map((exp, idx) => (
            <AnimatedSection key={`${exp.company}-${exp.role}`} delay={idx * 100}>
              <div className="relative group">
                {/* Node on Timeline */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-white dark:bg-[#020813] border-2 border-cyan-600 dark:border-cyan-500 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-500" />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="ocean-card p-6 sm:p-7 rounded-2xl">
                  {/* Top Bar: Company & Role */}
                  <div className="flex flex-wrap items-start justify-between gap-2 pb-4 mb-4 border-b border-slate-200 dark:border-white/[0.06]">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-950 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-800 dark:text-cyan-400 font-bold text-sm mt-0.5 font-mono">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-800 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.05] px-2.5 py-1 rounded-full border border-slate-300 dark:border-white/[0.08] font-medium">
                        <Calendar size={12} className="text-cyan-700 dark:text-cyan-400" />
                        {exp.period}
                      </span>
                      <span className="text-[11px] text-slate-600 dark:text-slate-400 flex items-center gap-1 font-mono">
                        <MapPin size={11} />
                        {exp.location} · {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Context Description */}
                  <p className="text-sm text-slate-800 dark:text-slate-300 leading-relaxed font-sans mb-4">
                    {exp.description}
                  </p>

                  {/* Engineering Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((point) => (
                      <li key={point.slice(0, 30)} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300/90 leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 mt-2 shrink-0 shadow-[0_0_6px_#06b6d4]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-cyan-100/80 dark:bg-cyan-950/40 text-cyan-900 dark:text-cyan-200 border border-cyan-300 dark:border-cyan-500/20 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
