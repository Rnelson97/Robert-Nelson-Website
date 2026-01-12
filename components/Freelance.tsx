
import React from 'react';
import { FREELANCE_STATS, TESTIMONIALS } from '../constants';

const Freelance: React.FC = () => {
  return (
    <section id="freelance" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-amber-500/[0.04] blur-[120px] rounded-full pointer-events-none data-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 reveal">
            <h2 className="text-sm font-mono text-amber-500 mb-2 uppercase tracking-widest">// Consulting</h2>
            <h3 className="text-4xl font-bold text-white mb-8">Independent Impact</h3>
            <p className="text-gray-400 leading-relaxed mb-12 text-lg">
              Beyond the agency, I partner with e-commerce and SaaS brands to reclaim their data precision. I build high-integrity tracking foundations that scale with growth.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {FREELANCE_STATS.map((stat, idx) => (
                <div key={idx} className="glass-card p-6 border-l-4 border-l-amber-500 relative group">
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">{stat.value}</div>
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{stat.label}</div>
                  <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-amber-500/40 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 reveal-stagger">
            <div className="text-xs font-mono text-gray-600 mb-2 uppercase tracking-widest text-right">Validated Client Logs</div>
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="glass-card p-8 relative hover:border-amber-500/40 transition-all">
                <i className="fas fa-quote-left absolute top-6 left-6 text-amber-500/10 text-4xl pointer-events-none"></i>
                <p className="text-lg text-gray-300 italic mb-6 relative z-10 font-light leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-amber-500/30"></div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.author}</div>
                    <div className="text-xs text-gray-500 font-mono uppercase tracking-tighter">{t.context}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
