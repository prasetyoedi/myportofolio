import React from "react";
import { AnimatedSection } from "../AnimatedSection";
import { data } from "../../data";
import { GraduationCap, Target, User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="section-title gradient-text text-center">About Me</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-8 mt-10">
          {/* Profile / Summary */}
          <div className="md:col-span-3 space-y-6">
            <AnimatedSection delay={100}>
              <div className="glass p-6 md:p-8 rounded-2xl card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Professional Summary</h3>
                    <p className="text-gray-400 leading-relaxed mt-2 text-sm md:text-base">
                      {data.about.summary}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Education */}
          <div className="md:col-span-2 space-y-4">
            <AnimatedSection delay={150}>
              <div className="glass p-6 rounded-2xl card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                    <GraduationCap size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white">Education</h3>
                </div>
                {data.education.map((edu, idx) => (
                  <div key={idx} className={idx > 0 ? "mt-4 pt-4 border-t border-white/5" : ""}>
                    <p className="font-semibold text-white">{edu.institution}</p>
                    <p className="text-sm text-gray-400">{edu.degree}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {edu.period} · {edu.location}
                    </p>
                    {edu.gpa && (
                      <p className="text-sm text-blue-400 font-medium mt-1">GPA: {edu.gpa}</p>
                    )}
                    {edu.courses && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {edu.courses.map((c) => (
                          <span key={c} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5">
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}