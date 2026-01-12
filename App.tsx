
import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Personal from './components/Personal';
import Freelance from './components/Freelance';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) return;

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
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'hireRJ2026') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#070708]">
        <div className="glass-card p-10 max-w-md w-full rounded-2xl border-amber-500/20 shadow-2xl animate-float relative z-[101]">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center font-black text-black text-2xl mb-6 shadow-lg shadow-amber-500/20">
              RN
            </div>
            <h1 className="text-2xl font-bold text-white uppercase tracking-tighter">System Access</h1>
            <p className="text-gray-500 text-xs font-mono mt-2 uppercase tracking-widest text-center">Identity verification required</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="ACCESS KEY"
                className={`w-full bg-black/40 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-lg px-4 py-4 text-center text-white font-mono tracking-[0.5em] outline-none focus:border-amber-500 transition-all`}
                autoFocus
              />
              {error && (
                <p className="text-red-500 text-[10px] font-mono mt-2 text-center uppercase tracking-widest animate-pulse">
                  Invalid decryption key
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-600 transition-all uppercase tracking-widest text-xs shadow-lg shadow-amber-500/10"
            >
              Initialize Uplink
            </button>
          </form>
          
          <div className="mt-12 text-center">
            <p className="text-[10px] text-gray-700 font-mono uppercase tracking-[0.2em]">Robert Nelson // Node 0x7A4</p>
          </div>
        </div>
      </div>
    );
  }

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
