import React from "react";
import { AnimatedSection } from "../AnimatedSection";
import { data } from "../../data";
import { Award } from "lucide-react";

export default function Certificates() {
    return (
        <section id="certificates" className="py-24 px-5 border-y border-white/5">
            <div className="max-w-5xl mx-auto">
                <AnimatedSection>
                    <h2 className="section-title gradient-text text-center">Certifications</h2>
                </AnimatedSection>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                    {data.certifications.map((cert, idx) => (
                        <AnimatedSection key={idx} delay={idx * 60}>
                            <div className="glass p-5 rounded-2xl card-hover text-center">
                                <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                    <Award size={22} />
                                </div>
                                <h4 className="font-semibold text-white mt-3 text-sm">{cert.name}</h4>
                                <p className="text-xs text-gray-400 mt-1">{cert.issuer}</p>
                                <p className="text-xs text-gray-500 mt-1">{cert.year}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}