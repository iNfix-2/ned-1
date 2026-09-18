import React, { useState, useEffect } from 'react';
import { PLATFORMS_LIST } from '../data/tekeverContent';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PlatformsCarousel({ onOpenContact, onOpenGallery }) {
  const [activeIdx, setActiveIdx] = useState(1); // Long-Endurance ISR UAS in center
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 4.5s, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % PLATFORMS_LIST.length);
    }, 4500);
    return () => clearInterval(id);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? PLATFORMS_LIST.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === PLATFORMS_LIST.length - 1 ? 0 : prev + 1));
  };

  const currentPlatform = PLATFORMS_LIST[activeIdx];

  return (
    <section id="platforms" className="pt-16 pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#020e1c] via-[#051830] to-[#020e1c] relative overflow-hidden text-center" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header from Nethawk Solutions Document */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Advanced Defence &amp; Unmanned Systems
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-200/80 max-w-xl mx-auto leading-relaxed">
            Development and integration of authorised defence, security, surveillance, unmanned, and special mission technologies.
          </p>
        </div>

        {/* 3D Perspective Aircraft Fleet Stage */}
        <div className="relative py-8 flex items-center justify-center min-h-[360px] sm:min-h-[420px]">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-12 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 shadow-xl"
            aria-label="Previous system"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-12 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 shadow-xl"
            aria-label="Next system"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 3 Planes in Perspective Display */}
          <div className="flex items-center justify-center w-full max-w-5xl relative">
            
            {/* Left Plane: Tactical UAV */}
            <div 
              onClick={() => setActiveIdx(0)}
              className={`transition-all duration-500 cursor-pointer hidden md:block w-72 transform -rotate-12 ${
                activeIdx === 0 ? 'scale-110 opacity-100 z-20' : 'scale-75 opacity-35 hover:opacity-60 z-10 filter blur-[1.5px]'
              }`}
            >
              <div className="w-full h-44 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
                <img
                  src={PLATFORMS_LIST[0].image}
                  alt={PLATFORMS_LIST[0].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>

            {/* Center Plane: Active Platform */}
            <div className="transition-all duration-500 z-20 mx-2 sm:mx-8 transform scale-105 sm:scale-115">
              <div className="relative w-80 sm:w-[480px] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                <img
                  src={currentPlatform.image}
                  alt={currentPlatform.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Platform Label on Center Image */}
                <div className="absolute bottom-4 left-6 text-left">
                  <div className="text-xl font-extrabold text-white">{currentPlatform.name}</div>
                </div>
              </div>
            </div>

            {/* Right Plane: Counter-UAS & Mission C2 */}
            <div 
              onClick={() => setActiveIdx(2)}
              className={`transition-all duration-500 cursor-pointer hidden md:block w-72 transform rotate-12 ${
                activeIdx === 2 ? 'scale-110 opacity-100 z-20' : 'scale-75 opacity-35 hover:opacity-60 z-10 filter blur-[1.5px]'
              }`}
            >
              <div className="w-full h-44 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
                <img
                  src={PLATFORMS_LIST[2].image}
                  alt={PLATFORMS_LIST[2].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>

        {/* Text & Discover More Button */}
        <div className="space-y-4 pt-2">
          <div className="text-sm font-sans font-medium text-slate-300">
            Mission: Aerial Surveillance &amp; ISR
          </div>

          <div>
            <button
              onClick={onOpenGallery || onOpenContact}
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wider uppercase transition-all hover:scale-105 shadow-xl shadow-blue-500/25"
            >
              Discover More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
