import React from 'react';
import { X } from 'lucide-react';
import InquiryForm, { INQUIRY_EMAIL } from './InquiryForm';
import useModal from '../useModal';

export default function ContactModal({ isOpen, onClose }) {
  const panelRef = useModal(isOpen, onClose);

  if (!isOpen) return null;

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- backdrop click; Escape closes via useModal
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#000000]/85 backdrop-blur-md"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div ref={panelRef} tabIndex={-1} className="relative w-full max-w-4xl focus:outline-none max-h-[calc(100svh-2rem)] overflow-y-auto rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl grid grid-cols-1 md:grid-cols-[5fr_7fr] font-sans">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/30 hover:bg-white/10 border border-white/15 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/20" />

          <div className="relative z-10 space-y-6">
            <p className="text-zinc-200 text-sm font-light leading-relaxed">
              From digital transformation and intelligent systems to UAV technology, defence solutions and technical
              training, our team builds capability around your requirements.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`mailto:${INQUIRY_EMAIL}`} className="flex items-center gap-3 text-zinc-300 hover:text-accent-bright transition-colors">
                {INQUIRY_EMAIL}
              </a>
              <div className="flex items-center gap-3 text-zinc-300">
                Response within 24 hours
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
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
