import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const SKYGRID_URL = 'https://skygridinc.live';

const PILLARS = [
  {
    num: '01',
    title: 'Unified operations',
    text: 'One ecosystem from command oversight to field execution. Command Centre governs access, GCS executes missions, and fleet workflows keep every aircraft accountable.',
  },
  {
    num: '02',
    title: 'Secure by design',
    text: 'Named accounts, least-privilege access, trusted-device workflows and review-ready records built for teams that need clear chains of responsibility.',
  },
  {
    num: '03',
    title: 'Data-driven performance',
    text: 'Every flight, pilot and aircraft produces records that roll up into readiness, utilisation and mission-performance insight for decision makers.',
  },
  {
    num: '04',
    title: 'Mission-grade communication',
    text: 'Affenas links operators, commanders and intelligence teams on a secure communication layer purpose-built for military and security operations.',
  },
];

const PLATFORMS = [
  {
    id: 'command-centre',
    title: 'SkyGrid Command Centre',
    text: 'The source of truth for the entire operation. Manage organisations, users, roles and trusted devices, oversee the fleet, approve missions and review operational records from a single web console.',
    image: '/assets/images/missions/nethawk-command-center.jpg',
    href: SKYGRID_URL,
  },
  {
    id: 'gcs',
    title: 'SkyGrid GCS',
    text: 'A focused desktop ground control station for pilots and operators. Connect aircraft, plan and validate missions, run readiness checks, monitor live telemetry and sync operational state back to Command Centre.',
    image: '/assets/images/skygrid/skygrid-flight-center-demo.webp',
    href: SKYGRID_URL,
  },
  {
    id: 'fleet',
    title: 'Fleet Management',
    text: 'Coordinate aircraft assignments, vehicle profiles, maintenance and manufacturer workflows. Track readiness and full lifecycle history so every airframe is accounted for, from delivery to retirement.',
    image: '/assets/gallery/ops-team-matrice.jpg',
    href: SKYGRID_URL,
  },
  {
    id: 'performance',
    title: 'Performance Analysis',
    text: 'Turn flight logs and mission records into insight. Review sortie outcomes, flight hours, pilot activity and aircraft utilisation, and give auditors and commanders the evidence they need.',
    image: '/assets/images/skygrid/skygrid-dashboard.webp',
    href: SKYGRID_URL,
  },
  {
    id: 'affenas',
    title: 'Affenas',
    text: 'Intelligence communication software for military operations. Affenas delivers secure messaging, voice and data sharing between command posts, field units and ISR assets, keeping every echelon on a common operating picture.',
    image: '/assets/images/defense/nethawk-c2-mission.jpg',
    href: null,
  },
];

const CAPABILITIES = [
  {
    image: '/assets/images/skygrid/gcs-mission-route.webp',
    title: 'Mission Planning',
    text: 'Create routes, validate waypoints and review readiness before any aircraft leaves the ground.',
  },
  {
    image: '/assets/images/skygrid/gcs-live-thermal-zoom.webp',
    title: 'Live Telemetry',
    text: 'Monitor position, altitude, battery and link health in real time, with mission status visible to approved users.',
  },
  {
    image: '/assets/images/manufacturing/IMG_6567.jpg',
    title: 'Role-Based Access',
    text: 'Pilot, administrator, manufacturer and auditor views — each user sees only the workflows their role allows.',
  },
  {
    image: '/assets/gallery/ops-matrice-pad.jpg',
    title: 'Trusted Devices',
    text: 'Operational access is tied to approved workstations and accountable sessions, not just passwords.',
  },
  {
    image: '/assets/images/manufacturing/nethawk-qa-testing.jpg',
    title: 'Audit-Ready Records',
    text: 'Administrative and operational activity is recorded for review by authorised teams.',
  },
  {
    image: '/assets/images/defense/nethawk-isr-recon.jpg',
    title: 'Secure Intelligence Sharing',
    text: 'Affenas moves ISR feeds, reports and orders between units over encrypted, access-controlled channels.',
  },
];

const COMPARISON = [
  { spec: 'Primary Role', values: ['Governance & oversight', 'Field mission execution', 'Secure intelligence comms'] },
  { spec: 'Primary Users', values: ['Administrators, commanders, auditors', 'Pilots & drone operators', 'Command posts, field units, intel cells'] },
  { spec: 'Deployment', values: ['Web console', 'Windows desktop (MSI)', 'Command post & field devices'] },
  { spec: 'Core Functions', values: ['Users, roles, approvals, fleet oversight', 'Aircraft link, planning, telemetry', 'Messaging, voice, data & ISR sharing'] },
  { spec: 'Security Model', values: ['RBAC, trusted devices, audit trail', 'Account-bound, synced to Command Centre', 'Encrypted, access-controlled channels'] },
  { spec: 'Analytics', values: ['Fleet readiness & performance review', 'Flight logs & mission records', 'Operational message history'] },
];

