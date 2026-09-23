import React, { useState } from 'react';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

export default function Navbar({ 
  onOpenContact, 
  onNavigateHome, 
  onNavigateMissions, 
  onNavigateManufacturing, 
  onNavigateAcademy, 
  onNavigateDefenseTech,
  onNavigatePlatforms,
  onNavigateAR3,
  onNavigateAR5,
  onNavigateARX,
  onNavigateWhyUs,
  onNavigateAtlas,
  onNavigateSpace,
  onNavigateDigital,
  onNavigateAbout,
  onNavigateNews,
  onNavigateContact,
  activePage = 'home' 
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [platformsDropdown, setPlatformsDropdown] = useState(false);
  const [mobilePlatformsOpen, setMobilePlatformsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-12 py-5 flex items-center justify-between">
      {/* Brand Logo */}
      <button 
        onClick={onNavigateHome}
        className="flex items-center space-x-2 group text-left focus:outline-none"
        aria-label="Nethawk Solutions Home"
      >
        <img 
          src="/assets/images/logo/nethawk-mark-white.png" 
          alt="NETHAWK SOLUTIONS" 
          className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
        />
      </button>

      {/* Floating Pill Navigation on Right */}
      <div className="flex items-center space-x-4">
        <nav className="hidden lg:flex items-center glass-pill rounded-full px-7 py-2.5 shadow-2xl transition-all">
          <div className="flex items-center space-x-6 text-xs font-medium tracking-wide">
            
            {/* 1. Why us? */}
            <button
              onClick={onNavigateWhyUs}
              className={`transition-colors ${
                activePage === 'why-us' ? 'text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Why us?
            </button>

            {/* 2. Platforms (with hover/click dropdown for Skygrid & Affenas) */}
            <div 
              className="relative"
              onMouseEnter={() => setPlatformsDropdown(true)}
              onMouseLeave={() => setPlatformsDropdown(false)}
            >
              <button
                onClick={() => setPlatformsDropdown(!platformsDropdown)}
                className={`flex items-center space-x-1.5 transition-colors ${
                  activePage === 'platforms' || activePage === 'defense-tech'
                    ? 'text-white font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>Platforms</span>
                <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${platformsDropdown ? 'rotate-180' : ''}`} />
              </button>

              {platformsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-60 rounded-2xl glass-card p-2 shadow-2xl space-y-1 animate-in fade-in slide-in-from-top-2 border border-white/15">
                  <a
                    href="https://skygridinc.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setPlatformsDropdown(false)}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs text-sky-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-1.5">
                      <span className="font-semibold text-white">Skygrid</span>
                      <ExternalLink className="w-3.5 h-3.5 text-sky-400 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <span className="text-[10px] font-mono text-sky-400 bg-sky-500/15 border border-sky-500/30 px-2 py-0.5 rounded-full">
                      skygridinc.live
                    </span>
                  </a>

                  <div className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs text-slate-300 flex items-center justify-between">
                    <span className="font-medium text-slate-300">Affenas</span>
                    <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Missions */}
            <button
              onClick={onNavigateMissions}
              className={`transition-colors ${
                activePage === 'missions' ? 'text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Missions
            </button>

            {/* 4. Labs & Research */}
            <button
              onClick={onNavigateManufacturing}
              className={`transition-colors ${
                activePage === 'manufacturing' || activePage === 'labs' ? 'text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Labs &amp; Research
            </button>

            {/* 5. Space */}
            <button
              onClick={onNavigateSpace}
              className={`transition-colors ${
                activePage === 'space' ? 'text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Space
            </button>

            {/* 6. Digital */}
            <button
              onClick={onNavigateDigital}
              className={`transition-colors ${
                activePage === 'digital' ? 'text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Digital
            </button>

            {/* 7. Academy & NATI */}
            <button
              onClick={onNavigateAcademy}
              className={`transition-colors ${
                activePage === 'academy' ? 'text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Academy
            </button>

            {/* 8. About */}
            <button
              onClick={onNavigateAbout}
              className={`transition-colors ${
                activePage === 'about' ? 'text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              About
            </button>

            {/* 9. Contact */}
            <button
              onClick={onNavigateContact || onOpenContact}
              className={`transition-colors ${
                activePage === 'contact' ? 'text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Contact
            </button>
          </div>
        </nav>

        {/* Hamburger Menu Toggle (Mobile & Tablet) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-1.5 text-white hover:text-slate-200 transition-colors flex items-center justify-center focus:outline-none z-50 relative"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="w-6 h-6 stroke-[1.5]" />
          ) : (
            <div className="p-2.5 glass-pill rounded-full transition-all hover:scale-105 flex items-center justify-center">
              <div className="w-4 flex flex-col space-y-1">
                <span className="w-full h-[1.5px] bg-white block"></span>
                <span className="w-full h-[1.5px] bg-white block"></span>
              </div>
            </div>
          )}
        </button>
      </div>

      {/* Dimmed backdrop overlay for light-dismiss */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-[3px] z-40 lg:hidden transition-opacity animate-in fade-in duration-200"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Floating Glassmorphism Menu Card matching mobile UI */}
      {mobileOpen && (
        <div 
          className="fixed top-20 left-4 right-4 sm:left-auto sm:right-12 w-auto max-w-[340px] sm:w-[380px] mx-auto z-50 lg:hidden glass-card rounded-[32px] px-8 pt-4 pb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.22),0_25px_60px_-15px_rgba(0,0,0,0.65)] animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Subtle Top Handle Pill */}
          <div className="w-10 h-1 bg-white/25 rounded-full mx-auto mb-7"></div>

          {/* Clean, spacious minimalist typography */}
          <div className="space-y-4 sm:space-y-5 text-left">
            {/* 1. Why us? */}
            <button
              onClick={() => {
                setMobileOpen(false);
                onNavigateWhyUs ? onNavigateWhyUs() : onNavigateHome();
              }}
              className="block w-full text-left text-xl sm:text-2xl font-light text-slate-200 hover:text-white transition-all tracking-wide"
            >
              Why us?
            </button>

            {/* 2. Platforms with Dropdown Toggle Arrow */}
            <div>
              <button
                onClick={() => setMobilePlatformsOpen(!mobilePlatformsOpen)}
                className="w-full flex items-center justify-between text-left text-xl sm:text-2xl font-light text-slate-200 hover:text-white transition-all tracking-wide group"
              >
                <span>Platforms</span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 group-hover:text-white transition-transform duration-300 ${
                    mobilePlatformsOpen ? 'rotate-180 text-[#38bdf8]' : ''
                  }`} 
                />
              </button>

              {/* Sub-items inside Platforms dropdown */}
              {mobilePlatformsOpen && (
                <div className="mt-3 ml-2 pl-3 border-l border-white/20 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <a
                    href="https://skygridinc.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between text-base sm:text-lg font-light text-sky-400 hover:text-sky-300 transition-colors py-0.5"
                  >
                    <span className="flex items-center space-x-1.5">
                      <span>Skygrid</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </span>
                    <span className="text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30 px-2 py-0.5 rounded-full">
                      skygridinc.live
                    </span>
                  </a>

                  <div className="flex items-center justify-between text-base sm:text-lg font-light text-slate-400 py-0.5">
                    <span>Affenas</span>
                    <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Missions */}
            <button
              onClick={() => {
                setMobileOpen(false);
                onNavigateMissions();
              }}
              className="block w-full text-left text-xl sm:text-2xl font-light text-slate-200 hover:text-white transition-all tracking-wide"
            >
              Missions
            </button>

            {/* 4. Labs & Research (replaces Manufacturing) */}
            <button
              onClick={() => {
                setMobileOpen(false);
                onNavigateManufacturing ? onNavigateManufacturing() : onNavigateHome();
              }}
              className="block w-full text-left text-xl sm:text-2xl font-light text-slate-200 hover:text-white transition-all tracking-wide"
            >
              Labs &amp; Research
            </button>

            {/* 5. Academy */}
            <button
              onClick={() => {
                setMobileOpen(false);
                onNavigateAcademy ? onNavigateAcademy() : onNavigateHome();
              }}
              className="block w-full text-left text-xl sm:text-2xl font-light text-slate-200 hover:text-white transition-all tracking-wide"
            >
              Academy
            </button>

            {/* 6. Join the Team / Contact */}
            <button
              onClick={() => {
                setMobileOpen(false);
                onNavigateContact ? onNavigateContact() : onOpenContact();
              }}
              className="block w-full text-left text-xl sm:text-2xl font-light text-slate-200 hover:text-white transition-all tracking-wide"
            >
              Join the Team
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
