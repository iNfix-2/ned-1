import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TitleReveal } from '../components/Cinematic';
import { ArrowRight, ChevronDown } from 'lucide-react';

// Dedicated pages for the three services in the navbar Products menu, rendered from one template
export const SERVICE_PAGES = {
  isr: {
    title: 'ISR & Aerial Surveillance',
    tagline: 'Persistent eyes over what matters',
    headline: 'Live Intelligence For Security Teams',
    hero: '/assets/gallery/ops-operator-vtol-scenic.jpg',
    intro: 'Persistent aerial monitoring for security operations, critical asset protection, and border and perimeter awareness, with live video delivered straight to your command team.',
    summary: 'Nethawk crews fly day and night intelligence, surveillance and reconnaissance missions using long-endurance fixed-wing VTOL and tactical multirotor platforms fitted with stabilised EO/IR payloads.',
    features: [
      { title: 'Day & Night Coverage', text: 'Gimbal-stabilised EO/IR payloads keep targets in view in low light and at night.' },
      { title: 'Live Feed to Command', text: 'Encrypted video and telemetry streamed to your operations room in real time.' },
      { title: 'Patrol & Overwatch', text: 'Scheduled patrols, event overwatch and rapid tasking when an incident develops.' },
    ],
    panels: [
      { title: 'Border & Perimeter Security', text: 'Wide-area patrols along borders, fences and remote perimeters, flagging movement and intrusion early so ground teams can respond with a clear picture.', image: '/assets/gallery/wa-vtol-gimbal.jpg' },
      { title: 'Critical Asset Protection', text: 'Overwatch of pipelines, power, ports and industrial sites, with repeatable flight routes that make anomalies easy to spot.', image: '/assets/gallery/ops-checkpoint-team.jpg' },
      { title: 'Event & Incident Overwatch', text: 'A live aerial view for security planners during major events, protests or emergencies, relayed to every decision-maker who needs it.', image: '/assets/gallery/ops-matrice-team-overflight.jpg' },
    ],
    deliverables: ['Live EO/IR video to your operations room', 'Geotagged stills and recorded footage', 'Incident and activity reports', 'Mission logs on SKYGRID'],
  },
  mapping: {
    title: 'Long-Range Mapping',
    tagline: 'Large areas. One sortie. Survey-grade data.',
    headline: 'Accurate Maps Of Vast Terrain',
    hero: '/assets/platforms/nsl-drone-capture-5.jpg',
    intro: 'Fixed-wing VTOL survey flights that cover large areas in a single sortie, processed into accurate maps and models for planning and decision-making.',
    summary: 'From mining concessions to new road corridors, our crews plan, fly and process mapping missions end to end, delivering GIS-ready outputs your engineers and planners can use immediately.',
    features: [
      { title: 'Orthomosaics', text: 'High-resolution, georeferenced imagery stitched into a single accurate map.' },
      { title: 'Elevation Models', text: 'Digital surface and terrain models for drainage, earthworks and route design.' },
      { title: 'Survey Accuracy', text: 'Ground control and RTK/PPK workflows for measurement-grade results.' },
    ],
    panels: [
      { title: 'Topographic & Mining Surveys', text: 'Rapid, repeatable surveys of pits, stockpiles and concessions, with volumes and change measured flight to flight.', image: '/assets/gallery/ops-vtol-flight.jpg' },
      { title: 'Infrastructure Planning', text: 'Corridor and site models that let engineers design roads, rail and utilities with an accurate picture of the terrain.', image: '/assets/platforms/nsl-drone-capture-2.jpg' },
      { title: 'Land & Environment', text: 'Land-use, forestry and erosion mapping across wide landscapes, turned into data you can act on.', image: '/assets/gallery/ops-vtol-flight-blue.jpg' },
    ],
    deliverables: ['Orthomosaic maps (GeoTIFF)', 'DSM / DTM elevation models', 'Contours and volume reports', 'GIS-ready shapefiles and point clouds'],
  },
  corridor: {
    title: 'Corridor Inspections',
    tagline: 'Every kilometre, inspected safely',
    headline: 'Inspect Linear Assets Without The Risk',
    hero: '/assets/gallery/ops-vtol-dam-takeoff.jpg',
    intro: 'Linear-asset inspection along pipelines, power lines, roads and rail, spotting faults, encroachment and damage without putting crews at risk.',
    summary: 'Our long-range platforms fly the full length of your network on repeatable routes, so every patrol can be compared with the last and problems are caught before they become outages.',
    features: [
      { title: 'Pipeline & Power-Line Patrols', text: 'Hundreds of kilometres covered per day on pre-planned, repeatable routes.' },
      { title: 'Fault & Leak Detection', text: 'Zoom and thermal payloads that pick out hot spots, leaks and damage.' },
      { title: 'Change Tracking', text: 'Compare patrols over time to catch encroachment and deterioration early.' },
    ],
    panels: [
      { title: 'Oil & Gas Pipelines', text: 'Right-of-way patrols that detect leaks, third-party interference and illegal tapping along remote pipeline routes.', image: '/assets/platforms/ops-live-vtol.jpg' },
      { title: 'Power Transmission', text: 'Tower, conductor and substation inspections with thermal imaging to find faults before they trip the network.', image: '/assets/images/missions/persistent-awareness-substation.webp' },
      { title: 'Roads, Rail & Waterways', text: 'Condition surveys of roads, rail lines, dams and canals, documenting damage and supporting maintenance planning.', image: '/assets/platforms/nsl-drone-capture-7.jpg' },
    ],
    deliverables: ['Defect reports with geotagged imagery', 'Thermal hot-spot surveys', 'Encroachment and change reports', 'Full-route video archive'],
  },
};

