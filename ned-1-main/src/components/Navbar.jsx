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
          src="/assets/images/logo/lockup.png" 
          alt="NETHAWK SOLUTIONS" 
          className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
        />
      </button>

      {/* Floating Pill Navigation on Right (TEKEVER style) */}
      <div className="flex items-center space-x-4">
        <nav className="hidden lg:flex items-center bg-[#151d28]/80 hover:bg-[#151d28]/95 backdrop-blur-xl border border-white/15 rounded-full px-7 py-2.5 shadow-2xl transition-all">
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
                <div className="absolute top-full left-0 mt-2 w-48 rounded-2xl bg-[#08121f]/95 backdrop-blur-2xl border border-white/15 p-2 shadow-2xl space-y-1 animate-in fade-in slide-in-from-top-2">
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

            {/* 7. About */}
            <button
              onClick={onNavigateAbout}
              className={`transition-colors ${
                activePage === 'about' ? 'text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              About
            </button>

            {/* 8. Contact */}
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
          className="lg:hidden p-2.5 text-white bg-[#151d28]/80 hover:bg-[#151d28]/95 backdrop-blur-xl border border-white/15 rounded-full transition-colors flex items-center justify-center"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-4 h-4" /> : (
            <div className="w-4 flex flex-col space-y-1">
              <span className="w-full h-[1.5px] bg-white block"></span>
              <span className="w-full h-[1.5px] bg-white block"></span>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-x-4 top-20 bg-[#0c1420]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-3 lg:hidden z-50 animate-in fade-in slide-in-from-top-4 max-h-[80vh] overflow-y-auto">
          <button
            onClick={() => {
              setMobileOpen(false);
              onNavigateHome();
            }}
            className={`w-full text-left text-sm py-2 border-b border-white/5 ${
              activePage === 'home' ? 'font-semibold text-white' : 'font-medium text-slate-300'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              onNavigateWhyUs ? onNavigateWhyUs() : onNavigateHome();
            }}
            className={`w-full text-left text-sm py-2 border-b border-white/5 ${
              activePage === 'why-us' ? 'font-semibold text-white' : 'font-medium text-slate-300'
            }`}
          >
            Why us?
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              onNavigatePlatforms ? onNavigatePlatforms() : onNavigateDefenseTech();
            }}
            className={`w-full text-left text-sm py-2 border-b border-white/5 ${
              activePage === 'platforms' ? 'font-semibold text-white' : 'font-medium text-slate-300'
            }`}
          >
            Platforms (AR3, AR5, ARX)
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              onNavigateMissions();
            }}
            className={`w-full text-left text-sm py-2 border-b border-white/5 ${
              activePage === 'missions' ? 'font-semibold text-white' : 'font-medium text-slate-300'
            }`}
          >
            Missions
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              onNavigateAtlas ? onNavigateAtlas() : onNavigateHome();
            }}
            className={`w-full text-left text-sm py-2 border-b border-white/5 ${
              activePage === 'atlas' ? 'font-semibold text-white' : 'font-medium text-slate-300'
            }`}
          >
            ATLAS Real-Time Intelligence
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              onNavigateSpace ? onNavigateSpace() : onNavigateHome();
            }}
            className={`w-full text-left text-sm py-2 border-b border-white/5 ${
              activePage === 'space' ? 'font-semibold text-white' : 'font-medium text-slate-300'
            }`}
          >
            Space &amp; Satellite
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              onNavigateDigital ? onNavigateDigital() : onNavigateHome();
            }}
            className={`w-full text-left text-sm py-2 border-b border-white/5 ${
              activePage === 'digital' ? 'font-semibold text-white' : 'font-medium text-slate-300'
            }`}
          >
            Digital Systems
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              onNavigateAbout ? onNavigateAbout() : onNavigateHome();
            }}
            className={`w-full text-left text-sm py-2 border-b border-white/5 ${
              activePage === 'about' ? 'font-semibold text-white' : 'font-medium text-slate-300'
            }`}
          >
            About
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              onNavigateManufacturing();
            }}
            className={`w-full text-left text-sm py-2 border-b border-white/5 ${
              activePage === 'manufacturing' ? 'font-semibold text-white' : 'font-medium text-slate-300'
            }`}
          >
            Manufacturing
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              onNavigateAcademy();
            }}
            className={`w-full text-left text-sm py-2 border-b border-white/5 ${
              activePage === 'academy' ? 'font-semibold text-white' : 'font-medium text-slate-300'
            }`}
          >
            Academy &amp; NATI Institute
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              onNavigateContact ? onNavigateContact() : onOpenContact();
            }}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs tracking-wider uppercase rounded-full text-center mt-3 transition-colors"
          >
            Contact Team
          </button>
        </div>
      )}
    </header>
  );
}
