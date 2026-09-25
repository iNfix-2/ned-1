import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import InquiryForm, { INQUIRY_EMAIL } from './InquiryForm';

export default function ContactModal({ isOpen, onClose }) {
  // Close on Escape and lock background scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#010811]/85 backdrop-blur-md"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="relative w-full max-w-4xl max-h-[calc(100svh-2rem)] overflow-y-auto rounded-2xl bg-[#071322] border border-white/10 shadow-2xl grid grid-cols-1 md:grid-cols-[5fr_7fr] font-sans">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/30 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left: Image Panel (desktop) */}
        <div className="relative hidden md:flex flex-col justify-end p-8 min-h-[600px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/missions/nethawk-command-center.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-[#071322]/70 to-[#071322]/20" />

          <div className="relative z-10 space-y-6">
            <p className="text-slate-200 text-sm font-light leading-relaxed">
              From digital transformation and intelligent systems to UAV technology, defence solutions and technical
              training, our team builds capability around your requirements.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`mailto:${INQUIRY_EMAIL}`} className="flex items-center gap-3 text-slate-300 hover:text-sky-300 transition-colors">
                {INQUIRY_EMAIL}
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                Response within 24 hours
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                Confidential &amp; direct consultation
              </div>
            </div>
          </div>
        </div>

        {/* Right: Guided form */}
        <div className="p-7 sm:p-10">
          <InquiryForm titleId="contact-modal-title" compact onDone={onClose} doneLabel="Close" />
        </div>
      </div>
    </div>
  );
}
