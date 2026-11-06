import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { cn } from '../utils/cn';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((n) => n.href.substring(1));
      let currentSection = 'home';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            currentSection = section;
          }
        }
      }
      setActive(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3 sm:py-4 pointer-events-none">
        <nav
          className={cn(
            'pointer-events-auto flex items-center justify-between gap-2 rounded-full px-3 py-1.5 sm:px-5 sm:py-2 transition-all duration-300 shadow-md',
            scrolled
              ? 'bg-white/95 dark:bg-[#041223]/90 border border-slate-300 dark:border-cyan-500/25 backdrop-blur-xl'
              : 'bg-white/90 dark:bg-[#041223]/80 border border-slate-300/80 dark:border-cyan-500/20 backdrop-blur-md'
          )}
        >
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex items-center gap-2 pr-2 text-sm font-mono font-bold tracking-tight text-slate-950 dark:text-slate-100 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-600 dark:bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
            <span>prasetyo</span>
            <span className="text-cyan-700 dark:text-cyan-400">.dev</span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={cn(
                    'relative px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200',
                    isActive
                      ? 'text-cyan-900 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-500/15 border border-cyan-300 dark:border-cyan-500/30'
                      : 'text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-500/10'
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Action: Theme Toggle & Contact */}
          <div className="flex items-center gap-2 pl-1">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-800 dark:text-slate-200 hover:bg-cyan-100 dark:hover:bg-cyan-500/15 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all border border-slate-300 dark:border-transparent hover:border-cyan-400/40"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="hidden sm:inline-flex items-center gap-1 rounded-full bg-cyan-100 dark:bg-cyan-500/15 px-3 py-1 text-xs font-bold text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30 hover:bg-cyan-200 dark:hover:bg-cyan-500/25 transition-all"
            >
              <span>Connect</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-500/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-4 top-16 z-40 rounded-2xl border border-slate-300 dark:border-cyan-500/30 bg-white/95 dark:bg-[#031120]/95 p-5 shadow-2xl backdrop-blur-2xl lg:hidden text-slate-900 dark:text-white"
          >
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-200 dark:border-white/[0.08]">
              <span className="font-mono text-xs text-cyan-800 dark:text-cyan-400 font-bold tracking-wider">
                NAVIGATION
              </span>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-800 dark:text-slate-300 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.05] border border-slate-300 dark:border-white/[0.08]"
              >
                {isDark ? <Sun size={14} /> : <Moon size={14} />}
                <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={cn(
                    'flex items-center justify-between rounded-xl p-3 text-sm font-semibold transition-colors min-h-[44px]',
                    active === item.href.substring(1)
                      ? 'bg-cyan-100 dark:bg-cyan-500/15 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30'
                      : 'bg-slate-100/70 dark:bg-white/[0.02] text-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/[0.05]'
                  )}
                >
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/[0.08]">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="btn-ocean-primary w-full text-center"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
