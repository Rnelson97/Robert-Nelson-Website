
import React, { useEffect } from 'react';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import Experience from './components/Experience.tsx';
import Skills from './components/Skills.tsx';
import Personal from './components/Personal.tsx';
import Freelance from './components/Freelance.tsx';
import Contact from './components/Contact.tsx';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
    revealElements.forEach(el => observer.observe(el));

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen text-gray-200">
      <Navigation />
      <main>
        <Hero />
        
        <section className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center gap-6 text-gray-800 reveal">
                <div className="h-px flex-1 bg-white/5"></div>
                <div className="text-[10px] font-mono uppercase tracking-[0.5em]">System Status: Nominal</div>
                <div className="h-px flex-1 bg-white/5"></div>
            </div>
        </section>

        <Experience />
        <Skills />
        <Freelance />
        <Personal />
        <Contact />
      </main>
    </div>
  );
};

export default App;
