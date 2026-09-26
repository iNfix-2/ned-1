import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_FILTERS, GALLERY_ITEMS } from '../data/gallery';
import useModal from '../useModal';

export default function GalleryModal({ isOpen, onClose, initialFilter = 'all' }) {
  const [filter, setFilter] = useState(initialFilter);
  const [lightboxIdx, setLightboxIdx] = useState(-1);

  // Escape steps back out of the enlarged photo first, then closes the gallery
  const panelRef = useModal(isOpen, () => (lightboxIdx >= 0 ? setLightboxIdx(-1) : onClose()));

  useEffect(() => {
    if (isOpen) {
      setFilter(initialFilter);
      setLightboxIdx(-1);
    }
  }, [isOpen, initialFilter]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (lightboxIdx >= 0) {
        if (e.key === 'ArrowRight') setLightboxIdx((p) => (p + 1) % items.length);
        if (e.key === 'ArrowLeft') setLightboxIdx((p) => (p - 1 + items.length) % items.length);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (!isOpen) return null;

  const items = GALLERY_ITEMS.filter((g) => filter === 'all' || g.category === filter);
  const active = lightboxIdx >= 0 ? items[lightboxIdx] : null;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions -- backdrop click; Escape closes via useModal
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl overflow-y-auto" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="gallery-modal-title">
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- backdrop click; Escape closes via useModal */}
      <div
        ref={panelRef}
        tabIndex={-1}
        className="focus:outline-none relative max-w-6xl mx-auto px-4 sm:px-6 py-10 min-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h3 id="gallery-modal-title" className="font-medium text-2xl sm:text-4xl text-white tracking-tight">
              Discover More
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => {
                setFilter(f.id);
                setLightboxIdx(-1);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all border ${
                filter === f.id
                  ? 'bg-accent border-accent-bright text-white shadow-lg shadow-accent/25'
                  : 'bg-white/10 border-white/20 text-zinc-300 hover:bg-white/20'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {items.map((g, i) => (
            <button
              key={g.src}
              onClick={() => setLightboxIdx(i)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all text-left"
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <div className="text-xs sm:text-sm font-semibold text-white leading-snug">
                  {g.caption}
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {active && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- backdrop click; Escape closes via useModal
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(-1)}
        >
          <button
            onClick={() => setLightboxIdx(-1)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
            aria-label="Close viewer"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((p) => (p - 1 + items.length) % items.length);
            }}
            className="absolute left-2 sm:left-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions -- backdrop click; Escape closes via useModal */}
          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img loading="lazy" decoding="async"
              src={active.src}
              alt={active.caption}
              className="w-full max-h-[80vh] object-contain rounded-2xl border border-white/15 shadow-2xl"
            />
            <figcaption className="mt-3 text-center text-sm text-zinc-300">
              {active.caption} — {lightboxIdx + 1} / {items.length}
            </figcaption>
          </figure>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((p) => (p + 1) % items.length);
            }}
            className="absolute right-2 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
