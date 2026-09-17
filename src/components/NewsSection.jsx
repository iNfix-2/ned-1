import React, { useRef } from 'react';
import { CORE_SERVICES } from '../data/tekeverContent';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function NewsSection({ onOpenContact }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 px-6 sm:px-12 bg-[#08121e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Row: Big 'Services' Title + Circular Nav Arrows */}
        <div className="flex items-end justify-between">
          <h2 className="text-5xl sm:text-7xl font-bold text-slate-300/35 tracking-tight select-none">
            Services
          </h2>

          <div className="flex items-center space-x-3 pb-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
              aria-label="Previous services"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
              aria-label="Next services"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Tall Rounded Service Cards Grid */}
        <div
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4 scrollbar-none"
        >
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative h-[440px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-end p-6 cursor-pointer bg-[#020710] flex-shrink-0"
              onClick={onOpenContact}
            >
              {/* Card Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${service.image}')`,
                }}
              >
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25"></div>
              </div>

              {/* Story Content Overlay */}
              <div className="relative z-10 space-y-3 text-left">
                <div className="text-[10px] font-mono text-[#38bdf8] font-bold uppercase tracking-wider">
                  {service.category}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#38bdf8] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {service.summary}
                </p>

                {/* Circular Arrow Button at bottom */}
                <div className="pt-2">
                  <div className="w-9 h-9 rounded-full bg-white/15 group-hover:bg-blue-600 border border-white/20 group-hover:border-blue-600 text-white flex items-center justify-center transition-all group-hover:translate-x-1 shadow-lg">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
