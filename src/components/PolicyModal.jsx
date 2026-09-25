import React, { useEffect } from 'react';
import { X, Lock, FileText, Shield } from 'lucide-react';

const CONTACT_EMAIL = 'info@nethawksolutions.org';

const POLICY_CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'How we collect, use and protect personal data',
    icon: Lock,
    sections: [
      {
        heading: '1. Our Commitment',
        body: 'NETHAWK SOLUTIONS is a technology company based in Abuja, Nigeria. We process personal data in line with the Nigeria Data Protection Act 2023 (NDPA) and the guidance of the Nigeria Data Protection Commission (NDPC). Consultations with corporate, government and defence clients are handled in confidence.'
      },
      {
        heading: '2. Information We Collect',
        body: 'We collect the information you give us directly: for example your name, email, phone number and organisation when you submit an inquiry, request a quote, apply to NATI (Nethawk Aviation Training Institute), or apply for a role. We use it only to respond to your request and manage our relationship with you. We do not sell or rent personal data.'
      },
      {
        heading: '3. Data Security & Retention',
        body: 'We apply appropriate technical and organisational measures to protect personal data against unauthorised access, loss or misuse, and keep it only for as long as needed for the purpose it was collected or as required by law.'
      },
      {
        heading: '4. Your Rights',
        body: 'Under the NDPA you may request access to, correction of, or deletion of your personal data, object to certain processing, or withdraw consent. You may also lodge a complaint with the Nigeria Data Protection Commission.'
      },
      {
        heading: '5. Contact',
        body: `For privacy questions or to exercise your rights, contact us at ${CONTACT_EMAIL}.`
      }
    ]
  },
  terms: {
    title: 'Terms of Service',
    subtitle: 'Terms for using this website and engaging our services',
    icon: FileText,
    sections: [
      {
        heading: '1. Regulatory Compliance',
        body: 'Our unmanned aircraft operations, defence technologies and surveillance solutions are provided only to authorised clients and subject to applicable Nigerian law, including Nigerian Civil Aviation Authority (NCAA) regulations for unmanned aircraft, relevant security approvals, and end-user verification where required.'
      },
      {
        heading: '2. Intellectual Property',
        body: 'Unless stated otherwise, the designs, software (including SkyGrid and Affenas), training curricula and content on this website are the intellectual property of NETHAWK SOLUTIONS or its licensors and may not be reproduced without written permission.'
      },
      {
        heading: '3. Service Engagements',
        body: 'Drone as a Service operations, Nethawk Labs development work, software licensing and NATI training programmes are governed by the specific agreement, proposal or enrolment terms agreed with each client or trainee.'
      },
      {
        heading: '4. Website Information',
        body: 'Content on this website is provided for general information. Platform specifications and capabilities are indicative; actual performance depends on configuration, payload, weather and operating conditions. Binding commitments are made only in a signed agreement.'
      }
    ]
  },
  security: {
    title: 'Security Standards',
    subtitle: 'How we approach safe operations and secure systems',
    icon: Shield,
    sections: [
      {
        heading: '1. Safe & Compliant Operations',
        body: 'Our flight operations are planned around applicable NCAA requirements, airspace approvals and site risk assessments, and are carried out by trained crews following documented operating procedures.'
      },
      {
        heading: '2. Secure Communications',
        body: 'We design our command, control and data links with security in mind, using encryption and access controls appropriate to each client’s requirements and threat environment.'
      },
      {
        heading: '3. Software & Data Protection',
        body: 'SkyGrid, Affenas and our other systems use role-based access control and are built to protect mission data, with deployment options agreed with each client to meet their security and data-sovereignty needs.'
      },
      {
        heading: '4. Quality & Testing',
        body: 'Systems built at Nethawk Labs go through bench, ground and flight testing before delivery, and we work to build local engineering and manufacturing capability that strengthens supply-chain resilience in Nigeria and across Africa.'
      }
    ]
  }
};

export default function PolicyModal({ isOpen, type = 'privacy', onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const content = POLICY_CONTENT[type] || POLICY_CONTENT.privacy;
  const Icon = content.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#020E1C] w-full max-w-2xl p-5 sm:p-8 relative shadow-2xl text-left rounded-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-400 hover:text-white p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-2 pb-2 pr-10">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              {content.title}
            </h3>
            <p className="text-xs text-slate-400">
              {content.subtitle}
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-5 text-xs text-slate-300 font-sans leading-relaxed">
            {content.sections.map((sec, i) => (
              <div key={i} className="space-y-1.5">
                <h4 className="text-white font-bold text-sm flex items-center space-x-2">
                  <span>{sec.heading}</span>
                </h4>
                <p className="text-slate-300 pl-5">{sec.body}</p>
              </div>
            ))}
          </div>

          {/* Footer Action */}
          <div className="pt-6 flex items-center justify-between">
            <span className="text-[10px] font-mono text-slate-500">
              NETHAWK SOLUTIONS // ABUJA, NIGERIA
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase rounded-full transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
