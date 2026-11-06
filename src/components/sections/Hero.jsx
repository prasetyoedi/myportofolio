import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { data } from '../../data';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 px-5 overflow-hidden"
      style={{
        background: 'var(--ocean-hero)',
      }}
    >
      {/* Sunlight Surface Glow */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] rounded-full blur-[120px] pointer-events-none opacity-30 dark:opacity-20"
        style={{
          background: 'radial-gradient(ellipse, #06b6d4, #14b8a6, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Availability Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full ocean-card mb-8 text-xs font-mono shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-600 shadow-[0_0_8px_#0d9488]" />
          </span>
          <span className="text-slate-900 dark:text-slate-200 font-semibold">
            {data.availability.status}
          </span>
        </motion.div>

        {/* Engineer Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 dark:text-white leading-[1.08]">
            Prasetyo Edi Pamungkas
          </h1>
          <p className="mt-3 font-mono text-base sm:text-lg text-cyan-800 dark:text-cyan-400 font-semibold">
            Full Stack Software Engineer &amp; System Analyst
          </p>
        </motion.div>

        {/* Technical Summary */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-slate-800 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans font-normal"
        >
          Engineering digital approval workflows, high-throughput REST APIs, and reactive web interfaces.
          Currently developing Go ad-engine microservices at <span className="text-slate-950 dark:text-white font-semibold">PT EbyB</span>,
          with enterprise background in ASP.NET Core at <span className="text-slate-950 dark:text-white font-semibold">Hino Motors</span> and Laravel at <span className="text-slate-950 dark:text-white font-semibold">Senyumin</span>.
        </motion.p>

        {/* Key Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22 }}
          className="mt-8 grid grid-cols-3 max-w-xl mx-auto gap-2 sm:gap-4 p-2.5 rounded-2xl ocean-card"
        >
          <div className="p-2 text-center">
            <span className="block font-mono text-base sm:text-xl font-bold text-cyan-800 dark:text-cyan-300">3.85 / 4.00</span>
            <span className="text-[11px] text-slate-700 dark:text-slate-400 font-medium">UGM Cum Laude</span>
          </div>
          <div className="p-2 text-center border-x border-slate-300 dark:border-white/[0.08]">
            <span className="block font-mono text-base sm:text-xl font-bold text-teal-800 dark:text-teal-300">Go · .NET · PHP</span>
            <span className="text-[11px] text-slate-700 dark:text-slate-400 font-medium">Backend Stacks</span>
          </div>
          <div className="p-2 text-center">
            <span className="block font-mono text-base sm:text-xl font-bold text-cyan-800 dark:text-cyan-300">2x PIMNAS</span>
            <span className="text-[11px] text-slate-700 dark:text-slate-400 font-medium">Gold &amp; Silver Medal</span>
          </div>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a href="#projects" className="btn-ocean-primary min-h-[44px]">
            <span>Explore Projects</span>
            <ArrowDown size={15} />
          </a>
          <a href="#contact" className="btn-ocean-secondary min-h-[44px]">
            <span>Get in Touch</span>
          </a>
        </motion.div>

        {/* Social / Direct Channels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-11 w-11 items-center justify-center rounded-full ocean-card text-slate-800 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all border border-slate-300 dark:border-white/[0.08]"
          >
            <Github size={18} />
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-11 w-11 items-center justify-center rounded-full ocean-card text-slate-800 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all border border-slate-300 dark:border-white/[0.08]"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${data.email}`}
            aria-label="Direct Email"
            className="flex h-11 w-11 items-center justify-center rounded-full ocean-card text-slate-800 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all border border-slate-300 dark:border-white/[0.08]"
          >
            <Mail size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
