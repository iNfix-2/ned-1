import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PLATFORMS_DATA } from '../data/tekeverContent';
import { ArrowRight, ChevronRight, Layers, Radio, Shield, Gauge } from 'lucide-react';

export default function PlatformsPage({
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

      <main className="flex-grow pt-28 pb-20 space-y-20 sm:space-y-28">
        {/* Header Section */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto text-left space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs tracking-wider uppercase text-blue-300">
            <span>UAS Fleet Lineup</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white">
            Platforms
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-3xl font-light leading-relaxed">
            Mission-oriented unmanned aerial systems product lines providing persistent surveillance, collaborative electronic warfare, and real-time intelligence services.
          </p>
        </section>

        {/* 3 Main Platform Big Cards */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 1. AR3 EVO */}
          <div
            onClick={onNavigateAR3}
            className="rounded-[36px] bg-[#04101e] border border-white/15 overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-white/30 transition-all duration-500 shadow-2xl hover:-translate-y-1.5"
          >
            <div className="relative h-[320px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/assets/images/platforms/nethawk-tactical-uav.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04101e] via-transparent to-black/30" />
              <div className="absolute top-6 left-6 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-blue-300">
                AR3 EVO
              </div>
            </div>

            <div className="p-8 sm:p-10 space-y-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs text-blue-400 font-mono uppercase tracking-wider">Tactical &amp; VTOL</span>
                <h2 className="text-2xl sm:text-3xl font-light text-white group-hover:text-blue-200 transition-colors">
                  Your Mission, Your Configuration
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  One system, multiple aircraft. Adapt payloads, propulsion, and launch methods (VTOL or catapult) for GPS- and comms-denied operations.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="text-[11px] font-mono text-slate-400">
                  <span>Endurance: </span>
                  <span className="text-white font-semibold">Up to 22h</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all group-hover:scale-110">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* 2. AR5 */}
          <div
            onClick={onNavigateAR5}
            className="rounded-[36px] bg-[#04101e] border border-white/15 overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-white/30 transition-all duration-500 shadow-2xl hover:-translate-y-1.5"
          >
            <div className="relative h-[320px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/assets/platforms/nsl-drone-capture-2.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04101e] via-transparent to-black/30" />
              <div className="absolute top-6 left-6 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-blue-300">
                AR5
              </div>
            </div>

            <div className="p-8 sm:p-10 space-y-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs text-blue-400 font-mono uppercase tracking-wider">MALE Fixed-Wing</span>
                <h2 className="text-2xl sm:text-3xl font-light text-white group-hover:text-blue-200 transition-colors">
                  Mission: Patrolling
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  Europe's leading UAS for maritime and overland persistent surveillance. 20-hour endurance with 50kg payload and unlimited global satellite communications.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="text-[11px] font-mono text-slate-400">
                  <span>Endurance: </span>
                  <span className="text-white font-semibold">20h+ SATCOM</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all group-hover:scale-110">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* 3. ARX */}
          <div
            onClick={onNavigateARX}
            className="rounded-[36px] bg-[#04101e] border border-white/15 overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-white/30 transition-all duration-500 shadow-2xl hover:-translate-y-1.5"
          >
            <div className="relative h-[320px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/assets/platforms/nsl-drone-capture-7.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04101e] via-transparent to-black/30" />
              <div className="absolute top-6 left-6 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-blue-300">
                ARX
              </div>
            </div>

            <div className="p-8 sm:p-10 space-y-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs text-blue-400 font-mono uppercase tracking-wider">Swarm &amp; EW</span>
                <h2 className="text-2xl sm:text-3xl font-light text-white group-hover:text-blue-200 transition-colors">
                  The Game Changer
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  Next-generation attritable swarm intelligence and synchronized electronic warfare platform designed for saturated operational contested zones.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="text-[11px] font-mono text-slate-400">
                  <span>Role: </span>
                  <span className="text-white font-semibold">Autonomous Swarm</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all group-hover:scale-110">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Specs Table */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-light text-white">
              Fleet Technical Comparison
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Key operational parameters across TEKEVER / Nethawk UAS product lines.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[28px] border border-white/15 bg-[#030d1a] shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-white/10 bg-white/5 text-slate-300 uppercase tracking-wider font-mono text-[11px]">
                <tr>
                  <th className="p-4 sm:p-6">Specification</th>
                  <th className="p-4 sm:p-6 text-blue-300">AR3 EVO</th>
                  <th className="p-4 sm:p-6 text-blue-300">AR5</th>
                  <th className="p-4 sm:p-6 text-blue-300">ARX</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-light text-slate-300">
                <tr>
                  <td className="p-4 sm:p-6 font-medium text-white">Class &amp; Architecture</td>
                  <td className="p-4 sm:p-6">Tactical Fixed-Wing / VTOL</td>
                  <td className="p-4 sm:p-6">MALE Fixed-Wing</td>
                  <td className="p-4 sm:p-6">Autonomous Swarm UAS</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 font-medium text-white">Max Takeoff Weight (MTOW)</td>
                  <td className="p-4 sm:p-6">25 kg (30 kg VTOL)</td>
                  <td className="p-4 sm:p-6">180 kg</td>
                  <td className="p-4 sm:p-6">Tactical Canister Class</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 font-medium text-white">Endurance</td>
                  <td className="p-4 sm:p-6">Up to 22h (FW) / 14h (VTOL)</td>
                  <td className="p-4 sm:p-6">20+ Hours</td>
                  <td className="p-4 sm:p-6">Tactical Sprint &amp; Loiter</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 font-medium text-white">Payload Capacity</td>
                  <td className="p-4 sm:p-6">6 kg (Modular)</td>
                  <td className="p-4 sm:p-6">50 kg (Multi-sensor)</td>
                  <td className="p-4 sm:p-6">Mission Pod Dependent</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 font-medium text-white">Comms Range</td>
                  <td className="p-4 sm:p-6">Up to 230 km (LOS / Satcom)</td>
                  <td className="p-4 sm:p-6">Unlimited (SATCOM)</td>
                  <td className="p-4 sm:p-6">Mesh AI Network</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 font-medium text-white">Launch / Recovery</td>
                  <td className="p-4 sm:p-6">Catapult / VTOL / Parachute</td>
                  <td className="p-4 sm:p-6">Unprepared Airstrip</td>
                  <td className="p-4 sm:p-6">Canister / Tube / Catapult</td>
                </tr>
              </tbody>
            </table>
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
