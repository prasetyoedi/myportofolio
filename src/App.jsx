import React, { useState, useEffect, lazy, Suspense } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LenisProvider } from './context/LenisContext';
import { ThemeProvider } from './context/ThemeContext';

const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const TechStack = lazy(() => import('./components/sections/TechStack'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Certificates = lazy(() => import('./components/sections/Certificates'));
const Achievements = lazy(() => import('./components/sections/Achievements'));
const Contact = lazy(() => import('./components/sections/Contact'));

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <LenisProvider>
        <LoadingScreen isLoaded={isLoaded} />
        <div
          className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen text-[var(--text-muted)]">
                Loading...
              </div>
            }
          >
            <main>
              <Hero />
              <About />
              <TechStack />
              <Experience />
              <Projects />
              <Certificates />
              <Achievements />
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