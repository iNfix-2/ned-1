import React, { useState, useEffect } from 'react';

export default function Hero({ onOpenContact }) {
  const [scrollProgress, setScrollProgress] = useState(0);

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
      {/* Background Video from Assets - Pure & Vivid without any dark/color overlays */}
      <div 
        className="absolute inset-0 overflow-hidden transition-all duration-200"
        style={{
          borderBottomLeftRadius: `${bottomRadius}px`,
          borderBottomRightRadius: `${bottomRadius}px`,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/video/nethawk-hero.mp4" type="video/mp4" />
          <source src="/assets/images/video/nethawk-hero.mp4" type="video/mp4" />
        </video>
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

        {/* Frosted Translucent Pill Button with Responsive Scroll Border Radius */}
        <div className="pt-4">
          <button
            onClick={onOpenContact}
            style={{
              borderRadius: `${buttonRadius}px`,
            }}
            className="inline-flex items-center px-8 py-3 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white text-xs font-medium tracking-wide border border-white/30 transition-all hover:scale-105 shadow-2xl"
          >
            Download Capability Document
          </button>
        </div>
      </div>
    </section>
  );
}
