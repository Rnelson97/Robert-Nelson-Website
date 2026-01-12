
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-40 pb-20 overflow-hidden">
      {/* Animated glow background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full -mr-40 -mt-40 data-pulse"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="scan-line"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Technical Specialist
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white">
              Robert Nelson<br/>
              <span className="gradient-text italic text-3xl md:text-5xl block mt-2">Solution Oriented.</span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed font-medium">
              I specialize in bridging the gap between human needs and technical precision, currently architecting advanced tracking systems at Pathlabs, an MiQ company. From optimizing complex conversion signals for enterprise clients to automating intelligence workflows with n8n, I lead cross-functional teams to turn ambitious visions into scalable, high-impact real-world deployments.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <a href="#experience" className="px-8 py-4 bg-amber-500 text-black font-bold rounded hover:bg-amber-600 transition-all flex items-center gap-2 group">
                Explore Experience
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative hidden md:block">
            <div className="relative w-full aspect-[4/5] glass-card rounded-2xl overflow-hidden animate-float border-amber-500/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                <img 
                  src="https://r2.erweima.ai/ai_image/1070851e-e2c7-43c2-a42e-13769c8e8e78.jpg" 
                  alt="Robert Nelson Portrait" 
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-110 transition-all duration-700 scale-105 hover:scale-100"
                />
              </div>
              
              <div className="absolute bottom-6 left-6 z-20">
                <div className="text-xs font-mono text-amber-500 mb-1 uppercase tracking-[0.3em]">Identity Node</div>
                <div className="text-xl font-bold text-white tracking-tight uppercase">Robert Nelson</div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-lg text-sm font-mono text-white animate-float shadow-xl border-amber-500/20" style={{animationDelay: '1s'}}>
                <span className="text-amber-500">INIT:</span> SYSTEM_ACTIVE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
