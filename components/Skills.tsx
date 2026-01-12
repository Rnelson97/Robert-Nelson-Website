
import React from 'react';
import { SKILL_GROUPS } from '../constants';

const STRENGTHS = [
  {
    title: "Cross-Functional Synergy",
    description: "Coordinated effectively across Media, Tracking, and Analytics teams to support high-stakes campaign success.",
    icon: "fa-users-gear"
  },
  {
    title: "Strategic Ownership",
    description: "Experienced in task delegation, workload prioritization, and managing complex cross-team workflows.",
    icon: "fa-diagram-project"
  },
  {
    title: "Technical Translator",
    description: "Strong communicator with internal teams and clients, able to translate technical concepts into business value.",
    icon: "fa-comments-dots"
  },
  {
    title: "Athlete-Built Resilience",
    description: "Known for reliability and staying calm under pressure—built through 5 years as a college athlete.",
    icon: "fa-medal"
  },
  {
    title: "Agile Adaptability",
    description: "Highly organized and self-driven with a strong ability to learn quickly and thrive in fast-paced roles.",
    icon: "fa-bolt-lightning"
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-sm font-mono text-amber-500 mb-2 uppercase tracking-widest">// Toolkit</h2>
          <h3 className="text-4xl font-bold text-white">Capabilities & Proficiency</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 reveal-stagger">
          {SKILL_GROUPS.map((group, idx) => (
            <div key={idx} className="glass-card p-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 text-2xl text-amber-500 border border-amber-500/20 group-hover:scale-110 transition-transform">
                <i className={`fas ${group.icon}`}></i>
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">{group.category}</h4>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {group.items.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-24">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-xs reveal">
              <h2 className="text-sm font-mono text-amber-500 mb-2 uppercase tracking-widest">// Operational Strengths</h2>
              <h3 className="text-3xl font-bold text-white mb-6">Collaborative Intelligence</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Technical skill is only half the equation. My background in Division I athletics and enterprise operations ensures I lead with discipline and clear communication.
              </p>
            </div>
            
            <div className="flex-1 grid sm:grid-cols-2 gap-4 reveal-stagger">
              {STRENGTHS.map((s, idx) => (
                <div key={idx} className="glass-card p-6 border-l-2 border-l-amber-500/30 hover:border-l-amber-500 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <i className={`fas ${s.icon} text-amber-500 text-xs`}></i>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">{s.title}</h4>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
              <div className="glass-card p-6 bg-amber-500/5 flex items-center justify-center border-dashed border-amber-500/20">
                <div className="text-center">
                   <div className="text-[10px] font-mono text-amber-500 uppercase mb-1">Status</div>
                   <div className="text-sm font-bold text-white uppercase">Growth Oriented</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
