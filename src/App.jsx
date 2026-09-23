import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionBanner from './components/MissionBanner';
import PlatformsCarousel from './components/PlatformsCarousel';
import AtlasSection from './components/AtlasSection';
import NewsSection from './components/NewsSection';
import ContactModal from './components/ContactModal';
import GalleryModal from './components/GalleryModal';
import PlatformModal from './components/PlatformModal';
import PolicyModal from './components/PolicyModal';
import Footer from './components/Footer';

// Dedicated Full Pages
import WhyUsPage from './pages/WhyUsPage';
import PlatformsPage from './pages/PlatformsPage';
import AR3Page from './pages/AR3Page';
import AR5Page from './pages/AR5Page';
import ARXPage from './pages/ARXPage';
import MissionsPage from './pages/MissionsPage';
import SpacePage from './pages/SpacePage';
import DigitalPage from './pages/DigitalPage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import ManufacturingPage from './pages/ManufacturingPage';
import AcademyPage from './pages/AcademyPage';
import DefenseTechPage from './pages/DefenseTechPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [policyType, setPolicyType] = useState('privacy');
  const [platformModalOpen, setPlatformModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const openPolicy = (type = 'privacy') => {
    setPolicyType(type);
    setPolicyModalOpen(true);
  };

  const openPlatformModal = (platform) => {
    setSelectedPlatform(platform);
    setPlatformModalOpen(true);
  };

  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace(/\/$/, '');
      if (hash === '#why-us' || hash === '#/why-us') {
        setCurrentPage('why-us');
      } else if (hash === '#platforms' || hash === '#/platforms') {
        setCurrentPage('platforms');
      } else if (hash === '#ar3' || hash === '#/ar3' || hash === '#/platforms/ar3') {
        setCurrentPage('ar3');
      } else if (hash === '#ar5' || hash === '#/ar5' || hash === '#/platforms/ar5') {
        setCurrentPage('ar5');
      } else if (hash === '#arx' || hash === '#/arx' || hash === '#/platforms/arx') {
        setCurrentPage('arx');
      } else if (hash === '#missions' || hash === '#/missions') {
        setCurrentPage('missions');
      } else if (hash === '#atlas' || hash === '#/atlas') {
        setCurrentPage('atlas');
      } else if (hash === '#space' || hash === '#/space') {
        setCurrentPage('space');
      } else if (hash === '#digital' || hash === '#/digital') {
        setCurrentPage('digital');
      } else if (hash === '#about' || hash === '#/about') {
        setCurrentPage('about');
      } else if (hash === '#news' || hash === '#/news' || hash === '#media' || hash === '#/media') {
        setCurrentPage('news');
      } else if (hash === '#contact' || hash === '#/contact') {
        setCurrentPage('contact');
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
    onNavigateAR3: () => navigateTo('ar3'),
    onNavigateAR5: () => navigateTo('ar5'),
    onNavigateARX: () => navigateTo('arx'),
    onNavigateMissions: () => navigateTo('missions'),
    onNavigateAtlas: () => navigateTo('home'),
    onNavigateSpace: () => navigateTo('space'),
    onNavigateDigital: () => navigateTo('digital'),
    onNavigateAbout: () => navigateTo('about'),
    onNavigateNews: () => navigateTo('news'),
    onNavigateContact: () => navigateTo('contact'),
    onNavigateLabs: () => navigateTo('manufacturing'),
    onNavigateManufacturing: () => navigateTo('manufacturing'),
    onNavigateAcademy: () => { window.location.href = '/academy/index.html'; },
    onNavigateDefenseTech: () => navigateTo('defense-tech'),
    onOpenContact: () => setContactModalOpen(true),
    onOpenPolicy: openPolicy,
    onSelectPlatform: openPlatformModal
  };

  return (
    <div className="min-h-screen bg-[#020e1c] text-white flex flex-col font-sans selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      
      {/* 1. Why Us Page */}
      {currentPage === 'why-us' && <WhyUsPage {...navProps} />}

      {/* 2. Platforms Overview Page */}
      {currentPage === 'platforms' && <PlatformsPage {...navProps} />}

      {/* 3. AR3 EVO Platform Page */}
      {currentPage === 'ar3' && <AR3Page {...navProps} />}

      {/* 4. AR5 Platform Page */}
      {currentPage === 'ar5' && <AR5Page {...navProps} />}

      {/* 5. ARX Platform Page */}
      {currentPage === 'arx' && <ARXPage {...navProps} />}

      {/* 6. Missions Page */}
      {currentPage === 'missions' && <MissionsPage {...navProps} />}

      {/* 7. Space & Satellite Page */}
      {currentPage === 'space' && <SpacePage {...navProps} />}

      {/* 8. Digital Systems Page */}
      {currentPage === 'digital' && <DigitalPage {...navProps} />}

      {/* 9. About Page */}
      {currentPage === 'about' && <AboutPage {...navProps} />}

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

      {/* 16. Home Landing Page */}
      {currentPage === 'home' && (
        <>
          <Navbar {...navProps} activePage="home" />

          <main className="flex-grow">
            <Hero onOpenContact={() => setContactModalOpen(true)} />
            <MissionBanner onNavigateMissions={() => navigateTo('missions')} />
            <PlatformsCarousel 
              onOpenContact={() => setContactModalOpen(true)} 
              onOpenGallery={() => setGalleryOpen(true)}
              onSelectPlatform={openPlatformModal} 
            />
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

      {/* Platform Specs Modal */}
      <PlatformModal
        isOpen={platformModalOpen}
        platform={selectedPlatform}
        onClose={() => setPlatformModalOpen(false)}
        onRequestBrief={() => {
          setPlatformModalOpen(false);
          setContactModalOpen(true);
        }}
      />

      {/* Policy Modal */}
      <PolicyModal
        isOpen={policyModalOpen}
        type={policyType}
        onClose={() => setPolicyModalOpen(false)}
      />
    </div>
  );
}
