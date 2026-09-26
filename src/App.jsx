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
import NotFoundPage from './pages/NotFoundPage';
// ServicePage stays eager: routing needs SERVICE_PAGES up front
import ServicePage, { SERVICE_PAGES } from './pages/ServicePage';
import { NavContext, pageHref } from './navContext';

const SITE_NAME = 'Nethawk Solutions';
const DEFAULT_DESCRIPTION =
  'Nethawk Solutions delivers integrated digital, engineering, automation, security and defence technology across Africa: UAV systems, Drone as a Service, SkyGrid mission software and NATI aviation training.';

// One entry per page: the component (each split into its own chunk, loaded on first visit),
// any older or alternative addresses that should land on it, and its tab title and meta description.
const ROUTES = {
  'why-us': {
    component: lazy(() => import('./pages/WhyUsPage')),
    aliases: ['about', 'atlas'],
    title: `Why Nethawk | ${SITE_NAME}`,
    description: 'Why armed forces, agencies and enterprises choose Nethawk: we design, build, fly and support our own unmanned systems, with the full value chain under one roof.',
  },
  platforms: {
    component: lazy(() => import('./pages/PlatformsPage')),
    // AR3 / AR5 / ARX pages were retired; old links land on Platforms
    aliases: ['ar3', 'ar5', 'arx', 'platforms/ar3', 'platforms/ar5', 'platforms/arx'],
    title: `SkyGrid & Affenas Platforms | ${SITE_NAME}`,
    description: 'SkyGrid Command Centre, SkyGrid GCS, fleet management, performance analysis and Affenas secure intelligence communication for UAV and military operations.',
  },
  missions: {
    component: lazy(() => import('./pages/MissionsPage')),
    title: `Missions | ${SITE_NAME}`,
    description: 'Critical infrastructure surveillance, combat ISR, search and rescue and electronic warfare missions delivered by Nethawk unmanned systems.',
  },
  space: {
    component: lazy(() => import('./pages/SpacePage')),
    title: `Space & Satellite | ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
  },
  digital: {
    component: lazy(() => import('./pages/DigitalPage')),
    title: `Digital Systems | ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
  },
  news: {
    component: lazy(() => import('./pages/NewsPage')),
    aliases: ['media'],
    title: `News & Media | ${SITE_NAME}`,
    description: 'The latest news, partnerships and deployments from Nethawk Solutions and the Nethawk Aviation Training Institute.',
  },
  contact: {
    component: lazy(() => import('./pages/ContactPage')),
    title: `Contact Us | ${SITE_NAME}`,
    description: 'Contact Nethawk Solutions in Kaduna, Nigeria for UAV operations, defence technology, SkyGrid software or NATI training enquiries.',
  },
  manufacturing: {
    component: lazy(() => import('./pages/ManufacturingPage')),
    aliases: ['labs', 'labs-research'],
    title: `Nethawk Labs & Research | ${SITE_NAME}`,
    description: 'Nethawk Labs designs, builds and qualifies UAV airframes, avionics and payloads in-house, from composite fabrication to flight testing.',
  },
  academy: {
    component: lazy(() => import('./pages/AcademyPage')),
    title: `NATI Academy | ${SITE_NAME}`,
    description: 'The Nethawk Aviation Training Institute trains certified UAS pilots, operators and technicians for Nigeria and across Africa.',
  },
  'defense-tech': {
    component: lazy(() => import('./pages/DefenseTechPage')),
    aliases: ['defence-tech', 'defence', 'defense'],
    title: `Defence Technology | ${SITE_NAME}`,
    description: 'Military-grade software, AI for defence, autonomous military vehicles and UAV systems for armed forces and security agencies.',
  },
  blog: {
    component: lazy(() => import('./pages/BlogPage')),
    title: `Blog & Insights | ${SITE_NAME}`,
    description: 'Insights on unmanned systems, defence technology and aviation training from the Nethawk team.',
  },
  das: {
    component: lazy(() => import('./pages/DASPage')),
    aliases: ['drone-as-a-service'],
    title: `Drone as a Service | ${SITE_NAME}`,
    description: 'Aerial capability on demand: certified crews fly surveillance, mapping, inspection and emergency-response missions so you get the results without owning a fleet.',
  },
  gallery: {
    component: lazy(() => import('./pages/GalleryPage')),
    title: `Gallery | ${SITE_NAME}`,
    description: 'Photos from Nethawk field operations, labs, training and events.',
  },
  careers: {
    component: lazy(() => import('./pages/CareersPage')),
    title: `Careers | ${SITE_NAME}`,
    description: 'Join Nethawk Solutions: open roles in UAV operations, engineering, software and defence technology, plus graduate and apprenticeship programmes.',
  },
};

