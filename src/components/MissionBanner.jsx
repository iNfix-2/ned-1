import React, { useState, useEffect } from 'react';
import { MISSIONS_LIST } from '../data/tekeverContent';

export default function MissionBanner({ onOpenContact, onNavigateMissions }) {
  const [activeIdx, setActiveIdx] = useState(0); // 'ISR & Aerial Surveillance'
  const [isPaused, setIsPaused] = useState(false);
  const activeMission = MISSIONS_LIST[activeIdx];

  // Auto-slide every 5s, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % MISSIONS_LIST.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isPaused]);

  return (
    <section
      className="relative min-h-screen py-8 sm:py-12 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#020b17] via-[#041528] to-[#020e1c] overflow-hidden flex flex-col justify-center items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* Subtle Orbital Curved White Line */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 700" fill="none">
          <path d="M -50 650 Q 800 150 1550 450" stroke="#FFFFFF" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="max-w-[92vw] 2xl:max-w-[1600px] w-full mx-auto relative z-10 text-center flex flex-col items-center justify-center space-y-4 sm:space-y-6">
        {/* Section Headline from Document */}
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug max-w-2xl mx-auto">
          Securing Africa's Critical Infrastructures
        </h2>

        {/* Big Rounded Ocean / Security Card (80% viewport height) */}
        <div className="relative w-full h-[80vh] min-h-[580px] max-h-[85vh] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-white/15 group">
          
          {/* Oceanic / Mission Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url('${activeMission.image}')`,
            }}
          >
            {/* Dark gradient to ensure crisp text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
          </div>

          {/* Card Content Overlay */}
          <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 text-left">
              
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {activeMission.title}
                </h3>
                
                {/* 4 Pagination Dots Indicator */}
                <div className="flex items-center space-x-2 pt-3">
                  {MISSIONS_LIST.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeIdx === i ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onNavigateMissions || onOpenContact}
                className="px-8 py-3 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-xl text-white text-xs font-medium tracking-wide border border-white/25 transition-all hover:scale-105 shadow-xl whitespace-nowrap"
              >
                Explore Defence Tech
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
