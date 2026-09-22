import React, { useState } from 'react';
import { PLATFORMS_DATA } from '../data/content';
import { Plane, Check, ArrowRight, Shield, Activity, Cpu, Layers, Download } from 'lucide-react';

export default function Platforms({ onOpenContact }) {
  const [activePlatformIndex, setActivePlatformIndex] = useState(1); // Default to NH-5
  const platform = PLATFORMS_DATA[activePlatformIndex];
  const [activeSensor, setActiveSensor] = useState(0);

  return (
    <section id="platforms" className="py-24 bg-[#020E1C] bg-grid-pattern relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div>
            <div className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase mb-2 flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500"></span>
              <span>Tactical &amp; Strategic Fleet</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Uncrewed Aerial <span className="text-[#38bdf8]">Platforms.</span>
            </h2>
          </div>
          <div className="text-slate-400 text-sm max-w-md font-mono">
            Modular, satellite-linked, all-weather uncrewed systems engineered for complex oceanic and land operations.
          </div>
        </div>

        {/* Platform Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {PLATFORMS_DATA.map((item, idx) => {
            const isSelected = idx === activePlatformIndex;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActivePlatformIndex(idx);
                  setActiveSensor(0);
                }}
                className={`text-left p-6 transition-all duration-300 border ${
                  isSelected
                    ? 'bg-[#05152b] border-blue-500 shadow-lg shadow-blue-500/10'
                    : 'bg-[#031020] border-white/10 hover:border-white/30 hover:bg-[#041225]'
                } relative`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500"></div>
                )}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-[#38bdf8] uppercase font-bold tracking-wider">
                    {item.badge}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-white/10 text-slate-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="text-2xl font-black text-white font-mono tracking-tight mb-2">
                  {item.name}
                </div>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {item.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Platform Detail Card */}
        <div className="bg-[#031020] border border-white/10 p-8 sm:p-12 tech-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Platform Overview & Technical Specs */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div>
                <div className="inline-block text-xs font-mono px-2 py-1 bg-white/5 border border-white/10 text-slate-300 mb-3">
                  SPECIFICATION DOSSIER // {platform.name}
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                  {platform.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {platform.description}
                </p>
              </div>

              {/* Specs Table Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
                <div className="bg-[#020E1C] p-3 border border-white/5">
                  <span className="text-slate-400 text-[10px] uppercase block">Endurance</span>
                  <span className="text-white text-base font-bold mt-1 block">{platform.specs.endurance}</span>
                </div>
                <div className="bg-[#020E1C] p-3 border border-white/5">
                  <span className="text-slate-400 text-[10px] uppercase block">Wingspan</span>
                  <span className="text-white text-base font-bold mt-1 block">{platform.specs.wingspan}</span>
                </div>
                <div className="bg-[#020E1C] p-3 border border-white/5">
                  <span className="text-slate-400 text-[10px] uppercase block">Max Takeoff Weight</span>
                  <span className="text-white text-base font-bold mt-1 block">{platform.specs.mtow}</span>
                </div>
                <div className="bg-[#020E1C] p-3 border border-white/5">
                  <span className="text-slate-400 text-[10px] uppercase block">Payload Capacity</span>
                  <span className="text-white text-base font-bold mt-1 block">{platform.specs.payload}</span>
                </div>
                <div className="bg-[#020E1C] p-3 border border-white/5">
                  <span className="text-slate-400 text-[10px] uppercase block">Operational Ceiling</span>
                  <span className="text-white text-base font-bold mt-1 block">{platform.specs.ceiling}</span>
                </div>
                <div className="bg-[#020E1C] p-3 border border-white/5">
                  <span className="text-slate-400 text-[10px] uppercase block">Launch Mode</span>
                  <span className="text-white text-xs font-bold mt-1 block">{platform.specs.launch}</span>
                </div>
              </div>

              {/* Key Capabilities */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-[#38bdf8] uppercase font-semibold">
                  Key Operational Capabilities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {platform.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center space-x-2 transition-colors rounded-full"
                >
                  <span>Request Operational Brief</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider flex items-center space-x-2 transition-colors rounded-full"
                >
                  <Download className="w-4 h-4 text-blue-400" />
                  <span>Download Spec Sheet</span>
                </button>
              </div>
            </div>

            {/* Right: Technical Blueprint & Interactive Sensor Payload Explorer */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Blueprint Graphic Box */}
              <div className="w-full aspect-[4/3] bg-[#020E1C] border border-white/10 p-6 relative flex flex-col justify-between overflow-hidden tech-border">
                {/* HUD Overlay markings */}
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                  <span>AIRFRAME SCHEMATIC // CAD v4.2</span>
                  <span className="text-[#38bdf8]">ACTIVE AVIONICS: YES</span>
                </div>

                {/* SVG UAS Blueprint Rendering */}
                <div className="my-auto py-6 flex items-center justify-center relative">
                  <svg className="w-full max-w-[380px] text-white opacity-80" viewBox="0 0 400 240" fill="none" stroke="currentColor">
                    {/* Fuselage */}
                    <path d="M 200 20 L 208 80 L 208 190 L 200 220 L 192 190 L 192 80 Z" strokeWidth="2" stroke="#FFFFFF" fill="#051427" />
                    {/* Cockpit nose / payload dome */}
                    <ellipse cx="200" cy="35" rx="6" ry="12" stroke="#38bdf8" strokeWidth="1.5" fill="#38bdf8" fillOpacity="0.2" />
                    {/* Main Wings */}
                    <path d="M 208 90 L 390 120 L 388 135 L 208 125 Z" strokeWidth="2" stroke="#FFFFFF" fill="#041223" />
                    <path d="M 192 90 L 10 120 L 12 135 L 192 125 Z" strokeWidth="2" stroke="#FFFFFF" fill="#041223" />
                    {/* Winglets */}
                    <path d="M 390 120 L 392 105 L 388 135" strokeWidth="1.5" stroke="#38bdf8" />
                    <path d="M 10 120 L 8 105 L 12 135" strokeWidth="1.5" stroke="#38bdf8" />
                    {/* V-Tail or Inverted V-tail */}
                    <path d="M 200 190 L 240 230 L 235 235 L 200 205 L 165 235 L 160 230 Z" strokeWidth="2" stroke="#FFFFFF" fill="#051427" />
                    {/* Propeller or Pusher Engine */}
                    <ellipse cx="200" cy="223" rx="14" ry="2" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="3 2" />
                    
                    {/* Dimension lines */}
                    <line x1="20" y1="150" x2="380" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                    <text x="200" y="165" fill="#8B9BB4" fontSize="10" textAnchor="middle" fontFamily="monospace">WINGSPAN {platform.specs.wingspan}</text>

                    {/* Sensor callout indicator */}
                    <circle cx="200" cy="40" r="10" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" className="animate-spin" />
                    <line x1="200" y1="40" x2="260" y2="25" stroke="#38bdf8" strokeWidth="1" />
                    <text x="265" y="28" fill="#38bdf8" fontSize="9" fontFamily="monospace">PRIMARY SENSOR BAY</text>
                  </svg>
                </div>

                {/* Bottom telemetry indicators */}
                <div className="grid grid-cols-3 gap-2 text-[10px] font-mono border-t border-white/10 pt-3 text-slate-400">
                  <div>RANGE: {platform.specs.range}</div>
                  <div className="text-center">CEILING: {platform.specs.ceiling}</div>
                  <div className="text-right text-emerald-400">READY TO DEPLOY</div>
                </div>
              </div>

              {/* Payload Options Switcher */}
              <div className="bg-[#020E1C] border border-white/10 p-4">
                <div className="text-xs font-mono text-slate-400 uppercase mb-3 flex items-center justify-between">
                  <span>SELECT MODULAR PAYLOAD CONFIGURATION</span>
                  <span className="text-[#38bdf8]">SWAPPABLE &lt; 20 MIN</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {platform.payloadOptions.map((payload, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSensor(idx)}
                      className={`px-3 py-1.5 text-xs font-mono border transition-all ${
                        activeSensor === idx
                          ? 'bg-blue-600/20 border-blue-500 text-white font-bold'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {payload}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
