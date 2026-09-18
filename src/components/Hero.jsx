import React from 'react';

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video from Assets */}
      <div className="absolute inset-0 overflow-hidden">
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
        {/* Clean, neutral dark gradient for text contrast without blue tint or grain */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
      </div>

      {/* Center Content from Document */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-md">
          Nethawk Solutions Securing Africa
        </h1>
        
        <div className="space-y-2 max-w-2xl mx-auto">
          <p className="text-sm sm:text-base text-slate-200/90 font-normal drop-shadow leading-relaxed">
            Delivering integrated digital, engineering, automation, security, and defence technology capabilities.
          </p>
        </div>
    </section>
  );
}
