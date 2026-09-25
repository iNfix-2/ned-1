import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SPACE_PRODUCTS } from '../data/tekeverContent';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function SpacePage({
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
  const gamalink = SPACE_PRODUCTS.gamalink;
  const gamasar = SPACE_PRODUCTS.gamasar;

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
        activePage="space"
      />

      <main className="flex-grow pt-28 pb-20 space-y-24 sm:space-y-32">
        {/* Hero Section */}
        <section className="relative px-6 sm:px-12 max-w-[1920px] mx-auto">
          <div className="relative isolate rounded-[32px] sm:rounded-[40px] overflow-hidden min-h-[75vh] flex flex-col justify-end p-8 sm:p-16 border border-white/10 shadow-2xl bg-gradient-to-t from-[#010813] via-[#020e1c]/80 to-transparent">
            <div
              className="absolute inset-0 bg-cover bg-center -z-10 opacity-35 scale-105 transition-transform duration-1000"
              style={{ backgroundImage: "url('/assets/images/manufacturing/IMG_6559.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020e1c] via-[#020e1c]/60 to-transparent -z-10" />

            <div className="max-w-4xl space-y-6">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white">
                Pushing the Boundaries in Space
              </h1>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                From Space Exploration and Earth Observation to New Technology Development, we deliver advanced software-defined radios and spaceborne synthetic aperture radar to power in-orbit connectivity and precision formation flight.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenContact}
                  className="px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-slate-200 transition-all flex items-center space-x-2 shadow-xl hover:scale-105"
                >
                  <span>Download Space Brochure</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Space Technologies: GAMALINK & GAMASAR */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GAMALINK Card */}
          <div className="rounded-[36px] bg-[#071322] border border-white/15 p-8 sm:p-12 space-y-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-light text-white">{gamalink.title}</h2>
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                {gamalink.desc}
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {gamalink.specs.slice(0, 6).map((sp, idx) => (
                  <div key={idx} className="p-3 rounded-[16px] bg-white/5 border border-white/5 space-y-1">
                    <span className="text-slate-400 block text-[10.5px]">{sp.label}</span>
                    <span className="text-white font-medium">{sp.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GAMASAR Card */}
          <div className="rounded-[36px] bg-[#071322] border border-white/15 p-8 sm:p-12 space-y-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-light text-white">{gamasar.title}</h2>
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                {gamasar.desc}
              </p>
            </div>

            <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 space-y-3">
              <h4 className="text-sm font-medium text-white">All-Weather Earth Observation</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-light">
                Delivers cloud-penetrating, day-and-night surface imagery for maritime monitoring, environmental conservation, and emergency disaster mapping.
              </p>
            </div>
          </div>
        </section>

        {/* ESA Heritage Flight Missions */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-light text-white">Active Spaceflight Missions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPACE_PRODUCTS.missions.map((m, idx) => (
              <div
                key={idx}
                className="rounded-[30px] bg-[#05111f] border border-white/10 p-8 space-y-4 flex flex-col justify-between hover:border-white/20 transition-all"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-white">{m.name}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">{m.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={m.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-300 hover:text-white flex items-center space-x-1.5 transition-colors"
                  >
                    <span>Mission Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
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
