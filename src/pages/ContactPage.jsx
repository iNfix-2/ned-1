import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InquiryForm from '../components/InquiryForm';

// Contact details shown in the info grid — replace the placeholder numbers with the real ones
const CONTACT_PHONE = '+234 000 000 0000';
const CONTACT_WHATSAPP = '+234 000 000 0000';
const CONTACT_EMAIL = 'info@nethawksolutions.org';
const CONTACT_OFFICE = 'No. 2, The Hub, Industrial Area, Farin Gida, Mando, Kaduna, Nigeria';
const MAP_EMBED_URL = 'https://www.google.com/maps?q=Farin+Gida,+Mando,+Kaduna,+Nigeria&output=embed';

const digitsOnly = (value) => value.replace(/[^\d]/g, '');

const CONTACT_CHANNELS = [
  { title: 'Phone Number', value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE.replace(/\s/g, '')}` },
  { title: 'Email Address', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { title: 'WhatsApp', value: CONTACT_WHATSAPP, href: `https://wa.me/${digitsOnly(CONTACT_WHATSAPP)}` },
  { title: 'Our Office', value: CONTACT_OFFICE, href: null },
];

export default function ContactPage({
  onNavigateHome,
  onNavigateMissions,
  onNavigateManufacturing,
  onNavigateAcademy,
  onNavigateDefenseTech,
  onNavigatePlatforms,
  onNavigateWhyUs,
  onNavigateAtlas,
  onNavigateSpace,
  onNavigateDigital,
  onNavigateAbout,
  onNavigateNews,
  onNavigateContact,
  onOpenContact
}) {
  return (
    <div className="min-h-screen bg-[#020e1c] text-white flex flex-col font-sans selection:bg-blue-600 selection:text-white antialiased">
      <Navbar
        onOpenContact={onOpenContact}
        onNavigateHome={onNavigateHome}
        onNavigateMissions={onNavigateMissions}
        onNavigateManufacturing={onNavigateManufacturing}
        onNavigateAcademy={onNavigateAcademy}
        onNavigateDefenseTech={onNavigateDefenseTech}
        onNavigatePlatforms={onNavigatePlatforms}
        onNavigateWhyUs={onNavigateWhyUs}
        onNavigateAtlas={onNavigateAtlas}
        onNavigateSpace={onNavigateSpace}
        onNavigateDigital={onNavigateDigital}
        onNavigateAbout={onNavigateAbout}
        onNavigateNews={onNavigateNews}
        onNavigateContact={onNavigateContact}
        activePage="contact"
      />

      {/* Page Banner */}
      <section className="relative h-[380px] sm:h-[440px] w-full flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/manufacturing/IMG_6614.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020e1c]/80 via-[#020e1c]/70 to-[#020e1c]" />

        <div className="relative z-10 text-center space-y-4 pt-16">
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-white">Contact Us</h1>
          <nav aria-label="Breadcrumb" className="text-sm text-slate-300 flex items-center justify-center gap-3">
            <button onClick={onNavigateHome} className="hover:text-white transition-colors">Home</button>
            <span className="text-slate-500">/</span>
            <span className="text-white">Contact</span>
          </nav>
        </div>
      </section>

      <main className="flex-grow pt-12 sm:pt-20 pb-20 space-y-20 sm:space-y-28">
        {/* Form & Contact Details */}
        <section className="px-6 sm:px-12 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Form Card */}
          <div className="rounded-2xl bg-[#071322] border border-white/10 p-8 sm:p-10 shadow-2xl">
            <InquiryForm title="Get In Touch" />
          </div>

          {/* Right: Intro, Channels, Map */}
          <div className="space-y-10">
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Connect with our mission specialists, defence technical teams, or media relations. Whether you're planning a UAS deployment, an ATLAS integration, or NATI Academy training, our team is ready to help.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
              {CONTACT_CHANNELS.map(({ title, value, href }) => (
                <div key={title} className="text-center space-y-3">
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block text-sm text-slate-300 hover:text-sky-300 transition-colors break-words"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-300">{value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9]">
              <iframe
                title="Nethawk office location"
                src={MAP_EMBED_URL}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Call To Action Banner */}
        <section className="px-6 sm:px-12 max-w-7xl w-full mx-auto">
          <div className="relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[380px] flex items-center justify-center text-center px-6">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/images/missions/nethawk-tactical-team.jpg')" }}
            />
            <div className="absolute inset-0 bg-[#020e1c]/70" />

            <div className="relative z-10 space-y-5 max-w-2xl">
              <h2 className="text-3xl sm:text-5xl font-semibold text-white leading-tight">
                Always Ready To Support Your Next Mission
              </h2>
              <button
                onClick={onOpenContact}
                className="px-7 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-slate-200 transition-all hover:scale-105 shadow-xl"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer
        onOpenContact={onOpenContact}
        onNavigateHome={onNavigateHome}
        onNavigateMissions={onNavigateMissions}
        onNavigateManufacturing={onNavigateManufacturing}
        onNavigateAcademy={onNavigateAcademy}
        onNavigateDefenseTech={onNavigateDefenseTech}
      />
    </div>
  );
}
