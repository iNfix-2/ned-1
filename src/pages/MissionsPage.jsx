import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { OutlineButton, Reveal, CinematicPanel } from '../components/Cinematic';
import Footer from '../components/Footer';
import { X } from 'lucide-react';

// Full-screen stacked mission panels; `align` sets which side the copy sits on
const MISSION_SECTIONS = [
  {
    id: 'isr',
    title: 'ISR & Aerial Surveillance',
    description: 'Tactical and long-endurance unmanned aerial systems engineered for persistent aerial surveillance, special mission integration, and operational intelligence.',
    image: '/assets/images/defense/nethawk-isr-recon.jpg',
    cta: 'Explore Platforms',
    action: 'onNavigatePlatforms',
    align: 'left',
  },
  {
    id: 'security',
    title: 'Persistent Awareness. Smarter Protection.',
    description: 'We integrate cameras, sensors, software, communications, analytics, and command interfaces to support authorized security, critical infrastructure, and asset surveillance.',
    image: '/assets/images/missions/persistent-awareness-substation.webp',
    cta: 'Defence Tech',
    action: 'onNavigateDefenseTech',
    align: 'right',
  },
  {
    id: 'infrastructure',
    title: 'Protecting Critical Infrastructure',
    description: 'Round-the-clock monitoring of pipelines, power, ports, and borders — giving operators early warning and a clear operational picture across vast, remote terrain.',
    image: '/assets/images/missions/critical-infrastructure.jpg',
    cta: 'Request Briefing',
    action: 'onOpenContact',
    align: 'left',
  },
  {
    id: 'intelligence',
    title: 'Turning Data Into Useful Intelligence',
    description: 'Developing intelligent technologies that help organisations process information, identify patterns, monitor environments, and support better decision-making.',
    image: '/assets/images/missions/nethawk-tactical-team.jpg',
    cta: 'Learn More',
    action: 'onNavigateWhyUs',
    align: 'right',
  },
  {
    id: 'integration',
    title: 'From Concept To Operational Capability',
    description: 'Connecting hardware, software, communications, sensors, and mission systems into complete operational solutions with lifecycle support.',
    image: '/assets/images/missions/nethawk-engineering-team.jpg',
    cta: 'Manufacturing',
    action: 'onNavigateManufacturing',
    align: 'left',
  },
  {
    id: 'partner',
    title: 'Securing Africa, Mission By Mission',
    description: 'Tell us what you are trying to accomplish. Our mission specialists will help scope the right platform, payload, and support package.',
    image: '/assets/images/missions/border-defense.jpg',
    cta: 'Contact Us',
    action: 'onNavigateContact',
    align: 'right',
  },
];

export default function MissionsPage(props) {
  const { onOpenContact } = props;
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const runAction = (name) => (props[name] || onOpenContact)?.();

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans antialiased overflow-x-hidden">
      <Navbar {...props} activePage="missions" />

      {/* Hero: full-screen video with title bottom-left */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" poster="/assets/video/nethawk-hero-poster.jpg" preload="metadata">
          <source src="/assets/video/nethawk-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

        <div className="relative z-10 h-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 flex flex-col justify-end pb-20 sm:pb-28">
          <Reveal className="space-y-5 max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white/80">Nethawk Missions</p>
            <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
              Wings To Rise,<br />Eyes To See
            </h1>
            <OutlineButton onClick={() => setVideoModalOpen(true)}>Watch</OutlineButton>
          </Reveal>
        </div>
      </section>

      {/* Mission Panels */}
      {MISSION_SECTIONS.map((section) => (
        <CinematicPanel key={section.id} image={section.image} align={section.align}>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight leading-[1.05]">
            {section.title}
          </h2>
          <p className="text-sm sm:text-base text-white/85 leading-relaxed">
            {section.description}
          </p>
          <div className="pt-2">
            <OutlineButton onClick={() => runAction(section.action)}>{section.cta}</OutlineButton>
          </div>
        </CinematicPanel>
      ))}

      <Footer {...props} />

      {/* Video Player Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in">
          <div className="relative w-full max-w-5xl aspect-video bg-black overflow-hidden border border-white/20 shadow-2xl">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors border border-white/20"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <video autoPlay controls loop playsInline className="w-full h-full object-contain" poster="/assets/video/nethawk-hero-poster.jpg" preload="metadata">
              <source src="/assets/video/nethawk-hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
