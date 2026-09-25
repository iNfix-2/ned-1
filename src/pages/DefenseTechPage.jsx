import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, Code2, BrainCircuit, Crosshair, Truck, Plane } from 'lucide-react';

const CAPABILITY_ICONS = [
  { icon: Code2, title: 'Military-Grade Software', text: 'Hardened command, control and intelligence software built for classified and contested environments.' },
  { icon: BrainCircuit, title: 'AI for Defence', text: 'Edge and enterprise AI that turns sensor data into faster, better-informed decisions.' },
  { icon: Crosshair, title: 'Ammunition & Rifles', text: 'Specialised small arms and ammunition engineered for precision and reliability.' },
  { icon: Truck, title: 'Autonomous Vehicles', text: 'Uncrewed ground vehicles for patrol, logistics and force protection.' },
  { icon: Plane, title: 'UAV Systems', text: 'Tactical and long-endurance unmanned aircraft for ISR and mission support.' },
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
    id: 'ammunition',
    title: 'Specialised Ammunition & Rifles',
    text: 'Precision rifles and specialised ammunition engineered for accuracy, consistency and reliability in harsh operating conditions. Supplied exclusively to authorised government, military and law-enforcement customers under applicable export controls and end-user certification.',
    image: null,
    side: 'left',
  },
  {
    id: 'vehicles',
    title: 'Autonomous Military-Grade Vehicles',
    text: 'Ruggedised uncrewed and optionally-crewed ground vehicles for border patrol, convoy protection, logistics resupply and perimeter security. Teamed with UAV overwatch and managed from a single C2 picture, they extend reach while keeping personnel out of harm’s way.',
    image: '/assets/images/missions/border-defense.jpg',
    side: 'right',
  },
  {
    id: 'uav',
    title: 'Unmanned Aerial Systems',
    text: 'Tactical multirotor and long-endurance fixed-wing VTOL aircraft carrying EO/IR, mapping and signals payloads over encrypted datalinks. Flown by NATI-trained crews for ISR, border surveillance, counter-UAS support and critical infrastructure protection.',
    image: '/assets/gallery/ops-vtol-dam-takeoff.jpg',
    side: 'left',
  },
  {
    id: 'partnerships',
    title: 'Proven Partnerships',
    text: 'Nethawk works alongside armed forces, security agencies and government institutions, deploying field-proven technology and trained operators to protect people, borders and critical national assets.',
    image: '/assets/images/missions/nethawk-tactical-team.jpg',
    side: 'right',
  },
];

// Line-art backdrop for the ammunition panel, in the style of the Starshield schematic panels
function BallisticsArt() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
      <defs>
        <pattern id="ballistics-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </pattern>
        <linearGradient id="ballistics-trace" x1="0" x2="1">
          <stop offset="0" stopColor="#38bdf8" stopOpacity="0" />
          <stop offset="1" stopColor="#38bdf8" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect width="1600" height="800" fill="url(#ballistics-grid)" />
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M 760 ${640 - i * 18} Q 1100 ${220 - i * 40} 1480 ${400 - i * 30}`}
          stroke="url(#ballistics-trace)"
          strokeWidth={i === 0 ? 2 : 1}
          opacity={1 - i * 0.2}
        />
      ))}
      <g transform="translate(1260 400)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2">
        <circle r="150" />
        <circle r="95" stroke="rgba(255,255,255,0.2)" />
        <circle r="36" stroke="#38bdf8" />
        <path d="M-190 0H-45M45 0H190M0-190V-45M0 45V190" />
        {[-120, -80, -40, 40, 80, 120].map((t) => (
          <path key={t} d={`M${t} -8V8M-8 ${t}H8`} />
        ))}
      </g>
    </svg>
  );
}

export default function DefenseTechPage(props) {
  const { onOpenContact, onNavigateContact } = props;

  return (
    <div className="min-h-screen bg-[#010811] text-white flex flex-col font-sans selection:bg-blue-600 selection:text-white antialiased">
      <Navbar {...props} activePage="defense-tech" />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-[100svh] min-h-[560px] max-h-[960px] w-full flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/gallery/ops-vtol-flight.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#010811]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#010811] via-transparent to-[#010811]/40" />

          <div className="relative z-10 text-center px-6 space-y-4">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white">Defence Tech</h1>
            <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.3em] text-slate-300">Supporting National Security</p>
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
            <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight leading-tight text-white">
              Sovereign defence technology for armed forces &amp; security agencies
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Nethawk combines military-grade software, artificial intelligence, precision small arms, autonomous ground
              vehicles and unmanned aircraft into one integrated defence capability — designed, supported and operated
              for government and military end users.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 border-t border-white/15 pt-10">
            {CAPABILITY_ICONS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-white shrink-0" strokeWidth={1.4} />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">{title}</h3>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Full-bleed Capability Panels */}
        {PANELS.map((p) => {
          const textRight = p.side === 'right';
          return (
            <section key={p.id} id={p.id} className="relative min-h-[520px] sm:min-h-[680px] w-full flex items-center overflow-hidden bg-[#010811]">
              {p.image ? (
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${p.image}')` }} />
              ) : (
                <BallisticsArt />
              )}
              <div
                className={`absolute inset-0 ${textRight ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-[#010811]/95 via-[#010811]/60 to-[#010811]/10`}
              />

              <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 py-16 grid grid-cols-1 lg:grid-cols-2">
                <div className={`max-w-md space-y-4 ${textRight ? 'lg:col-start-2' : ''}`}>
                  <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight leading-[1.05] text-white">{p.title}</h2>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">{p.text}</p>
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
              className="px-6 py-3 border border-white/30 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300 hover:text-white hover:border-white/70 transition-all"
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
