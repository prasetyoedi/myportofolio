import React from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { data } from '../../data';

export default function Achievements() {
    return (
        <section id="achievements" className="py-24 px-5">
            <div className="max-w-4xl mx-auto">
                <AnimatedSection>
                    <h2 className="section-title gradient-text text-center">Achievements</h2>
                </AnimatedSection>

                <div className="grid sm:grid-cols-3 gap-5 mt-10">
                    {data.achievements.map((ach, idx) => (
                        <AnimatedSection key={idx} delay={idx * 80}>
                            <div className="glass p-6 rounded-2xl card-hover text-center">
                                <div className="text-4xl mb-3">{ach.icon}</div>
                                <h4 className="font-bold text-[var(--text-white)] text-sm">{ach.title}</h4>
                                <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">{ach.description}</p>
                                <p className="text-xs text-blue-400 mt-2 font-medium">{ach.year}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}