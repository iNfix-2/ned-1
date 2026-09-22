import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { WHY_US_PILLARS, VALUE_CHAIN_STAGES } from '../data/tekeverContent';
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Layers, Activity, Award } from 'lucide-react';

export default function WhyUsPage({
  onNavigateHome,
  onNavigateMissions,
  onNavigateManufacturing,
  onNavigateAcademy,
  onNavigateDefenseTech,
  onNavigatePlatforms,
  onNavigateWhyUs,
  onNavigateAtlas,
  onNavigateSpace,
  onNavigateDigital,
  onNavigateAbout,
  onNavigateNews,
  onNavigateContact,
  onOpenContact
}) {
  const [activeStage, setActiveStage] = useState(VALUE_CHAIN_STAGES[0].id);
  const currentStage = VALUE_CHAIN_STAGES.find((s) => s.id === activeStage) || VALUE_CHAIN_STAGES[0];

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
        activePage="why-us"
      />

      <main className="flex-grow pt-28 pb-20 space-y-24 sm:space-y-32">
        {/* Hero Section */}
        <section className="relative px-6 sm:px-12 max-w-[1920px] mx-auto">
          <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden min-h-[70vh] flex flex-col justify-end p-8 sm:p-16 border border-white/10 shadow-2xl bg-gradient-to-t from-[#010813] via-[#020e1c]/80 to-transparent">
            <div
              className="absolute inset-0 bg-cover bg-center -z-10 opacity-40 scale-105 transition-transform duration-1000"
              style={{ backgroundImage: "url('/assets/images/missions/nethawk-command-center.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020e1c] via-[#020e1c]/60 to-transparent -z-10" />

            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs tracking-wider uppercase text-blue-300">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span>Why Nethawk & TEKEVER UI</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white">
                What are you trying to accomplish? <br />
                <span className="font-normal text-slate-300">That should be your main question.</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                Our UAS systems fit every mission and are intrinsically future-proofed. Through the ability to upgrade individual sub-systems, it's possible to scale and evolve capabilities without complete redesigns. It's not just about technology — it's about your operational success.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenContact}
                  className="px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-slate-200 transition-all flex items-center space-x-2 shadow-xl hover:scale-105"
                >
                  <span>Request Operational Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Pillars */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto space-y-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
              Strategic Advantages
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Built on decades of computer science, real-time edge AI, and thousands of hours in frontline mission environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {WHY_US_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="rounded-[32px] bg-[#071322]/80 border border-white/10 p-8 sm:p-10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <span className="text-3xl sm:text-4xl font-light text-blue-400/60 block font-mono">
                    {pillar.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-normal text-white group-hover:text-blue-200 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6-Stage Value Chain Interactive Breakdown */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto space-y-12">
          <div className="space-y-4 max-w-3xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-400">Complete Value Chain</div>
            <h2 className="text-2xl sm:text-4xl font-light text-white">
              Unparalleled coverage of the complete value chain
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              From base material formulation to edge AI analytics, full vertical ownership enables agile adaptability and product differentiation.
            </p>
          </div>

          {/* Value Chain Interactive Tabs & Details Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Selector List */}
            <div className="lg:col-span-5 space-y-3">
              {VALUE_CHAIN_STAGES.map((stage) => {
                const isActive = stage.id === activeStage;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(stage.id)}
                    className={`w-full text-left p-5 sm:p-6 rounded-[24px] border transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-white/15 border-white/30 text-white shadow-xl'
                        : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-mono text-blue-400 font-bold">{stage.step}</span>
                      <span className="text-sm sm:text-base font-medium">{stage.title}</span>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-white' : 'opacity-40'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Display Card */}
            <div className="lg:col-span-7 rounded-[32px] bg-[#05111f] border border-white/15 p-8 sm:p-12 shadow-2xl space-y-8 relative overflow-hidden min-h-[420px] flex flex-col justify-between">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                    Phase {currentStage.step} of 06
                  </span>
                  <Award className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-white">
                  {currentStage.title}
                </h3>
                <div className="space-y-4 pt-2">
                  {currentStage.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                <span className="text-xs text-slate-400">Mission-Driven Engineering & Quality Assurance</span>
                <button
                  onClick={onOpenContact}
                  className="text-xs text-blue-300 hover:text-white font-medium flex items-center space-x-1 transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Lowest Total Cost of Ownership Banner */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto">
          <div className="rounded-[32px] sm:rounded-[40px] bg-gradient-to-r from-[#031326] to-[#08203d] border border-white/15 p-8 sm:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-light text-white">
                Lowest Total Cost of Ownership (TCO)
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                With modular and interchangeable architectures, all our UAS systems are engineered to maximize availability while substantially reducing scheduled maintenance and spares overhead.
              </p>
            </div>
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-xl shrink-0"
            >
              Contact Operations Team
            </button>
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
