import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../AnimatedSection';
import { data } from '../../data';
import { Code2, Database, Server, Wrench, GitBranch, Brain } from 'lucide-react';

const categoryIcons = {
    frontend: <Code2 size={20} />,
    backend: <Server size={20} />,
    database: <Database size={20} />,
    tools: <Wrench size={20} />,
    system: <GitBranch size={20} />,
    soft: <Brain size={20} />,
};

const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools & VCS',
    system: 'System Analysis',
    soft: 'Soft Skills',
};

const categories = Object.keys(categoryLabels).filter(
    (key) => data.skills[key] && data.skills[key].length > 0
);

export default function TechStack() {
    return (
        <section id="techstack" className="py-24 px-5 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <AnimatedSection>
                    <h2 className="section-title gradient-text text-center">Tech Stack & Skills</h2>
                </AnimatedSection>

                <div className="space-y-8">
                    {categories.map((category, idx) => (
                        <AnimatedSection key={category} delay={idx * 100}>
                            <div className="glass p-6 rounded-2xl border border-[var(--glass-border)] hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(59,130,246,0.08)]">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-blue-400">{categoryIcons[category]}</span>
                                    <h3 className="text-lg font-semibold text-[var(--text-white)]">{categoryLabels[category]}</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {data.skills[category].map((tech) => (
                                        <motion.span
                                            key={tech}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                            className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--tag-bg)] border border-[var(--tag-border)] text-[var(--text-muted)] hover:border-blue-400 hover:bg-blue-500/10 hover:text-[var(--text-white)] transition-all duration-300 cursor-default shadow-sm"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}