import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Play, X } from 'lucide-react';

const MISSIONS_DATA = [
  {
    id: 'isr',
    badge: 'NETHAWK DEFENCE TECH',
    title: 'ISR & Aerial Surveillance',
    description: "Tactical and long-endurance unmanned aerial systems (UAS/UAV) engineered for persistent aerial surveillance, special mission integration, and operational intelligence.",
    backdrop: '/assets/images/missions/nethawk-command-center.jpg',
    thumb: '/assets/images/missions/nethawk-command-center.jpg',
    orbitLabel: 'ISR & Aerial Surveillance',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-drone-flying-over-clouds-40455-large.mp4'
  },
  {
    id: 'security',
    badge: 'SURVEILLANCE & SECURITY TECHNOLOGY',
    title: 'Persistent Awareness. Smarter Protection.',
    description: 'We integrate cameras, sensors, software, communications, analytics, and command interfaces to support authorized security, critical infrastructure, and asset surveillance.',
    backdrop: '/assets/images/missions/persistent-awareness.jpg',
    thumb: '/assets/images/missions/persistent-awareness.jpg',
    orbitLabel: 'Persistent Awareness',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-waves-in-the-sea-43187-large.mp4'
  },
  {
    id: 'contested',
    badge: 'AI, DATA & INTELLIGENT SYSTEMS',
    title: 'Turning Data into Useful Intelligence',
    description: 'Developing intelligent technologies that help organisations process information, identify patterns, monitor environments, and support better decision-making.',
    backdrop: '/assets/images/missions/nethawk-tactical-team.jpg',
    thumb: '/assets/images/missions/nethawk-tactical-team.jpg',
    orbitLabel: 'Intelligent Systems',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-rural-forest-road-42686-large.mp4'
  },
  {
    id: 'integration',
    badge: 'ENGINEERING & SYSTEMS INTEGRATION',
    title: 'From Concept to Operational Capability',
    description: 'Connecting hardware, software, communications, sensors, and mission systems into complete operational solutions with lifecycle support.',
    backdrop: '/assets/images/missions/nethawk-engineering-team.jpg',
    thumb: '/assets/images/missions/nethawk-engineering-team.jpg',
    orbitLabel: 'Systems Integration',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-airplane-taking-off-from-an-airport-43097-large.mp4'
  }
];

export default function MissionsPage({ onNavigateHome, onNavigateMissions, onNavigateManufacturing, onNavigateAcademy, onNavigateDefenseTech, onOpenContact }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const activeMission = MISSIONS_DATA[activeIdx];

  // Auto-slide orbit every 6s, pause while video modal is open
  useEffect(() => {
    if (videoModalOpen) return;
    const id = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % MISSIONS_DATA.length);
    }, 6000);
    return () => clearInterval(id);
  }, [videoModalOpen]);

  return (
    <div className="relative min-h-screen w-full bg-[#050b14] text-white flex flex-col justify-between overflow-x-hidden font-sans">
      
      {/* 1. Full-Screen Background Image taking 100% View Width */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-out z-0 pointer-events-none"
        style={{
          backgroundImage: `url('${activeMission.backdrop}')`,
        }}
      >
        {/* Cinematic Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/75"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#050b14]"></div>

        {/* Glowing Blue Celestial Sphere */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] h-[320px] sm:h-[650px] rounded-full bg-gradient-to-tr from-blue-600/25 via-blue-900/15 to-transparent blur-3xl pointer-events-none"></div>
      </div>

      {/* 2. Header Navigation */}
      <Navbar 
        onOpenContact={onOpenContact} 
        onNavigateHome={onNavigateHome}
        onNavigateMissions={onNavigateMissions}
        onNavigateManufacturing={onNavigateManufacturing}
        onNavigateAcademy={onNavigateAcademy}
        onNavigateDefenseTech={onNavigateDefenseTech}
        activePage="missions"
      />

      {/* 3. Main Visual Canvas Container */}
      <div className="relative z-10 flex-grow flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 sm:px-12 lg:px-16 pt-28 sm:pt-32 pb-16 w-full max-w-[1920px] mx-auto gap-8 lg:gap-12">

        {/* Left Column: Mission Details */}
        <div className="relative z-20 max-w-xl text-left space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] sm:text-xs font-mono text-[#38bdf8] font-bold tracking-wider uppercase block">
              {activeMission.badge}
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-md">
              {activeMission.title}
            </h1>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed max-w-lg drop-shadow">
            {activeMission.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setVideoModalOpen(true)}
              className="inline-flex items-center px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white text-xs font-medium tracking-wide border border-white/25 transition-all hover:scale-105 shadow-2xl"
            >
              Play Video
            </button>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wider uppercase transition-all hover:scale-105 shadow-xl shadow-blue-500/25"
            >
              Briefing Request
            </button>
          </div>

          {/* Mobile / Tablet Horizontal Track Switcher (visible on < lg) */}
          <div className="pt-6 lg:hidden w-full">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2.5">
              Select Mission Track
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {MISSIONS_DATA.map((item, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-2 border ${
                      isActive
                        ? 'bg-blue-600/30 border-blue-500 text-white shadow-lg'
                        : 'bg-white/5 border-white/15 text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse"></span>}
                    <span>{item.orbitLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Center: Glowing Circular Play Button (Desktop) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden xl:flex items-center justify-center">
          <button
            onClick={() => setVideoModalOpen(true)}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-xl border border-white/30 text-white flex items-center justify-center relative group shadow-2xl transition-all hover:scale-110"
            aria-label="Play mission video"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-blue-600/40 to-blue-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <Play className="w-8 h-8 text-white fill-white ml-1 relative z-10 drop-shadow" />
          </button>
        </div>

        {/* Right Column: The Vertical Curved Orbit Arc and Cards (Desktop) */}
        <div className="relative z-20 hidden lg:flex flex-col items-end justify-center h-full max-h-[720px] w-[460px] xl:w-[500px]">
          
          {/* SVG Orbit Arc Line */}
          <div className="absolute top-0 bottom-0 right-[150px] w-28 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 680" fill="none">
              <path
                d="M 90 0 Q 5 340 90 680"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Orbit Cards Stack */}
          <div className="space-y-6 w-full flex flex-col items-end">
            {MISSIONS_DATA.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`cursor-pointer transition-all duration-500 flex items-center justify-end group ${
                    isActive
                      ? 'scale-105 opacity-100'
                      : 'opacity-50 hover:opacity-90 hover:scale-102'
                  }`}
                >
                  {/* Left Label on Active Card */}
                  <div className="mr-4 text-right max-w-[200px]">
                    <span className={`text-xs font-semibold block leading-tight ${
                      isActive ? 'text-white font-bold' : 'text-slate-400'
                    }`}>
                      {item.orbitLabel}
                    </span>
                  </div>

                  {/* Active Dot Positioned on the Arc */}
                  <div className="w-6 flex items-center justify-center mr-3 relative">
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] animate-pulse"></span>
                    )}
                  </div>

                  {/* Thumbnail Card */}
                  <div className={`w-36 sm:w-44 aspect-[16/10] rounded-2xl overflow-hidden border transition-all shadow-2xl relative ${
                    isActive ? 'border-white/40 ring-2 ring-white/10' : 'border-white/15'
                  }`}>
                    <img
                      src={item.thumb}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Video Player Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-6 right-6 z-30 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors border border-white/20"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Player */}
            <video
              src={activeMission.videoUrl}
              autoPlay
              controls
              loop
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

    </div>
  );
}
