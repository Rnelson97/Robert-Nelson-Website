
import React from 'react';
import { CONTACT_DATA, EDUCATION } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-24 border-t border-white/5 relative bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-4xl font-bold text-white mb-12">Connect <span className="text-amber-500 italic">Directly.</span></h3>
            
            <div className="space-y-6">
              <a href={`mailto:${CONTACT_DATA.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all">
                    <i className="fas fa-envelope text-white group-hover:text-black transition-colors"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-mono">Email</div>
                  <div className="text-lg font-medium text-white">{CONTACT_DATA.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                    <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-mono">Phone</div>
                  <div className="text-lg font-medium text-white">{CONTACT_DATA.phone}</div>
                </div>
              </div>
              
              <a href={CONTACT_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all">
                    <i className="fab fa-linkedin-in text-white group-hover:text-black transition-colors"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-mono">LinkedIn</div>
                  <div className="text-lg font-medium text-white">Robert Nelson</div>
                </div>
              </a>
            </div>

            <div className="mt-12">
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-3 px-6 py-3 border border-white/10 rounded-lg hover:border-amber-500/50 hover:bg-amber-500/5 transition-all text-sm font-mono text-gray-300 hover:text-white"
              >
                <i className="fas fa-file-arrow-down text-amber-500"></i>
                Download Full CV / Resume
              </button>
            </div>

            <div className="mt-16 pt-16 border-t border-white/5">
                <h4 className="text-sm font-mono text-amber-500 mb-6 uppercase tracking-widest">// Background & Certifications</h4>
                <div className="space-y-6">
                    <div>
                      <div className="text-lg font-bold text-white">{EDUCATION.school}</div>
                      <div className="text-gray-400">{EDUCATION.degree}</div>
                      <div className="text-gray-500 text-sm mt-1 italic">Certificate of Entertainment Management</div>
                      <div className="text-xs text-gray-600 font-mono mt-1">{EDUCATION.details}</div>
                    </div>
                    
                    <div className="space-y-3 pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                        <div className="text-sm text-gray-300">Business Intelligence and Data Analytics (CFI)</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                        <div className="text-sm text-gray-300">Google Analytics Certification</div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="glass-card p-10 rounded-2xl h-fit">
            <h4 className="text-xl font-bold text-white mb-6">Direct Inquiry</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label className="block text-xs font-mono text-gray-500 mb-1">NAME</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 outline-none focus:border-amber-500 text-white transition-colors" placeholder="Full Name" />
                </div>
                <div>
                    <label className="block text-xs font-mono text-gray-500 mb-1">EMAIL</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 outline-none focus:border-amber-500 text-white transition-colors" placeholder="Email Address" />
                </div>
                <div>
                    <label className="block text-xs font-mono text-gray-500 mb-1">MESSAGE</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 outline-none focus:border-amber-500 text-white transition-colors" placeholder="Project details or collaboration scope..."></textarea>
                </div>
                <button className="w-full py-4 bg-amber-500 text-black font-bold rounded hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/10 uppercase tracking-widest text-xs">
                    Execute Connection
                </button>
            </form>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Robert Nelson. All signals nominal.</p>
            <p className="font-mono mt-4 md:mt-0 uppercase tracking-widest text-[10px]">Missoula, Montana // 46.8721° N, 113.9940° W</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
