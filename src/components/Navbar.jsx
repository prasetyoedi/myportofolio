import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '../utils/cn';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
          'nav-blur',
          scrolled ? 'py-2' : 'py-4'
        )}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="font-display text-lg font-bold tracking-tight"
          >
            <span className="text-[var(--text-white)]">prasetyo</span>
            <span className="text-blue-400">.</span>
          </a>

          <div className="flex items-center gap-2">
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-full transition-all duration-300',
                    active === link.href.replace('#', '')
                      ? 'text-[var(--text-white)] bg-[var(--glass-bg)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-white)] hover:bg-[var(--glass-bg)]'
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-full hover:bg-[var(--glass-bg)] transition-colors text-[var(--text-muted)] hover:text-[var(--text-white)]"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 md:hidden mobile-menu-overlay flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-2xl font-medium text-[var(--text-muted)] hover:text-[var(--text-white)] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <button
                onClick={toggleTheme}
                className="mt-4 theme-toggle text-lg px-4 py-2"
              >
                {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};