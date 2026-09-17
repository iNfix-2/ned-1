import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionBanner from './components/MissionBanner';
import PlatformsCarousel from './components/PlatformsCarousel';
import AtlasSection from './components/AtlasSection';
import NewsSection from './components/NewsSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import MissionsPage from './pages/MissionsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'missions'
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#missions' || hash === '#/missions') {
        setCurrentPage('missions');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page === 'missions' ? '#missions' : '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070d14] text-white flex flex-col font-sans selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      
      {currentPage === 'missions' ? (
        /* Missions Page (Matching media_1789642969822.jpg exactly) */
        <MissionsPage 
          onNavigateHome={() => navigateTo('home')}
          onOpenContact={() => setContactModalOpen(true)}
        />
      ) : (
        /* Home Page (Matching media_1789642929433.png exactly) */
        <>
          {/* 1. Floating Pill Navigation */}
          <Navbar 
            onOpenContact={() => setContactModalOpen(true)}
            onNavigateHome={() => navigateTo('home')}
            onNavigateMissions={() => navigateTo('missions')}
            activePage="home"
          />

          {/* 2. Main Home Page Content */}
          <main className="flex-grow">
            {/* Section 1: Hero ("Your eyes on the unknown") */}
            <Hero onOpenContact={() => setContactModalOpen(true)} />

            {/* Section 2: Missions Banner ("When a mission is calling, TEKEVER delivers.") */}
            <MissionBanner 
              onNavigateMissions={() => navigateTo('missions')}
            />

            {/* Section 3: Platforms ("Unmanned Aerial Systems") */}
            <PlatformsCarousel onOpenContact={() => setContactModalOpen(true)} />

            {/* Section 4: ATLAS Earth Banner */}
            <AtlasSection onOpenContact={() => setContactModalOpen(true)} />

            {/* Section 5: News 4-Card Feed */}
            <NewsSection onOpenContact={() => setContactModalOpen(true)} />
          </main>

          {/* 3. Comprehensive Corporate Footer with Giant Watermark */}
          <Footer onOpenContact={() => setContactModalOpen(true)} />
        </>
      )}

      {/* Briefing / Brochure Request Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
