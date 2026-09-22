import React from 'react';

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video from Assets - Pure & Vivid without any dark/color overlays */}
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

        {/* Frosted Translucent Pill Button */}
        <div className="pt-4">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center px-8 py-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white text-xs font-medium tracking-wide border border-white/30 transition-all hover:scale-105 shadow-2xl"
          >
            Download Capability Document
          </button>
        </div>
      </div>
    </section>
  );
}
