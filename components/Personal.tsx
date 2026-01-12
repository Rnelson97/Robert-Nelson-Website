
import React from 'react';
import { PROJECTS, HOBBIES } from '../constants.tsx';

const Personal: React.FC = () => {
  return (
    <section id="personal" className="py-24 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24">
          <div className="reveal">
            <div className="mb-12">
              <h2 className="text-sm font-mono text-amber-500 mb-2 uppercase tracking-widest">// Workshop</h2>
              <h3 className="text-3xl font-bold text-white">Active Experiments</h3>
            </div>
            <div className="space-y-6 reveal-stagger">
              {PROJECTS.map((project, idx) => (
                <div key={idx} className="glass-card p-6 rounded-xl group cursor-default">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">{project.title}</h4>
                    <span className="text-[10px] font-mono border border-amber-500/30 px-2 py-0.5 rounded uppercase text-amber-500/80">
                        {project.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <div className="mb-12">
              <h2 className="text-sm font-mono text-amber-500 mb-2 uppercase tracking-widest">// Off-Clock</h2>
              <h3 className="text-3xl font-bold text-white">Beyond the Screen</h3>
            </div>
            <div className="space-y-10 reveal-stagger">
              {HOBBIES.map((hobby, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                    <i className={`fas ${hobby.icon} text-lg`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{hobby.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{hobby.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;
