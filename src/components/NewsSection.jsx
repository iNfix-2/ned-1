import React, { useRef } from 'react';
import { NEWS_ARTICLES } from '../data/tekeverContent';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function NewsSection({ onOpenContact }) {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.service-card')?.offsetWidth || 340;
      const scrollAmount = direction === 'left' ? -cardWidth - 20 : cardWidth + 20;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="news"
      className="relative min-h-[85vh] lg:min-h-screen py-16 sm:py-24 bg-gradient-to-b from-[#020e1c] via-[#041427] to-[#010813] overflow-hidden flex flex-col justify-center"
    >
      <div className="w-full max-w-[1920px] mx-auto space-y-6 sm:space-y-8">
        
        {/* Header Row: Big 'News' Title + Circular Navigation Arrows */}
        <div className="flex items-center justify-between px-6 sm:px-12">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-300/40 tracking-tight select-none">
            News
          </h2>

          {/* Top-Right Circular Navigation Buttons (← and →) */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleScroll('left')}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 backdrop-blur-xl border border-white/15 text-white flex items-center justify-center transition-all shadow-lg"
              aria-label="Previous news"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-200" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 backdrop-blur-xl border border-white/15 text-white flex items-center justify-center transition-all shadow-lg"
              aria-label="Next news"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-200" />
            </button>
          </div>
        </div>

        {/* Horizontal Snapping Carousel Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-2 scrollbar-none px-6 sm:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {NEWS_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="service-card snap-center shrink-0 w-[82vw] sm:w-[360px] md:w-[400px] lg:w-[420px] h-[62vh] min-h-[460px] max-h-[580px] rounded-[32px] sm:rounded-[36px] overflow-hidden relative border border-white/15 shadow-2xl group cursor-pointer flex flex-col justify-end p-6 sm:p-8 bg-[#020710] select-none transition-transform hover:-translate-y-1 duration-300"
              onClick={onOpenContact}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('${article.image}')`,
                }}
              >
                {/* Vignette Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10"></div>
              </div>

              {/* Card Story Content Overlay */}
              <div className="relative z-10 space-y-3 text-left">
                {/* Date / Category Badge */}
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300/80 font-normal">
                  <span className="text-[#38bdf8] font-mono font-semibold text-[11px] sm:text-xs uppercase tracking-wider">{article.category}</span>
                  <span className="text-slate-400">•</span>
                  <span>{article.date}</span>
                </div>

                {/* News Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug group-hover:text-slate-100 transition-colors drop-shadow">
                  {article.title}
                </h3>

                {/* Short Summary Description */}
                <p className="text-xs sm:text-sm text-slate-300/90 line-clamp-2 leading-relaxed font-normal">
                  {article.summary}
                </p>

                {/* Circular Frosted Action Button with Right Arrow */}
                <div className="pt-2">
                  <div className="w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-xl border border-white/25 text-white flex items-center justify-center transition-all group-hover:scale-110 shadow-xl group-hover:border-white/40">
                    <ArrowRight className="w-5 h-5 text-white" />
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
