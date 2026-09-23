import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

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

      {/* Floating Pill Navigation on Right (TEKEVER style) */}
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

            {/* 2. Platforms (with hover/click dropdown) */}
            <div 
              className="relative"
              onMouseEnter={() => setPlatformsDropdown(true)}
              onMouseLeave={() => setPlatformsDropdown(false)}
            >
              <button
                onClick={onNavigatePlatforms}
                className={`flex items-center space-x-1 transition-colors ${
                  activePage === 'platforms' || activePage === 'ar3' || activePage === 'ar5' || activePage === 'arx' || activePage === 'defense-tech'
                    ? 'text-white font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>Platforms</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {platformsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-2xl glass-card p-2 shadow-2xl space-y-1 animate-in fade-in slide-in-from-top-2">
                  <button
                    onClick={() => {
                      setPlatformsDropdown(false);
                      onNavigatePlatforms ? onNavigatePlatforms() : onNavigateDefenseTech();
                    }}
                    className="w-full text-left px-3.5 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    All Platforms
                  </button>
                  <button
                    onClick={() => {
                      setPlatformsDropdown(false);
                      onNavigateAR3 ? onNavigateAR3() : onNavigatePlatforms();
                    }}
                    className="w-full text-left px-3.5 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                  >
                    <span>AR3 EVO</span>
                    <span className="text-[10px] font-mono text-blue-400">VTOL</span>
                  </button>
                  <button
                    onClick={() => {
                      setPlatformsDropdown(false);
                      onNavigateAR5 ? onNavigateAR5() : onNavigatePlatforms();
                    }}
                    className="w-full text-left px-3.5 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                  >
                    <span>AR5</span>
                    <span className="text-[10px] font-mono text-blue-400">MALE</span>
                  </button>
                  <button
                    onClick={() => {
                      setPlatformsDropdown(false);
                      onNavigateARX ? onNavigateARX() : onNavigatePlatforms();
                    }}
                    className="w-full text-left px-3.5 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                  >
                    <span>ARX</span>
                    <span className="text-[10px] font-mono text-blue-400">SWARM</span>
                  </button>
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

            {/* 4. ATLAS */}
            <button
              onClick={onNavigateAtlas}
              className={`transition-colors ${
                activePage === 'atlas' ? 'text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              ATLAS
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

      {/* Floating Glassmorphism Menu Card matching media_1790064312340.jpg */}
      {mobileOpen && (
        <div 
          className="fixed top-20 left-4 right-4 sm:left-auto sm:right-12 w-auto max-w-[340px] sm:w-[380px] mx-auto z-50 lg:hidden glass-card rounded-[32px] px-8 pt-4 pb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.22),0_25px_60px_-15px_rgba(0,0,0,0.65)] animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Subtle Top Handle Pill */}
          <div className="w-10 h-1 bg-white/25 rounded-full mx-auto mb-7"></div>

          {/* Clean, spacious minimalist typography */}
          <div className="space-y-4 sm:space-y-5 text-left">
            <button
              onClick={() => {
                setMobileOpen(false);
                onNavigateWhyUs ? onNavigateWhyUs() : onNavigateHome();
              }}
              className="block w-full text-left text-xl sm:text-2xl font-light text-slate-200 hover:text-white transition-all tracking-wide"
            >
              Why us?
            </button>
            <button
              onClick={() => {
                setMobileOpen(false);
                onNavigatePlatforms ? onNavigatePlatforms() : onNavigateDefenseTech();
              }}
              className="block w-full text-left text-xl sm:text-2xl font-light text-slate-200 hover:text-white transition-all tracking-wide"
            >
              Platforms
            </button>
            <button
              onClick={() => {
                setMobileOpen(false);
                onNavigateMissions();
              }}
              className="block w-full text-left text-xl sm:text-2xl font-light text-slate-200 hover:text-white transition-all tracking-wide"
            >
              Missions
            </button>
            <button
              onClick={() => {
                setMobileOpen(false);
                onNavigateAtlas ? onNavigateAtlas() : onNavigateHome();
              }}
              className="block w-full text-left text-xl sm:text-2xl font-light text-slate-200 hover:text-white transition-all tracking-wide"
            >
              ATLAS
            </button>
            <button
              onClick={() => {
                setMobileOpen(false);
                onNavigateManufacturing ? onNavigateManufacturing() : onNavigateHome();
              }}
              className="block w-full text-left text-xl sm:text-2xl font-light text-slate-200 hover:text-white transition-all tracking-wide"
            >
              Manufacturing
            </button>
            <button
              onClick={() => {
                setMobileOpen(false);
                onNavigateAcademy ? onNavigateAcademy() : onNavigateHome();
              }}
              className="block w-full text-left text-xl sm:text-2xl font-light text-slate-200 hover:text-white transition-all tracking-wide"
            >
              Academy
            </button>
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
