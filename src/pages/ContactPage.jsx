import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GLOBAL_OFFICES } from '../data/tekeverContent';
import { Mail, MapPin, Send, CheckCircle2, ArrowRight, Building, Phone } from 'lucide-react';

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
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    subject: 'UAS Fleet Deployment',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

      <main className="flex-grow pt-28 pb-20 space-y-20 sm:space-y-28">
        {/* Header Section */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto text-left space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs tracking-wider uppercase text-blue-300">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>Operational Communications</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white">
            How to Reach Us
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-3xl font-light leading-relaxed">
            Connect with our mission specialists, defense technical teams, or media relations across our global hubs.
          </p>
        </section>

        {/* Form & Direct Contact Channels */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Form */}
          <div className="lg:col-span-7 rounded-[36px] bg-[#05111f] border border-white/15 p-8 sm:p-12 shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                <h3 className="text-2xl font-light text-white">Operational Request Dispatched</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you. Our mission coordination team will respond securely to {formData.email || 'your email'} within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-all mt-4"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-light text-white">Direct Mission Request</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Commander / Director"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-[20px] bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">Organization / Agency</label>
                    <input
                      required
                      type="text"
                      placeholder="Ministry / Defense Agency"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-[20px] bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">Official Email</label>
                    <input
                      required
                      type="email"
                      placeholder="name@organization.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-[20px] bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">Area of Interest</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-[20px] bg-[#071322] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-400 transition-colors"
                    >
                      <option value="UAS Fleet Deployment">UAS Fleet Deployment (AR3 / AR5 / ARX)</option>
                      <option value="ATLAS Intelligence Suite">ATLAS Intelligence Suite</option>
                      <option value="Maritime & Border Patrol">Maritime &amp; Border Patrol</option>
                      <option value="NATI Academy Certification">NATI Academy Certification</option>
                      <option value="Space Inter-Satellite Links">Space Inter-Satellite Links</option>
                      <option value="Media & Press Inquiry">Media &amp; Press Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">Operational Requirements</label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Provide details on mission environment, timeline, and operational requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-[20px] bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs tracking-wider uppercase transition-all shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Dispatch Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-[36px] bg-[#071322] border border-white/15 p-8 sm:p-10 space-y-6 shadow-xl">
              <h3 className="text-xl font-medium text-white">Direct Communications</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-slate-400 block font-mono uppercase">General &amp; Operations</span>
                    <a href="mailto:info@nethawksolutions.org" className="text-white hover:text-blue-300 transition-colors">
                      info@nethawksolutions.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-slate-400 block font-mono uppercase">Press &amp; Media</span>
                    <a href="mailto:media@nethawksolutions.org" className="text-white hover:text-blue-300 transition-colors">
                      media@nethawksolutions.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[36px] bg-[#071322] border border-white/15 p-8 sm:p-10 space-y-4 shadow-xl">
              <h3 className="text-xl font-medium text-white">Emergency Operational Support</h3>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                For active mission coordinators, deployed flight crews, and defense command centers requiring immediate 24/7 technical telemetry or operational assistance.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:contact@nethawksolutions.org"
                  className="inline-flex items-center space-x-2 text-xs text-blue-400 hover:text-white font-medium"
                >
                  <span>Access Secure Operations Desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Global Hubs & Facilities Directory */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono">Footprint</div>
            <h2 className="text-2xl sm:text-4xl font-light text-white">Global Offices &amp; Engineering Centers</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GLOBAL_OFFICES.map((office, idx) => (
              <div
                key={idx}
                className="rounded-[30px] bg-[#05111f] border border-white/10 p-8 space-y-4 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono text-blue-400 font-semibold">{office.country}</span>
                  <h4 className="text-lg font-medium text-white">{office.city}</h4>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">{office.address}</p>
                </div>
                <div className="pt-4 border-t border-white/10 text-xs font-mono text-slate-300">
                  <a href={`mailto:${office.contact}`} className="hover:text-white transition-colors">
                    {office.contact}
                  </a>
                </div>
              </div>
            ))}
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
