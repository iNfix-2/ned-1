import React from 'react';
import Navbar from '../components/Navbar';
import { OutlineButton, Reveal, CinematicPanel } from '../components/Cinematic';
import Footer from '../components/Footer';
import { ChevronDown, PenTool, Cpu, ShieldCheck } from 'lucide-react';

const IMG = '/assets/images/manufacturing';

// Three pillars shown under the intro, in the style of the reference's icon row
const PILLARS = [
  { icon: PenTool, title: 'Design & Simulation', text: 'Airframes, payload mounts and systems engineered in CAD and validated in simulation before anything is built.' },
  { icon: Cpu, title: 'Build & Integrate', text: 'Prototyping, composite fabrication and in-house avionics brought together into complete, flight-ready systems.' },
  { icon: ShieldCheck, title: 'Test & Qualify', text: 'Every system is bench-tested, ground-tested and flight-tested before it reaches an operator.' },
];

// Full-screen panels, alternating sides
const PANELS = [
  {
    title: 'Research & Design',
    text: 'Our engineers design airframes, mounts and mission systems from first principles, iterating rapidly in CAD and simulation to hit the performance each mission demands.',
    image: `${IMG}/IMG_6555.jpg`,
    align: 'right',
  },
  {
    title: 'Rapid Prototyping',
    text: 'Laser cutting, CNC and 3D printing in the same building as the design team means an idea can become a physical part in hours, not weeks.',
    image: `${IMG}/IMG_6564.jpg`,
    align: 'left',
  },
  {
    title: 'Composite Airframes',
    text: 'Lightweight, rigid airframes fabricated in-house, giving us control over strength, weight and payload capacity for every platform we build.',
    image: `${IMG}/IMG_6648.jpg`,
    align: 'right',
  },
  {
    title: 'Avionics & Electronics',
    text: 'Wiring harnesses, power distribution and flight-controller integration assembled and calibrated by our own technicians for reliability in the field.',
    image: `${IMG}/NETHAWK_29.jpg`,
    align: 'left',
  },
  {
    title: 'Assembly & Integration',
    text: 'Airframe, propulsion, avionics and payload come together into complete systems, integrated with SKYGRID and configured for each customer’s mission.',
    image: `${IMG}/IMG_6614.jpg`,
    align: 'right',
  },
  {
    title: 'Testing & Quality Assurance',
    text: 'Structured bench, ground and flight testing, with every result recorded, so the systems we deliver perform exactly as specified when it matters.',
    image: `${IMG}/nethawk-qa-testing.jpg`,
    align: 'left',
  },
  {
    title: 'Built By African Engineers',
    text: 'A growing team of engineers and technicians, many trained through NATI Academy, building sovereign technology capability for Nigeria and the continent.',
    image: `${IMG}/nethawk-composite-airframe-lab.webp`,
    align: 'right',
  },
];

export default function ManufacturingPage(props) {
  const { onOpenContact, onNavigateContact } = props;

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans antialiased overflow-x-hidden">
      <Navbar {...props} activePage="manufacturing" />

      {/* Hero: centred title over full-bleed image */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IMG}/IMG_6631.jpg')` }} />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

        <Reveal className="relative z-10 text-center px-6 space-y-4">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-tight">Nethawk Labs</h1>
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Research · Engineering · Manufacturing
          </p>
        </Reveal>

        <button
          onClick={() => document.getElementById('labs-overview')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white animate-bounce"
          aria-label="Scroll to overview"
        >
          <ChevronDown className="w-7 h-7" />
        </button>
      </section>

      {/* Intro + pillars */}
      <section id="labs-overview" className="scroll-mt-16 max-w-6xl mx-auto px-6 sm:px-12 py-24 sm:py-32 space-y-16">
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight leading-[1.08]">
            Sovereign Engineering, Designed And Built In Nigeria
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Nethawk Labs is where our systems are conceived, prototyped, built and proven. Owning the full cycle, from first
            sketch to flight test, lets us move fast, adapt every platform to the mission, and keep critical capability at home.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 border-t border-white/15 pt-10">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5" strokeWidth={1.5} />
                <h3 className="text-xs font-bold uppercase tracking-[0.15em]">{title}</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Capability panels */}
      {PANELS.map((panel) => (
        <CinematicPanel key={panel.title} image={panel.image} align={panel.align}>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight leading-[1.05]">{panel.title}</h2>
          <p className="text-sm sm:text-base text-white/85 leading-relaxed">{panel.text}</p>
        </CinematicPanel>
      ))}

      {/* Closing: vertical rule into a single contact button */}
      <section className="py-24 sm:py-32 flex flex-col items-center gap-10">
        <div className="w-px h-40 sm:h-56 bg-gradient-to-b from-transparent via-white/50 to-white/70" />
        <Reveal className="text-center space-y-6 px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">Partner With Nethawk Labs</p>
          <OutlineButton onClick={onNavigateContact || onOpenContact}>Contact Us</OutlineButton>
        </Reveal>
      </section>

      <Footer {...props} />
    </div>
  );
}
