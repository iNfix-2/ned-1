import React from 'react';

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-[#070d14]">
      {/* Background Video from Assets */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/assets/video/nethawk-hero.mp4" type="video/mp4" />
          <source src="/assets/images/video/nethawk-hero.mp4" type="video/mp4" />
        </video>
        {/* Gradients to ensure text readability and maintain cinematic mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1722] via-black/40 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0d1722]"></div>
      </div>

      {/* Center Content from Document */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-md">
          Nethawk Solutions Securing Africa
        </h1>
        
        <div className="space-y-2 max-w-2xl mx-auto">
          <p className="text-sm sm:text-base font-mono text-[#38bdf8] font-bold tracking-wider uppercase">
            Technology. Intelligence. Capability.
          </p>
          <p className="text-sm sm:text-base text-slate-200/90 font-normal drop-shadow leading-relaxed">
            Delivering integrated digital, engineering, automation, security, and defence technology capabilities.
          </p>
        </div>

        {/* Frosted Translucent Pill Button */}
        <div className="pt-6">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center px-8 py-3 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-xl text-white text-xs font-medium tracking-wide border border-white/30 transition-all hover:scale-105 shadow-2xl"
          >
            Download Capability Document
          </button>
        </div>
      </div>
    </section>
  );
}
