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
      className="relative w-full min-h-[85vh] lg:h-screen lg:min-h-[700px] overflow-hidden flex flex-col justify-between bg-[#020e1c]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Full-Bleed Mission Background Image taking 100% View Width */}
      {MISSIONS_LIST.map((mission, idx) => (
        <div
          key={mission.id}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out ${
            idx === activeIdx ? 'opacity-100 scale-100 z-0' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{
            backgroundImage: `url('${mission.image}')`,
          }}
        >
          {/* Vignettes for high contrast and seamless section transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50"></div>
        </div>
      ))}

      {/* Subtle Orbital Curved White Line */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-10">
        <svg className="w-full h-full" viewBox="0 0 1440 700" fill="none">
          <path d="M -50 650 Q 800 150 1550 450" stroke="#FFFFFF" strokeWidth="1.2" />
        </svg>
      </div>

      {/* 2. Top Header Section */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 sm:px-12 pt-16 sm:pt-20 lg:pt-24 text-center">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug max-w-2xl mx-auto drop-shadow-md">
          Securing Africa's Critical Infrastructures
        </h2>
      </div>

      {/* 3. Bottom Controls & Details Overlay */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 sm:px-12 pb-12 sm:pb-16 lg:pb-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 text-left">
          
          <div className="space-y-3 max-w-xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
              {activeMission.title}
            </h3>
            
            {/* 4 Pagination Dots Indicator */}
            <div className="flex items-center space-x-2 pt-2">
              {MISSIONS_LIST.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIdx === i ? 'w-8 bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]' : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to mission ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onNavigateMissions || onOpenContact}
            className="px-8 py-3 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-xl text-white text-xs font-medium tracking-wide border border-white/25 transition-all hover:scale-105 shadow-2xl whitespace-nowrap"
          >
            Explore Defence Tech
          </button>

        </div>
      </div>
    </section>
  );
}
