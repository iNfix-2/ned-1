import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NEWS_ARTICLES } from '../data/tekeverContent';
import { ArrowRight, ArrowLeft } from 'lucide-react';

// Shown in place of a photo that hasn't been added to the site yet
const FALLBACK_IMAGE = '/academy/assets/images/nati-facility-night.jpg';
const withFallback = (e) => {
  if (!e.currentTarget.dataset.fallback) {
    e.currentTarget.dataset.fallback = '1';
    e.currentTarget.src = FALLBACK_IMAGE;
  }
};

// Full newsletter article: white page, narrow reading column, headings and photos, "Explore More" at the end
function ArticlePage({ article, related, onBack, onOpen, onOpenContact }) {
  return (
    <main className="flex-grow bg-white text-[#1f2328] pb-20">
      {/* Dark band so the transparent navbar stays readable above the white article */}
      <div className="h-24 bg-[#020e1c]" />
      <div className="max-w-[760px] mx-auto px-5 sm:px-8 pt-10">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#0b2a5b] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Newsletter</span>
        </button>

        <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-3">{article.category}</p>
        <h1 className="text-3xl sm:text-[2.6rem] font-bold leading-tight text-[#111827]">{article.title}</h1>
        <p className="mt-4 text-sm text-slate-500">
          {article.date} <span className="mx-1.5">•</span> {article.readTime}
        </p>

        <img loading="lazy" decoding="async"
          src={article.image}
          alt={article.title}
          onError={withFallback}
          className="w-full rounded-lg mt-8 aspect-[16/10] object-cover"
        />

        <div className="mt-8 space-y-5 text-[15px] sm:text-base leading-7 text-[#374151]">
          <p className="text-lg leading-8 text-[#1f2328]">{article.summary}</p>
          {(article.body || []).map((block, i) => {
            if (block.type === 'h') return <h2 key={i} className="text-xl sm:text-2xl font-bold text-[#111827] pt-6">{block.text}</h2>;
            if (block.type === 'list') return (
              <ul key={i} className="list-disc pl-6 space-y-2">
                {block.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            );
            if (block.type === 'img') return (
              <figure key={i} className="pt-4 space-y-2">
                <img src={block.src} alt={block.caption || ''} onError={withFallback} loading="lazy" className="w-full rounded-lg" />
                {block.caption && <figcaption className="text-sm text-slate-500">{block.caption}</figcaption>}
              </figure>
            );
            if (block.type === 'quote') return (
              <blockquote key={i} className="border-l-4 border-[#0b2a5b] pl-5 py-1 my-2">
                <p className="italic text-[#1f2328]">“{block.text}”</p>
                {block.cite && <cite className="block mt-2 text-sm not-italic font-semibold text-[#0b2a5b]">— {block.cite}</cite>}
              </blockquote>
            );
            return <p key={i}>{block.text}</p>;
          })}
        </div>

        <div className="mt-10">
          <button
            onClick={onOpenContact}
            className="px-6 py-3 rounded-full bg-[#0b2a5b] hover:bg-[#123a7a] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            Contact Nethawk
          </button>
        </div>

        {related.length > 0 && (
          <section className="mt-16 pt-10 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-[#111827] mb-6">Explore More</h2>
            <div className="space-y-4">
              {related.map((r) => (
                <button
                  key={r.id}
                  onClick={() => onOpen(r)}
                  className="w-full flex gap-4 items-center text-left rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors overflow-hidden"
                >
                  <img loading="lazy" decoding="async" src={r.image} alt="" onError={withFallback} className="w-32 sm:w-44 h-24 sm:h-28 object-cover shrink-0" />
                  <div className="py-3 pr-4 min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{r.category}</p>
                    <p className="text-sm sm:text-base font-semibold text-[#111827] leading-snug mt-1 line-clamp-2">{r.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{r.date}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

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
  // The open article comes from the address (#/news/<id>) so posts can be linked to directly
  const idFromHash = () => (window.location.hash.match(/^#\/news\/([a-z0-9-]+)/i) || [])[1] || null;
  const [articleId, setArticleId] = useState(idFromHash);
  const openArticle = NEWS_ARTICLES.find((a) => a.id === articleId) || null;

  useEffect(() => {
    const onHash = () => setArticleId(idFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Start every article (and the return to the list) at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  const openStory = (article) => { window.location.hash = `#/news/${article.id}`; };
  const setOpenArticle = (article) => { window.location.hash = article ? `#/news/${article.id}` : '#/news'; };
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

      {openArticle ? (
        <ArticlePage
          article={openArticle}
          related={NEWS_ARTICLES.filter((a) => a.id !== openArticle.id).slice(0, 3)}
          onBack={() => setOpenArticle(null)}
          onOpen={openStory}
          onOpenContact={onOpenContact}
        />
      ) : (
      <main className="flex-grow pt-28 pb-20 space-y-16 sm:space-y-24">
        {/* Header */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto text-left space-y-6">
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
              onClick={() => openStory(article)}
              className="rounded-[36px] bg-[#04101e] border border-white/15 overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-white/30 transition-all duration-500 shadow-2xl hover:-translate-y-1.5"
            >
              <div className="relative h-[280px] sm:h-[320px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${article.image}'), url('${FALLBACK_IMAGE}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04101e] via-transparent to-black/40" />
              </div>

              <div className="p-8 sm:p-10 space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-xs text-slate-400 font-mono">
                    <span>{article.date}</span>
                    <span>•</span>
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
      )}

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
