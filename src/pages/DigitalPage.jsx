import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DIGITAL_SOLUTIONS } from '../data/tekeverContent';
import { ArrowRight } from 'lucide-react';

export default function DigitalPage({
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
  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-sans selection:bg-accent selection:text-white antialiased">
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
        activePage="digital"
      />

      <main className="flex-grow pt-28 pb-20 space-y-24 sm:space-y-32">
        {/* Hero Section */}
        <section className="relative px-6 sm:px-12 max-w-[1920px] mx-auto">
          <div className="relative isolate rounded-[32px] sm:rounded-[40px] overflow-hidden min-h-[75vh] flex flex-col justify-end p-8 sm:p-16 border border-white/10 shadow-2xl bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent">
            <div
              className="absolute inset-0 bg-cover bg-center -z-10 opacity-35 scale-105 transition-transform duration-1000"
              style={{ backgroundImage: "url('/assets/images/manufacturing/IMG_6549.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent -z-10" />

            <div className="max-w-4xl space-y-6">
              <h1 className="font-normal text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-white">
                Digital Systems <br />
                <span className="font-normal text-zinc-300">In Your Day-to-Day Life</span>
              </h1>
              <p className="text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                From parking your vehicle and renting micro-mobility fleets to banking applications and utility billing, our digital software division engineers mission-critical enterprise systems that power daily societal infrastructure.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenContact}
                  className="px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all flex items-center space-x-2 shadow-xl hover:scale-105"
                >
                  <span>Consult With Digital Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Solution Areas */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto space-y-10">
          <div className="space-y-2 max-w-3xl">
            <h2 className="font-normal text-2xl sm:text-4xl text-white">Core Solution Verticals</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {DIGITAL_SOLUTIONS.map((sol, idx) => (
              <div
                key={idx}
                className="rounded-[32px] bg-[#0a0a0a] border border-white/10 p-8 sm:p-10 space-y-6 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl"
              >
                <div className="space-y-4">
                  <h3 className="font-medium text-2xl text-white">{sol.title}</h3>
                  <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">{sol.desc}</p>
                </div>

                <div className="space-y-2 pt-6 border-t border-white/10">
                  <span className="text-[11px] font-mono text-accent-bright uppercase tracking-wider block">Featured Deployments &amp; Clients:</span>
                  <div className="flex flex-wrap gap-2">
                    {sol.clients.map((c, cIdx) => (
                      <span key={cIdx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">
                        {c}
                      </span>
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
