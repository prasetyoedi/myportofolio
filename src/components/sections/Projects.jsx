import React from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { data } from '../../data';
import { Github, ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-5 relative overflow-hidden"
      style={{
        background: 'var(--ocean-projects)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
              Featured Systems &amp; Projects
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-400">
              Architectural solutions built to solve real operational bottlenecks, from enterprise approvals to ad telemetry.
            </p>
          </div>
        </AnimatedSection>

        {/* Clean, Refined 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-7">
          {data.projects.map((project, idx) => (
            <AnimatedSection key={project.id} delay={idx * 60}>
              <div className="ocean-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between h-full group hover:border-cyan-600 dark:hover:border-cyan-500/40 transition-all duration-300">
                <div>
                  {/* Category & Badge Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs text-cyan-800 dark:text-cyan-400 font-bold">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/25 text-cyan-900 dark:text-cyan-300 font-bold">
                      {project.year}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-slate-600 dark:text-slate-400 mt-1 mb-4 font-medium">
                    {project.context}
                  </p>

                  {/* Clean Technical Description */}
                  <p className="text-sm text-slate-800 dark:text-slate-300 leading-relaxed mb-4">
                    {project.solution}
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-1.5 mb-6">
                    {project.highlights.map((h) => (
                      <li key={h} className="text-xs text-slate-700 dark:text-slate-400 flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-500 mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer: Tech Stack & Actions */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06]">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-white/[0.06] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-4">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-slate-900 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors font-bold min-h-[44px]"
                        >
                          <Github size={15} />
                          <span>Source Code</span>
                          <ArrowUpRight size={13} />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-500 font-medium">
                          <ShieldCheck size={14} />
                          <span>Internal Enterprise System</span>
                        </span>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-cyan-800 dark:text-cyan-400 hover:underline min-h-[44px] font-bold"
                        >
                          <ExternalLink size={15} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
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
