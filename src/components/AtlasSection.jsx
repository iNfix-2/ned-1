import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    image: '/assets/images/skygrid/skygrid-operator.webp',
    title: 'INTELLIGENT SYSTEMS',
    subtitle: 'Turning Data into Useful Intelligence',
    description: 'Machine learning, computer vision, automated data processing, and predictive decision-support systems.',
    cta: 'Explore AI & Data'
  },
  {
    image: '/assets/images/skygrid/skygrid-map.webp',
    title: 'SKYGRID GCS',
    subtitle: 'Tactical Command & Real-Time Geospatial C2',
    description: 'Autonomous waypoint flight plans, precision corridor inspection, high-resolution GIS integration, and BVLOS control.',
    cta: 'Explore GCS & Missions'
  },
  {
    image: '/assets/images/skygrid/skygrid-dashboard.webp',
    title: 'MISSION OPERATIONS',
    subtitle: 'Fleet Management & Tactical Telemetry',
    description: 'Live aircraft readiness, pilot dispatch, multi-payload sensor telemetry, and situational awareness dashboards.',
    cta: 'View Platform Capabilities'
  }
];

export default function AtlasSection({ onOpenContact }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section id="ai-systems" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#020e1c] via-[#031326] to-[#020e1c] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Massive Rounded Slideshow Banner Card */}
        <div 
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[460px] rounded-[36px] overflow-hidden border border-white/10 shadow-2xl group flex items-center justify-center text-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background Images with smooth fade transition */}
          {SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
                idx === currentIndex ? 'opacity-100 scale-100 z-0' : 'opacity-0 scale-105 pointer-events-none'
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              {/* Gradients to keep typography readable and maintain high-tech atmosphere */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
            </div>
          ))}

          {/* Central AI, Data & Intelligent Systems Typography */}
          <div className="relative z-10 space-y-4 px-6 max-w-2xl transition-all duration-500">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-widest drop-shadow-2xl">
              {SLIDES[currentIndex].title}
            </h2>
            
            <p className="text-xs sm:text-sm font-mono text-[#38bdf8] tracking-widest uppercase font-semibold drop-shadow">
              {SLIDES[currentIndex].subtitle}
            </p>

            <p className="text-xs sm:text-sm text-slate-200/90 max-w-lg mx-auto drop-shadow leading-relaxed hidden sm:block">
              {SLIDES[currentIndex].description}
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenContact}
                className="px-8 py-3 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-xl text-white text-xs font-medium tracking-wide border border-white/25 transition-all hover:scale-105 shadow-xl"
              >
                {SLIDES[currentIndex].cta}
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-110 opacity-70 hover:opacity-100"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-110 opacity-70 hover:opacity-100"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2.5">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
