import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { data } from '../data';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-300 dark:border-cyan-500/15 py-10 px-5 bg-slate-200/90 dark:bg-[#000104] text-slate-800 dark:text-slate-400 text-xs font-mono relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-bold text-slate-950 dark:text-slate-100 text-sm">
            {data.name}
          </span>
          <p className="text-slate-600 dark:text-slate-500 text-[11px] font-medium">
            © {new Date().getFullYear()} · All rights reserved.
          </p>
        </div>

        {/* Middle: Tech Philosophy */}
        <div className="text-center text-slate-700 dark:text-slate-400 text-[11px] max-w-sm font-medium">
          Built with React 18, Tailwind CSS, and Framer Motion. Engineered for sub-second performance.
        </div>

        {/* Right: Channels & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-700 dark:text-slate-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-700 dark:text-slate-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${data.email}`}
            aria-label="Email"
            className="text-slate-700 dark:text-slate-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors"
          >
            <Mail size={16} />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-cyan-950/40 text-slate-950 dark:text-cyan-300 border border-slate-300 dark:border-cyan-500/20 hover:bg-slate-100 dark:hover:bg-cyan-900/40 transition-colors font-bold"
            aria-label="Back to Top"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};
