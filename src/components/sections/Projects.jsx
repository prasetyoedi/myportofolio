import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../AnimatedSection';
import { data } from '../../data';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="section-title gradient-text text-center">Featured Projects</h2>
          <p className="text-center text-[var(--text-muted)] mb-10 max-w-2xl mx-auto">
            Selected projects that showcase my full-stack development skills and passion for building impactful applications.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {data.projects.map((project, idx) => (
            <AnimatedSection key={idx} delay={idx * 100}>
              <div className="glass p-6 rounded-2xl card-hover h-full flex flex-col">
                <h3 className="text-xl font-bold text-[var(--text-white)]">{project.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mt-2 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/10">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-5 pt-4 border-t border-[var(--glass-border)]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--text-white)] transition-colors flex items-center gap-1.5 text-sm"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--text-white)] transition-colors flex items-center gap-1.5 text-sm"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <span className="text-[var(--text-muted)] text-sm">Private project</span>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}