import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavHandlers } from '../navContext';

// Overview sections added to the home page between the hero and the existing carousels

const pillGlass =
  'inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white text-xs font-medium tracking-wide border border-white/25 transition-all hover:scale-105 whitespace-nowrap';
// The single solid-blue call to action allowed per view (10% accent budget)
const pillAccent =
  'inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-white text-xs font-semibold tracking-wider uppercase hover:bg-blue-600 transition-all hover:scale-105 shadow-lg shadow-accent/30 whitespace-nowrap';

// Section header matching MissionBanner / PlatformsCarousel
function SectionHeader({ title, text }) {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 px-4">
      <h2 className={`font-normal text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-white`}>{title}</h2>
      {text && <p className={`text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-zinc-400`}>{text}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 1. About Us brief — oversized condensed type, copy, monochrome photo */
/* ------------------------------------------------------------------ */
export function AboutBrief(props) {
  const { onNavigateWhyUs } = useNavHandlers(props);

  return (
    <section className="relative w-full bg-black atmos px-6 sm:px-8 lg:px-12 py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center">
        {/* Heading: solid "ABOUT" with an outlined "US" */}
        <h2 className="font-sans font-extrabold uppercase tracking-tight leading-none whitespace-nowrap text-6xl sm:text-7xl lg:text-8xl text-white">
          About{' '}
          <span className="text-transparent [-webkit-text-stroke:1.5px_#ffffff]">Us</span>
        </h2>

        {/* Copy */}
        <div className="flex flex-col justify-between gap-8 lg:py-4">
          <div className="space-y-5 text-sm sm:text-[15px] text-zinc-400 leading-relaxed text-justify [hyphens:auto]">
            <p>
              Nethawk Solutions delivers integrated digital, engineering, automation, security and defence technology
              capabilities for businesses, government institutions and defence organisations across Africa.
            </p>
            <p>
              We design and build our own unmanned systems at Nethawk Labs, fly them on real operations through Drone as
              a Service, connect every aircraft and operator with SkyGrid and Affenas, and train the next generation of
              aviation professionals at the Nethawk Aviation Training Institute.
            </p>
            <p>
              Our mission is to deliver people-centric Defence-Technology solutions that combine cutting-edge
              enterprise UAS technology with the rigorous standards of certified aviation and security professionals,
              ensuring a safe foundation for sustainable Pan-African development.
            </p>
          </div>
          <button
            onClick={onNavigateWhyUs}
            className="w-full py-3.5 border border-white/30 text-white font-display text-xl tracking-[0.08em] uppercase hover:bg-white hover:text-black transition-colors"
          >
            Read More
          </button>
        </div>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Nethawk Labs — building UAV solutions for the mission            */
/* ------------------------------------------------------------------ */
const LAB_STEPS = [
  { title: 'Design', text: 'Airframes and mission systems engineered in CAD and simulation.' },
  { title: 'Build', text: 'Prototyping, composites and in-house avionics under one roof.' },
  { title: 'Prove', text: 'Bench, ground and flight tested before any hand-over.' },
];

export function LabsFeature(props) {
  const { onNavigateManufacturing } = useNavHandlers(props);

  return (
    <section className="relative w-full bg-black atmos px-4 sm:px-8 lg:px-12 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        <SectionHeader
          title="Building UAV Solutions For The Mission"
          text="We don't just operate unmanned systems, we design, build and qualify them in-house, tailoring every aircraft and payload to the operation it supports."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Image mosaic */}
          <div className="lg:col-span-7 grid grid-cols-2 grid-rows-2 gap-4 sm:gap-5 h-[420px] sm:h-[520px]">
            <div className="relative col-span-2 row-span-1 lg:col-span-1 lg:row-span-2 rounded-[28px] overflow-hidden group card-lift border border-white/10">
              <img loading="lazy" decoding="async" src="/assets/images/manufacturing/IMG_6648.jpg" alt="Engineers inspecting a UAV airframe" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative rounded-[28px] overflow-hidden group card-lift border border-white/10">
              <img loading="lazy" decoding="async" src="/assets/images/manufacturing/NETHAWK_29.jpg" alt="Avionics soldering" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative rounded-[28px] overflow-hidden group card-lift border border-white/10">
              <img loading="lazy" decoding="async" src="/assets/images/manufacturing/IMG_6555.jpg" alt="CAD design work" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* Copy card */}
          <div className="lg:col-span-5 rounded-[28px] bg-accent-wash border border-accent-wash p-7 sm:p-10 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <h3 className="font-medium text-xl sm:text-2xl text-white tracking-tight leading-snug">
                From first sketch to flight-ready system
              </h3>
              <ul className="space-y-5">
                {LAB_STEPS.map(({ title, text }) => (
                  <li key={title} className="border-l-2 border-accent-bright pl-4">
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <button onClick={onNavigateManufacturing} className={pillAccent}>
                Explore Nethawk Labs <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. NATI — the training institute                                    */
/* ------------------------------------------------------------------ */
const PROGRAMMES = [
  { weeks: '8', label: 'Weeks', title: 'Basic UAS Operations' },
  { weeks: '4', label: 'Weeks', title: 'Advanced Operations' },
  { weeks: '3', label: 'Weeks', title: 'Mission Qualification' },
];

export function AcademyFeature(props) {
  const { onNavigateAcademy } = useNavHandlers(props);

  return (
    <section className="relative w-full bg-black atmos px-4 sm:px-8 lg:px-12 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        <SectionHeader
          title="Training Africa's Next Generation Of Aviators"
          text="NATI bridges traditional manned aviation and advanced Unmanned Aircraft Systems training, producing certified pilots, operators and technicians for Nigeria and across Africa."
        />

        <div className="relative w-full min-h-[560px] sm:min-h-[600px] rounded-[28px] overflow-hidden shadow-xl group">
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.02] transition-transform duration-1000"
            style={{ backgroundImage: "url('/assets/images/nati/nati-trainee-drone.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end gap-6 sm:gap-8">
            <div className="grid grid-cols-3 gap-3 sm:gap-5 max-w-2xl">
              {PROGRAMMES.map((p) => (
                <div key={p.title} className="rounded-2xl bg-accent-wash backdrop-blur-md border border-accent-bright/25 p-3 sm:p-5">
                  <p className="text-2xl sm:text-4xl font-extrabold text-white leading-none">
                    {p.weeks}<span className="text-xs sm:text-sm font-medium text-zinc-300 ml-1.5">{p.label}</span>
                  </p>
                  <p className="text-[11px] sm:text-sm text-zinc-200 mt-2 leading-snug">{p.title}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button onClick={onNavigateAcademy} className={pillAccent}>
                Visit NATI Academy <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a href="/academy/index.html#course-architecture" className={pillGlass}>View Programmes</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
