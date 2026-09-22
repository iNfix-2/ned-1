import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ABOUT_STORY, VALUES_LIST } from '../data/tekeverContent';
import { ArrowRight, ShieldCheck, Award, Users, Globe2, Clock } from 'lucide-react';

export default function AboutPage({
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
        activePage="about"
      />

      <main className="flex-grow pt-28 pb-20 space-y-24 sm:space-y-32">
        {/* Hero Section */}
        <section className="relative px-6 sm:px-12 max-w-[1920px] mx-auto">
          <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden min-h-[75vh] flex flex-col justify-end p-8 sm:p-16 border border-white/10 shadow-2xl bg-gradient-to-t from-[#010813] via-[#020e1c]/80 to-transparent">
            <div
              className="absolute inset-0 bg-cover bg-center -z-10 opacity-35 scale-105 transition-transform duration-1000"
              style={{ backgroundImage: "url('/assets/images/missions/nethawk-engineering-team.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020e1c] via-[#020e1c]/60 to-transparent -z-10" />

            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs tracking-wider uppercase text-blue-300">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Corporate Heritage &amp; Vision</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white">
                Shaping the Future <br />
                <span className="font-normal text-slate-300">Through AI-Driven Autonomy</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                Delivering capabilities that protect lives, infrastructure, and sovereign nations. Operating at the pace of innovation and the urgency of the mission, we turn frontline experience into strategic advantage.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenContact}
                  className="px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-slate-200 transition-all flex items-center space-x-2 shadow-xl hover:scale-105"
                >
                  <span>Connect With Leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-[36px] bg-[#071322] border border-white/15 p-8 sm:p-12 space-y-4 shadow-2xl">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">Purpose</span>
            <h2 className="text-2xl sm:text-3xl font-light text-white">Our Vision</h2>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              To become the provider of innovative technology solutions transforming businesses, government institutions, defence, and national development.
            </p>
          </div>

          <div className="rounded-[36px] bg-[#071322] border border-white/15 p-8 sm:p-12 space-y-4 shadow-2xl">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">Commitment</span>
            <h2 className="text-2xl sm:text-3xl font-light text-white">Our Mission</h2>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              To build secure, intelligent, and scalable technology solutions that solve real-world problems, strengthen organizations, drive innovation, and create lasting impact.
            </p>
          </div>
        </section>

        {/* Our Story Interactive Timeline */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto space-y-12">
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono">Evolution</div>
            <h2 className="text-2xl sm:text-4xl font-light text-white">Our Story</h2>
            <p className="text-slate-400 text-xs sm:text-sm">From academic research in artificial intelligence to global uncrewed systems leadership.</p>
          </div>

          <div className="space-y-6">
            {ABOUT_STORY.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[28px] bg-[#05111f] border border-white/10 p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-white/20 transition-all"
              >
                <div className="flex items-center space-x-6 md:w-1/3">
                  <span className="text-3xl sm:text-4xl font-light text-blue-400 font-mono">{item.year}</span>
                  <div className="h-8 w-px bg-white/15 hidden md:block"></div>
                  <h3 className="text-lg sm:text-xl font-medium text-white">{item.title}</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Corporate Values */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono">Guiding Principles</div>
            <h2 className="text-2xl sm:text-4xl font-light text-white">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {VALUES_LIST.map((val, idx) => (
              <div key={idx} className="p-6 rounded-[24px] bg-white/5 border border-white/10 space-y-2">
                <h4 className="text-base font-medium text-white">{val.name}</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{val.desc}</p>
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
