import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Hero slideshow images (cycled like the NATI Academy hero carousel)
const HERO_SLIDES = [
  '/assets/images/defense/nethawk-tactical-uav.jpg',
  '/assets/images/missions/border-defense.jpg',
  '/assets/images/missions/critical-infrastructure.jpg',
  '/assets/images/manufacturing/nethawk-assembly-line.jpg',
  '/assets/images/missions/nethawk-command-center.jpg',
];

// Each image stays still for this long, then crossfades to the next
const SLIDE_INTERVAL_MS = 6000;

export default function Hero({ onOpenContact }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  // Bumped on manual navigation so the interval restarts and the chosen image gets a full turn
  const [timerKey, setTimerKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Progressively increase as user scrolls down from hero (0 at top, 1 at 350px)
      const progress = Math.min(1, Math.max(0, scrollY / 350));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((i) => (i + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [timerKey]);

  // Only fetch an image once it is showing or next in line, so the first load pulls one photo, not five
  const [loaded, setLoaded] = useState(() => new Set([0, 1]));
  useEffect(() => {
    setLoaded((prev) => {
      const next = (currentSlide + 1) % HERO_SLIDES.length;
      if (prev.has(currentSlide) && prev.has(next)) return prev;
      return new Set([...prev, currentSlide, next]);
    });
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide((index + HERO_SLIDES.length) % HERO_SLIDES.length);
    setTimerKey((k) => k + 1);
  };
  // Compute dynamic responsive bottom border radius (0px flat at top, curving up to 52px as user scrolls)
  const bottomRadius = Math.round(scrollProgress * 52);
  const buttonRadius = Math.round(24 + scrollProgress * 16);

  return (
    <section
      className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-black transition-all duration-200"
      style={{
        borderBottomLeftRadius: `${bottomRadius}px`,
        borderBottomRightRadius: `${bottomRadius}px`,
      }}
    >
      {/* Background Image Slideshow */}
      <div
        className="absolute inset-0 overflow-hidden transition-all duration-200"
        style={{
          borderBottomLeftRadius: `${bottomRadius}px`,
          borderBottomRightRadius: `${bottomRadius}px`,
        }}
      >
        {HERO_SLIDES.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={loaded.has(idx) ? { backgroundImage: `url('${src}')` } : undefined}
            aria-hidden={idx !== currentSlide}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Prev / Next Arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goToSlide(currentSlide - 1)}
        className="absolute left-4 sm:left-8 bottom-7 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 z-20 p-3 rounded-full glass-pill hover:bg-white/20 text-white transition-all"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goToSlide(currentSlide + 1)}
        className="absolute right-4 sm:right-8 bottom-7 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 z-20 p-3 rounded-full glass-pill hover:bg-white/20 text-white transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {HERO_SLIDES.map((src, idx) => (
          <button
            key={src}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => goToSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Center Content from Document */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
          Nethawk Solutions Securing Africa
        </h1>

        <div className="space-y-2 max-w-2xl mx-auto">
          <p className="text-sm sm:text-base text-white font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] leading-relaxed">
            Delivering integrated digital, engineering, automation, security, and defence technology capabilities.
          </p>
        </div>

        {/* Frosted Translucent Glass Pill Button with Responsive Scroll Border Radius */}
        <div className="pt-4">
          <a
            href="/assets/documents/nethawk-brochure.pdf"
            download="Nethawk-Solutions-Brochure.pdf"
            style={{
              borderRadius: `${buttonRadius}px`,
            }}
            className="inline-flex items-center px-8 py-3.5 glass-pill hover:bg-white/20 text-white text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
