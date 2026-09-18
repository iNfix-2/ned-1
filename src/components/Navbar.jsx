import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenContact, onNavigateHome, onNavigateMissions, activePage = 'home' }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-12 py-5 flex items-center justify-between">
      {/* Image Logo */}
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

      {/* Floating Pill Navigation on Right */}
      <div className="flex items-center space-x-4">
        <nav className="hidden md:flex items-center bg-[#151d28]/70 hover:bg-[#151d28]/90 backdrop-blur-xl border border-white/15 rounded-full px-7 py-2.5 shadow-2xl transition-all">
          <div className="flex items-center space-x-7 text-xs font-medium tracking-wide">
            
            {/* 1. Missions */}
            <button
              onClick={onNavigateMissions}
              className={`transition-colors ${
                activePage === 'missions' ? 'text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Missions
            </button>

            {/* 2. Manufacturing (with Indicator Dot) */}
            <a
              href="#services"
              className="text-slate-300 hover:text-white flex items-center transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full mr-2 bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]"></span>
              <span>Manufacturing</span>
            </a>

            {/* 3. Academy */}
            <a 
              href="#services" 
              className="text-slate-300 hover:text-white transition-colors"
            >
              Academy
            </a>

            {/* 4. Defense Tech */}
            <a 
              href="#platforms" 
              className="text-slate-300 hover:text-white transition-colors"
            >
              Defense Tech
            </a>

            {/* 5. Contact */}
            <button
              onClick={onOpenContact}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </nav>

        {/* Hamburger Menu Toggle (Mobile only) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2.5 text-white bg-[#151d28]/70 hover:bg-[#151d28]/90 backdrop-blur-xl border border-white/15 rounded-full transition-colors flex items-center justify-center"
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
        <div className="fixed inset-x-4 top-20 bg-[#0c1420]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4 md:hidden z-50 animate-in fade-in slide-in-from-top-4">
          <button
            onClick={() => {
              setMobileOpen(false);
              onNavigateHome();
            }}
            className="w-full text-left text-sm font-semibold text-white py-2 border-b border-white/5"
          >
            Home
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              onNavigateMissions();
            }}
            className="w-full text-left text-sm font-medium text-slate-300 py-2 border-b border-white/5"
          >
            Missions
          </button>
          <a
            href="#services"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-semibold text-white py-2 border-b border-white/5 flex items-center"
          >
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] mr-2"></span>
            Manufacturing
          </a>
          <a
            href="#services"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium text-slate-300 py-2 border-b border-white/5"
          >
            Academy &amp; NATI Institute
          </a>
          <a
            href="#platforms"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium text-slate-300 py-2 border-b border-white/5"
          >
            Defense Tech &amp; UAV Systems
          </a>
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenContact();
            }}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs tracking-wider uppercase rounded-full text-center mt-2 transition-colors"
          >
            Contact Team
          </button>
        </div>
      )}
    </header>
  );
}
