
import React from 'react';
import { WORK_EXPERIENCE, ADDITIONAL_EXPERIENCE } from '../constants.tsx';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-amber-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-sm font-mono text-amber-500 mb-2 uppercase tracking-widest">// Career Timeline</h2>
            <h3 className="text-4xl font-bold text-white">Professional Journey</h3>
          </div>
          <p className="text-gray-400 max-w-md text-sm italic">
            Forged in the intensity of Division I athletics and refined in the precise world of marketing analytics.
          </p>
        </div>

        <div className="grid gap-6">
          {WORK_EXPERIENCE.map((job, idx) => (
            <div key={idx} className="glass-card p-8 group relative overflow-hidden hover:bg-white/[0.04]">
                <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/[0.03] pointer-events-none group-hover:text-amber-500/10 transition-colors">
                    0{idx + 1}
                </div>
                
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500/0 group-hover:bg-amber-500/40 transition-all"></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <h4 className="text-2xl font-bold text-white group-hover:text-amber-500 transition-colors">
                            {job.role}
                        </h4>
                        <div className="flex items-center gap-3 text-sm text-gray-400 mt-1 uppercase tracking-wider">
                            <span className="font-semibold text-white/80">{job.company}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                            <span>{job.location}</span>
                        </div>
                    </div>
                    <div className="font-mono text-xs text-amber-500 border border-amber-500/20 bg-amber-500/5 px-3 py-1 rounded">
                        {job.period}
                    </div>
                </div>

                <ul className="space-y-3">
                    {job.highlights.map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                            <span className="mt-1.5 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-amber-500/40"></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
