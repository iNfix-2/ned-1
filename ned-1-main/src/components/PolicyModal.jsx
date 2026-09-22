import React, { useEffect } from 'react';
import { X, Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';

const POLICY_CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'Data Protection & Confidentiality Standards',
    icon: Lock,
    sections: [
      {
        heading: '1. Commitment to Confidentiality',
        body: 'NETHAWK SOLUTIONS adheres to the highest European and international standards for operational data privacy. All corporate, defense, and agency consultations are treated under strict non-disclosure obligations.'
      },
      {
        heading: '2. Information We Collect',
        body: 'We collect information provided directly through capability inquiries, professional training enrollments, and authorized partnership requests. We do not sell, rent, or distribute any institutional contact data.'
      },
      {
        heading: '3. Data Security & Storage',
        body: 'All customer data and project specifications are encrypted at rest (AES-256) and in transit (TLS 1.3), hosted within sovereign cloud facilities compliant with GDPR and allied defense regulations.'
      },
      {
        heading: '4. Inquiries & Contact',
        body: 'For questions regarding institutional data privacy or non-disclosure protocols, please reach out directly to privacy@nethawksolutions.com.'
      }
    ]
  },
  terms: {
    title: 'Terms of Service',
    subtitle: 'Institutional & Operational Engagement Framework',
    icon: FileText,
    sections: [
      {
        heading: '1. Authorization & Compliance',
        body: 'Access to NETHAWK unmanned aerial systems, defense technologies, and tactical sensor solutions is subject to applicable sovereign defense export controls, end-user verification, and regulatory compliance.'
      },
      {
        heading: '2. Intellectual Property',
        body: 'All designs, schematics, firmware architectures, proprietary algorithms (including ATLAS AI), and training curricula are the exclusive intellectual property of NETHAWK SOLUTIONS or licensed partners.'
      },
      {
        heading: '3. Operational Deployment',
        body: 'Turnkey operations, Intelligence-as-a-Service (IaaS), and deployment contracts are governed by bilateral Master Service Agreements (MSAs) and mission-specific Statements of Work (SOW).'
      },
      {
        heading: '4. Limitation of Liability',
        body: 'Platform specifications and operational metrics are provided based on certified flight testing. Field performance may vary according to atmospheric conditions, electromagnetic interference, and mission theater variables.'
      }
    ]
  },
  security: {
    title: 'Security Standards',
    subtitle: 'Military-Grade Airworthiness & Cyber Resiliency',
    icon: Shield,
    sections: [
      {
        heading: '1. Airworthiness Certification',
        body: 'Our unmanned aerial systems and command ground stations are engineered in alignment with NATO STANAG 4671 airworthiness requirements and European Civil Aviation standards for segregated and BVLOS airspace.'
      },
      {
        heading: '2. Resilient Communications & Anti-Jamming',
        body: 'NETHAWK datalinks feature frequency-hopping spread spectrum (FHSS), encrypted satellite relays, and GPS-denied navigation capabilities to withstand aggressive contested electromagnetic environments.'
      },
      {
        heading: '3. Cyber & Firmware Integrity',
        body: 'Onboard flight controllers and edge computing modules run cryptographically signed firmware with zero-trust hardware roots of trust, mitigating tampering and unauthorized intrusion.'
      },
      {
        heading: '4. Supply Chain Sovereignty',
        body: 'We prioritize European and allied component sourcing to prevent foreign supply chain vulnerabilities and ensure continuous operational capability.'
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
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] flex-shrink-0" />
                  <span>{sec.heading}</span>
                </h4>
                <p className="text-slate-300 pl-5">{sec.body}</p>
              </div>
            ))}
          </div>

          {/* Footer Action */}
          <div className="pt-6 flex items-center justify-between">
            <span className="text-[10px] font-mono text-slate-500">
              NETHAWK SOLUTIONS // ALLIED DEFENSE STANDARDS
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
