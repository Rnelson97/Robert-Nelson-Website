
import React from 'react';
import { FREELANCE_STATS, TESTIMONIALS } from '../constants.tsx';

const Freelance: React.FC = () => {
  return (
    <section id="freelance" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 reveal">
            <h2 className="text-sm font-mono text-amber-500 mb-2 uppercase tracking-widest">// Consulting</h2>
            <h3 className="text-4xl font-bold text-white mb-8">Independent Impact</h3>
            <div className="grid grid-cols-2 gap-8">
              {FREELANCE_STATS.map((stat, idx) => (
                <div key={idx} className="glass-card p-6 border-l-4 border-l-amber-500 relative group">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 reveal-stagger">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="glass-card p-8 relative hover:border-amber-500/40 transition-all">
                <p className="text-lg text-gray-300 italic mb-6">"{t.quote}"</p>
                <div className="text-sm font-bold text-white">{t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
