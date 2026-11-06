import React from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { data } from '../../data';
import { TechIcon } from '../ui/TechIcons';
import {
  Server,
  Code2,
  Database,
  Workflow,
  Wrench,
} from 'lucide-react';

const categoryMeta = {
  backend: {
    label: 'Backend & APIs',
    icon: Server,
    desc: 'High-throughput microservices, RESTful interfaces, and OAuth security.',
  },
  frontend: {
    label: 'Frontend & UI Engineering',
    icon: Code2,
    desc: 'Component-driven web apps, data-dense enterprise grids, responsive layouts.',
  },
  database: {
    label: 'Database Systems',
    icon: Database,
    desc: 'Relational modeling, transaction integrity, indexing, and query tuning.',
  },
  analysis: {
    label: 'System Analysis & Design',
    icon: Workflow,
    desc: 'BPMN 2.0 workflow modeling, UML diagrams, requirements specifications.',
  },
  tools: {
    label: 'Tooling, APIs & QA',
    icon: Wrench,
    desc: 'Third-party integrations, performance auditing, version control pipelines.',
  },
};

export default function TechStack() {
  const categories = Object.keys(categoryMeta);

  return (
    <section
      id="skills"
      className="py-24 px-5 relative overflow-hidden"
      style={{
        background: 'var(--ocean-skills)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
              Technical Stack &amp; Architectural Tooling
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-400">
              Languages, frameworks, databases, and methodologies deployed across production environments.
            </p>
          </div>
        </AnimatedSection>

        {/* 5-Category Matrix with Brand SVG Icons & Full Detail Chips */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((catKey, idx) => {
            const meta = categoryMeta[catKey];
            const items = data.skills[catKey] || [];
            const Icon = meta.icon;

            return (
              <AnimatedSection key={catKey} delay={idx * 60}>
                <div className="ocean-card p-6 rounded-2xl h-full flex flex-col justify-between group">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/20 group-hover:border-cyan-600 dark:group-hover:border-cyan-500/40 transition-all">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-display font-bold text-slate-950 dark:text-white text-base">
                        {meta.label}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                      {meta.desc}
                    </p>

                    {/* Skill items with full information visible (no truncation) */}
                    <div className="space-y-3">
                      {items.map((skill) => (
                        <div
                          key={skill.name}
                          className="rounded-xl bg-slate-100/90 dark:bg-[#020b17]/80 border border-slate-300/80 dark:border-white/[0.05] p-3 hover:border-cyan-600 dark:hover:border-cyan-500/30 hover:bg-cyan-50/50 dark:hover:bg-cyan-950/20 transition-all flex flex-col justify-between"
                        >
                          {/* Title & Brand Icon Header */}
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-bold text-xs sm:text-sm text-slate-950 dark:text-slate-100">
                              {skill.name}
                            </span>
                            <div className="shrink-0 p-1.5 rounded-md bg-white dark:bg-white/[0.06] shadow-sm border border-slate-200 dark:border-white/[0.08]">
                              <TechIcon name={skill.name} className="h-4 w-4" />
                            </div>
                          </div>

                          {/* Full Detail Badges - 100% visible without any ellipsis */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {skill.detail.split(',').map((tag) => (
                              <span
                                key={tag.trim()}
                                className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-300/80 dark:border-white/[0.06] font-medium leading-tight"
                              >
                                {tag.trim()}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
