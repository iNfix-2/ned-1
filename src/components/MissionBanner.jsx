import React, { useState, useEffect } from 'react';
import { MISSIONS_LIST } from '../data/tekeverContent';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      className="relative w-full pt-12 sm:pt-16 flex flex-col items-center bg-[#020e1c] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Orbital Curved White Line */}
      <div className="absolute inset-0 pointer-events-none opacity-15 z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 700" fill="none">
          <path d="M -50 650 Q 800 150 1550 450" stroke="#FFFFFF" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="w-full relative z-10 space-y-6 sm:space-y-8 flex flex-col items-center justify-center">
        
        {/* 1. Header Text positioned cleanly ABOVE the image card */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 px-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            Securing Africa's Critical Infrastructures
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Persistent operational intelligence, tactical integration, and sovereign defence capabilities across air, land, and sea.
          </p>
        </div>

        {/* 2. Full-bleed, full-viewport slideshow (matches the hero) */}
        <div className="relative w-full h-screen min-h-[600px] overflow-hidden group">
          
          {/* Mission Background Image Slides */}
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
              {/* Cinematic gradient at the bottom of the card for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
            </div>
          ))}

          {/* Prev / Next arrows (desktop only) */}
          <button
            type="button"
            aria-label="Previous mission"
            onClick={() => setActiveIdx((prev) => (prev - 1 + MISSIONS_LIST.length) % MISSIONS_LIST.length)}
            className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass-pill hover:bg-white/20 text-white transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Next mission"
            onClick={() => setActiveIdx((prev) => (prev + 1) % MISSIONS_LIST.length)}
            className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass-pill hover:bg-white/20 text-white transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Content overlay at the bottom, aligned to the page gutters */}
          <div className="absolute inset-0 px-6 sm:px-12 lg:px-20 pb-12 sm:pb-16 flex flex-col justify-end z-10 text-left max-w-[1600px] mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
              
              <div className="space-y-3 max-w-xl">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
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
                Explore Missions
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
