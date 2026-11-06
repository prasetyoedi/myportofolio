import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
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
          className="mt-6 text-sm sm:text-base md:text-lg text-slate-800 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans font-normal"
        >
          Building scalable web applications, high-performance REST APIs, and enterprise workflow solutions.
          Currently developing Go-based advertising microservices at <span className="text-slate-950 dark:text-white">PT EbyB Global Marketplace</span>,
          with enterprise background in ASP.NET Core at <span className="text-slate-950 dark:text-white">Hino Motors Manufacturing Indonesia</span> and Laravel at <span className="text-slate-950 dark:text-white">PT Senyum Cerdas Indonesia</span>.
        </motion.p>

        {/* Key Metrics / Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 max-w-3xl mx-auto gap-3 p-2.5 rounded-2xl ocean-card"
        >
          {/* 1. Academic Achievement */}
          <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.04] flex flex-col justify-center items-center text-center">
            <span className="font-mono text-base sm:text-lg md:text-xl font-bold text-cyan-800 dark:text-cyan-300">
              3.85 / 4.00
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1">
              UGM Cum Laude
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
              Academic Achievement
            </span>
          </div>

          {/* 2. Technical Expertise */}
          <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.04] flex flex-col justify-center items-center text-center">
            <span className="font-mono text-xs sm:text-sm font-bold text-teal-800 dark:text-teal-300 leading-snug">
              Go, ASP.NET Core, PHP, React, Next.js
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1">
              Full Stack Technologies
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
              Technical Expertise
            </span>
          </div>

          {/* 3. National Achievement */}
          <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.04] flex flex-col justify-center items-center text-center">
            <span className="font-mono text-base sm:text-lg md:text-xl font-bold text-cyan-800 dark:text-cyan-300">
              2× PIMNAS
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1">
              Gold &amp; Silver
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
              National Achievement
            </span>
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
      </div>
    </section>
  );
}
