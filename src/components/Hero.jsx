import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavHandlers } from '../navContext';

// Hero slideshow: each photo carries its own heading, write-up and call to action.
// `action` names a site navigation handler; `href` is used for downloads/links instead.
const HERO_SLIDES = [
  {
    image: '/assets/images/defense/nethawk-tactical-uav.jpg',
    title: 'Nethawk Solutions Securing Africa',
    text: 'Delivering integrated digital, engineering, automation, security, and defence technology capabilities.',
    cta: 'Download Brochure',
    href: '/assets/documents/nethawk-brochure.pdf',
    download: 'Nethawk-Solutions-Brochure.pdf',
  },
  {
    image: '/assets/images/missions/border-defense.jpg',
    title: 'Securing Borders from the Sky',
    text: 'Persistent day-and-night aerial surveillance that gives security forces early warning and a clear picture along borders, checkpoints and remote terrain.',
    cta: 'Explore Defence Tech',
    action: 'onNavigateDefenseTech',
  },
  {
    image: '/assets/images/missions/critical-infrastructure.jpg',
    title: 'Protecting Critical Infrastructure',
    text: 'Round-the-clock UAV monitoring and inspection of dams, substations, pipelines and power corridors, so operators can act before incidents become outages.',
    cta: 'Drone as a Service',
    action: 'onNavigateDAS',
  },
  {
    image: '/assets/images/manufacturing/nethawk-assembly-line.jpg',
    title: 'Engineered and Built in Nigeria',
    text: 'From composite airframes to avionics and final assembly, Nethawk Labs designs, manufactures and tests UAV systems at home, building sovereign capability and local talent.',
    cta: 'Explore Nethawk Labs',
    action: 'onNavigateManufacturing',
  },
  {
    image: '/assets/images/missions/nethawk-command-center.jpg',
    title: 'Command, Control & Intelligence',
    text: 'SkyGrid brings mission planning, live telemetry and aerial intelligence into one command picture, from the pilot in the field to the operations room.',
    cta: 'Discover SkyGrid',
    action: 'onNavigatePlatforms',
  },
];

// Each image stays still for this long, then crossfades to the next
const SLIDE_INTERVAL_MS = 6000;

export default function Hero(props) {
  const nav = useNavHandlers(props);
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
        {HERO_SLIDES.map(({ image: src }, idx) => (
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
        {HERO_SLIDES.map(({ image: src }, idx) => (
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

      {/* Per-slide heading, write-up and call to action; all stacked in one cell and crossfaded with the photos */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 grid">
        {HERO_SLIDES.map((slide, idx) => {
          const active = idx === currentSlide;
          const buttonClass = 'inline-flex items-center px-8 py-3.5 glass-pill hover:bg-white/20 text-white text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-2xl';
          return (
            <div
              key={slide.title}
              aria-hidden={!active}
              className={`[grid-area:1/1] self-center text-center space-y-6 transition-all duration-1000 ease-out ${
                active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              {idx === 0 ? (
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                  {slide.title}
                </h1>
              ) : (
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                  {slide.title}
                </h2>
              )}

              <p className="max-w-2xl mx-auto text-sm sm:text-base text-white font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] leading-relaxed">
                {slide.text}
              </p>

              {/* Frosted glass pill button with responsive scroll border radius */}
              <div className="pt-4">
                {slide.href ? (
                  <a
                    href={slide.href}
                    download={slide.download}
                    tabIndex={active ? 0 : -1}
                    style={{ borderRadius: `${buttonRadius}px` }}
                    className={buttonClass}
                  >
                    {slide.cta}
                  </a>
                ) : (
                  <button
                    type="button"
                    tabIndex={active ? 0 : -1}
                    onClick={() => (nav[slide.action] || nav.onOpenContact)?.()}
                    style={{ borderRadius: `${buttonRadius}px` }}
                    className={buttonClass}
                  >
                    {slide.cta}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
