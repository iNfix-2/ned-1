import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// SpaceX-style full-width slideshow: one image per slide with text on the left,
// side arrows, dots, 6s autoplay (paused on hover) and swipe on touch screens.
// slides: [{ id, title, text, points?, image }]
export default function FullBleedSlideshow({ slides, label }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [isPaused, slides.length]);

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) (delta < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <section
      className="relative h-[620px] sm:h-[720px] w-full overflow-hidden bg-[#010811]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label={label}
    >
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          aria-hidden={i !== index}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${s.image}')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#010811]/95 via-[#010811]/65 to-transparent" />
          <div className="relative z-10 h-full max-w-6xl mx-auto px-14 sm:px-20 flex items-center">
            <div className="max-w-md space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight leading-[1.05] text-white">{s.title}</h2>
              <p className="text-sm text-slate-300 font-light leading-relaxed">{s.text}</p>
              {s.points && (
                <ul className="pt-2 divide-y divide-white/15 border-y border-white/15">
                  {s.points.map((pt) => (
                    <li key={pt} className="py-2.5 text-[11px] uppercase tracking-wider text-slate-200">{pt}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}

      <button onClick={prev} className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 text-white/80 hover:text-white" aria-label="Previous slide">
        <ChevronLeft className="w-7 h-7" />
      </button>
      <button onClick={next} className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 text-white/80 hover:text-white" aria-label="Next slide">
        <ChevronRight className="w-7 h-7" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-white scale-125' : 'bg-white/35 hover:bg-white/70'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
