import React from 'react';
import { GLOBAL_HUBS } from '../data/content';
import { MapPin, Globe, Compass, ExternalLink } from 'lucide-react';

export default function GlobalPresence() {
  return (
    <section id="global" className="py-24 bg-[#020E1C] bg-grid-pattern border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <div className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase mb-2 flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500"></span>
              <span>Global Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Operational <span className="text-[#38bdf8]">Centres.</span>
            </h2>
          </div>
          <div className="text-slate-400 text-sm max-w-md font-mono">
            Direct operational presence, flight test facilities, and engineering centers across the UK, Europe, and North America.
          </div>
        </div>

        {/* Global Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GLOBAL_HUBS.map((hub, idx) => (
            <div
              key={idx}
              className="bg-[#031020] border border-white/10 p-8 tech-border relative group hover:border-blue-500/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#38bdf8] font-bold tracking-widest uppercase">
                    {hub.country}
                  </span>
                  <Compass className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </div>

                <div className="text-xl font-bold text-white">
                  {hub.city}
                </div>

                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {hub.address}
                </p>

                <div className="pt-2 border-t border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Operational Role:</div>
                  <div className="text-xs text-slate-200 mt-1">{hub.focus}</div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{hub.coordinates}</span>
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              </div>
            </div>
          ))}

          {/* Allied Flight Test Range Box */}
          <div className="bg-[#051427] border border-blue-500/40 p-8 tech-border flex flex-col justify-between text-left">
            <div className="space-y-3">
              <div className="text-xs font-mono text-[#38bdf8] font-bold uppercase tracking-wider">
                TESTING &amp; CERTIFICATION
              </div>
              <div className="text-xl font-bold text-white">
                Atlantic Maritime Test Ranges
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated segregated airspace and oceanic testing corridors for continuous BVLOS satellite-guided long-range flight trials and electronic warfare validation.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 text-xs font-mono text-sky-400 flex items-center justify-between">
              <span>ACTIVE AIRSPACE CORRIDORS</span>
              <span className="px-2 py-0.5 bg-sky-500/10 border border-sky-500/30 text-sky-400">
                24/7 RESERVED
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
