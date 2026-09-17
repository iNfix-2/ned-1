import React, { useState, useEffect } from 'react';
import { ATLAS_FEATURES } from '../data/content';
import { Cpu, Eye, Network, Cloud, Radio, Crosshair, Play, CheckCircle, ShieldAlert } from 'lucide-react';

export default function AtlasAI({ onOpenContact }) {
  const [activeMode, setActiveMode] = useState('optical'); // optical, thermal, sar
  const [detectionConfidence, setDetectionConfidence] = useState(98.7);
  const [trackedVessels, setTrackedVessels] = useState(14);

  useEffect(() => {
    const interval = setInterval(() => {
      setDetectionConfidence(Number((97.5 + Math.random() * 2.2).toFixed(1)));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="atlas" className="py-24 bg-[#020E1C] bg-grid-pattern border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-600/15 border border-blue-500/40 text-[#38bdf8] font-mono text-xs uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>ATLAS Autonomous Intelligence Suite</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Real-Time Intelligence <br />
            <span className="text-[#38bdf8]">As-a-Service.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            ATLAS transforms massive raw sensor streams into actionable battlefield awareness. Edge AI computer vision, multispectral sensor fusion, and autonomous swarm command.
          </p>
        </div>

        {/* Live Simulation Display Stage */}
        <div className="bg-[#031122] border border-white/10 tech-border p-6 sm:p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Feed Simulation Window */}
            <div className="lg:col-span-8 bg-[#010811] border border-white/10 relative aspect-[16/9] overflow-hidden flex flex-col justify-between p-4 tech-border">
              
              {/* Background simulated terrain / ocean canvas */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                activeMode === 'thermal' 
                  ? 'bg-gradient-to-tr from-[#020713] via-[#051833] to-[#0d2f5a]' 
                  : activeMode === 'sar'
                  ? 'bg-gradient-to-b from-[#021008] via-[#041a0d] to-[#010a05]'
                  : 'bg-gradient-to-tr from-[#010814] via-[#041427] to-[#07213d]'
              }`}>
                {/* Wave / scan lines */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
              </div>

              {/* Top HUD Feed Banner */}
              <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-slate-300 bg-[#020E1C]/80 px-3 py-1.5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center text-[#38bdf8]">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping mr-2"></span>
                    SENSOR FEED // {activeMode.toUpperCase()}
                  </span>
                  <span className="text-slate-600">|</span>
                  <span>CAM: 4K EO/MWIR DUAL GIMBAL</span>
                </div>
                <div className="flex items-center space-x-3 text-emerald-400">
                  <span>AI EDGE INFERENCE: 7.2ms</span>
                  <span>CONFIDENCE: {detectionConfidence}%</span>
                </div>
              </div>

              {/* Center Target Detection Bounding Boxes */}
              <div className="relative z-10 my-auto flex items-center justify-center p-8">
                {/* Target Box 1: Vessel */}
                <div className="relative w-56 h-32 border-2 border-blue-500 bg-blue-600/10 p-2 flex flex-col justify-between shadow-lg shadow-blue-500/20 animate-pulse">
                  {/* Corner brackets */}
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-white"></div>
                  <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-white"></div>
                  <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-white"></div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-white"></div>

                  <div className="bg-blue-600 text-white text-[10px] font-mono px-1.5 py-0.5 font-bold uppercase inline-block self-start">
                    TARGET #01: CARGO VESSEL (DARK)
                  </div>
                  <div className="font-mono text-[10px] text-white space-y-0.5 bg-[#020E1C]/80 p-1 border border-white/10">
                    <div>AIS: OFF // SAR CORRELATION: POSITIVE</div>
                    <div>EST. SPEED: 14.8 KTS // COG: 212°</div>
                    <div className="text-[#38bdf8]">FLAG: ANOMALOUS REGISTRY</div>
                  </div>
                </div>

                {/* Target Box 2: Speedboat nearby */}
                <div className="relative w-36 h-24 border border-emerald-400 bg-emerald-400/10 p-1.5 ml-8 flex flex-col justify-between">
                  <div className="bg-emerald-500 text-black text-[9px] font-mono px-1 font-bold uppercase self-start">
                    TARGET #02: PATROL VESSEL
                  </div>
                  <div className="font-mono text-[9px] text-emerald-300">
                    AIS: FRIENDLY // MMSI: 263884000
                  </div>
                </div>
              </div>

              {/* Bottom Sensor Mode Switcher Bar */}
              <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3">
                <div className="flex space-x-2">
                  <button
                    onClick={() => setActiveMode('optical')}
                    className={`px-3 py-1 font-mono text-xs uppercase border transition-colors ${
                      activeMode === 'optical'
                        ? 'bg-blue-600 border-blue-500 text-white font-bold'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    Optical Zoom (EO)
                  </button>
                  <button
                    onClick={() => setActiveMode('thermal')}
                    className={`px-3 py-1 font-mono text-xs uppercase border transition-colors ${
                      activeMode === 'thermal'
                        ? 'bg-blue-600 border-blue-500 text-white font-bold'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    Thermal MWIR
                  </button>
                  <button
                    onClick={() => setActiveMode('sar')}
                    className={`px-3 py-1 font-mono text-xs uppercase border transition-colors ${
                      activeMode === 'sar'
                        ? 'bg-blue-600 border-blue-500 text-white font-bold'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    Synthetic Aperture (SAR)
                  </button>
                </div>

                <div className="font-mono text-[10px] text-slate-400 hidden sm:block">
                  GPS: 38°42'54"N 09°08'22"W // ALT 14,200 FT
                </div>
              </div>

            </div>

            {/* Right Telemetry & AI Stream Stats */}
            <div className="lg:col-span-4 space-y-6 text-left">
              <div>
                <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider font-semibold">
                  LIVE COGNITIVE AGENT STATUS
                </div>
                <h3 className="text-xl font-bold text-white mt-1">
                  Onboard Neural Engine
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Real-time target identification occurs in-flight inside the airframe's ruggedized GPU modules, discarding false alarms and sending high-priority tactical vector alerts to commanders over low-bandwidth satellite uplinks.
                </p>
              </div>

              {/* Real-time stats */}
              <div className="space-y-3 font-mono text-xs">
                <div className="bg-[#020E1C] p-3 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">TRACKED SURFACE CONTACTS</span>
                  <span className="text-white font-bold text-sm">{trackedVessels} ACTIVE</span>
                </div>
                <div className="bg-[#020E1C] p-3 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">DARK VESSEL DETECTION RATE</span>
                  <span className="text-emerald-400 font-bold text-sm">99.8%</span>
                </div>
                <div className="bg-[#020E1C] p-3 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">C4ISR LINK STANDARDS</span>
                  <span className="text-white font-bold text-sm">COTS / STANAG 4586</span>
                </div>
              </div>

              <button
                onClick={onOpenContact}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs uppercase font-semibold tracking-wider transition-colors text-center rounded-full"
              >
                Schedule ATLAS Demonstration
              </button>
            </div>

          </div>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ATLAS_FEATURES.map((feat, idx) => (
            <div
              key={feat.id}
              className="bg-[#031020] border border-white/10 p-6 relative group hover:border-blue-500/50 transition-colors"
            >
              <div className="text-xs font-mono text-[#38bdf8] mb-2 font-bold">
                0{idx + 1} // ARCHITECTURE
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {feat.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
