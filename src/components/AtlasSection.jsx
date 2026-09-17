import React from 'react';

export default function AtlasSection({ onOpenContact }) {
  return (
    <section id="ai-systems" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#040a14] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Massive Rounded Planet Earth Banner Card */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[460px] rounded-[36px] overflow-hidden border border-white/10 shadow-2xl group flex items-center justify-center text-center">
          
          {/* High-Resolution Planet Earth from Space Backdrop */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=85')`,
            }}
          >
            {/* Dark vignette to center focus */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Central AI, Data & Intelligent Systems Typography */}
          <div className="relative z-10 space-y-4 px-6 max-w-2xl">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-widest drop-shadow-2xl">
              INTELLIGENT SYSTEMS
            </h2>
            
            <p className="text-xs sm:text-sm font-mono text-white/90 tracking-widest uppercase font-semibold drop-shadow">
              Turning Data into Useful Intelligence
            </p>

            <p className="text-xs sm:text-sm text-slate-200/80 max-w-lg mx-auto drop-shadow leading-relaxed hidden sm:block">
              Machine learning, computer vision, automated data processing, and predictive decision-support systems.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenContact}
                className="px-8 py-3 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-xl text-white text-xs font-medium tracking-wide border border-white/25 transition-all hover:scale-105 shadow-xl"
              >
                Explore AI &amp; Data
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
