import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { WHY_US_PILLARS, VALUE_CHAIN_STAGES, VALUES_LIST, VISION_TEXT, MISSION_TEXT } from '../data/tekeverContent';
import FullBleedSlideshow from '../components/FullBleedSlideshow';
import { ArrowRight } from 'lucide-react';

// Headline counters — replace with verified company figures when available
const STATS = [
  { value: 9, suffix: '+', label: 'Training Programmes' },
  { value: 7, suffix: '', label: 'Drone Service Lines' },
  { value: VALUE_CHAIN_STAGES.length, suffix: '', label: 'Value-Chain Stages' },
];

// Team grid: one photo per person in /assets/images/team. Fill in `role` (e.g. 'UAS Pilot') and it
// shows under the name; names are as given on the headshot files.
const TEAM = [
  { name: 'Mr. Abraham', role: '', photo: 'abraham.jpg' },
  { name: 'Mr. Ade', role: '', photo: 'ade.jpg' },
  { name: 'Mr. Alekun Wodo', role: '', photo: 'alekun-wodo.jpg' },
  { name: 'Mr. Ini-Essiet', role: '', photo: 'ini-essiet.jpg' },
  { name: 'Mr. Kehinde', role: '', photo: 'kehinde.jpg' },
  { name: 'Mr. Nehemiah', role: '', photo: 'nehemiah.jpg' },
  { name: 'Mr. Oluwatobiloba', role: '', photo: 'oluwatobiloba.jpg' },
  { name: 'Mr. Opateyibo', role: '', photo: 'opateyibo.jpg' },
  { name: 'Mr. Oshoma', role: '', photo: 'oshoma.jpg' },
  { name: 'Ms. Baraya', role: '', photo: 'baraya.jpg' },
  { name: 'Ms. Chori', role: '', photo: 'chori.jpg' },
  { name: 'Ms. Jemiamah', role: '', photo: 'jemiamah.jpg' },
  { name: 'Ms. Jenifa', role: '', photo: 'jenifa.jpg' },
  { name: 'Miss Favour Elakhe', role: '', photo: 'favour-elakhe.jpg' },
  { name: 'Miss Nkem', role: '', photo: 'nkem.jpg' },
  { name: 'Miss Patience', role: '', photo: 'patience.jpg' },
  { name: 'Miss Peace Jaro', role: '', photo: 'peace-jaro.jpg' },
  { name: 'Miss Sharon', role: '', photo: 'sharon.jpg' },
  { name: 'Miss Tolu', role: '', photo: 'tolu.jpg' },
];

const PILLAR_IMAGES = [
  '/assets/images/manufacturing/IMG_6648.jpg',
  '/assets/images/manufacturing/NTHK-DIASPORA--8950.jpg',
  '/assets/images/manufacturing/NETHAWK_30.jpg',
  '/assets/images/nati/gallery-theory.jpg',
];

const ADVANTAGE_SLIDES = [
  ...WHY_US_PILLARS.map((p, i) => ({ id: p.id, title: p.title, text: p.description, image: PILLAR_IMAGES[i % PILLAR_IMAGES.length] })),
  {
    id: 'vision',
    title: 'Our Vision',
    text: VISION_TEXT,
    image: '/assets/gallery/NTHK-DIASPORA--8847.jpg',
  },
  {
    id: 'mission',
    title: 'Our Mission',
    text: MISSION_TEXT,
    image: '/assets/gallery/ops-vtol-flight.jpg',
  },
];

function OutlineButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/70 text-[11px] font-semibold uppercase tracking-[0.15em] text-white hover:bg-white hover:text-black transition-all"
    >
      {children}
      <ArrowRight className="w-3.5 h-3.5" />
    </button>
  );
}

