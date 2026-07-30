import React, { useRef, useEffect } from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { data } from '../../data';
import { Briefcase, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const timelineRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: timelineRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: 1.5,
            },
        });

        tl.fromTo(
            timelineRef.current,
            { height: '0%' },
            { height: '100%', duration: 2, ease: 'power2.inOut' }
        );

        itemsRef.current.forEach((item, index) => {
            if (item) {
                gsap.fromTo(
                    item,
                    { opacity: 0, y: 50, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        delay: index * 0.15,
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <section id="experience" className="py-24 px-5 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <AnimatedSection>
                    <h2 className="section-title gradient-text text-center">Experience</h2>
                    <p className="text-center text-[var(--text-muted)] mb-12 max-w-2xl mx-auto">
                        My professional journey in software engineering and full-stack development.
                    </p>
                </AnimatedSection>

                <div className="relative">
                    <div
                        ref={timelineRef}
                        className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-[3px] rounded-full"
                        style={{
                            background: 'linear-gradient(to bottom, #3b82f6, #60a5fa, #93c5fd, rgba(59,130,246,0.05))',
                            transform: 'translateX(-50%)',
                            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                            height: '0%',
                            transformOrigin: 'top',
                        }}
                    />

                    <div className="space-y-12">
                        {data.experience.map((exp, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div
                                    key={idx}
                                    ref={(el) => (itemsRef.current[idx] = el)}
                                    className={`relative flex flex-col sm:flex-row gap-6 sm:gap-8 ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                                        }`}
                                >
                                    <div className="absolute left-[19px] sm:left-1/2 top-1 -translate-x-1/2 z-20">
                                        <div className="relative">
                                            <div className="w-5 h-5 rounded-full bg-blue-500 border-4 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.4)]" />
                                            <div className="absolute inset-0 w-5 h-5 rounded-full bg-blue-500/20 animate-ping" />
                                        </div>
                                    </div>

                                    <div
                                        className={`sm:w-1/2 ${isEven ? 'sm:pr-8 sm:pl-0 pl-12' : 'sm:pl-8 sm:pr-0 pl-12'
                                            }`}
                                    >
                                        <div className="glass p-6 rounded-2xl card-hover border border-[var(--glass-border)] hover:border-blue-500/30 transition-all duration-300">
                                            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                                <div>
                                                    <h3 className="text-lg font-bold text-[var(--text-white)] flex items-center gap-2">
                                                        <Briefcase size={18} className="text-blue-400" />
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-blue-400 font-medium text-sm mt-0.5">
                                                        {exp.company}
                                                    </p>
                                                </div>
                                                <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
                                                    {exp.period}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-3">
                                                <MapPin size={14} />
                                                <span>{exp.location}</span>
                                            </div>

                                            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                                                {exp.description}
                                            </p>

                                            <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[var(--glass-border)]">
                                                {exp.tech.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="text-[10px] px-2.5 py-1 rounded-full bg-[var(--tag-bg)] text-[var(--text-muted)] border border-[var(--tag-border)] hover:border-blue-500/30 transition-colors"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden sm:block sm:w-1/2" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}