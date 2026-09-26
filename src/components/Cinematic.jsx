import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavHandlers } from '../navContext';
import useReducedMotion from '../useReducedMotion';

// Shared building blocks for the full-bleed, SpaceX-style pages (Missions, Nethawk Labs)

export function OutlineButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center gap-2 px-6 py-3 border border-white/70 text-white text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-300"
    >
      <span>{children}</span>
      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

// Fades its children up the first time they scroll into view (`delay` in ms staggers siblings)
export function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(reducedMotion);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) { setVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
}

// Film title-card reveal: each line of a heading rises from behind a mask, one after another.
// `lines` is an array of strings; the heading tag and classes are passed through.
export function TitleReveal({ as: Tag = 'h1', lines, className = '', startDelay = 150, step = 130 }) {
  return (
    <Tag className={className} aria-label={lines.join(' ')}>
      {lines.map((line, i) => (
        <span key={i} className="mask-line" aria-hidden="true">
          <span style={{ '--d': `${startDelay + i * step}ms` }}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

// Gentle parallax: the photo drifts slower than the page while its section is on screen
function useParallax(strength = 0.08) {
  const sectionRef = useRef(null);
  const layerRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const layer = layerRef.current;
    if (!section || !layer || reducedMotion) return;
    let frame = 0;
    let onScreen = false;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -strength;
      layer.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.18)`;
    };
    const onScroll = () => { if (onScreen && !frame) frame = requestAnimationFrame(update); };
    const observer = new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; if (onScreen) onScroll(); });
    observer.observe(section);
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); };
  }, [strength, reducedMotion]);

  return { sectionRef, layerRef };
}

// Full-screen image panel with copy on the left or right (copy sits at the bottom on mobile)
export function CinematicPanel({ image, align = 'left', children }) {
  const isRight = align === 'right';
  const { sectionRef, layerRef } = useParallax();
  return (
    <section ref={sectionRef} className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <div ref={layerRef} className="absolute inset-0 bg-cover bg-center will-change-transform scale-[1.18]" style={{ backgroundImage: `url('${image}')` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 md:hidden" />
      <div
        className={`absolute inset-0 hidden md:block ${
          isRight ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
        } from-black/85 via-black/40 to-transparent`}
      />
      <div
        className={`relative z-10 h-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 flex items-end md:items-center pb-20 md:pb-0 ${
          isRight ? 'md:justify-end' : 'md:justify-start'
        }`}
      >
        <Reveal className="max-w-md space-y-5">{children}</Reveal>
      </div>
    </section>
  );
}

export function MinimalFooter(props) {
  const { onNavigateHome, onNavigateWhyUs, onNavigateNews, onNavigateCareers, onNavigateContact, onOpenPolicy } = useNavHandlers(props);
  const links = [
    ['Home', onNavigateHome],
    ['Why Us', onNavigateWhyUs],
    ['Careers', onNavigateCareers],
    ['News', onNavigateNews],
    ['Contact', onNavigateContact],
    ['Privacy Policy', onOpenPolicy && (() => onOpenPolicy('privacy'))],
  ].filter(([, handler]) => handler);

  return (
    <footer className="bg-[#000000] border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 py-8 flex flex-col md:flex-row items-center justify-between gap-5 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/60">
        <span>© {new Date().getFullYear()} Nethawk Solutions</span>
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {links.map(([label, handler]) => (
            <button key={label} onClick={handler} className="hover:text-white transition-colors uppercase">{label}</button>
          ))}
        </nav>
      </div>
    </footer>
  );
}
