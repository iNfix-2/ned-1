import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ATLAS_FEATURES } from '../data/tekeverContent';
import { ArrowRight, CheckCircle2, Monitor, Eye, Search, Database, History, Compass, ShieldCheck } from 'lucide-react';

export default function AtlasPage({
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
  const [activeTab, setActiveTab] = useState(ATLAS_FEATURES[0].id);
  const currentFeature = ATLAS_FEATURES.find((f) => f.id === activeTab) || ATLAS_FEATURES[0];

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
        activePage="atlas"
      />

      <main className="flex-grow pt-28 pb-20 space-y-24 sm:space-y-32">
        {/* Hero Section */}
        <section className="relative px-6 sm:px-12 max-w-[1920px] mx-auto">
          <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden min-h-[75vh] flex flex-col justify-end p-8 sm:p-16 border border-white/10 shadow-2xl bg-gradient-to-t from-[#010813] via-[#020e1c]/80 to-transparent">
            <div
              className="absolute inset-0 bg-cover bg-center -z-10 opacity-40 scale-105 transition-transform duration-1000"
              style={{ backgroundImage: "url('/assets/images/missions/nethawk-command-center.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020e1c] via-[#020e1c]/60 to-transparent -z-10" />

            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs tracking-wider uppercase text-blue-300">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span>Mission Intelligence Platform</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white">
                ATLAS <br />
                <span className="font-normal text-slate-300">Real-time Intelligence as-a-Service</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                Designed for key decision makers and operational commanders, ATLAS provides intelligent onboard and on-ground tools for real-time and historical data processing. Our AI/ML-powered data-centre assures the right person gets the right information at the right moment.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenContact}
                  className="px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-slate-200 transition-all flex items-center space-x-2 shadow-xl hover:scale-105"
                >
                  <span>Request ATLAS Demo Access</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Operational Phases */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-[30px] bg-[#071322]/90 border border-white/10 p-8 space-y-3">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block">Phase 01</span>
            <h3 className="text-xl font-medium text-white">Pre-Mission</h3>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              Design mission parameters such as areas of interest, search polygons, target priorities, and automated approval workflows.
            </p>
          </div>
          <div className="rounded-[30px] bg-[#071322]/90 border border-white/10 p-8 space-y-3">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block">Phase 02</span>
            <h3 className="text-xl font-medium text-white">During Mission</h3>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              Follow ultra-low-latency live sensor video feeds, flight paths, and detected targets directly in any browser without client installation.
            </p>
          </div>
          <div className="rounded-[30px] bg-[#071322]/90 border border-white/10 p-8 space-y-3">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block">Phase 03</span>
            <h3 className="text-xl font-medium text-white">Post-Mission</h3>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              Review completed sorties, correlate historical AIS tracks, and extract court-admissible evidential intelligence packages.
            </p>
          </div>
        </section>

        {/* 6 Interactive Feature Modules */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto space-y-10">
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono">Capabilities</div>
            <h2 className="text-2xl sm:text-4xl font-light text-white">Explore ATLAS Core Features</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Tabs */}
            <div className="lg:col-span-4 space-y-2.5">
              {ATLAS_FEATURES.map((feat) => (
                <button
                  key={feat.id}
                  onClick={() => setActiveTab(feat.id)}
                  className={`w-full text-left p-5 rounded-[22px] border transition-all flex items-center justify-between ${
                    activeTab === feat.id
                      ? 'bg-white/15 border-white/30 text-white shadow-xl'
                      : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono text-blue-400 font-bold">{feat.number}</span>
                    <span className="text-sm font-medium">{feat.title}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${activeTab === feat.id ? 'text-white' : 'opacity-30'}`} />
                </button>
              ))}
            </div>

            {/* Right Interactive Detail Screen */}
            <div className="lg:col-span-8 rounded-[36px] bg-[#05111f] border border-white/15 p-8 sm:p-12 shadow-2xl space-y-8 relative overflow-hidden min-h-[460px] flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                    {currentFeature.subtitle}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-white">
                  {currentFeature.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                  {currentFeature.desc}
                </p>
                <div className="space-y-3 pt-2">
                  {currentFeature.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start space-x-3 text-slate-300 text-xs sm:text-sm font-light">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Zero Local Software Installation • Secure Browser Access</span>
                <button
                  onClick={onOpenContact}
                  className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-all"
                >
                  Schedule Demo
                </button>
              </div>
            </div>
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
