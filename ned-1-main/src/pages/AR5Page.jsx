import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PLATFORMS_DATA } from '../data/tekeverContent';
import { ArrowRight, CheckCircle2, Shield, Radio, Eye, Anchor } from 'lucide-react';

export default function AR5Page({
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
  const ar5 = PLATFORMS_DATA.ar5;

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
              style={{ backgroundImage: "url('/assets/platforms/nsl-drone-capture-2.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020e1c] via-[#020e1c]/60 to-transparent -z-10" />

            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs tracking-wider uppercase text-blue-300">
                <span>MALE Fixed-Wing UAS</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white">
                AR5 <br />
                <span className="font-normal text-slate-300">Mission: Patrolling</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                {ar5.heroDesc}
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenContact}
                  className="px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-slate-200 transition-all flex items-center space-x-2 shadow-xl hover:scale-105"
                >
                  <span>Request AR5 Deployment Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Matrix */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-light text-white">Technical Specifications</h2>
            <p className="text-slate-400 text-xs sm:text-sm">High-altitude long-endurance parameters optimized for maritime domain awareness.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 space-y-1">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">MTOW</span>
              <span className="text-base sm:text-lg font-medium text-white">{ar5.specs.mtow}</span>
            </div>
            <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 space-y-1">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">Endurance</span>
              <span className="text-base sm:text-lg font-medium text-white">{ar5.specs.endurance}</span>
            </div>
            <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 space-y-1">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">Payload</span>
              <span className="text-base sm:text-lg font-medium text-white">{ar5.specs.payload}</span>
            </div>
            <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 space-y-1">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">Cruise Speed</span>
              <span className="text-base sm:text-lg font-medium text-white">{ar5.specs.cruiseSpeed}</span>
            </div>
            <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 space-y-1">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">Comms Range</span>
              <span className="text-base sm:text-lg font-medium text-white">{ar5.specs.commsRange}</span>
            </div>
            <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 space-y-1">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">Recovery</span>
              <span className="text-base sm:text-lg font-medium text-white">{ar5.specs.launchRecovery}</span>
            </div>
            <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 space-y-1 col-span-2 sm:col-span-3 lg:col-span-2">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">Dimensions</span>
              <span className="text-base sm:text-lg font-medium text-white">{ar5.specs.dimensions}</span>
            </div>
          </div>
        </section>

        {/* Operational Capabilities */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono">Operations</div>
            <h2 className="text-2xl sm:text-4xl font-light text-white">Proven Mission Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ar5.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="rounded-[30px] bg-[#071322] border border-white/10 p-8 sm:p-10 space-y-4 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-normal text-white">{cap.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">{cap.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center text-xs text-blue-400 font-mono">
                  <span>24/7 Persistent Coverage</span>
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
