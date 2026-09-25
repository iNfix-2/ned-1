import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GALLERY_FILTERS, GALLERY_ITEMS } from '../data/gallery';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function GalleryPage(props) {
  const { onOpenContact } = props;
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null); // index into `items`

  const items = filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === filter);

  const step = (dir) => setLightbox((i) => (i + dir + items.length) % items.length);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'auto';
    };
  }, [lightbox, items.length]);

  return (
    <div className="min-h-screen bg-[#020e1c] text-white flex flex-col font-sans selection:bg-blue-600 selection:text-white antialiased">
      <Navbar {...props} activePage="gallery" />

      <main className="flex-grow pt-28 pb-20 space-y-14 sm:space-y-20">

        {/* Hero */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto">
          <div className="space-y-5 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white">
              Field operations <br />
              <span className="text-slate-300">in pictures.</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              Aircraft, missions and the teams behind them, from pre-flight checks to live operations.
            </p>
          </div>
        </section>

        {/* Filters + grid */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto space-y-8">
          <div className="flex flex-wrap gap-2">
            {GALLERY_FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  filter === f.id
                    ? 'bg-white text-black'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {items.map((item, idx) => (
              <button
                key={item.src}
                onClick={() => setLightbox(idx)}
                className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-[24px] border border-white/10 hover:border-white/25 transition-all text-left"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-[10px] font-mono text-blue-300 uppercase tracking-wider">{item.category}</span>
                  <p className="text-sm text-white font-medium mt-1">{item.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto">
          <div className="rounded-[32px] bg-gradient-to-r from-[#031326] to-[#08203d] border border-white/15 p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-light text-white">Media & press enquiries</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Need high-resolution imagery or footage for publication? Get in touch with our media team.
              </p>
            </div>
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-slate-200 transition-all shadow-xl shrink-0 flex items-center space-x-2"
            >
              <span>Contact Media Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      <Footer {...props} />

      {/* Lightbox */}
      {lightbox !== null && items[lightbox] && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            className="absolute left-3 sm:left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <figure className="max-w-6xl w-full space-y-4" onClick={(e) => e.stopPropagation()}>
            <img loading="lazy" decoding="async"
              src={items[lightbox].src}
              alt={items[lightbox].caption}
              className="w-full max-h-[78vh] object-contain rounded-2xl"
            />
            <figcaption className="text-center text-sm text-slate-300">
              {items[lightbox].caption}
              <span className="text-slate-500"> · {lightbox + 1} / {items.length}</span>
            </figcaption>
          </figure>
          <button
            onClick={(e) => { e.stopPropagation(); step(1); }}
            className="absolute right-3 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
