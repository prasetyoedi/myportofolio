// src/App.jsx
import React, { useState, useEffect, lazy, Suspense } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LenisProvider } from "./context/LenisContext";
import { data } from "./data";

// Lazy load sections
const Hero = lazy(() => import("./components/sections/Hero"));
const About = lazy(() => import("./components/sections/About"));
const TechStack = lazy(() => import("./components/sections/TechStack"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Certificates = lazy(() => import("./components/sections/Certificates"));
const Achievements = lazy(() => import("./components/sections/Achievements"));
const Contact = lazy(() => import("./components/sections/Contact"));

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoaded(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LenisProvider>
      <LoadingScreen isLoaded={isLoaded} />

      <div
        className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen text-gray-400">
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
  );
}

export default App;