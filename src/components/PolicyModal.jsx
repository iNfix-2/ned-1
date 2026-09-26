import React from 'react';
import useModal from '../useModal';
import { X, Lock, FileText, Shield } from 'lucide-react';

const CONTACT_EMAIL = 'info@nethawksolutions.org';
// Registered company name, the privacy contact and the date the policies last changed.
// Replace DPO_EMAIL with the Data Protection Officer's mailbox once it exists, and have counsel review the text.
const LEGAL_NAME = 'Nethawk Solutions';
const DPO_EMAIL = CONTACT_EMAIL;
const POLICY_UPDATED = '25 September 2026';

const POLICY_CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    subtitle: `How we collect, use and protect personal data · Last updated ${POLICY_UPDATED}`,
    icon: Lock,
    sections: [
      {
        heading: '1. Who we are',
        body: `${LEGAL_NAME} ("Nethawk", "we") of No. 2, The Hub, Industrial Area, Farin Gida, Mando, Kaduna, Nigeria is the data controller for personal data collected through this website, including for the Nethawk Aviation Training Institute (NATI). We process personal data in line with the Nigeria Data Protection Act 2023 (NDPA) and the regulations and directives of the Nigeria Data Protection Commission (NDPC). Questions about this policy can be sent to our Data Protection Officer at ${DPO_EMAIL}.`
      },
      {
        heading: '2. What we collect',
        body: 'Only what you give us: your name, email, phone number (optional), organisation, the services you are interested in and the details of your request when you use our enquiry form or email us; your CV and application details when you apply for a role; and your application, identity and contact details when you apply to or enrol at NATI. We do not use analytics, advertising or tracking cookies on this website.'
      },
      {
        heading: '3. Why we use it and our lawful basis',
        body: 'Responding to enquiries and preparing proposals: steps taken at your request before a contract, and our legitimate interest in answering business enquiries. Recruitment: steps before an employment contract and our legitimate interest in assessing applicants. NATI admissions and training records: performance of the enrolment contract and legal obligations (for example certification and regulatory records). Security and end-user checks required for defence and surveillance work: legal obligation and legitimate interest. Where we rely on consent, you may withdraw it at any time.'
      },
      {
        heading: '4. How long we keep it',
        body: 'Enquiries that do not lead to an engagement: up to 24 months after our last contact. Unsuccessful job applications: 12 months, unless you ask us to keep your CV on file longer. Client, contract and NATI training records: for the life of the relationship and then as long as required by law, accounting rules or aviation certification requirements. Data is then deleted or anonymised.'
      },
      {
        heading: '5. Who we share it with',
        body: 'We do not sell or rent personal data. We share it only with service providers who help us run our business (such as our email and IT hosting providers) under written data-processing terms, with professional advisers, and with public authorities where the law requires. Some providers store data outside Nigeria; where that happens we rely on the transfer safeguards set out in Part VIII of the NDPA, such as adequacy or contractual protections.'
      },
      {
        heading: '6. Third-party content on this site',
        body: 'The map on our Contact page is provided by Google and only loads after you choose to show it; Google then processes your IP address under its own privacy policy. Links to other websites (for example SkyGrid or social networks) are governed by those sites\' own policies.'
      },
      {
        heading: '7. Security and breaches',
        body: 'We apply appropriate technical and organisational measures, including access control and encryption in transit, to protect personal data. If a breach is likely to put your rights at risk, we will notify the NDPC within 72 hours of becoming aware of it and inform you where required by law.'
      },
      {
        heading: '8. Your rights',
        body: `Under the NDPA you can ask to access, correct or delete your personal data, restrict or object to processing, receive a copy in a portable format, and withdraw consent. Email ${DPO_EMAIL}; we will respond within 30 days. If you are not satisfied with our response you may complain to the Nigeria Data Protection Commission (ndpc.gov.ng).`
      },
      {
        heading: '9. Children',
        body: 'This website is not directed at children. NATI applicants under 18 must apply with the consent of a parent or guardian, and we process their data only for admission and training.'
      },
      {
        heading: '10. Changes to this policy',
        body: 'We may update this policy from time to time. The date at the top shows when it last changed.'
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
  const panelRef = useModal(isOpen, onClose);

  if (!isOpen) return null;

  const content = POLICY_CONTENT[type] || POLICY_CONTENT.privacy;
  const Icon = content.icon;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions -- backdrop click; Escape closes via useModal
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- backdrop click; Escape closes via useModal */}
      <div
        ref={panelRef}
        tabIndex={-1}
        className="focus:outline-none bg-[#000000] w-full max-w-2xl p-5 sm:p-8 relative shadow-2xl text-left rounded-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-zinc-400 hover:text-white p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-2 pb-2 pr-10">
            <h2 id="policy-modal-title" className="font-normal text-xl sm:text-3xl text-white tracking-tight">
              {content.title}
            </h2>
            <p className="text-xs text-zinc-400">
              {content.subtitle}
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-5 text-xs text-zinc-300 font-sans leading-relaxed">
            {content.sections.map((sec, i) => (
              <div key={i} className="space-y-1.5">
                <h4 className="text-white font-bold text-sm flex items-center space-x-2">
                  <span>{sec.heading}</span>
                </h4>
                <p className="text-zinc-300 pl-5">{sec.body}</p>
              </div>
            ))}
          </div>

          {/* Footer Action */}
          <div className="pt-6 flex items-center justify-between">
            <span className="text-[10px] font-mono text-zinc-500">
              NETHAWK SOLUTIONS // KADUNA, NIGERIA
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
