import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NEWS_ARTICLES } from '../data/tekeverContent';
import { ArrowRight, Newspaper, Calendar, Clock, Filter } from 'lucide-react';

export default function NewsPage({
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
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const categories = ['ALL', 'DEFENCE CONTRACT', 'STRATEGIC ACQUISITION', 'GOVERNMENT CONTRACT', 'TECHNOLOGY PARTNERSHIP'];

  const filteredArticles = selectedCategory === 'ALL'
    ? NEWS_ARTICLES
    : NEWS_ARTICLES.filter((a) => a.category === selectedCategory);

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
        activePage="news"
      />

      <main className="flex-grow pt-28 pb-20 space-y-16 sm:space-y-24">
        {/* Header */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto text-left space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs tracking-wider uppercase text-blue-300">
            <Newspaper className="w-3.5 h-3.5 text-blue-400" />
            <span>Media &amp; Press Releases</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white">
            In the Media
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-3xl font-light leading-relaxed">
            Latest announcements, contract awards, technological breakthroughs, and operational milestones from across the globe.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-semibold shadow-lg'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* News Cards Grid */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={onOpenContact}
              className="rounded-[36px] bg-[#04101e] border border-white/15 overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-white/30 transition-all duration-500 shadow-2xl hover:-translate-y-1.5"
            >
              <div className="relative h-[280px] sm:h-[320px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${article.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04101e] via-transparent to-black/40" />
                <div className="absolute top-6 left-6 px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-blue-300">
                  {article.category}
                </div>
              </div>

              <div className="p-8 sm:p-10 space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-normal text-white group-hover:text-blue-200 transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-blue-400 font-medium">Read Full Statement</span>
                  <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all group-hover:scale-110">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
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