// Counts up once the stats row scrolls into view
function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setDisplay(value);
      return;
    }
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / 1400);
        setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function WhyUsPage(props) {
  const { onOpenContact, onNavigateManufacturing, onNavigatePlatforms } = props;

  return (
    <div className="min-h-screen bg-[#010811] text-white flex flex-col font-sans selection:bg-blue-600 selection:text-white antialiased">
      <Navbar {...props} activePage="why-us" />

      <main className="flex-grow">
        {/* Hero: quote over video */}
        <section className="relative h-[100svh] min-h-[600px] max-h-[960px] w-full overflow-hidden flex flex-col">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" poster="/assets/video/nethawk-hero-poster.jpg" preload="metadata">
            <source src="/assets/video/nethawk-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#010811] via-[#010811]/40 to-[#010811]" />

          <div className="relative z-10 flex-1 flex items-center justify-center px-6">
            <blockquote className="max-w-3xl text-center space-y-5">
              <p className="text-xl sm:text-3xl font-light leading-snug text-white">
                “What are you trying to accomplish? That should be your main question.”
              </p>
              <p className="text-sm text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                Our systems fit every mission and are future-proofed by design. Upgrade individual sub-systems to scale
                and evolve capability without complete redesigns — because it's not just about technology, it's about
                your operational success.
              </p>
            </blockquote>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-24 px-6">
          <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 sm:gap-10 text-center">
            {STATS.map((s) => (
              <div key={s.label} className="space-y-2">
                <div className="text-5xl sm:text-7xl font-light tracking-tight text-white tabular-nums">
                  <CountUp value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Full-bleed statement */}
        <section className="relative min-h-[560px] sm:min-h-[700px] w-full flex items-end overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/nati/prog-3.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#010811]/95 via-[#010811]/40 to-transparent" />
          <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 pb-16 sm:pb-24">
            <div className="max-w-md space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight leading-[1.05] text-white">
                Built Around Your Mission
              </h2>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                One accountable partner from composite airframes and avionics to certified crews, mission software and
                the intelligence you act on — engineered in our own labs and proven in the field.
              </p>
              <OutlineButton onClick={onNavigateManufacturing}>Explore Labs &amp; Research</OutlineButton>
            </div>
          </div>
        </section>

        {/* Advantages slideshow */}
        <FullBleedSlideshow slides={ADVANTAGE_SLIDES} label="Strategic advantages" />

        {/* Image + text */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 py-20 sm:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="aspect-square overflow-hidden">
            <img src="/assets/images/manufacturing/NTHK-DIASPORA--8980.jpg" alt="Nethawk crew preparing an aircraft" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-5 max-w-md">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">Lowest Total Cost of Ownership</h2>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Modular, interchangeable architectures keep every system available for longer while substantially reducing
              scheduled maintenance and spares overhead.
            </p>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Line-replaceable units can be swapped in the field, sub-systems upgrade independently, and a single
              software ecosystem runs across the fleet — so capability grows without starting over.
            </p>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Choose to own the capability outright, or draw on it as a managed service and pay only for the outcome.
            </p>
          </div>
        </section>

        {/* Core values */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 pb-20 sm:pb-32 space-y-8">
          <h2 className="text-xl font-bold uppercase tracking-tight text-white">Our Values: LIFE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/15 pt-8">
            {VALUES_LIST.map((v) => (
              <div key={v.name} className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">{v.name}</h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our team */}
        <section id="our-team" className="max-w-6xl mx-auto px-6 sm:px-12 pb-20 sm:pb-32 space-y-8 scroll-mt-20">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">Our Team</h2>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              The engineers, pilots, instructors and specialists behind every Nethawk mission.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 border-t border-white/15 pt-8">
            {TEAM.map((m) => (
              <figure key={m.photo} className="space-y-3 group">
                <div className="aspect-[4/5] overflow-hidden bg-[#071322]">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={`/assets/images/team/${m.photo}`}
                    alt={m.role ? `${m.name}, ${m.role}` : m.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <figcaption className="space-y-0.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-white">{m.name}</p>
                  {m.role && <p className="text-xs text-slate-400 font-light">{m.role}</p>}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Full-bleed: platforms */}
        <section className="relative min-h-[560px] sm:min-h-[720px] w-full flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/manufacturing/IMG_6631.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#010811]/95 via-[#010811]/50 to-transparent" />
          <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12">
            <div className="max-w-md space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">Our Platforms</h2>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                SkyGrid Command Centre, SkyGrid GCS and Affenas connect every aircraft, operator and commander in one
                secure operating picture.
              </p>
              <OutlineButton onClick={onNavigatePlatforms}>Learn More</OutlineButton>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-24 sm:py-32 px-6 flex flex-col items-center gap-10 text-center">
          <div className="w-px h-40 bg-gradient-to-b from-transparent via-white/40 to-white/70" />
          <div className="space-y-5 max-w-md">
            <p className="text-sm text-slate-300 font-light">
              Delivering capabilities that protect lives, infrastructure and sovereign nations.
            </p>
            <button
              onClick={onOpenContact}
              className="px-6 py-3 border border-white/70 text-[11px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all"
            >
              Connect With Leadership
            </button>
          </div>
        </section>
      </main>

      <Footer {...props} />
    </div>
  );
}
