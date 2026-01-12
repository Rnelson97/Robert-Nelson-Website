
import React from 'react';
import { CONTACT_DATA } from '../constants';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-white/5 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center font-bold text-black text-sm">RN</div>
          <span className="font-bold text-xl tracking-tighter uppercase hidden sm:block text-white">Robert Nelson</span>
        </div>
        
        <div className="flex items-center gap-6 md:gap-8 text-sm font-medium text-gray-400">
          <div className="hidden lg:flex items-center gap-6 border-r border-white/10 pr-8 mr-2">
            <a href={`mailto:${CONTACT_DATA.email}`} className="flex items-center gap-2 hover:text-amber-500 transition-colors font-mono text-xs">
              <i className="fas fa-envelope text-amber-500/50"></i>
              {CONTACT_DATA.email}
            </a>
            <a href={`tel:${CONTACT_DATA.phone}`} className="flex items-center gap-2 hover:text-amber-500 transition-colors font-mono text-xs">
              <i className="fas fa-phone text-amber-500/50"></i>
              {CONTACT_DATA.phone}
            </a>
            <a href={CONTACT_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-500 transition-colors font-mono text-xs">
              <i className="fab fa-linkedin text-amber-500/50"></i>
              LinkedIn
            </a>
          </div>
          <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
          <a href="#experience" className="hover:text-amber-500 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-amber-500 transition-colors hidden md:block">Skills</a>
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.print(); }} 
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded hover:border-amber-500/50 hover:text-white transition-all text-xs font-mono"
            >
              <i className="fas fa-file-pdf text-amber-500"></i>
              CV
            </a>
            <a href="#contact" className="px-4 py-2 bg-white text-black rounded hover:bg-amber-500 hover:text-white transition-all text-xs font-bold">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
