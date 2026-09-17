import React, { useState } from 'react';
import { MISSIONS_LIST } from '../data/tekeverContent';

export default function MissionBanner({ onOpenContact, onNavigateMissions }) {
  const [activeIdx, setActiveIdx] = useState(1); // 'Persistent Awareness. Smarter Protection.'
  const activeMission = MISSIONS_LIST[activeIdx];

  return (
    <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d1722] via-[#243547] to-[#2f4054] overflow-hidden">
      
      {/* Subtle Orbital Curved White Line */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 700" fill="none">
          <path d="M -50 650 Q 800 150 1550 450" stroke="#FFFFFF" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center space-y-12">
        {/* Section Headline from Document */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug max-w-2xl mx-auto">
          Engineering Solutions for a Connected World,<br />
          NETHAWK delivers.
        </h2>

        {/* Big Rounded Ocean / Security Card */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[520px] rounded-[32px] overflow-hidden shadow-2xl border border-white/15 group">
          
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
                <span className="text-[11px] font-mono text-[#38bdf8] font-bold tracking-wider uppercase block">
                  {activeMission.badge}
                </span>
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
