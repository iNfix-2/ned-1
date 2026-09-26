import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown } from 'lucide-react';

const CAPABILITIES = [
  { title: 'Military-Grade Software', text: 'Hardened command, control and intelligence software built for classified and contested environments.' },
  { title: 'AI for Defence', text: 'Edge and enterprise AI that turns sensor data into faster, better-informed decisions.' },
  { title: 'Autonomous Vehicles', text: 'Uncrewed ground vehicles for patrol, logistics and force protection.' },
  { title: 'UAV Systems', text: 'Tactical and long-endurance unmanned aircraft for ISR and mission support.' },
];

// SpaceX-style full-bleed panels; `side` sets which half of the screen holds the text
const PANELS = [
  {
    id: 'software',
    title: 'Military-Grade Software',
    text: 'Secure-by-design command and control, mission planning and intelligence software, including SkyGrid and Affenas. Encrypted end to end, role-based and audit-ready, our software is built to operate on sovereign infrastructure and keep working in degraded, disconnected and contested networks.',
    image: '/assets/images/skygrid/skygrid-dashboard.webp',
    side: 'right',
  },
  {
    id: 'ai',
    title: 'AI for Defence',
    text: 'Computer vision, sensor fusion and predictive analytics that detect, classify and track objects of interest across video, radar and RF feeds. Models run at the edge on aircraft and vehicles or in the command centre, with a human in the loop for every critical decision.',
    image: '/assets/images/defense/nethawk-c2-mission.jpg',
    side: 'right',
  },
  {
    id: 'vehicles',
    title: 'Autonomous Military-Grade Vehicles',
    text: 'Ruggedised uncrewed and optionally-crewed ground vehicles for border patrol, convoy protection, logistics resupply and perimeter security. Teamed with UAV overwatch and managed from a single C2 picture, they extend reach while keeping personnel out of harm’s way.',
    image: '/assets/images/missions/border-defense.jpg',
    side: 'left',
  },
  {
    id: 'uav',
    title: 'Unmanned Aerial Systems',
    text: 'Tactical multirotor and long-endurance fixed-wing VTOL aircraft carrying EO/IR, mapping and signals payloads over encrypted datalinks. Flown by NATI-trained crews for ISR, border surveillance, counter-UAS support and critical infrastructure protection.',
    image: '/assets/gallery/ops-vtol-dam-takeoff.jpg',
    side: 'right',
  },
  {
    id: 'partnerships',
    title: 'Proven Partnerships',
    text: 'Nethawk works alongside armed forces, security agencies and government institutions, deploying field-proven technology and trained operators to protect people, borders and critical national assets.',
    image: '/assets/images/missions/nethawk-tactical-team.jpg',
    side: 'left',
  },
];

export default function DefenseTechPage(props) {
  const { onOpenContact, onNavigateContact } = props;

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-sans selection:bg-accent selection:text-white antialiased">
      <Navbar {...props} activePage="defense-tech" />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-[100svh] min-h-[560px] max-h-[960px] w-full flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/gallery/ops-vtol-flight.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#000000]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/40" />

          <div className="relative z-10 text-center px-6 space-y-4">
            <h1 className="font-normal text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white">Defence Tech</h1>
            <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.3em] text-zinc-300">Supporting National Security</p>
          </div>

          <a
            href="#defense-overview"
            onClick={(e) => { e.preventDefault(); document.getElementById('defense-overview')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white animate-bounce"
            aria-label="Scroll to overview"
          >
            <ChevronDown className="w-7 h-7" />
          </a>
        </section>

        {/* Overview */}
        <section id="defense-overview" className="max-w-6xl mx-auto px-6 sm:px-12 py-20 sm:py-32 space-y-16 scroll-mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <h2 className="font-normal text-2xl sm:text-4xl tracking-tight leading-tight text-white">
              Sovereign defence technology for armed forces &amp; security agencies
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              Nethawk combines military-grade software, artificial intelligence, autonomous ground
              vehicles and unmanned aircraft into one integrated defence capability — designed, supported and operated
              for government and military end users.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/15 pt-10">
            {CAPABILITIES.map(({ title, text }) => (
              <div key={title} className="space-y-3">
                <h3 className="font-medium text-xs tracking-tight text-white">{title}</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Full-bleed Capability Panels */}
        {PANELS.map((p) => {
          const textRight = p.side === 'right';
          return (
            <section key={p.id} id={p.id} className="relative min-h-[520px] sm:min-h-[680px] w-full flex items-center overflow-hidden bg-[#000000]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${p.image}')` }} />
              <div
                className={`absolute inset-0 ${textRight ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-[#000000]/95 via-[#000000]/60 to-[#000000]/10`}
              />

              <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 py-16 grid grid-cols-1 lg:grid-cols-2">
                <div className={`max-w-md space-y-4 ${textRight ? 'lg:col-start-2' : ''}`}>
                  <h2 className="font-normal text-3xl sm:text-4xl tracking-tight leading-[1.05] text-white">{p.title}</h2>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">{p.text}</p>
                </div>
              </div>
            </section>
          );
        })}

        {/* Closing CTA */}
        <section className="py-24 sm:py-32 flex flex-col items-center gap-10">
          <div className="w-px h-40 bg-gradient-to-b from-transparent via-white/40 to-white/70" />
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={onOpenContact}
              className="px-6 py-3 border border-white/70 text-[11px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all"
            >
              Request a Briefing
            </button>
            <button
              onClick={onNavigateContact}
              className="px-6 py-3 border border-white/30 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-300 hover:text-white hover:border-white/70 transition-all"
            >
              Contact Us
            </button>
          </div>
        </section>
      </main>

      <Footer {...props} />
    </div>
  );
}
