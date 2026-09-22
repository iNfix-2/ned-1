import React, { useState, useEffect } from 'react';
import { PLATFORMS_LIST } from '../data/tekeverContent';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PlatformsCarousel({ onOpenContact, onOpenGallery, onSelectPlatform }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 5s, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % PLATFORMS_LIST.length);
    }, 5000);
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
    <section
      id="platforms"
      className="relative w-full pt-4 sm:pt-6 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-12 flex flex-col items-center bg-[#020e1c] text-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl w-full mx-auto relative z-10 space-y-4 sm:space-y-5 flex flex-col items-center justify-center">
        
        {/* 1. Header Section positioned cleanly ABOVE the image card */}
        <div className="text-center max-w-3xl mx-auto space-y-1 sm:space-y-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
            Advanced Defence &amp; Unmanned Systems
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-200/85 max-w-xl mx-auto leading-relaxed drop-shadow">
            Development and integration of authorised defence, security, surveillance, unmanned, and special mission technologies.
          </p>
        </div>

        {/* 2. Padded, Rounded Platform Card Display */}
        <div className="relative w-full h-[65vh] sm:h-[72vh] min-h-[500px] sm:min-h-[580px] max-h-[740px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-white/15 group">
          
          {/* Background Platform Images */}
          {PLATFORMS_LIST.map((platform, idx) => (
            <div
              key={platform.id}
              className={`absolute inset-0 w-full h-full bg-cover bg-center sm:bg-[center_35%] lg:bg-center transition-all duration-1000 ease-in-out ${
                idx === activeIdx ? 'opacity-100 scale-100 z-0' : 'opacity-0 scale-105 pointer-events-none'
              }`}
              style={{
                backgroundImage: `url('${platform.image}')`,
              }}
            >
              {/* Vignettes to keep typography readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
            </div>
          ))}

          {/* Card Content Overlay at bottom */}
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end z-10 text-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
              
              <div className="space-y-2 max-w-xl">
                <span className="text-[11px] sm:text-xs font-mono text-[#38bdf8] font-bold tracking-wider uppercase block">
                  {currentPlatform.role}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
                  {currentPlatform.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed max-w-lg hidden sm:block drop-shadow">
                  {currentPlatform.desc}
                </p>

                {/* Pagination Dots Indicator */}
                <div className="flex items-center space-x-2 pt-2">
                  {PLATFORMS_LIST.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIdx === i ? 'w-8 bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]' : 'w-2 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to platform ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                {onSelectPlatform && (
                  <button
                    onClick={() => onSelectPlatform(currentPlatform)}
                    className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider uppercase transition-all backdrop-blur-sm whitespace-nowrap"
                  >
                    Specifications
                  </button>
                )}
                <button
                  onClick={onOpenGallery || onOpenContact}
                  className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wider uppercase transition-all hover:scale-105 shadow-xl shadow-blue-500/25 whitespace-nowrap"
                >
                  Discover More
                </button>
              </div>

            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 opacity-80 hover:opacity-100 shadow-xl"
            aria-label="Previous platform"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 opacity-80 hover:opacity-100 shadow-xl"
            aria-label="Next platform"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
}