const PROCESS = [
  { step: '01', title: 'Brief & Scope', text: 'We agree objectives, area, deliverables and schedule with your team.' },
  { step: '02', title: 'Approvals & Planning', text: 'Airspace clearances, risk assessment and route planning in SKYGRID.' },
  { step: '03', title: 'Fly & Capture', text: 'A certified NATI-trained crew flies the mission with the right platform.' },
  { step: '04', title: 'Process & Deliver', text: 'Data is processed and delivered in the formats your team works with.' },
];

function OutlineButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center gap-2 px-6 py-3 border border-white/70 text-[11px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-colors"
    >
      {children}
      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

export default function ServicePage(props) {
  const { serviceId, onOpenContact, onNavigateService, onNavigateDAS } = props;
  const service = SERVICE_PAGES[serviceId] || SERVICE_PAGES.isr;
  const related = Object.entries(SERVICE_PAGES).filter(([id]) => id !== serviceId);

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-sans selection:bg-accent selection:text-white antialiased">
      <Navbar {...props} activePage="products" />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-[100svh] min-h-[560px] max-h-[960px] w-full flex items-center justify-center overflow-hidden">
          <div key={service.hero} className="absolute inset-0 bg-cover bg-center motion-kenburns" style={{ backgroundImage: `url('${service.hero}')` }} />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.3)_45%,#000_100%)]" />

          <div className="relative z-10 text-center px-6 space-y-4">
            <TitleReveal lines={[service.title]} className="font-normal text-4xl sm:text-7xl tracking-tight text-white" />
            <p className="motion-fade-up text-[11px] sm:text-xs font-medium uppercase tracking-[0.3em] text-zinc-300" style={{ '--d': '500ms' }}>{service.tagline}</p>
          </div>

          <button
            onClick={() => document.getElementById('service-overview')?.scrollIntoView({ behavior: 'smooth' })}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white animate-bounce"
            aria-label="Scroll to overview"
          >
            <ChevronDown className="w-7 h-7" />
          </button>
        </section>

        {/* Overview + key features */}
        <section id="service-overview" className="scroll-mt-16 max-w-6xl mx-auto px-6 sm:px-12 py-20 sm:py-28 space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <h2 className="font-normal text-2xl sm:text-4xl tracking-tight leading-[1.1]">{service.headline}</h2>
            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <p>{service.intro}</p>
              <p>{service.summary}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/15 pt-10">
            {service.features.map(({ title, text }) => (
              <div key={title} className="space-y-3">
                <h3 className="font-medium text-xs tracking-tight">{title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Alternating full-bleed application panels */}
        {service.panels.map((panel, idx) => {
          const isRight = idx % 2 === 0;
          return (
            <section key={panel.title} className="relative min-h-[520px] sm:min-h-[640px] w-full flex items-center overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${panel.image}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 md:hidden" />
              <div className={`absolute inset-0 hidden md:block ${isRight ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-black/85 via-black/40 to-transparent`} />
              <div className={`relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 flex self-end md:self-center pb-14 md:pb-0 ${isRight ? 'md:justify-end' : ''}`}>
                <div className="max-w-md space-y-4">
                  <h2 className="font-normal text-3xl sm:text-4xl tracking-tight leading-[1.1]">{panel.title}</h2>
                  <p className="text-sm sm:text-base text-white/85 leading-relaxed">{panel.text}</p>
                </div>
              </div>
            </section>
          );
        })}

        {/* Deliverables + process */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div className="space-y-6">
            <h2 className="font-normal text-2xl sm:text-3xl tracking-tight">What You Receive</h2>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {service.deliverables.map((d) => (
                <li key={d} className="py-4 flex items-center gap-4 text-sm sm:text-base text-zinc-200">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="font-normal text-2xl sm:text-3xl tracking-tight">How It Works</h2>
            <ol className="space-y-6">
              {PROCESS.map((p) => (
                <li key={p.step} className="grid grid-cols-[2.5rem_1fr] gap-x-4">
                  <span className="font-mono text-sm text-accent-bright pt-0.5">{p.step}</span>
                  <div className="space-y-1">
                    <h3 className="font-medium text-sm tracking-tight">{p.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Related services */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 pb-20 sm:pb-28 space-y-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-normal text-2xl sm:text-3xl tracking-tight">Related Services</h2>
            {onNavigateDAS && (
              <button onClick={onNavigateDAS} className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-bright hover:text-white inline-flex items-center gap-2 transition-colors">
                All Drone Services <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map(([id, s]) => (
              <button key={id} onClick={() => onNavigateService && onNavigateService(id)} className="group card-lift relative h-64 overflow-hidden text-left border border-white/10">
                <img loading="lazy" decoding="async" src={s.hero} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 p-6 space-y-1">
                  <h3 className="font-medium text-lg tracking-tight">{s.title}</h3>
                  <p className="text-xs text-zinc-300">{s.tagline}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 py-20 sm:py-24 text-center space-y-6">
            <h2 className="font-normal text-3xl sm:text-5xl tracking-tight">Plan Your Mission</h2>
            <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto">
              Tell us the area, the objective and the timeline. Our operations team will scope the right crew, platform and deliverables.
            </p>
            <OutlineButton onClick={onOpenContact}>Request a Quote</OutlineButton>
          </div>
        </section>
      </main>

      <Footer {...props} />
    </div>
  );
}
