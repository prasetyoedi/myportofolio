import React from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { data } from '../../data';
import { GraduationCap, Binary } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-5 relative overflow-hidden"
      style={{
        background: 'var(--ocean-about)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
              System Engineering &amp; Problem Solving
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-400">
              Transforming manual organizational bottlenecks into reliable, automated digital systems.
            </p>
          </div>
        </AnimatedSection>

        {/* 2-Column: Capabilities Grid & Education */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Engineering Approach (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <AnimatedSection delay={60}>
              <div className="ocean-card p-6 sm:p-7 rounded-2xl">
                <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white flex items-center gap-2 mb-3">
                  <Binary className="text-cyan-800 dark:text-cyan-400" size={20} />
                  <span>Engineering Methodology</span>
                </h3>
                <p className="text-sm text-slate-800 dark:text-slate-300 leading-relaxed font-sans">
                  {data.about.summary}
                </p>
              </div>
            </AnimatedSection>

            {/* 4 Architectural Pillars */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
              {data.about.approach.map((item, idx) => (
                <AnimatedSection key={item.title} delay={100 + idx * 50}>
                  <div className="ocean-card p-4 rounded-xl h-full border border-slate-300 dark:border-cyan-500/15 hover:border-cyan-600 dark:hover:border-cyan-500/40 transition-all">
                    <h4 className="font-display font-bold text-slate-950 dark:text-slate-100 text-sm mb-1.5 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Education (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <AnimatedSection delay={120}>
              <div className="ocean-card p-6 rounded-2xl">
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-300 dark:border-white/[0.08]">
                  <div className="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 text-cyan-900 dark:text-cyan-300">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-950 dark:text-white text-base">Education</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Computer Science &amp; Software Engineering</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {data.education.map((edu, idx) => (
                    <div key={edu.institution} className={idx > 0 ? 'pt-4 border-t border-slate-200 dark:border-white/[0.06]' : ''}>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-slate-950 dark:text-slate-100 text-sm leading-snug">
                          {edu.institution}
                        </h4>
                        <span className="font-mono text-[11px] text-cyan-800 dark:text-cyan-400 font-bold whitespace-nowrap">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">{edu.degree}</p>
                      {edu.gpa && (
                        <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20 text-emerald-900 dark:text-emerald-300 text-xs font-mono font-bold">
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      )}
                      {edu.finalProject && (
                        <div className="mt-2.5 rounded-lg bg-slate-100/90 dark:bg-black/30 border border-slate-300 dark:border-white/[0.06] p-2.5 text-[11px] text-slate-800 dark:text-slate-300 leading-relaxed">
                          <span className="font-mono text-cyan-800 dark:text-cyan-400 block mb-0.5 font-bold">Final Capstone:</span>
                          {edu.finalProject}
                        </div>
                      )}
                      {edu.courses && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {edu.courses.map((course) => (
                            <span
                              key={course}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-white/[0.05]"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
