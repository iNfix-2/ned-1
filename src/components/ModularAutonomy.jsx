import React, { useState } from 'react';
import { FOUR_PILLARS } from '../data/tekeverContent';
import { Layers, Cpu, Shield, Radio, Check, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ModularAutonomy({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('ar5');

  return (
    <section className="py-24 bg-[#030811] text-white relative border-t border-white/10">
      
      {/* 1. Header with glowing blue title */}
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4 mb-16">
        <h2 className="text-3xl sm:text-5xl font-black tracking-widest text-blue-500 uppercase drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]">
          NETHAWK
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-normal tracking-wide">
          Explore the next generation of modular autonomy.
        </p>
      </div>

      {/* 2. Horizontal Category Strip */}
      <div className="border-y border-white/10 py-3 mb-16 overflow-x-auto">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 text-xs font-mono text-slate-400 tracking-widest uppercase min-w-[600px]">
          <span className="text-white flex items-center"><span className="w-1 h-1 bg-blue-500 mr-2"></span>Mission Ready</span>
          <span className="text-slate-600">/</span>
          <span className="hover:text-white transition-colors">Combat Proven</span>
          <span className="text-slate-600">/</span>
          <span className="text-[#38bdf8] font-bold">Modular</span>
          <span className="text-slate-600">/</span>
          <span className="hover:text-white transition-colors">Mission Ready</span>
          <span className="text-slate-600">/</span>
          <span className="hover:text-white transition-colors">Combat Proven</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-28">

        {/* 3. "One System, Multiple Aircraft" Featured Card */}
        <div className="relative w-full aspect-[16/8] sm:aspect-[21/9] max-h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img loading="lazy" decoding="async"
            src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1600&q=80"
            alt="One System Multiple Aircraft"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-8 left-8 sm:left-12 max-w-lg text-left space-y-2">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              One System,<br />Multiple Aircraft
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Common avionics, ground station architecture, and AI autonomy software shared across the entire fleet to reduce operational training and logistics.
            </p>
          </div>
        </div>

        {/* 4. "Your mission, your configuration" Exploded Blue CAD Wireframe */}
        <div className="space-y-12">
          <div className="text-left space-y-2">
            <span className="text-xs font-mono text-[#38bdf8] font-bold tracking-wider uppercase block">
              Modular Architecture
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Your mission, your configuration
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Exploded 3D Neon Blue Wireframe Schematic */}
            <div className="lg:col-span-8 bg-[#01060d] border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden flex items-center justify-center min-h-[380px]">
              {/* Subtle background tech grid */}
              <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>

              {/* SVG Exploded CAD Blueprint in Neon Blue */}
              <svg className="w-full max-w-xl h-auto" viewBox="0 0 540 320" fill="none">
                {/* Exploded Left Wing */}
                <g className="transform -translate-y-4 -translate-x-6">
                  <path d="M 60 110 L 220 140 L 210 160 L 50 125 Z" stroke="#2563eb" strokeWidth="1.8" fill="#2563eb" fillOpacity="0.08" />
                  <text x="70" y="100" fill="#38bdf8" fontSize="9" fontFamily="monospace">PORT WING // DETACHABLE</text>
                  <line x1="120" y1="105" x2="120" y2="120" stroke="#2563eb" strokeWidth="1" strokeDasharray="2 2" />
                </g>

                {/* Exploded Right Wing */}
                <g className="transform -translate-y-4 translate-x-6">
                  <path d="M 320 140 L 480 110 L 490 125 L 330 160 Z" stroke="#2563eb" strokeWidth="1.8" fill="#2563eb" fillOpacity="0.08" />
                  <text x="370" y="100" fill="#38bdf8" fontSize="9" fontFamily="monospace">STARBOARD WING</text>
                  <line x1="420" y1="105" x2="420" y2="120" stroke="#2563eb" strokeWidth="1" strokeDasharray="2 2" />
                </g>

                {/* Central Fuselage Core */}
                <g>
                  <path d="M 270 40 L 285 100 L 285 240 L 270 270 L 255 240 L 255 100 Z" stroke="#2563eb" strokeWidth="2.2" fill="#2563eb" fillOpacity="0.15" />
                  <text x="270" y="30" fill="#FFFFFF" fontSize="10" fontFamily="monospace" textAnchor="middle">FUSELAGE CORE</text>
                </g>

                {/* Exploded Nose Sensor Bay / EO/IR Gimbal */}
                <g className="transform -translate-y-8">
                  <ellipse cx="270" cy="30" rx="14" ry="14" stroke="#38bdf8" strokeWidth="1.8" fill="#38bdf8" fillOpacity="0.1" />
                  <circle cx="270" cy="30" r="5" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="270" y="8" fill="#38bdf8" fontSize="9" fontFamily="monospace" textAnchor="middle">EO/MWIR GYRO GIMBAL</text>
                  <line x1="270" y1="18" x2="270" y2="40" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
                </g>

                {/* Exploded V-Tail Assembly */}
                <g className="transform translate-y-6">
                  <path d="M 270 250 L 330 300 L 320 305 L 270 265 L 220 305 L 210 300 Z" stroke="#2563eb" strokeWidth="1.8" fill="#2563eb" fillOpacity="0.1" />
                  <text x="270" y="318" fill="#38bdf8" fontSize="9" fontFamily="monospace" textAnchor="middle">COMPOSITE V-TAIL</text>
                </g>

                {/* Exploded SATCOM Dome */}
                <g className="transform -translate-y-2 translate-x-12">
                  <rect x="295" y="85" width="25" height="12" rx="4" stroke="#FFFFFF" strokeWidth="1.5" fill="#FFFFFF" fillOpacity="0.1" />
                  <text x="325" y="93" fill="#FFFFFF" fontSize="8" fontFamily="monospace">SATCOM BVLOS</text>
                </g>

                {/* Exploded Synthetic Aperture Radar (SAR) Pod */}
                <g className="transform translate-y-2 -translate-x-12">
                  <rect x="220" y="170" width="24" height="14" rx="2" stroke="#2563eb" strokeWidth="1.5" fill="#2563eb" fillOpacity="0.2" />
                  <text x="140" y="180" fill="#38bdf8" fontSize="8" fontFamily="monospace">SAR RADAR POD</text>
                  <line x1="205" y1="178" x2="220" y2="178" stroke="#2563eb" strokeWidth="1" />
                </g>
              </svg>

              <div className="absolute bottom-4 left-6 text-[10px] font-mono text-slate-500">
                EXPLODED VIEW // 20-MIN FIELD MODULAR ASSEMBLY
              </div>
            </div>

            {/* Right: Technical Specification Dossier */}
            <div className="lg:col-span-4 bg-[#01060d] border border-white/10 rounded-3xl p-8 space-y-6 text-left">
              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-400 uppercase">PLATFORM CLASS</div>
                <div className="text-2xl font-bold text-white">AR5 MALE / AR3 UAS</div>
              </div>

              <div className="space-y-4 border-t border-white/10 pt-4 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">MAX TAKEOFF WEIGHT (MTOW)</span>
                  <span className="text-white font-bold">180 KG / 25 KG</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">WINGSPAN</span>
                  <span className="text-white font-bold">7.3 M / 4.0 M</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">MISSION ENDURANCE</span>
                  <span className="text-[#38bdf8] font-bold">20+ HOURS</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">PAYLOAD CAPACITY</span>
                  <span className="text-white font-bold">UP TO 50 KG</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">DATALINK PROTOCOL</span>
                  <span className="text-sky-400 font-bold">BVLOS SATCOM</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold font-mono uppercase tracking-wider transition-colors text-center"
                >
                  Configure Platform
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 5. "Flexibility in Four Pillars" */}
        <div className="space-y-12 text-center">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flexibility in Four Pillars
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FOUR_PILLARS.map((pillar, i) => (
              <div
                key={pillar.id}
                className="bg-[#01060d] border border-white/10 rounded-2xl p-8 text-center space-y-4 hover:border-blue-500/40 transition-colors group"
              >
                {/* Thin Line-Art Icon */}
                <div className="w-14 h-14 mx-auto flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {i === 0 && <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />}
                    {i === 1 && <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="3 3" />}
                    {i === 2 && <circle cx="12" cy="12" r="8" />}
                    {i === 3 && <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />}
                  </svg>
                </div>

                <h4 className="text-base font-bold text-white tracking-wide">
                  {pillar.title}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Hangar Gallery Showcase (Image 3) */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img loading="lazy" decoding="async"
                src="/assets/images/missions/nethawk-engineering-team.jpg"
                alt="Engineering and systems integration team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img loading="lazy" decoding="async"
                src="/assets/images/platforms/nethawk-vtol-isr.jpg"
                alt="Long-Endurance ISR UAS Platform"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* 7. "Engineered in Europe. Trusted worldwide." Banner */}
        <div className="py-16 text-center space-y-6 max-w-3xl mx-auto">
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered in Europe.<br />
            Trusted worldwide.
          </h3>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            From frontline defence to life-saving search and rescue, our autonomous systems are trusted by armed forces, coast guards, and governments across the globe.
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenContact}
              className="px-10 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold tracking-wider uppercase transition-all hover:scale-105 shadow-xl shadow-blue-500/25"
            >
              Contact Team
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
