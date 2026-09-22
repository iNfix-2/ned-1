import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PLATFORMS_DATA } from '../data/tekeverContent';
import { ArrowRight, CheckCircle2, ChevronRight, Gauge, Radio, Shield, Wrench, Layers } from 'lucide-react';

export default function AR3Page({
  onNavigateHome,
  onNavigateMissions,
  onNavigateManufacturing,
  onNavigateAcademy,
  onNavigateDefenseTech,
  onNavigatePlatforms,
  onNavigateAR3,
  onNavigateAR5,
  onNavigateARX,
  onNavigateWhyUs,
  onNavigateAtlas,
  onNavigateSpace,
  onNavigateDigital,
  onNavigateAbout,
  onNavigateNews,
  onNavigateContact,
  onOpenContact
}) {
  const ar3 = PLATFORMS_DATA.ar3;
  const [selectedSubsystem, setSelectedSubsystem] = useState(0);
  const [selectedConfig, setSelectedConfig] = useState(0);

  return (
    <div className="min-h-screen bg-[#020e1c] text-white flex flex-col font-sans selection:bg-blue-600 selection:text-white antialiased">
      <Navbar
        onOpenContact={onOpenContact}
        onNavigateHome={onNavigateHome}
        onNavigateMissions={onNavigateMissions}
        onNavigateManufacturing={onNavigateManufacturing}
        onNavigateAcademy={onNavigateAcademy}
        onNavigateDefenseTech={onNavigateDefenseTech}
        onNavigatePlatforms={onNavigatePlatforms}
        onNavigateWhyUs={onNavigateWhyUs}
        onNavigateAtlas={onNavigateAtlas}
        onNavigateSpace={onNavigateSpace}
        onNavigateDigital={onNavigateDigital}
        onNavigateAbout={onNavigateAbout}
        onNavigateNews={onNavigateNews}
        onNavigateContact={onNavigateContact}
        activePage="platforms"
      />

      <main className="flex-grow pt-28 pb-20 space-y-24 sm:space-y-32">
        {/* Hero Section */}
        <section className="relative px-6 sm:px-12 max-w-[1920px] mx-auto">
          <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden min-h-[75vh] flex flex-col justify-end p-8 sm:p-16 border border-white/10 shadow-2xl bg-gradient-to-t from-[#010813] via-[#020e1c]/80 to-transparent">
            <div
              className="absolute inset-0 bg-cover bg-center -z-10 opacity-45 scale-105 transition-transform duration-1000"
              style={{ backgroundImage: "url('/assets/images/platforms/nethawk-tactical-uav.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020e1c] via-[#020e1c]/60 to-transparent -z-10" />

            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs tracking-wider uppercase text-blue-300">
                <span>Tactical VTOL &amp; Fixed-Wing UAS</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white">
                AR3 EVO <br />
                <span className="font-normal text-slate-300">One System, Multiple Aircraft</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                {ar3.heroDesc}
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenContact}
                  className="px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-slate-200 transition-all flex items-center space-x-2 shadow-xl hover:scale-105"
                >
                  <span>Request AR3 Technical Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Highlights Overview Cards */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ar3.overviewCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-[28px] bg-[#071322]/90 border border-white/10 p-7 sm:p-8 backdrop-blur-xl hover:border-white/20 transition-all duration-300 space-y-3"
            >
              <h3 className="text-lg font-medium text-white">{card.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </section>

        {/* Specifications Matrix */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-light text-white">Technical Specifications</h2>
            <p className="text-slate-400 text-xs sm:text-sm">Battlefield-proven parameters under harsh maritime and terrestrial conditions.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 space-y-1">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">MTOW</span>
              <span className="text-base sm:text-lg font-medium text-white">{ar3.specs.mtow}</span>
            </div>
            <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 space-y-1">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">Endurance</span>
              <span className="text-base sm:text-lg font-medium text-white">{ar3.specs.endurance}</span>
            </div>
            <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 space-y-1">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">Payload</span>
              <span className="text-base sm:text-lg font-medium text-white">{ar3.specs.payload}</span>
            </div>
            <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 space-y-1">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">Cruise Speed</span>
              <span className="text-base sm:text-lg font-medium text-white">{ar3.specs.cruiseSpeed}</span>
            </div>
            <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 space-y-1">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">Comms Range</span>
              <span className="text-base sm:text-lg font-medium text-white">{ar3.specs.commsRange}</span>
            </div>
            <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 space-y-1">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">Launch / Recovery</span>
              <span className="text-base sm:text-lg font-medium text-white">{ar3.specs.launchRecovery}</span>
            </div>
            <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 space-y-1 col-span-2 sm:col-span-3 lg:col-span-2">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">Dimensions</span>
              <span className="text-base sm:text-lg font-medium text-white">{ar3.specs.dimensions}</span>
            </div>
          </div>
        </section>

        {/* Subsystems Configurator */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono">Modularity</div>
            <h2 className="text-2xl sm:text-4xl font-light text-white">Subsystems &amp; Payload Options</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-3">
              {ar3.subsystems.map((sub, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSubsystem(idx)}
                  className={`w-full text-left p-5 rounded-[22px] border transition-all flex items-center justify-between ${
                    selectedSubsystem === idx
                      ? 'bg-white/15 border-white/30 text-white shadow-lg'
                      : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="font-medium text-sm sm:text-base">{sub.name}</span>
                  <ChevronRight className={`w-4 h-4 ${selectedSubsystem === idx ? 'text-blue-400' : 'opacity-40'}`} />
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 rounded-[32px] bg-[#05111f] border border-white/15 p-8 sm:p-12 shadow-2xl space-y-6">
              <h3 className="text-2xl font-light text-white">{ar3.subsystems[selectedSubsystem].name}</h3>
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                {ar3.subsystems[selectedSubsystem].desc}
              </p>
            </div>
          </div>
        </section>

        {/* 4 Mission Configurations */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono">Profiles</div>
            <h2 className="text-2xl sm:text-4xl font-light text-white">Mission Configurations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ar3.configurations.map((cfg, idx) => (
              <div
                key={idx}
                className="rounded-[30px] bg-[#071322] border border-white/10 p-8 space-y-6 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-white">{cfg.name}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">{cfg.desc}</p>
                </div>
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">Typical Payloads:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cfg.payloads.map((p, pIdx) => (
                      <div key={pIdx} className="flex items-center space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer
        onOpenContact={onOpenContact}
        onNavigateHome={onNavigateHome}
        onNavigateMissions={onNavigateMissions}
        onNavigateManufacturing={onNavigateManufacturing}
        onNavigateAcademy={onNavigateAcademy}
        onNavigateDefenseTech={onNavigateDefenseTech}
      />
    </div>
  );
}
