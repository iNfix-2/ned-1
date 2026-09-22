import React from 'react';
import { ShieldCheck, Cpu, Zap, Radio, CheckCircle2, Award } from 'lucide-react';

export default function WhyUs() {
  const pillars = [
    {
      icon: Cpu,
      title: 'Full-Stack Sovereign Autonomy',
      desc: 'We build the complete vertical stack in-house—from airframe carbon-composite structures and avionics to edge neural networks, ground stations, and mission command software.'
    },
    {
      icon: ShieldCheck,
      title: 'Battlefield & Maritime Proven',
      desc: 'Tested daily under contested electromagnetic conditions, high Atlantic sea states, and operational theaters with allied armed forces and maritime agencies across Europe and NATO.'
    },
    {
      icon: Zap,
      title: 'Real-Time Edge AI Intelligence',
      desc: 'Our onboard algorithms process multispectral radar and optical feeds directly at the edge, converting raw sensor streams into actionable tactical intelligence in milliseconds.'
    },
    {
      icon: Radio,
      title: 'Turnkey ISR As-a-Service',
      desc: 'Beyond purchasing platforms, allied customers leverage NetHawk Intelligence-as-a-Service—providing dedicated flight crews, satellite relay, and instant intelligence feeds on demand.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#031020] border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <div className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase mb-2 flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500"></span>
              <span>Why NetHawk</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              When a mission is calling, <br className="hidden sm:inline" />
              <span className="text-[#38bdf8]">NetHawk delivers.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Delivering sovereign strategic autonomy, zero-dependency engineering, and persistent tactical visibility over land, air, and sea.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#020E1C] border border-white/10 p-8 relative group hover:border-blue-500/60 transition-all duration-300 tech-border flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 border border-blue-500/40 bg-blue-600/10 flex items-center justify-center text-white mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6 text-[#38bdf8] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>PILLAR 0{idx + 1}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonial / Deployment Callout Banner */}
        <div className="mt-16 bg-[#020E1C] border border-white/10 p-8 sm:p-10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-left">
            <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider font-semibold">
              FIELD CAPABILITY BENCHMARK
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white max-w-2xl">
              "Providing persistent, long-range intelligence, surveillance and reconnaissance, giving military commanders and maritime authorities complete over-the-horizon clarity."
            </div>
            <div className="text-xs text-slate-400 font-mono pt-2">
              UK MINISTRY OF DEFENCE & EUROPEAN MARITIME SAFETY AGENCIES (EMSA)
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/5 border border-white/10 font-mono text-xs text-white">
              <Award className="w-4 h-4 text-[#38bdf8]" />
              <span>STANAG 4671 / NATO AIRWORTHINESS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
