import React, { useState } from 'react';
import { MISSIONS_LIST } from '../data/tekeverContent';
import { Play } from 'lucide-react';

export default function MissionsOrbit({ onOpenContact }) {
  const [activeIdx, setActiveIdx] = useState(0); // 'Autonomous Collaborative Electronic Warfare'
  const activeMission = MISSIONS_LIST[activeIdx];

  return (
    <section id="missions" className="relative min-h-screen py-24 px-6 sm:px-12 bg-[#060c16] flex items-center overflow-hidden">
      
      {/* Dark Tactical Backdrop with Drone and Celestial Dome */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-60"
        style={{
          backgroundImage: `url('${activeMission.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#030811] via-[#030811]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030811] via-transparent to-[#030811]"></div>
      </div>

      {/* Atmospheric Celestial Sphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] rounded-full bg-gradient-to-tr from-blue-600/15 via-blue-950/20 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Mission Description & CTA */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#38bdf8] font-bold tracking-wider uppercase block">
              {activeMission.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              {activeMission.title}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-lg">
            {activeMission.description}
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center space-x-3 px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white text-xs font-medium tracking-wide border border-white/20 transition-all hover:scale-105 shadow-xl"
            >
              <span>Play Video</span>
            </button>
          </div>
        </div>

        {/* Center: Glowing Circular Play Button */}
        <div className="lg:col-span-2 flex items-center justify-center py-6 lg:py-0">
          <button
            onClick={onOpenContact}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-xl border border-white/30 text-white flex items-center justify-center relative group shadow-2xl transition-all hover:scale-110"
            aria-label="Play mission video"
          >
            {/* Glowing Blue ambient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/40 to-transparent animate-pulse pointer-events-none"></div>
            <Play className="w-8 h-8 text-white fill-white ml-1 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Right Column: Curved Orbit Arc Timeline with Cards */}
        <div className="lg:col-span-5 relative flex justify-end">
          
          {/* SVG Curved Vertical Orbit Line */}
          <div className="absolute inset-y-0 right-48 sm:right-64 w-32 pointer-events-none hidden sm:block">
            <svg className="w-full h-full" viewBox="0 0 100 600" fill="none">
              <path
                d="M 80 0 Q 10 300 80 600"
                stroke="rgba(255, 255, 255, 0.25)"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Cards Stack along the curve */}
          <div className="space-y-4 w-full max-w-sm">
            {MISSIONS_LIST.map((m, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={m.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`cursor-pointer transition-all duration-300 flex items-center space-x-4 p-2 rounded-2xl ${
                    isActive
                      ? 'bg-white/10 backdrop-blur-xl border border-white/25 shadow-2xl scale-105 sm:translate-x-[-12px]'
                      : 'opacity-60 hover:opacity-100 hover:bg-white/5'
                  }`}
                >
                  {/* Active Blue Dot on the Orbit Line */}
                  <div className="w-4 flex items-center justify-center flex-shrink-0">
                    {isActive ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]"></span>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                    )}
                  </div>

                  {/* Mission Title */}
                  <div className="flex-grow text-left">
                    <div className={`text-xs font-medium line-clamp-1 ${isActive ? 'text-white font-bold' : 'text-slate-300'}`}>
                      {m.title}
                    </div>
                  </div>

                  {/* Thumbnail */}
                  <div className="w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-white/10 relative shadow-md">
                    <img
                      src={m.thumb}
                      alt={m.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
