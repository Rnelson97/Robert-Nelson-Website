
import React from 'react';
import { CONTACT_DATA, EDUCATION } from '../constants.tsx';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-24 border-t border-white/5 relative bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-4xl font-bold text-white mb-12">Connect <span className="text-amber-500 italic">Directly.</span></h3>
            <div className="space-y-6">
              <a href={`mailto:${CONTACT_DATA.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                    <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-mono">Email</div>
                  <div className="text-lg font-medium text-white">{CONTACT_DATA.email}</div>
                </div>
              </a>
            </div>
          </div>
          <div className="glass-card p-10 rounded-2xl h-fit">
            <h4 className="text-xl font-bold text-white mb-6">Direct Inquiry</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 outline-none focus:border-amber-500 text-white" placeholder="Full Name" />
                <button className="w-full py-4 bg-amber-500 text-black font-bold rounded uppercase tracking-widest text-xs">
                    Execute Connection
                </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