function OutlineButton({ children, href, onClick }) {
  const className =
    'inline-flex items-center gap-2 px-5 py-2.5 border border-white/70 text-[11px] font-semibold uppercase tracking-[0.15em] text-white hover:bg-white hover:text-black transition-all';
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
        <ArrowRight className="w-3.5 h-3.5" />
      </a>
    );
  }
  return (
    <button onClick={onClick} className={className}>
      {children}
      <ArrowRight className="w-3.5 h-3.5" />
    </button>
  );
}

export default function PlatformsPage(props) {
  const { onOpenContact } = props;

  return (
    <div className="min-h-screen bg-[#010811] text-white flex flex-col font-sans selection:bg-blue-600 selection:text-white antialiased">
      <Navbar {...props} activePage="platforms" />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-[100svh] min-h-[560px] max-h-[900px] w-full flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/manufacturing/IMG_6555.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#010811] via-[#010811]/70 to-[#010811]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#010811] via-transparent to-transparent" />

          <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 sm:px-12 space-y-5">
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white">Platforms</h1>
            <p className="text-slate-300 text-sm sm:text-lg font-light leading-relaxed max-w-md">
              Software that plans, flies, manages and connects enterprise and defence UAV operations.
            </p>
            <OutlineButton href={SKYGRID_URL}>Explore SkyGrid</OutlineButton>
          </div>
        </section>

        {/* Pillars */}
        <section className="max-w-[1920px] mx-auto px-6 sm:px-12 py-20 sm:py-32 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight text-white">
            Building the software backbone of modern air operations
          </h2>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            {PILLARS.map((p) => (
              <div key={p.num} className="grid grid-cols-[2.5rem_1fr] gap-x-4">
                <span className="font-mono text-xs text-slate-500 pt-1">{p.num}</span>
                <div className="space-y-3">
                  <h3 className="text-base text-white">{p.title}</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Full-bleed Platform Panels */}
        {PLATFORMS.map((p) => (
          <section key={p.id} id={p.id} className="relative min-h-[520px] sm:min-h-[640px] w-full flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${p.image}')` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#010811]/95 via-[#010811]/60 to-transparent" />

            <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 sm:px-12 py-16">
              <div className="max-w-md space-y-5">
                <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">{p.title}</h2>
                <p className="text-sm text-slate-300 font-light leading-relaxed">{p.text}</p>
                {p.href ? (
                  <OutlineButton href={p.href}>Learn More</OutlineButton>
                ) : (
                  <OutlineButton onClick={onOpenContact}>Request a Briefing</OutlineButton>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* Capabilities Grid */}
        <section className="max-w-[1920px] mx-auto px-6 sm:px-12 py-20 sm:py-28 space-y-12">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">Core capabilities</h2>
            <p className="text-sm text-slate-400 font-light">What every team gets across SkyGrid and Affenas.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {CAPABILITIES.map((c) => (
              <article key={c.title} className="space-y-4 group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={c.image} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-sm text-white">{c.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">{c.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="max-w-[1920px] mx-auto px-6 sm:px-12 pb-20 sm:pb-28 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-light text-white">Platform Comparison</h2>
            <p className="text-slate-400 text-xs sm:text-sm">How each product fits into your operation.</p>
          </div>

          <div className="overflow-x-auto rounded-[28px] border border-white/15 bg-[#0f1a26] shadow-xl">
            <table className="w-full min-w-[720px] text-left text-xs sm:text-sm">
              <thead className="border-b border-white/10 bg-white/5 text-slate-300 uppercase tracking-wider font-mono text-[11px]">
                <tr>
                  <th className="p-4 sm:p-6">Specification</th>
                  <th className="p-4 sm:p-6 text-blue-300">Command Centre</th>
                  <th className="p-4 sm:p-6 text-blue-300">SkyGrid GCS</th>
                  <th className="p-4 sm:p-6 text-blue-300">Affenas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-light text-slate-300">
                {COMPARISON.map((row) => (
                  <tr key={row.spec}>
                    <td className="p-4 sm:p-6 font-medium text-white">{row.spec}</td>
                    {row.values.map((v) => (
                      <td key={v} className="p-4 sm:p-6">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-[1920px] mx-auto px-6 sm:px-12 pb-24 sm:pb-32">
          <div className="max-w-md space-y-5">
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">Get started</h2>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              Download SkyGrid GCS, onboard your organisation to Command Centre, or request a secure briefing on Affenas.
            </p>
            <div className="flex flex-wrap gap-3">
              <OutlineButton href={SKYGRID_URL}>Get GCS</OutlineButton>
              <OutlineButton onClick={onOpenContact}>Contact Us</OutlineButton>
            </div>
          </div>
        </section>
      </main>

      <Footer {...props} />
    </div>
  );
}
