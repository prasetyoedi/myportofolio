import React, { useState, useEffect, lazy, Suspense } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LenisProvider } from './context/LenisContext';
import { ThemeProvider } from './context/ThemeContext';

const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const TechStack = lazy(() => import('./components/sections/TechStack'));
const Certificates = lazy(() => import('./components/sections/Certificates'));
const Contact = lazy(() => import('./components/sections/Contact'));

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <LenisProvider>
        <LoadingScreen isLoaded={isLoaded} />

        <div
          className={`min-h-screen bg-slate-50 dark:bg-[#010409] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Subtle Global Dot Grid Texture */}
          <div
            className="fixed inset-0 pointer-events-none ocean-dot-grid opacity-35 z-0"
            aria-hidden="true"
          />

          <Navbar />

          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen font-mono text-xs text-cyan-600 dark:text-cyan-400">
                Loading portfolio...
              </div>
            }
          >
            <main className="relative z-10">
              <Hero />
              <About />
              <Experience />
              <Projects />
              <TechStack />
              <Certificates />
              <Contact />
            </main>
          </Suspense>

          <Footer />
        </div>
      </LenisProvider>
    </ThemeProvider>
  );
}

export default App;
