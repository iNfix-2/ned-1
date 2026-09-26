import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NavLink from '../components/NavLink';
import { useNavHandlers, pageHref } from '../navContext';

// Shown for any address that doesn't match a page, instead of silently falling back to the home page
export default function NotFoundPage() {
  const { onNavigateHome, onNavigateContact } = useNavHandlers();
  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-sans antialiased">
      <Navbar activePage="not-found" />
      <main className="flex-grow flex items-center justify-center px-6 pt-32 pb-24">
        <div className="max-w-xl text-center space-y-6">
          <p className="font-mono text-sm tracking-[0.3em] text-accent-bright">404</p>
          <h1 className="font-normal text-4xl sm:text-5xl tracking-tight">Page not found</h1>
          <p className="text-zinc-300 leading-relaxed">
            The page you were looking for has moved or no longer exists.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <NavLink href={pageHref('home')} onNavigate={onNavigateHome} className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors">
              Back to home
            </NavLink>
            <NavLink href={pageHref('contact')} onNavigate={onNavigateContact} className="px-6 py-3 rounded-full border border-white/30 text-sm font-medium hover:bg-white/10 transition-colors">
              Contact us
            </NavLink>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
