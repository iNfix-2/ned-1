import React from 'react';
import { useNavHandlers, pageHref } from '../navContext';
import NavLink from './NavLink';
import { VALUES_LIST, VISION_TEXT, MISSION_TEXT, HEAD_OFFICE } from '../data/tekeverContent';

// Registered company name and CAC registration number shown in the copyright line.
// Fill in RC_NUMBER (and the entity type, e.g. 'Nethawk Solutions Ltd') once confirmed; the RC part stays hidden while empty.
const LEGAL_NAME = 'Nethawk Solutions';
const RC_NUMBER = '';

export default function Footer(props) {
  const {
    onOpenContact,
    onNavigateHome,
    onNavigateMissions,
    onNavigateManufacturing,
    onNavigateWhyUs,
    onNavigateNews,
    onNavigateContact,
    onNavigateDAS,
    onNavigateGallery,
    onNavigateBlog,
    onNavigateCareers
  } = useNavHandlers(props);
  return (
    <footer className="bg-[#000000] text-zinc-400 font-sans text-xs relative overflow-hidden atmos border-t border-accent-wash pt-20 pb-12">
      
      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        
        {/* Top Section: Logo + Link Columns */}
        <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-10">
          
          {/* Brand Logo & Tagline */}
          <div className="lg:col-span-2 space-y-3">
            <NavLink 
              href={pageHref('home')} 
              onNavigate={onNavigateHome}
              className="text-left focus:outline-none block"
            >
              <img loading="lazy" decoding="async" 
                src="/assets/images/logo/nethawk-logo-white.png"
                alt="NETHAWK SOLUTIONS" 
                className="h-9 sm:h-10 w-auto object-contain mb-1"
              />
            </NavLink>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Delivering integrated digital, engineering, automation, security, and defence technology capabilities.
            </p>
          </div>

          {/* 3-Column Tabs Grid: Services/What We Do, Company/Corporate, Our Values */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8 lg:col-span-3">
            {/* What we do */}
            <div className="space-y-3">
              <h4 className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                What We Do
              </h4>
              <ul className="space-y-2 text-xs leading-snug sm:leading-relaxed">
                <li><NavLink href={pageHref('why-us')} onNavigate={onNavigateWhyUs || onNavigateHome} className="hover:text-white transition-colors text-left block">Why Us</NavLink></li>
                <li><NavLink href={pageHref('das')} onNavigate={onNavigateDAS} className="hover:text-white transition-colors text-left block">Drone as a Service</NavLink></li>
                <li><a href="https://skygridinc.live" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-left block">Skygrid Intelligence</a></li>
                <li><NavLink href={pageHref('missions')} onNavigate={onNavigateMissions} className="hover:text-white transition-colors text-left block">Missions</NavLink></li>
                <li><NavLink href={pageHref('manufacturing')} onNavigate={onNavigateManufacturing || onNavigateHome} className="hover:text-white transition-colors text-left block">Labs &amp; Research</NavLink></li>
              </ul>
            </div>

            {/* Corporate */}
            <div className="space-y-3">
              <h4 className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                Corporate
              </h4>
              <ul className="space-y-2 text-xs leading-snug sm:leading-relaxed">
                <li><NavLink href={pageHref('why-us')} onNavigate={onNavigateWhyUs || onNavigateHome} className="hover:text-white transition-colors text-left block">About Nethawk</NavLink></li>
                <li><NavLink href={pageHref('manufacturing')} onNavigate={onNavigateManufacturing} className="hover:text-white transition-colors text-left block">Labs &amp; Research</NavLink></li>
                <li><a href="/academy/index.html" className="hover:text-white transition-colors text-left block font-medium text-accent-bright">NATI Academy Hub</a></li>
                <li><a href="/academy/index.html#course-architecture" className="hover:text-white transition-colors text-left block">Academy Programmes</a></li>
                <li><NavLink href={pageHref('careers')} onNavigate={onNavigateCareers} className="hover:text-white transition-colors text-left block">Careers</NavLink></li>
                <li><NavLink href={pageHref('news')} onNavigate={onNavigateNews || onNavigateHome} className="hover:text-white transition-colors text-left block">News</NavLink></li>
                <li><NavLink href={pageHref('blog')} onNavigate={onNavigateBlog} className="hover:text-white transition-colors text-left block">Blog &amp; Insights</NavLink></li>
                <li><NavLink href={pageHref('gallery')} onNavigate={onNavigateGallery} className="hover:text-white transition-colors text-left block">Gallery</NavLink></li>
                <li><NavLink href={pageHref('contact')} onNavigate={onNavigateContact || onOpenContact} className="hover:text-white transition-colors text-left block">How to Reach Us</NavLink></li>
              </ul>
            </div>

            {/* Values & Standards */}
            <div className="space-y-3">
              <h4 className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                Our Values: LIFE
              </h4>
              <ul className="space-y-2 text-xs leading-snug sm:leading-relaxed">
                {VALUES_LIST.map((v) => (
                  <li key={v.name} className="text-zinc-300 font-medium"><span className="text-accent-bright font-bold">{v.name[0]}</span>{v.name.slice(1)}</li>
                ))}
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
            <p className="pt-2 text-zinc-400">{HEAD_OFFICE}</p>
          </div>

          {/* Vision */}
          <div className="space-y-1">
            <h5 className="text-white font-bold uppercase tracking-wider mb-2">Our Vision</h5>
            <p className="text-zinc-400">{VISION_TEXT}</p>
          </div>

          {/* Mission */}
          <div className="space-y-1">
            <h5 className="text-white font-bold uppercase tracking-wider mb-2">Our Mission</h5>
            <p className="text-zinc-400">{MISSION_TEXT}</p>
          </div>

        </div>

        {/* Legal Row */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} {LEGAL_NAME}{RC_NUMBER && <>, RC {RC_NUMBER}</>}. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href={pageHref('privacy')} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href={pageHref('terms')} className="hover:text-white transition-colors">Terms of Service</a>
            <a href={pageHref('security')} className="hover:text-white transition-colors">Security Standards</a>
          </div>
        </div>

      </div>

      {/* Giant faint "NETHAWK" watermark, stretched edge to edge at every screen width
          (textLength pins it to the full SVG width; letter spacing absorbs font differences) */}
      <div className="w-full select-none pointer-events-none mt-12 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1000 134" className="block w-full h-auto text-white/[0.08]">
          <text
            x="0"
            y="128"
            textLength="1000"
            lengthAdjust="spacing"
            fontSize="176"
            fontWeight="700"
            fill="currentColor"
            className="font-sans"
          >
            NETHAWK
          </text>
        </svg>
      </div>

    </footer>
  );
}
