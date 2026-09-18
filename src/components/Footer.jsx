import React from 'react';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="bg-[#03070f] text-slate-400 font-sans text-xs relative overflow-hidden border-t border-white/10 pt-20 pb-12">
      
      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        
        {/* Top Section: Logo + Link Columns */}
        <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-10">
          
          {/* Brand Logo & Tagline */}
          <div className="lg:col-span-2 space-y-3">
            <img 
              src="/assets/images/logo/lockup.png" 
              alt="NETHAWK SOLUTIONS" 
              className="h-9 sm:h-10 w-auto object-contain mb-1"
            />
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
                <li><a href="#services" className="hover:text-white transition-colors block">Enterprise &amp; Digital</a></li>
                <li><a href="#platforms" className="hover:text-white transition-colors block">Nethawk Defence Tech</a></li>
                <li><a href="#ai-systems" className="hover:text-white transition-colors block">AI &amp; Intelligent Systems</a></li>
                <li><a href="#services" className="hover:text-white transition-colors block">Surveillance &amp; Security</a></li>
                <li><a href="#services" className="hover:text-white transition-colors block">Systems Integration</a></li>
                <li><a href="#services" className="hover:text-white transition-colors block">Research &amp; Innovation</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <h4 className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2 text-[10.5px] sm:text-xs leading-snug sm:leading-relaxed">
                <li><a href="#why-us" className="hover:text-white transition-colors block">About Nethawk</a></li>
                <li><a href="#why-us" className="hover:text-white transition-colors block">Our Mission &amp; Vision</a></li>
                <li><a href="#services" className="hover:text-white transition-colors block">Academy &amp; NATI</a></li>
                <li><a href="#why-us" className="hover:text-white transition-colors block">Industries We Serve</a></li>
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
