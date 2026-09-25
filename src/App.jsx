import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionBanner from './components/MissionBanner';
import AtlasSection from './components/AtlasSection';
import NewsSection from './components/NewsSection';
import { AboutBrief, LabsFeature, AcademyFeature } from './components/HomeSections';
import ContactModal from './components/ContactModal';
import GalleryModal from './components/GalleryModal';
import PolicyModal from './components/PolicyModal';
import Footer from './components/Footer';

// Dedicated Full Pages, each split into its own chunk and loaded on first visit
// (ServicePage stays eager: routing needs SERVICE_PAGES up front)
const WhyUsPage = lazy(() => import('./pages/WhyUsPage'));
const PlatformsPage = lazy(() => import('./pages/PlatformsPage'));
const MissionsPage = lazy(() => import('./pages/MissionsPage'));
const SpacePage = lazy(() => import('./pages/SpacePage'));
const DigitalPage = lazy(() => import('./pages/DigitalPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ManufacturingPage = lazy(() => import('./pages/ManufacturingPage'));
const AcademyPage = lazy(() => import('./pages/AcademyPage'));
const DefenseTechPage = lazy(() => import('./pages/DefenseTechPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const DASPage = lazy(() => import('./pages/DASPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
import ServicePage, { SERVICE_PAGES } from './pages/ServicePage';
import { NavContext } from './navContext';

const SITE_NAME = 'Nethawk Solutions';
const DEFAULT_DESCRIPTION =
  'Nethawk Solutions delivers integrated digital, engineering, automation, security and defence technology across Africa: UAV systems, Drone as a Service, SkyGrid mission software and NATI aviation training.';

// Browser-tab title and meta description per page (search engines read these after the page renders)
const PAGE_META = {
  home: { title: `${SITE_NAME} | Securing Africa with UAV, Defence & Digital Technology`, description: DEFAULT_DESCRIPTION },
  'why-us': { title: `Why Nethawk | ${SITE_NAME}`, description: 'Why armed forces, agencies and enterprises choose Nethawk: we design, build, fly and support our own unmanned systems, with the full value chain under one roof.' },
  platforms: { title: `SkyGrid & Affenas Platforms | ${SITE_NAME}`, description: 'SkyGrid Command Centre, SkyGrid GCS, fleet management, performance analysis and Affenas secure intelligence communication for UAV and military operations.' },
  missions: { title: `Missions | ${SITE_NAME}`, description: 'Critical infrastructure surveillance, combat ISR, search and rescue and electronic warfare missions delivered by Nethawk unmanned systems.' },
  space: { title: `Space & Satellite | ${SITE_NAME}`, description: DEFAULT_DESCRIPTION },
  digital: { title: `Digital Systems | ${SITE_NAME}`, description: DEFAULT_DESCRIPTION },
  news: { title: `News & Media | ${SITE_NAME}`, description: 'The latest news, partnerships and deployments from Nethawk Solutions and the Nethawk Aviation Training Institute.' },
  contact: { title: `Contact Us | ${SITE_NAME}`, description: 'Contact Nethawk Solutions in Abuja, Nigeria for UAV operations, defence technology, SkyGrid software or NATI training enquiries.' },
  manufacturing: { title: `Nethawk Labs & Research | ${SITE_NAME}`, description: 'Nethawk Labs designs, builds and qualifies UAV airframes, avionics and payloads in-house, from composite fabrication to flight testing.' },
  academy: { title: `NATI Academy | ${SITE_NAME}`, description: 'The Nethawk Aviation Training Institute trains certified UAS pilots, operators and technicians for Nigeria and across Africa.' },
  'defense-tech': { title: `Defence Technology | ${SITE_NAME}`, description: 'Military-grade software, AI for defence, specialised ammunition and rifles, autonomous military vehicles and UAV systems for armed forces and security agencies.' },
  blog: { title: `Blog & Insights | ${SITE_NAME}`, description: 'Insights on unmanned systems, defence technology and aviation training from the Nethawk team.' },
  das: { title: `Drone as a Service | ${SITE_NAME}`, description: 'Aerial capability on demand: certified crews fly surveillance, mapping, inspection and emergency-response missions so you get the results without owning a fleet.' },
  gallery: { title: `Gallery | ${SITE_NAME}`, description: 'Photos from Nethawk field operations, labs, training and events.' },
  careers: { title: `Careers | ${SITE_NAME}`, description: 'Join Nethawk Solutions: open roles in UAV operations, engineering, software and defence technology, plus graduate and apprenticeship programmes.' },
};

function setMetaTag(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

// Placeholder while a page's code chunk downloads (matches the site background, no layout jump)
const PageFallback = () => <div className="min-h-screen bg-[#020e1c]" />;

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [policyType, setPolicyType] = useState('privacy');
  const pendingAnchor = useRef(null);

  const openPolicy = (type = 'privacy') => {
    setPolicyType(type);
    setPolicyModalOpen(true);
  };


  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace(/\/$/, '');
      const serviceMatch = hash.match(/^#\/?services\/([a-z-]+)$/);
      if (serviceMatch && SERVICE_PAGES[serviceMatch[1]]) {
        setCurrentPage(`services/${serviceMatch[1]}`);
      } else if (hash === '#why-us' || hash === '#/why-us') {
        setCurrentPage('why-us');
      } else if (hash === '#platforms' || hash === '#/platforms') {
        setCurrentPage('platforms');
      } else if (/^#\/?(platforms\/)?ar(3|5|x)$/.test(hash)) {
        // AR3 / AR5 / ARX pages were retired; old links land on Platforms
        setCurrentPage('platforms');
      } else if (hash === '#missions' || hash === '#/missions') {
        setCurrentPage('missions');
      } else if (hash === '#atlas' || hash === '#/atlas') {
        // ATLAS content lives on Why Us (matches onNavigateAtlas); no standalone page is rendered
        setCurrentPage('why-us');
      } else if (hash === '#space' || hash === '#/space') {
        setCurrentPage('space');
      } else if (hash === '#digital' || hash === '#/digital') {
        setCurrentPage('digital');
      } else if (hash === '#about' || hash === '#/about') {
        setCurrentPage('why-us');
      } else if (hash === '#news' || hash === '#/news' || hash === '#media' || hash === '#/media' || /^#\/news\/[a-z0-9-]+$/.test(hash)) {
        setCurrentPage('news');
      } else if (hash === '#blog' || hash === '#/blog') {
        setCurrentPage('blog');
      } else if (hash === '#das' || hash === '#/das' || hash === '#/drone-as-a-service') {
        setCurrentPage('das');
      } else if (hash === '#gallery' || hash === '#/gallery') {
        setCurrentPage('gallery');
      } else if (hash === '#contact' || hash === '#/contact') {
        setCurrentPage('contact');
      } else if (hash === '#careers' || hash === '#/careers') {
        setCurrentPage('careers');
      } else if (
        hash === '#manufacturing' || 
        hash === '#/manufacturing' || 
        hash === '#labs-research' || 
        hash === '#/labs-research' || 
        hash === '#labs' || 
        hash === '#/labs'
      ) {
        setCurrentPage('manufacturing');
      } else if (hash === '#academy' || hash === '#/academy') {
        setCurrentPage('academy');
      } else if (hash === '#defense-tech' || hash === '#/defense-tech' || hash === '#defense' || hash === '#/defense') {
        setCurrentPage('defense-tech');
      } else {
        setCurrentPage('home');
      }
      // Scroll to a section requested by the navigation (e.g. Affenas on Platforms), else to the top
      const anchor = pendingAnchor.current;
      pendingAnchor.current = null;
      if (anchor) setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' }), 150);
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keep the tab title, meta description and social-share tags in step with the current page
  useEffect(() => {
    const service = currentPage.startsWith('services/') ? SERVICE_PAGES[currentPage.slice('services/'.length)] : null;
    const meta = service
      ? { title: `${service.title} | Drone as a Service | ${SITE_NAME}`, description: service.intro }
      : PAGE_META[currentPage] || PAGE_META.home;
    document.title = meta.title;
    setMetaTag('name', 'description', meta.description);
    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);
  }, [currentPage]);

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = `#/${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navProps = {
    onNavigateHome: () => navigateTo('home'),
    onNavigateWhyUs: () => navigateTo('why-us'),
    onNavigatePlatforms: () => navigateTo('platforms'),
    onNavigateMissions: () => navigateTo('missions'),
    onNavigateAtlas: () => navigateTo('why-us'),
    onNavigateSpace: () => navigateTo('space'),
    onNavigateDigital: () => navigateTo('digital'),
    onNavigateAbout: () => navigateTo('why-us'),
    onNavigateNews: () => navigateTo('news'),
    onNavigateContact: () => navigateTo('contact'),
    onNavigateLabs: () => navigateTo('manufacturing'),
    onNavigateManufacturing: () => navigateTo('manufacturing'),
    onNavigateAcademy: () => { window.location.href = '/academy/index.html'; },
    onNavigateDefenseTech: () => navigateTo('defense-tech'),
    onOpenContact: () => setContactModalOpen(true),
    onOpenPolicy: openPolicy,
    onOpenGallery: () => setGalleryOpen(true),
    onNavigateBlog: () => navigateTo('blog'),
    onNavigateDAS: () => navigateTo('das'),
    onNavigateGallery: () => navigateTo('gallery'),
    onNavigateCareers: () => navigateTo('careers'),
    onNavigateService: (id) => navigateTo(`services/${id}`),
    // Affenas has no standalone page; open Platforms and bring its section into view once rendered
    onNavigateAffenas: () => {
      if (currentPage === 'platforms') {
        document.getElementById('affenas')?.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      pendingAnchor.current = 'affenas';
      setCurrentPage('platforms');
      window.location.hash = '#/platforms';
    }
  };

  return (
    <NavContext.Provider value={navProps}>
    <div className="min-h-screen bg-[#020e1c] text-white flex flex-col font-sans selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      <Suspense fallback={<PageFallback />}>
      {/* 1. Why Us Page */}
      {currentPage === 'why-us' && <WhyUsPage {...navProps} />}

      {/* 2. Platforms Overview Page */}
      {currentPage === 'platforms' && <PlatformsPage {...navProps} />}

      {/* 6. Missions Page */}
      {currentPage === 'missions' && <MissionsPage {...navProps} />}

      {/* 7. Space & Satellite Page */}
      {currentPage === 'space' && <SpacePage {...navProps} />}

      {/* 8. Digital Systems Page */}
      {currentPage === 'digital' && <DigitalPage {...navProps} />}

      {/* 10. In The Media / News Page */}
      {currentPage === 'news' && <NewsPage {...navProps} />}

      {/* 11. Contact / How to Reach Us Page */}
      {currentPage === 'contact' && <ContactPage {...navProps} />}

      {/* 12. Labs & Research (Manufacturing) Page */}
      {currentPage === 'manufacturing' && <ManufacturingPage {...navProps} />}

      {/* 13. Academy Page */}
      {currentPage === 'academy' && <AcademyPage {...navProps} />}

      {/* 14. Defense Tech Page */}
      {currentPage === 'defense-tech' && <DefenseTechPage {...navProps} />}

      {/* 15. Blog & Insights Page */}
      {currentPage === 'blog' && <BlogPage {...navProps} />}

      {/* 16. Drone as a Service Page */}
      {currentPage === 'das' && <DASPage {...navProps} />}

      {/* 17. Gallery Page */}
      {currentPage === 'gallery' && <GalleryPage {...navProps} />}

      {/* 18. Careers Page (footer link only, not in navbar) */}
      {currentPage === 'careers' && <CareersPage {...navProps} />}

      {/* 19. Service Pages (ISR, Long-Range Mapping, Corridor Inspections) */}
      {currentPage.startsWith('services/') && (
        <ServicePage key={currentPage} serviceId={currentPage.slice('services/'.length)} {...navProps} />
      )}
      </Suspense>

      {/* 16. Home Landing Page */}
      {currentPage === 'home' && (
        <>
          <Navbar {...navProps} activePage="home" />

          <main className="flex-grow">
            <Hero onOpenContact={() => setContactModalOpen(true)} />
            <AboutBrief />
            <MissionBanner onNavigateMissions={() => navigateTo('missions')} />
            <LabsFeature />
            <AcademyFeature />
            <AtlasSection onOpenContact={() => setContactModalOpen(true)} />
            <NewsSection onOpenContact={() => setContactModalOpen(true)} />
          </main>

          <Footer {...navProps} />
        </>
      )}

      {/* Briefing / Brochure Request Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {/* Field Operations Gallery Modal */}
      <GalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Policy Modal */}
      <PolicyModal
        isOpen={policyModalOpen}
        type={policyType}
        onClose={() => setPolicyModalOpen(false)}
      />
    </div>
    </NavContext.Provider>
  );
}
