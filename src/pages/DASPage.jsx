import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FullBleedSlideshow from '../components/FullBleedSlideshow';
import { PLATFORMS_LIST } from '../data/tekeverContent';
import { ArrowRight, ChevronDown } from 'lucide-react';

const DAS_SERVICES = [
  {
    id: 'isr',
    title: 'ISR & Aerial Surveillance',
    desc: 'Persistent aerial monitoring for security operations, critical asset protection, border and perimeter awareness, with live video delivered to your command team.',
    image: '/assets/gallery/ops-operator-vtol-scenic.jpg',
    points: ['Day and night EO/IR coverage', 'Live feed to your operations room', 'Patrol, overwatch and event cover']
  },
  {
    id: 'mapping',
    title: 'Long-Range Mapping',
    desc: 'Fixed-wing VTOL survey flights covering large areas in a single sortie, processed into accurate maps and models for planning and decision-making.',
    image: '/assets/platforms/nsl-drone-capture-5.jpg',
    points: ['Orthomosaics and elevation models', 'Topographical and mining surveys', 'Photogrammetry and GIS-ready outputs']
  },
  {
    id: 'corridor',
    title: 'Corridor Inspections',
    desc: 'Linear-asset inspection along pipelines, power lines, roads and rail, spotting faults, encroachment and damage without putting crews at risk.',
    image: '/assets/gallery/ops-vtol-dam-takeoff.jpg',
    points: ['Pipeline and power-line patrols', 'Encroachment and leak detection', 'Repeatable routes for change tracking']
  },
  {
    id: 'thermal',
    title: 'Thermal & Utility Inspections',
    desc: 'Radiometric thermal and zoom inspections of substations, dams, solar farms and telecom towers, finding hot spots and defects before they become outages.',
    image: '/assets/images/news/gurara-dam-substation.webp',
    points: ['Substation and transformer hot-spot surveys', 'Solar panel and tower inspections', 'Defect reports with geotagged imagery']
  },
  {
    id: 'emergency',
    title: 'Emergency Response & SAR',
    desc: 'Rapid-deployment crews supporting search and rescue, flood and fire response, giving responders a live aerial picture when every minute counts.',
    image: '/assets/gallery/ops-matrice-flight-trees.jpg',
    points: ['Thermal search for missing persons', 'Flood, fire and disaster assessment', 'Live situational awareness for responders']
  },
  {
    id: 'agriculture',
    title: 'Agriculture & Environment',
    desc: 'Multispectral and RGB surveys that track crop health, land use, deforestation and erosion, turning large landscapes into actionable data.',
    image: '/assets/gallery/ops-vtol-flight-blue.jpg',
    points: ['Crop health and yield mapping', 'Land-use and forestry monitoring', 'Erosion and water-body surveys']
  },
  {
    id: 'construction',
    title: 'Construction & Project Monitoring',
    desc: 'Scheduled flights over construction sites and major projects, documenting progress, measuring stockpiles and verifying work against plans.',
    image: '/assets/platforms/nsl-drone-capture-7.jpg',
    points: ['Progress tracking against schedule', 'Stockpile and volume measurements', 'As-built comparison and site records']
  }
];

const DAS_BENEFITS = [
  'No aircraft purchase, maintenance or crew training overhead',
  'Certified crews trained to international best practice',
  'Right platform for each task, from multirotor to long-range fixed-wing VTOL',
  'Mission planning and data management on SKYGRID',
  'Scalable from one-off surveys to recurring programmes',
  'Safety-first operations and regulatory compliance'
];

