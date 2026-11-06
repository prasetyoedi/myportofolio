import React, { useState } from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { data } from '../../data';
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Send,
} from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(data.email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = data.email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-5 relative overflow-hidden"
      style={{
        background: 'var(--ocean-contact)',
      }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
              Get in Touch
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-400 font-normal">
              Open to full stack software engineering opportunities, systems analysis consultations, or technical collaboration.
            </p>
          </div>
        </AnimatedSection>

        {/* Direct Communication Hub */}
        <div className="space-y-6">
          {/* Main Primary Email Card with 1-Click Copy & Direct Send */}
          <AnimatedSection delay={60}>
            <div className="ocean-card p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-800 dark:text-cyan-400 font-bold block mb-2">
                  Direct Electronic Mail
                </span>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/20">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-mono text-base sm:text-xl font-bold text-slate-950 dark:text-white">
                      {data.email}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
                      Fastest response · Checked daily
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Copy & Send */}
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-ocean-secondary flex-1 md:flex-initial min-h-[44px]"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-300 font-bold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${data.email}?subject=Project%20Inquiry%20-%20Prasetyo%20Edi`}
                  className="btn-ocean-primary flex-1 md:flex-initial min-h-[44px]"
                >
                  <span>Send Email</span>
                  <Send size={15} />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Direct Platforms & Channels */}
          <div className="grid sm:grid-cols-3 gap-4">
            {/* LinkedIn */}
            <AnimatedSection delay={100}>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ocean-card p-5 rounded-2xl flex flex-col justify-between h-full group hover:border-cyan-600 dark:hover:border-cyan-500/40 transition-all min-h-[120px]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-[#0A66C2]/15 text-[#0A66C2] border border-[#0A66C2]/30">
                    <Linkedin size={20} />
                  </div>
                  <ArrowUpRight size={16} className="text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-950 dark:text-white text-sm">
                    LinkedIn
                  </h4>
                  <p className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-0.5 truncate font-medium">
                    /in/prasetyo-edi
                  </p>
                </div>
              </a>
            </AnimatedSection>

            {/* GitHub */}
            <AnimatedSection delay={130}>
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ocean-card p-5 rounded-2xl flex flex-col justify-between h-full group hover:border-cyan-600 dark:hover:border-cyan-500/40 transition-all min-h-[120px]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-slate-200 dark:bg-slate-500/15 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-500/30">
                    <Github size={20} />
                  </div>
                  <ArrowUpRight size={16} className="text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-950 dark:text-white text-sm">
                    GitHub
                  </h4>
                  <p className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-0.5 truncate font-medium">
                    @prasetyoedi
                  </p>
                </div>
              </a>
            </AnimatedSection>

            {/* WhatsApp */}
            <AnimatedSection delay={160}>
              <a
                href={data.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="ocean-card p-5 rounded-2xl flex flex-col justify-between h-full group hover:border-teal-600 dark:hover:border-teal-500/40 transition-all min-h-[120px]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30">
                    <MessageCircle size={20} />
                  </div>
                  <ArrowUpRight size={16} className="text-slate-500 dark:text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-950 dark:text-white text-sm">
                    WhatsApp
                  </h4>
                  <p className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
                    {data.phone}
                  </p>
                </div>
              </a>
            </AnimatedSection>
          </div>

          {/* Location & Timezone Footer */}
          <AnimatedSection delay={200}>
            <div className="p-4 rounded-xl ocean-card flex items-center justify-between text-xs text-slate-700 dark:text-slate-400 font-mono font-medium">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-rose-600 dark:text-rose-500 shrink-0" />
                <span>{data.location}</span>
              </div>
              <span className="text-cyan-800 dark:text-cyan-400">Timezone: UTC+7 (WIB)</span>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
