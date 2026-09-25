import React, { useState } from 'react';
import { MISSIONS_DATA } from '../data/content';
import { Shield, Anchor, Crosshair, Compass, ChevronRight, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function Missions({ onOpenContact }) {
  const [activeMissionIndex, setActiveMissionIndex] = useState(0);
  const mission = MISSIONS_DATA[activeMissionIndex];

  const missionIcons = [Shield, Anchor, Crosshair, Compass];

  return (
    <section id="missions" className="py-24 bg-[#031020] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <div className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase mb-2 flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500"></span>
              <span>Operational Scenarios</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Mission <span className="text-[#38bdf8]">Profiles.</span>
            </h2>
          </div>
          <div className="text-slate-400 text-sm max-w-md font-mono">
            Autonomous multi-domain systems engineered for the world's most unforgiving operational environments.
          </div>
        </div>

        {/* Mission Select Buttons (Horizontal Navigation) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {MISSIONS_DATA.map((item, idx) => {
            const Icon = missionIcons[idx];
            const isSelected = idx === activeMissionIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMissionIndex(idx)}
                className={`text-left p-5 border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#05152b] border-blue-500 shadow-lg shadow-blue-500/10'
                    : 'bg-[#020E1C] border-white/10 hover:border-white/30 hover:bg-[#031326]'
                } relative`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500"></div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-slate-500 font-bold">
                    MISSION // {item.number}
                  </span>
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-[#38bdf8]' : 'text-slate-400'}`} />
                </div>
                <div className="text-sm font-bold text-white leading-snug">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Mission Showcase Card */}
        <div className="bg-[#020E1C] border border-white/10 p-8 sm:p-12 tech-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex items-center space-x-3">
                <span className="px-2.5 py-1 bg-blue-600/20 border border-blue-500/40 text-[#38bdf8] font-mono text-[11px] uppercase tracking-wider">
                  {mission.tacticalTag}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {mission.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {mission.title}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                {mission.summary}
              </p>

              <p className="text-sm text-slate-400 leading-relaxed">
                {mission.details}
              </p>

              {/* Metric Callouts */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                {mission.keyMetrics.map((metric, i) => (
                  <div key={i} className="bg-[#031122] p-4 border border-white/5">
                    <div className="text-slate-400 font-mono text-[10px] uppercase">
                      {metric.label}
                    </div>
                    <div className="text-lg sm:text-xl font-mono font-bold text-white mt-1">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center space-x-2 transition-colors rounded-full"
                >
                  <span>Request Mission Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Tactical Mission Graphic */}
            <div className="lg:col-span-5 bg-[#031122] border border-white/10 p-6 relative overflow-hidden flex flex-col justify-between aspect-square tech-border">
              {/* Tactical Grid Background */}
              <div className="absolute inset-0 bg-dot-pattern opacity-40"></div>

              {/* Top HUD bar */}
              <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-slate-400">
                <span>SIMULATION FEED: ACTIVE</span>
                <span className="text-sky-400 flex items-center">
                  <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-ping mr-1.5"></span>
                  LIVE TELEMETRY
                </span>
              </div>

              {/* Center Map / Sector Illustration */}
              <div className="relative z-10 my-auto text-center space-y-4">
                <div className="w-32 h-32 mx-auto border border-dashed border-blue-500/60 rounded-full flex items-center justify-center relative">
                  <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center bg-blue-600/10">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                  </div>
                  {/* Surrounding telemetry points */}
                  <div className="absolute top-2 right-4 w-2 h-2 bg-sky-400 rounded-full"></div>
                  <div className="absolute bottom-4 left-6 w-2 h-2 bg-sky-400 rounded-full"></div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono text-white font-bold tracking-wider">
                    OPERATIONAL THEATER SECTOR // ECHO-7
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">
                    BVLOS MESH COVERAGE ACTIVE // 24/7 SURVEILLANCE
                  </div>
                </div>
              </div>

              {/* Bottom Mission Tags */}
              <div className="relative z-10 border-t border-white/10 pt-3 flex justify-between text-[10px] font-mono text-slate-400">
                <span>ENCRYPTION: AES-256 GCM</span>
                <span>NATO STANAG 4586</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
