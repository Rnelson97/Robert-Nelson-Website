
import React from 'react';
import { SKILL_GROUPS } from '../constants.tsx';

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
      </div>
    </section>
  );
};

export default Skills;
