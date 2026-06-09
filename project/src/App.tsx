import { useState, useEffect, lazy, Suspense } from 'react';
import { animate } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load below-the-fold components to improve initial page load performance
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'portfolio', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const targetPosition = elementPosition - offset;

      animate(window.scrollY, targetPosition, {
        type: "spring",
        stiffness: 40,
        damping: 15,
        mass: 1,
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
  };

  return (
    <div className="bg-obsidian min-h-screen text-gray-100 selection:bg-accent-cyan/30">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Suspense fallback={
          <div className="py-20 text-center text-accent-cyan font-display text-sm tracking-widest animate-pulse">
            SYSTEM INITIALIZING...
          </div>
        }>
          <About />
          <Skills />
          <Portfolio />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;