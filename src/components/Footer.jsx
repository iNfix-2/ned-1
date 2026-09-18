import React from 'react';

export default function Footer({ 
  onOpenContact, 
  onNavigateHome, 
  onNavigateMissions, 
  onNavigateManufacturing, 
  onNavigateAcademy, 
  onNavigateDefenseTech 
}) {
  return (
    <footer className="bg-[#03070f] text-slate-400 font-sans text-xs relative overflow-hidden border-t border-white/10 pt-20 pb-12">
      
      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        
        {/* Top Section: Logo + Link Columns */}
        <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-10">
          
          {/* Brand Logo & Tagline */}
          <div className="lg:col-span-2 space-y-3">
            <button 
              onClick={onNavigateHome}
              className="text-left focus:outline-none block"
            >
              <img 
                src="/assets/images/logo/lockup.png" 
                alt="NETHAWK SOLUTIONS" 
                className="h-9 sm:h-10 w-auto object-contain mb-1"
              />
            </button>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Delivering integrated digital, engineering, automation, security, and defence technology capabilities.
            </p>
          </div>

          {/* 3-Column Tabs Grid: Services, Company, Our Values */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8 lg:col-span-3">
            {/* Services */}
            <div className="space-y-3">
              <h4 className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-2 text-[10.5px] sm:text-xs leading-snug sm:leading-relaxed">
                <li><button onClick={onNavigateDefenseTech} className="hover:text-white transition-colors text-left block">Nethawk Defence Tech</button></li>
                <li><button onClick={onNavigateManufacturing} className="hover:text-white transition-colors text-left block">UAS Manufacturing</button></li>
                <li><button onClick={onNavigateAcademy} className="hover:text-white transition-colors text-left block">Academy &amp; NATI</button></li>
                <li><button onClick={onNavigateMissions} className="hover:text-white transition-colors text-left block">ISR &amp; Surveillance</button></li>
                <li><button onClick={onNavigateMissions} className="hover:text-white transition-colors text-left block">Intelligent Systems</button></li>
                <li><button onClick={onNavigateMissions} className="hover:text-white transition-colors text-left block">Systems Integration</button></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <h4 className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2 text-[10.5px] sm:text-xs leading-snug sm:leading-relaxed">
                <li><button onClick={onNavigateHome} className="hover:text-white transition-colors text-left block">About Nethawk</button></li>
                <li><button onClick={onNavigateHome} className="hover:text-white transition-colors text-left block">Our Mission &amp; Vision</button></li>
                <li><button onClick={onNavigateAcademy} className="hover:text-white transition-colors text-left block">NATI Training Institute</button></li>
                <li><button onClick={onNavigateDefenseTech} className="hover:text-white transition-colors text-left block">UAV Platforms</button></li>
                <li><button onClick={onOpenContact} className="hover:text-white transition-colors text-left block">Why Nethawk</button></li>
              </ul>
            </div>

            {/* Values & Standards */}
            <div className="space-y-3">
              <h4 className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                Our Values
              </h4>
              <ul className="space-y-2 text-[10.5px] sm:text-xs leading-snug sm:leading-relaxed">
                <li className="text-slate-300 font-medium">Excellence</li>
                <li className="text-slate-300 font-medium">Innovation</li>
                <li className="text-slate-300 font-medium">Precision</li>
                <li className="text-slate-300 font-medium">Integrity</li>
                <li className="text-slate-300 font-medium">Security</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Middle Section: Contact, Vision & Mission Statements */}
        <div className="border-t border-white/5 pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-[11px] leading-relaxed">
          
          {/* Contact */}
          <div className="space-y-1">
            <h5 className="text-white font-bold uppercase tracking-wider mb-2">Get In Touch</h5>
            <div><a href="mailto:info@nethawksolutions.org" className="hover:text-white transition-colors">info@nethawksolutions.org</a></div>
            <div><a href="mailto:contact@nethawksolutions.org" className="hover:text-white transition-colors">contact@nethawksolutions.org</a></div>
          </div>

          {/* Vision */}
          <div className="space-y-1">
            <h5 className="text-white font-bold uppercase tracking-wider mb-2">Our Vision</h5>
            <p className="text-slate-400">To become the provider of innovative technology solutions transforming businesses, government institutions, defence, and national development.</p>
          </div>

          {/* Mission */}
          <div className="space-y-1">
            <h5 className="text-white font-bold uppercase tracking-wider mb-2">Our Mission</h5>
            <p className="text-slate-400">To build secure, intelligent, and scalable technology solutions that solve real-world problems, strengthen organizations, drive innovation, and create lasting impact.</p>
          </div>

        </div>

        {/* Legal Row */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400">
          <div>
            Copyright NETHAWK SOLUTIONS. All Rights Reserved.
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Security Standards</a>
          </div>
        </div>

      </div>

      {/* Giant Faint Watermark "NETHAWK" across the bottom */}
      <div className="w-full select-none pointer-events-none mt-12 flex justify-center overflow-hidden">
        <span className="font-sans text-[12vw] font-black tracking-widest text-white/[0.03] uppercase whitespace-nowrap leading-none block">
          NETHAWK
        </span>
      </div>

    </footer>
  );
}
