import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavHandlers } from '../navContext';

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

// Fades its children up the first time they scroll into view
export function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
}

// Full-screen image panel with copy on the left or right (copy sits at the bottom on mobile)
export function CinematicPanel({ image, align = 'left', children }) {
  const isRight = align === 'right';
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />
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
    <footer className="bg-black border-t border-white/10">
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
