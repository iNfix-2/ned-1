import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionBanner from './components/MissionBanner';
import PlatformsCarousel from './components/PlatformsCarousel';
import AtlasSection from './components/AtlasSection';
import NewsSection from './components/NewsSection';
import ContactModal from './components/ContactModal';
import GalleryModal from './components/GalleryModal';
import Footer from './components/Footer';
import MissionsPage from './pages/MissionsPage';
import ManufacturingPage from './pages/ManufacturingPage';
import AcademyPage from './pages/AcademyPage';
import DefenseTechPage from './pages/DefenseTechPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'missions' | 'manufacturing' | 'academy' | 'defense-tech'
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#missions' || hash === '#/missions') {
        setCurrentPage('missions');
      } else if (hash === '#manufacturing' || hash === '#/manufacturing') {
        setCurrentPage('manufacturing');
      } else if (hash === '#academy' || hash === '#/academy') {
        setCurrentPage('academy');
      } else if (
        hash === '#defense-tech' || 
        hash === '#/defense-tech' || 
        hash === '#platforms' || 
        hash === '#/platforms' ||
        hash === '#defense' ||
        hash === '#/defense'
      ) {
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
    if (page === 'missions') {
      window.location.hash = '#missions';
    } else if (page === 'manufacturing') {
      window.location.hash = '#manufacturing';
    } else if (page === 'academy') {
      window.location.hash = '#academy';
    } else if (page === 'defense-tech') {
      window.location.hash = '#defense-tech';
    } else {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#020e1c] text-white flex flex-col font-sans selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      
      {/* 1. Missions Page */}
      {currentPage === 'missions' && (
        <MissionsPage 
          onNavigateHome={() => navigateTo('home')}
          onNavigateMissions={() => navigateTo('missions')}
          onNavigateManufacturing={() => navigateTo('manufacturing')}
          onNavigateAcademy={() => navigateTo('academy')}
          onNavigateDefenseTech={() => navigateTo('defense-tech')}
          onOpenContact={() => setContactModalOpen(true)}
        />
      )}

      {/* 2. Manufacturing Page */}
      {currentPage === 'manufacturing' && (
        <ManufacturingPage 
          onNavigateHome={() => navigateTo('home')}
          onNavigateMissions={() => navigateTo('missions')}
          onNavigateManufacturing={() => navigateTo('manufacturing')}
          onNavigateAcademy={() => navigateTo('academy')}
          onNavigateDefenseTech={() => navigateTo('defense-tech')}
          onOpenContact={() => setContactModalOpen(true)}
        />
      )}

      {/* 3. Academy & NATI Page */}
      {currentPage === 'academy' && (
        <AcademyPage 
          onNavigateHome={() => navigateTo('home')}
          onNavigateMissions={() => navigateTo('missions')}
          onNavigateManufacturing={() => navigateTo('manufacturing')}
          onNavigateAcademy={() => navigateTo('academy')}
          onNavigateDefenseTech={() => navigateTo('defense-tech')}
          onOpenContact={() => setContactModalOpen(true)}
        />
      )}

      {/* 4. Defense Tech & UAS Platforms Page */}
      {currentPage === 'defense-tech' && (
        <DefenseTechPage 
          onNavigateHome={() => navigateTo('home')}
          onNavigateMissions={() => navigateTo('missions')}
          onNavigateManufacturing={() => navigateTo('manufacturing')}
          onNavigateAcademy={() => navigateTo('academy')}
          onNavigateDefenseTech={() => navigateTo('defense-tech')}
          onOpenContact={() => setContactModalOpen(true)}
        />
      )}

      {/* 5. Home Page Landing */}
      {currentPage === 'home' && (
        <>
          {/* Floating Pill Navigation */}
          <Navbar 
            onOpenContact={() => setContactModalOpen(true)}
            onNavigateHome={() => navigateTo('home')}
            onNavigateMissions={() => navigateTo('missions')}
            onNavigateManufacturing={() => navigateTo('manufacturing')}
            onNavigateAcademy={() => navigateTo('academy')}
            onNavigateDefenseTech={() => navigateTo('defense-tech')}
            activePage="home"
          />

          {/* Main Home Page Content */}
          <main className="flex-grow">
            {/* Hero Section */}
            <Hero onOpenContact={() => setContactModalOpen(true)} />

            {/* Missions Banner ("When a mission is calling...") */}
            <MissionBanner 
              onNavigateMissions={() => navigateTo('missions')}
            />

            {/* Platforms Carousel ("Unmanned Aerial Systems") */}
            <PlatformsCarousel 
              onOpenContact={() => setContactModalOpen(true)} 
              onOpenGallery={() => setGalleryOpen(true)} 
            />

            {/* ATLAS Earth Banner */}
            <AtlasSection onOpenContact={() => setContactModalOpen(true)} />

            {/* News 4-Card Feed */}
            <NewsSection onOpenContact={() => setContactModalOpen(true)} />
          </main>

          {/* Comprehensive Corporate Footer */}
          <Footer 
            onOpenContact={() => setContactModalOpen(true)}
            onNavigateHome={() => navigateTo('home')}
            onNavigateMissions={() => navigateTo('missions')}
            onNavigateManufacturing={() => navigateTo('manufacturing')}
            onNavigateAcademy={() => navigateTo('academy')}
            onNavigateDefenseTech={() => navigateTo('defense-tech')}
          />
        </>
      )}

      {/* Briefing / Brochure Request Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {/* Field Operations Gallery */}
      <GalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        onOpenContact={() => setContactModalOpen(true)}
      />
    </div>
  );
}
