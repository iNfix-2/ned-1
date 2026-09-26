import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, X, ArrowRight } from 'lucide-react';
import { useNavHandlers, pageHref } from '../navContext';
import NavLink from './NavLink';

const SERVICES = [
  {
    id: 'isr',
    name: 'ISR & Aerial Surveillance',
    role: 'Persistent multi-domain intelligence gathering',
    image: '/assets/gallery/ops-operator-vtol-scenic.jpg',
    action: 'navigateMissions',
  },
  {
    id: 'mapping',
    name: 'Long-Range Mapping',
    role: 'High-resolution terrain & corridor mapping',
    image: '/assets/platforms/nsl-drone-capture-5.jpg',
    action: 'navigateMissions',
  },
  {
    id: 'corridor',
    name: 'Corridor Inspections',
    role: 'Infrastructure & pipeline patrol operations',
    image: '/assets/gallery/ops-vtol-dam-takeoff.jpg',
    action: 'navigateMissions',
  },
];

export default function Navbar(props) {
  const {
    onOpenContact,
    onNavigateHome,
    onNavigateMissions,
    onNavigateManufacturing,
    onNavigateAcademy,
    onNavigateWhyUs,
    onNavigateNews,
    onNavigateContact,
    onNavigateGallery,
    onNavigateBlog,
    onNavigateDAS,
    onNavigateService,
    onNavigateAffenas,
    activePage = 'home',
  } = useNavHandlers(props);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const navRef = useRef(null);

  // Dropdowns stay open until the pointer leaves, an item is chosen, or the user clicks elsewhere / presses Esc
  useEffect(() => {
    const onDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) { setProductsOpen(false); setMediaOpen(false); }
    };
    const onKey = (e) => { if (e.key === 'Escape') { setProductsOpen(false); setMediaOpen(false); } };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey); };
  }, []);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Darken the header once the page scrolls so the tabs stay readable over content
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeAll = () => {
    setProductsOpen(false);
    setMediaOpen(false);
  };

  const handleServiceClick = (svc) => {
    closeAll();
    if (svc.href) {
      window.open(svc.href, '_blank', 'noopener noreferrer');
    } else if (onNavigateService) onNavigateService(svc.id);
    else if (onNavigateMissions) onNavigateMissions();
  };

  return (
    <>
    {/* Desktop dropdown backdrop: dims the page so menu text doesn't blend with content behind it.
        Lives outside <header> because the header's backdrop-filter would clip a fixed child to the header box. */}
    <div
      className={`fixed inset-0 z-40 hidden xl:block bg-black/70 backdrop-blur-sm pointer-events-none transition-opacity duration-200 ${
        productsOpen || mediaOpen ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    />
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-5 flex items-center justify-between transition-colors duration-300 ${
      scrolled ? 'bg-[#000000]/85 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
    }`}>

      {/* Logo */}
      <NavLink
        href={pageHref('home')}
        onNavigate={onNavigateHome}
        className="flex items-center space-x-2 group focus:outline-none"
        aria-label="Nethawk Solutions Home"
      >
        <img
          src="/assets/images/logo/nethawk-logo-white.png"
          alt="NETHAWK SOLUTIONS"
          className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
        />
      </NavLink>

      {/* Desktop nav pill */}
      <div className="flex items-center space-x-4">
        <nav ref={navRef} className="hidden xl:flex items-center glass-pill rounded-full px-7 py-2.5 shadow-2xl">
          <div className="flex items-center space-x-6 text-xs font-medium tracking-wide">

            {/* Home */}
            <NavLink
              href={pageHref('home')}
              onNavigate={onNavigateHome}
              className={`transition-colors ${activePage === 'home' ? 'text-white font-bold' : 'text-zinc-300 hover:text-white'}`}
            >
              Home
            </NavLink>

            {/* Missions */}
            <NavLink
              href={pageHref('missions')}
              onNavigate={onNavigateMissions}
              className={`transition-colors ${activePage === 'missions' ? 'text-white font-bold' : 'text-zinc-300 hover:text-white'}`}
            >
              Missions
            </NavLink>

            {/* Nethawk Labs */}
            <NavLink
              href={pageHref('manufacturing')}
              onNavigate={onNavigateManufacturing}
              className={`transition-colors ${activePage === 'manufacturing' ? 'text-white font-bold' : 'text-zinc-300 hover:text-white'}`}
            >
              Nethawk Labs
            </NavLink>

            {/* Why us? */}
            <NavLink
              href={pageHref('why-us')}
              onNavigate={onNavigateWhyUs}
              className={`transition-colors ${activePage === 'why-us' ? 'text-white font-bold' : 'text-zinc-300 hover:text-white'}`}
            >
              Why us?
            </NavLink>

            {/* Services mega-dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { setProductsOpen(true); setMediaOpen(false); }}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                onClick={() => { setProductsOpen(true); setMediaOpen(false); }}
                aria-expanded={productsOpen}
                aria-haspopup="true"
                className={`flex items-center space-x-1.5 transition-colors ${
                  activePage === 'products' || activePage === 'platforms' ? 'text-white font-bold' : 'text-zinc-300 hover:text-white'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[820px] rounded-3xl before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 bg-[#000000] border border-white/15 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.8)] p-7">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-zinc-400 mb-5">Services</p>

                  <div className="grid grid-cols-4 gap-4">
                    {/* 3 service tiles */}
                    {SERVICES.map((svc) => (
                      <button
                        key={svc.id}
                        onClick={() => handleServiceClick(svc)}
                        className="group text-left focus:outline-none col-span-1"
                      >
                        <div className="relative rounded-2xl overflow-hidden h-[148px] mb-3 border border-white/10">
                          <img
                            src={svc.image}
                            alt={svc.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                        </div>
                        <p className="text-xs font-semibold text-white leading-snug group-hover:text-accent-bright transition-colors">
                          {svc.name}
                        </p>
                        <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">{svc.role}</p>
                      </button>
                    ))}

                    {/* Contact CTA panel */}
                    <div className="col-span-1 flex flex-col justify-between bg-white/[0.04] border border-white/10 rounded-2xl p-5">
                      <div className="space-y-2">
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          Ready to deploy? Speak with our operations team about the right capability for your mission.
                        </p>
                      </div>
                      <button
                        onClick={() => { closeAll(); onOpenContact && onOpenContact(); }}
                        className="mt-4 w-full py-2.5 px-4 bg-accent hover:bg-blue-600 text-white text-[10px] font-semibold tracking-wider uppercase rounded-xl transition-colors flex items-center justify-center space-x-1.5"
                      >
                        <span>Contact Us</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Products row: Skygrid & Affenas */}
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-zinc-400 mb-5">Products</p>
                    <div className="grid grid-cols-4 gap-4">
                      <a
                        href="https://skygridinc.live"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeAll}
                        className="group text-left"
                      >
                        <div className="relative rounded-2xl overflow-hidden h-[110px] mb-3 border border-white/10">
                          <img
                            src="/assets/images/skygrid/skygrid-dashboard.webp"
                            alt="Skygrid"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        </div>
                        <p className="text-xs font-semibold text-white group-hover:text-accent-bright transition-colors">Skygrid</p>
                        <p className="text-[11px] text-zinc-400 mt-1">Intelligence Platform</p>
                      </a>

                      <NavLink
                        href={pageHref('platforms')}
                        onNavigate={() => { closeAll(); onNavigateAffenas(); }}
                        className="group text-left focus:outline-none"
                      >
                        <div className="relative rounded-2xl overflow-hidden h-[110px] mb-3 border border-white/10">
                          <img
                            src="/assets/images/defense/nethawk-c2-mission.jpg"
                            alt="Affenas"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        </div>
                        <p className="text-xs font-semibold text-white group-hover:text-accent-bright transition-colors">Affenas</p>
                        <p className="text-[11px] text-zinc-400 mt-1">Intelligence Communication</p>
                      </NavLink>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Academy */}
            <NavLink
              href={'/academy/index.html'}
              onNavigate={onNavigateAcademy}
              className={`transition-colors whitespace-nowrap ${activePage === 'academy' ? 'text-white font-bold' : 'text-zinc-300 hover:text-white'}`}
            >
              Our Academy
            </NavLink>

            {/* Drone as a Service */}
            <NavLink
              href={pageHref('das')}
              onNavigate={onNavigateDAS}
              className={`transition-colors whitespace-nowrap ${activePage === 'das' ? 'text-white font-bold' : 'text-zinc-300 hover:text-white'}`}
            >
              Drone as a Service (DAS)
            </NavLink>

            {/* Media Centre dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { setMediaOpen(true); setProductsOpen(false); }}
              onMouseLeave={() => setMediaOpen(false)}
            >
              <button
                onClick={() => { setMediaOpen(true); setProductsOpen(false); }}
                aria-expanded={mediaOpen}
                aria-haspopup="true"
                className={`flex items-center space-x-1.5 transition-colors ${
                  ['news', 'blog', 'gallery'].includes(activePage) ? 'text-white font-bold' : 'text-zinc-300 hover:text-white'
                }`}
              >
                <span>Media Centre</span>
                <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${mediaOpen ? 'rotate-180' : ''}`} />
              </button>

              {mediaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-52 rounded-2xl before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 glass-card border border-white/10 shadow-2xl p-2 space-y-0.5 !bg-[#000000]">
                  <NavLink
                    href={pageHref('gallery')}
                    onNavigate={() => { closeAll(); onNavigateGallery(); }}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-xs text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    Gallery
                  </NavLink>
                  <NavLink
                    href={pageHref('blog')}
                    onNavigate={() => { closeAll(); onNavigateBlog(); }}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs transition-colors ${
                      activePage === 'blog' ? 'text-white bg-white/10' : 'text-zinc-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Blog &amp; Insights
                  </NavLink>
                  <NavLink
                    href={pageHref('news')}
                    onNavigate={() => { closeAll(); onNavigateNews(); }}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs transition-colors ${
                      activePage === 'news' ? 'text-white bg-white/10' : 'text-zinc-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Newsletter
                  </NavLink>
                </div>
              )}
            </div>

            {/* Contact */}
            <NavLink
              href={pageHref('contact')}
              onNavigate={onNavigateContact || onOpenContact}
              className={`transition-colors ${activePage === 'contact' ? 'text-white font-bold' : 'text-zinc-300 hover:text-white'}`}
            >
              Contact Us
            </NavLink>

          </div>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-1.5 text-white hover:text-zinc-200 transition-colors flex items-center justify-center focus:outline-none z-50 relative"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="w-6 h-6 stroke-[1.5]" />
          ) : (
            <div className="p-2.5 glass-pill rounded-full transition-all hover:scale-105 flex items-center justify-center">
              <div className="w-4 flex flex-col space-y-1">
                <span className="w-full h-[1.5px] bg-white block" />
                <span className="w-full h-[1.5px] bg-white block" />
              </div>
            </div>
          )}
        </button>
      </div>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-[3px] z-40 xl:hidden animate-in fade-in duration-200"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed top-20 left-4 right-4 sm:left-auto sm:right-12 sm:w-[380px] mx-auto z-50 xl:hidden max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain glass-card rounded-[32px] px-8 pt-4 pb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.22),0_25px_60px_-15px_rgba(0,0,0,0.65)] animate-in fade-in zoom-in-95 duration-200">
          <div className="w-10 h-1 bg-white/25 rounded-full mx-auto mb-7" />

          <div className="space-y-4 sm:space-y-5 text-left">
            {/* Home */}
            <NavLink
              href={pageHref('home')}
              onNavigate={() => { setMobileOpen(false); onNavigateHome(); }}
              className="block w-full text-left text-xl sm:text-2xl font-light text-zinc-200 hover:text-white transition-all tracking-wide"
            >
              Home
            </NavLink>

            {/* Missions */}
            <NavLink
              href={pageHref('missions')}
              onNavigate={() => { setMobileOpen(false); onNavigateMissions(); }}
              className="block w-full text-left text-xl sm:text-2xl font-light text-zinc-200 hover:text-white transition-all tracking-wide"
            >
              Missions
            </NavLink>

            {/* Nethawk Labs */}
            <NavLink
              href={pageHref('manufacturing')}
              onNavigate={() => { setMobileOpen(false); onNavigateManufacturing(); }}
              className="block w-full text-left text-xl sm:text-2xl font-light text-zinc-200 hover:text-white transition-all tracking-wide"
            >
              Nethawk Labs
            </NavLink>

            {/* Why us? */}
            <NavLink
              href={pageHref('why-us')}
              onNavigate={() => { setMobileOpen(false); onNavigateWhyUs(); }}
              className="block w-full text-left text-xl sm:text-2xl font-light text-zinc-200 hover:text-white transition-all tracking-wide"
            >
              Why us?
            </NavLink>

            {/* Services */}
            <div>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                aria-expanded={mobileProductsOpen}
                className="w-full flex items-center justify-between text-left text-xl sm:text-2xl font-light text-zinc-200 hover:text-white transition-all tracking-wide group"
              >
                <span>Products</span>
                <ChevronDown className={`w-5 h-5 text-zinc-400 group-hover:text-white transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180 text-[#3b82f6]' : ''}`} />
              </button>
              {mobileProductsOpen && (
                <div className="mt-3 ml-2 pl-3 border-l border-white/20 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  {SERVICES.map((svc) => (
                    <button
                      key={svc.id}
                      onClick={() => { setMobileOpen(false); handleServiceClick(svc); }}
                      className="block w-full text-left text-base sm:text-lg font-light text-zinc-300 hover:text-white transition-colors py-0.5"
                    >
                      {svc.name}
                    </button>
                  ))}
                  <a
                    href="https://skygridinc.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="block text-base sm:text-lg font-light text-zinc-300 hover:text-white transition-colors py-0.5"
                  >
                    Skygrid
                  </a>
                  <NavLink
                    href={pageHref('platforms')}
                    onNavigate={() => { setMobileOpen(false); onNavigateAffenas(); }}
                    className="block w-full text-left text-base sm:text-lg font-light text-zinc-300 hover:text-white transition-colors py-0.5"
                  >
                    Affenas
                  </NavLink>
                </div>
              )}
            </div>

            {/* Academy */}
            <NavLink
              href={'/academy/index.html'}
              onNavigate={() => { setMobileOpen(false); onNavigateAcademy(); }}
              className="block w-full text-left text-xl sm:text-2xl font-light text-zinc-200 hover:text-white transition-all tracking-wide"
            >
              Our Academy
            </NavLink>

            {/* Drone as a Service */}
            <NavLink
              href={pageHref('das')}
              onNavigate={() => { setMobileOpen(false); onNavigateDAS(); }}
              className="block w-full text-left text-xl sm:text-2xl font-light text-zinc-200 hover:text-white transition-all tracking-wide"
            >
              Drone as a Service (DAS)
            </NavLink>

            {/* Media Centre */}
            <div>
              <button
                onClick={() => setMobileMediaOpen(!mobileMediaOpen)}
                aria-expanded={mobileMediaOpen}
                className="w-full flex items-center justify-between text-left text-xl sm:text-2xl font-light text-zinc-200 hover:text-white transition-all tracking-wide group"
              >
                <span>Media Centre</span>
                <ChevronDown className={`w-5 h-5 text-zinc-400 group-hover:text-white transition-transform duration-300 ${mobileMediaOpen ? 'rotate-180 text-[#3b82f6]' : ''}`} />
              </button>
              {mobileMediaOpen && (
                <div className="mt-3 ml-2 pl-3 border-l border-white/20 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <NavLink
                    href={pageHref('gallery')}
                    onNavigate={() => { setMobileOpen(false); onNavigateGallery(); }}
                    className="block w-full text-left text-base sm:text-lg font-light text-zinc-300 hover:text-white transition-colors py-0.5"
                  >
                    Gallery
                  </NavLink>
                  <NavLink
                    href={pageHref('blog')}
                    onNavigate={() => { setMobileOpen(false); onNavigateBlog(); }}
                    className="block w-full text-left text-base sm:text-lg font-light text-zinc-300 hover:text-white transition-colors py-0.5"
                  >
                    Blog &amp; Insights
                  </NavLink>
                  <NavLink
                    href={pageHref('news')}
                    onNavigate={() => { setMobileOpen(false); onNavigateNews(); }}
                    className="block w-full text-left text-base sm:text-lg font-light text-zinc-300 hover:text-white transition-colors py-0.5"
                  >
                    Newsletter
                  </NavLink>
                </div>
              )}
            </div>

            {/* Contact */}
            <NavLink
              href={pageHref('contact')}
              onNavigate={() => { setMobileOpen(false); onNavigateContact(); }}
              className="block w-full text-left text-xl sm:text-2xl font-light text-zinc-200 hover:text-white transition-all tracking-wide"
            >
              Contact Us
            </NavLink>

          </div>
        </div>
      )}
    </header>
    </>
  );
}