const HOME_META = { title: `${SITE_NAME} | Securing Africa with UAV, Defence & Digital Technology`, description: DEFAULT_DESCRIPTION };
const NOT_FOUND_META = { title: `Page not found | ${SITE_NAME}`, description: DEFAULT_DESCRIPTION };

// Policies open as a dialog over the home page, so they have shareable addresses (#/privacy etc.)
const POLICY_ROUTES = ['privacy', 'terms', 'security'];

// Every address that names a page, including aliases, mapped to that page's key
const ROUTE_BY_PATH = Object.fromEntries(
  Object.entries(ROUTES).flatMap(([key, route]) => [key, ...(route.aliases || [])].map((path) => [path, key]))
);

// '#/news/some-story' → { page: 'news' }; '#/privacy' → { page: 'home', policy: 'privacy' }
function resolveHash(rawHash) {
  const path = rawHash.toLowerCase().replace(/^#\/?/, '').replace(/\/$/, '');
  if (!path) return { page: 'home' };
  if (POLICY_ROUTES.includes(path)) return { page: 'home', policy: path };
  const service = path.match(/^services\/([a-z-]+)$/);
  if (service && SERVICE_PAGES[service[1]]) return { page: `services/${service[1]}` };
  // News stories are opened by the News page itself
  if (/^news\/[a-z0-9-]+$/.test(path)) return { page: 'news' };
  return { page: ROUTE_BY_PATH[path] || 'not-found' };
}

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
const PageFallback = () => <div className="min-h-screen bg-[#000000]" />;

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [policyType, setPolicyType] = useState(null);
  const pendingAnchor = useRef(null);

  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const { page, policy } = resolveHash(window.location.hash);
      setCurrentPage(page);
      setPolicyType(policy || null);
      if (policy) return;
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
      : currentPage === 'not-found' ? NOT_FOUND_META : ROUTES[currentPage] || HOME_META;
    document.title = meta.title;
    setMetaTag('name', 'description', meta.description);
    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);
  }, [currentPage]);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : pageHref(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Policies keep their own address while open; closing returns to the page underneath
  const openPolicy = (type = 'privacy') => { window.location.hash = pageHref(type); };
  const closePolicy = () => {
    setPolicyType(null);
    if (POLICY_ROUTES.includes(resolveHash(window.location.hash).policy)) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
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
      window.location.hash = pageHref('platforms');
    }
  };

  const PageComponent = ROUTES[currentPage]?.component;

  return (
    <NavContext.Provider value={navProps}>
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-sans selection:bg-accent selection:text-white antialiased overflow-x-hidden">
      <Suspense fallback={<PageFallback />}>
        {PageComponent && <PageComponent {...navProps} />}

        {/* Service pages (ISR, Long-Range Mapping, Corridor Inspections) */}
        {currentPage.startsWith('services/') && (
          <ServicePage key={currentPage} serviceId={currentPage.slice('services/'.length)} {...navProps} />
        )}
      </Suspense>

      {currentPage === 'not-found' && <NotFoundPage />}

      {/* Home landing page */}
      {currentPage === 'home' && (
        <>
          <Navbar activePage="home" />

          <main className="flex-grow">
            <Hero />
            <AboutBrief />
            <LabsFeature />
            <MissionBanner onNavigateMissions={() => navigateTo('missions')} />
            <AcademyFeature />
            <AtlasSection />
            <NewsSection />
          </main>

          <Footer />
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
        isOpen={policyType !== null}
        type={policyType || 'privacy'}
        onClose={closePolicy}
      />
    </div>
    </NavContext.Provider>
  );
}
