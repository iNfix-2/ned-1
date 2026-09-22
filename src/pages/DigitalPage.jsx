import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DIGITAL_SOLUTIONS } from '../data/tekeverContent';
import { ArrowRight, Smartphone, Building, Server, ShieldCheck, CheckCircle2 } from 'lucide-react';

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
        activePage="digital"
      />

      <main className="flex-grow pt-28 pb-20 space-y-24 sm:space-y-32">
        {/* Hero Section */}
        <section className="relative px-6 sm:px-12 max-w-[1920px] mx-auto">
          <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden min-h-[75vh] flex flex-col justify-end p-8 sm:p-16 border border-white/10 shadow-2xl bg-gradient-to-t from-[#010813] via-[#020e1c]/80 to-transparent">
            <div
              className="absolute inset-0 bg-cover bg-center -z-10 opacity-35 scale-105 transition-transform duration-1000"
              style={{ backgroundImage: "url('/assets/images/services/enterprise-digital.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020e1c] via-[#020e1c]/60 to-transparent -z-10" />

            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs tracking-wider uppercase text-blue-300">
                <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                <span>Enterprise &amp; Digital Transformation</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white">
                Digital Systems <br />
                <span className="font-normal text-slate-300">In Your Day-to-Day Life</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                From parking your vehicle and renting micro-mobility fleets to banking applications and utility billing, our digital software division engineers mission-critical enterprise systems that power daily societal infrastructure.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenContact}
                  className="px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-slate-200 transition-all flex items-center space-x-2 shadow-xl hover:scale-105"
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
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono">Expertise</div>
            <h2 className="text-2xl sm:text-4xl font-light text-white">Core Solution Verticals</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {DIGITAL_SOLUTIONS.map((sol, idx) => (
              <div
                key={idx}
                className="rounded-[32px] bg-[#071322] border border-white/10 p-8 sm:p-10 space-y-6 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-light text-white">{sol.title}</h3>
                  <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">{sol.desc}</p>
                </div>

                <div className="space-y-2 pt-6 border-t border-white/10">
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">Featured Deployments &amp; Clients:</span>
                  <div className="flex flex-wrap gap-2">
                    {sol.clients.map((c, cIdx) => (
                      <span key={cIdx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
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