const MISSION_STEPS = [
  { step: '01', title: 'Brief & Scope', desc: 'We agree the area, objectives, deliverables and schedule with your team.', marker: [840, 120] },
  { step: '02', title: 'Airspace Approval', desc: 'We secure airspace clearances and regulatory approvals and complete the site risk assessment.', marker: [700, 70] },
  { step: '03', title: 'Mission Planning', desc: 'Routes, altitudes and payload settings are planned and validated in SkyGrid GCS.', marker: [575, 292] },
  { step: '04', title: 'Launch & Transit', desc: 'A certified NATI-trained crew launches the right aircraft and transits to the area of interest.', marker: [420, 225] },
  { step: '05', title: 'Data Capture', desc: 'The aircraft flies the planned pattern, capturing imagery and sensor data, with a live feed when required.', marker: [200, 185] },
  { step: '06', title: 'Process & Deliver', desc: 'Data is processed into maps, models, reports or alerts and delivered to your team, ready to act on.', marker: [905, 255] },
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

// Line-art mission profile in the style of SpaceX's "To the Space Station" diagram
function MissionDiagram({ activeStep }) {
  const surveyLines = Array.from({ length: 9 }, (_, i) => 105 + i * 20);
  return (
    <svg viewBox="0 0 1000 360" className="w-full h-auto" fill="none" aria-hidden="true">
      <defs>
        <clipPath id="survey-area">
          <circle cx="200" cy="185" r="110" />
        </clipPath>
      </defs>

      {/* Area of interest with survey pattern */}
      <circle cx="200" cy="185" r="150" stroke="rgba(255,255,255,0.12)" />
      <circle cx="200" cy="185" r="130" stroke="rgba(255,255,255,0.2)" strokeDasharray="3 5" />
      <circle cx="200" cy="185" r="110" stroke="rgba(255,255,255,0.6)" />
      <g clipPath="url(#survey-area)" stroke="rgba(59,130,246,0.55)">
        {surveyLines.map((y, i) => (
          <path key={y} d={i % 2 ? `M320 ${y}H80` : `M80 ${y}H320`} />
        ))}
      </g>
      <text x="200" y="360" textAnchor="middle" className="font-mono" fontSize="11" letterSpacing="2" fill="rgba(255,255,255,0.6)">AREA OF INTEREST</text>

      {/* Flight path: ground station -> area -> ground station */}
      <path d="M575 292 C 500 300, 420 240, 310 190" stroke="white" strokeWidth="1.5" />
      <path d="M310 180 C 420 140, 500 160, 575 285" stroke="rgba(255,255,255,0.35)" strokeDasharray="5 6" />

      {/* Ground station */}
      <g stroke="white" strokeWidth="1.3">
        <path d="M560 318L575 292L590 318M575 292V280" />
        <rect x="566" y="270" width="18" height="10" />
      </g>
      <text x="575" y="345" textAnchor="middle" className="font-mono" fontSize="11" letterSpacing="2" fill="rgba(255,255,255,0.6)">FIELD CREW</text>

      {/* Live data link to operations room */}
      <path d="M300 150 C 480 40, 700 40, 815 105" stroke="rgba(59,130,246,0.7)" strokeDasharray="2 6" />
      <g stroke="white" strokeWidth="1.3">
        <rect x="815" y="95" width="70" height="46" />
        <path d="M825 108H875M825 118H862M825 128H870M835 141V152M865 141V152M825 152H875" />
      </g>
      <text x="850" y="178" textAnchor="middle" className="font-mono" fontSize="11" letterSpacing="2" fill="rgba(255,255,255,0.6)">YOUR OPERATIONS ROOM</text>

      {/* Delivery */}
      <path d="M850 190 V 245 H 890" stroke="rgba(255,255,255,0.5)" />
      <path d="M884 239L892 245L884 251" stroke="rgba(255,255,255,0.5)" />

      {/* Step markers */}
      {MISSION_STEPS.map((s) => {
        const active = s.step === activeStep;
        const [x, y] = s.marker;
        return (
          <g key={s.step}>
            {active && <circle cx={x} cy={y} r="17" stroke="#3b82f6" strokeOpacity="0.45" />}
            <circle cx={x} cy={y} r="11" fill="#000000" stroke={active ? '#3b82f6' : 'white'} strokeWidth="1.3" />
            <text x={x} y={y + 3.5} textAnchor="middle" className="font-mono" fontSize="9" fill={active ? '#3b82f6' : 'white'}>
              {s.step}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function DASPage(props) {
  const { onOpenContact, onNavigateContact, onNavigatePlatforms } = props;
  const [platformIdx, setPlatformIdx] = useState(0);
  const [activeStep, setActiveStep] = useState(MISSION_STEPS[0].step);

  const platform = PLATFORMS_LIST[platformIdx];
  const currentStep = MISSION_STEPS.find((s) => s.step === activeStep);

  const serviceSlides = DAS_SERVICES.map((s) => ({
    id: s.id,
    title: s.title,
    text: s.desc,
    points: s.points,
    image: s.image,
  }));

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-sans selection:bg-accent selection:text-white antialiased">
      <Navbar {...props} activePage="das" />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-[100svh] min-h-[560px] max-h-[960px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/gallery/ops-vtol-flight.jpg')" }} />
          <div className="absolute inset-0 bg-[#000000]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/50" />

          <div className="relative z-10 text-center px-6 space-y-4">
            <h1 className="font-normal text-4xl sm:text-7xl lg:text-8xl tracking-tight text-white">Drone as a Service</h1>
            <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.3em] text-zinc-300">Aerial capability on demand</p>
          </div>

          <a
            href="#das-overview"
            onClick={(e) => { e.preventDefault(); document.getElementById('das-overview')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white animate-bounce"
            aria-label="Scroll to overview"
          >
            <ChevronDown className="w-7 h-7" />
          </a>
        </section>

        {/* Overview */}
        <section id="das-overview" className="relative scroll-mt-16">
          <div className="max-w-3xl mx-auto px-6 pt-20 sm:pt-28 pb-12 text-center">
            <p className="text-xs sm:text-sm uppercase tracking-[0.12em] leading-relaxed text-zinc-200">
              Nethawk deploys certified crews, enterprise UAS platforms and SkyGrid mission software to deliver
              surveillance, mapping and inspection as a managed service. We fly, you get the results — without owning
              or operating the fleet.
            </p>
          </div>
          <div className="relative h-[280px] sm:h-[420px] overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/gallery/wa-vtol-gimbal.jpg')" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-transparent to-[#000000]" />
          </div>
        </section>

        {/* Mission panels */}
        {[
          {
            id: 'surveillance',
            title: 'Surveillance Missions',
            text: 'Persistent day and night aerial overwatch for security operations, borders, events and critical assets, with live video streamed straight to your command team.',
            image: '/assets/images/nati/about-hands.jpg',
            right: false,
          },
          {
            id: 'inspection',
            title: 'Inspection & Mapping Missions',
            text: 'Survey-grade mapping and close inspection of pipelines, power lines, substations and sites, delivered as GIS-ready maps, models and defect reports.',
            image: '/assets/images/news/gurara-dam-uav-operators.webp',
            right: true,
          },
        ].map((p) => (
          <section key={p.id} className="relative min-h-[520px] sm:min-h-[680px] w-full flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${p.image}')` }} />
            <div className={`absolute inset-0 ${p.right ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-[#000000]/95 via-[#000000]/55 to-transparent`} />
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2">
              <div className={`max-w-md space-y-4 ${p.right ? 'lg:col-start-2' : ''}`}>
                <h2 className="font-normal text-3xl sm:text-4xl tracking-tight leading-[1.05] text-white">{p.title}</h2>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">{p.text}</p>
              </div>
            </div>
          </section>
        ))}

        {/* Fleet spotlight */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 py-20 sm:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 max-w-md">
            <h2 className="font-normal text-3xl sm:text-4xl tracking-tight leading-[1.05] text-white">{platform.name}</h2>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">{platform.desc}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {PLATFORMS_LIST.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setPlatformIdx(i)}
                  className={`px-3 py-1.5 border text-[10px] font-mono uppercase tracking-wider transition-colors ${
                    i === platformIdx ? 'border-accent-bright text-accent-bright' : 'border-white/20 text-zinc-400 hover:text-white hover:border-white/50'
                  }`}
                >
                  {p.name.split(' (')[0]}
                </button>
              ))}
            </div>
            <div className="pt-2">
              <OutlineButton onClick={onOpenContact}>Request This Aircraft</OutlineButton>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img loading="lazy" decoding="async" key={platform.id} src={platform.image} alt={platform.name} className="w-full h-full object-cover animate-in fade-in duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#000000_100%)]" />
          </div>
        </section>

        {/* Mission profile */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 pb-20 sm:pb-32 space-y-10">
          <div className="max-w-md space-y-4">
            <h2 className="font-normal text-3xl sm:text-4xl tracking-tight leading-[1.05] text-white">From Brief to Deliverable</h2>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              Every sortie follows the same disciplined profile, from the first scoping call to data in your hands.
            </p>
          </div>

          <MissionDiagram activeStep={activeStep} />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-white/15">
            {MISSION_STEPS.map((s) => (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                onMouseEnter={() => setActiveStep(s.step)}
                className={`text-left pt-4 pb-3 pr-3 border-t-2 -mt-px text-[10px] sm:text-[11px] font-mono uppercase tracking-wider transition-colors ${
                  s.step === activeStep ? 'border-accent-bright text-white' : 'border-transparent text-zinc-500 hover:text-zinc-200'
                }`}
              >
                {s.step}. {s.title}
              </button>
            ))}
          </div>
          <p className="text-sm text-zinc-300 font-light leading-relaxed max-w-2xl min-h-[3rem]">{currentStep.desc}</p>
        </section>

        {/* Services slideshow */}
        <FullBleedSlideshow slides={serviceSlides} label="What we deliver" />

        {/* Capability without the overhead */}
        <section className="relative min-h-[620px] sm:min-h-[720px] w-full flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/gallery/ops-team-matrice.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/95 via-[#000000]/70 to-[#000000]/20" />
          <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 py-16">
            <div className="max-w-md space-y-5">
              <h2 className="font-normal text-3xl sm:text-4xl tracking-tight leading-[1.05] text-white">Capability Without the Overhead</h2>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Buying, maintaining and crewing a UAS fleet takes time and capital. With Drone as a Service you pay for
                the outcome and draw on Nethawk’s aircraft, crews and software whenever you need them.
              </p>
              <ul className="divide-y divide-white/15 border-y border-white/15">
                {DAS_BENEFITS.map((b) => (
                  <li key={b} className="py-3 text-[11px] uppercase tracking-wider text-zinc-200">{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Final panel */}
        <section className="relative min-h-[520px] sm:min-h-[640px] w-full flex items-end overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/skygrid/skygrid-flight-center-demo.webp')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/50 to-[#000000]/10" />
          <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 pb-16 sm:pb-24">
            <div className="max-w-md space-y-4">
              <h2 className="font-normal text-3xl sm:text-4xl tracking-tight leading-[1.05] text-white">Have a Mission in Mind?</h2>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Tell us the area, the objective and the timeline. Missions are planned and tracked on SkyGrid, so you see
                exactly what was flown and when.
              </p>
              <div className="flex flex-wrap gap-3">
                <OutlineButton onClick={onOpenContact}>Request a Quote</OutlineButton>
                <OutlineButton onClick={onNavigatePlatforms}>About SkyGrid</OutlineButton>
              </div>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="py-24 sm:py-32 px-6 flex flex-col items-center gap-8 text-center">
          <div className="w-px h-40 bg-gradient-to-b from-transparent via-white/40 to-white/70" />
          <p className="text-[11px] uppercase tracking-[0.15em] text-zinc-400 max-w-md leading-relaxed">
            For mission enquiries, contact our operations team at{' '}
            <a href="mailto:info@nethawksolutions.org" className="text-white hover:text-accent-bright">info@nethawksolutions.org</a>
          </p>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3 border border-white/70 text-[11px] font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all"
          >
            Contact Operations
          </button>
        </section>
      </main>

      <Footer {...props} />
    </div>
  );
}
