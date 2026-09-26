import React, { useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Search } from 'lucide-react';

// Applications are sent here — replace with a dedicated careers inbox if one exists
const CAREERS_EMAIL = 'info@nethawksolutions.org';

const applyHref = (role) =>
  `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Application: ${role}`)}`;

const OPENINGS = [
  { title: 'UAV Flight Operations Pilot', team: 'Missions', location: 'Kaduna, Nigeria', type: 'Full-time' },
  { title: 'Avionics & Embedded Systems Engineer', team: 'Labs & Research', location: 'Kaduna, Nigeria', type: 'Full-time' },
  { title: 'Composite Airframe Technician', team: 'Manufacturing', location: 'Kaduna, Nigeria', type: 'Full-time' },
  { title: 'Counter-UAS Systems Analyst', team: 'Defence Technology', location: 'Kaduna, Nigeria', type: 'Full-time' },
  { title: 'GIS & Mapping Data Specialist', team: 'Drone as a Service', location: 'Hybrid', type: 'Contract' },
  { title: 'Full-Stack Software Engineer', team: 'Digital Systems', location: 'Hybrid', type: 'Full-time' },
  { title: 'QA & Flight Test Engineer', team: 'Labs & Research', location: 'Kaduna, Nigeria', type: 'Full-time' },
  { title: 'Graduate Engineering Intern', team: 'Early Careers', location: 'Kaduna, Nigeria', type: 'Internship' },
];

const EXPLORE_CARDS = [
  {
    image: '/assets/images/manufacturing/nethawk-avionics-lab.jpg',
    title: 'Labs & Research Centre',
    text: 'Visit our engineering and fabrication centre in Kaduna, where we design, build and test mission-ready systems.',
    cta: 'Visit our labs',
    action: 'labs',
  },
  {
    image: '/assets/images/manufacturing/NETHAWK_20.jpg',
    title: 'Our Divisions',
    text: 'From defence technology to digital systems, discover the teams driving innovation and the opportunities they offer.',
    cta: 'Learn more about our work',
    action: 'why-us',
  },
  {
    image: '/assets/images/nati/trainee-controller.jpg',
    title: 'Entry Level Positions',
    text: 'Looking to get your first role or build your career? This is the place to start.',
    cta: 'View open positions',
    action: 'openings',
  },
  {
    image: '/assets/images/nati/about-field.jpg',
    title: 'Life at Nethawk',
    text: 'Our shared values let us accomplish the unthinkable — for our colleagues, our clients and our communities.',
    cta: 'Explore our culture',
    action: 'gallery',
  },
];

const FEATURES = [
  {
    image: '/assets/images/manufacturing/IMG_6564.jpg',
    title: 'UAV Technicians & Engineers',
    text: "Whether you're pursuing aerospace training, hold an engineering qualification, or bring hands-on maintenance experience, we support you at every stage of your career. From airframes to avionics, you'll work on a wide range of unmanned systems while helping shape the future of flight.",
    cta: 'Explore engineering careers',
    action: 'openings',
    tone: 'surface',
    imageSide: 'left',
  },
  {
    image: '/assets/images/defense/nethawk-c2-mission.jpg',
    title: 'Military and Veterans',
    text: "We value the military community and the unparalleled training, skills and perspectives they bring. It's why you'll find service-affiliated colleagues making an impact across our company. If you're part of the military community, we invite you to explore our opportunities and the support we offer as you move into the civilian workforce.",
    cta: 'Learn more',
    action: 'contact',
    tone: 'surface',
    imageSide: 'right',
  },
  {
    image: '/assets/images/nati/about-workshop.jpg',
    title: 'Students & Graduates: Make your mark. Make a difference.',
    text: "Whether you're looking for an internship or your first job after graduation, the possibilities are greater than you can imagine. Here, you'll be at the leading edge of unmanned systems innovation, supported by a team who shares a common mission: your success. Are you up to the challenge?",
    cta: 'Read more',
    action: 'openings',
    tone: 'dark',
    imageSide: 'left',
  },
  {
    image: '/assets/images/academy/nati-engineering-workshop.jpg',
    title: 'Apprenticeships',
    text: 'We believe every individual deserves the chance to develop and thrive, wherever they are in their career. Through NATI Academy, our apprenticeships blend hands-on experience, mentorship and classroom education so you can build practical skills and move your career to new heights.',
    cta: 'Explore our apprenticeships',
    action: 'academy',
    tone: 'surface',
    imageSide: 'right',
  },
];

const HIGHLIGHTS = [
  {
    image: '/assets/images/nati/about-pride.jpg',
    title: 'Total Rewards Highlights',
    text: 'We value our people and believe a strong workforce comes from a healthy one. That is why we offer competitive pay, benefits and continuous training to support you in and out of work.',
    cta: 'Explore our benefits',
    action: 'contact',
  },
  {
    image: '/assets/images/nati/director-headshot.jpg',
    title: 'Hiring Process',
    text: 'We look for the best professionals in the industry and make the application process simple and straightforward for everyone who wants to join our team.',
    cta: 'Learn about our hiring process',
    action: 'process',
  },
  {
    image: '/assets/images/nati/about-culture-bg.jpg',
    title: 'Recruiting Events',
    text: 'Being a leader in unmanned systems has its perks. We visit universities, career fairs and industry events across the country. Come and meet us.',
    cta: 'Meet us at our next event',
    action: 'news',
  },
];

const HIRING_STEPS = [
  { step: '01', title: 'Apply', text: 'Send your CV and a short cover note for the role that fits you.' },
  { step: '02', title: 'Screening', text: 'Our talent team reviews your profile and reaches out within 10 working days.' },
  { step: '03', title: 'Interviews', text: 'Meet the hiring team through technical and culture conversations.' },
  { step: '04', title: 'Offer', text: 'Receive your offer, complete clearance checks and join the mission.' },
];

const featureTones = {
  light: 'bg-[#f4f6f9] text-zinc-900',
  dark: 'bg-[#000000] text-white',
  surface: 'bg-[#0a0a0a] text-white',
};

function LinkArrow({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-accent-bright hover:text-accent-bright transition-colors"
    >
      {children}
      <ArrowRight className="w-3.5 h-3.5" />
    </button>
  );
}

export default function CareersPage(props) {
  const { onNavigateHome, onNavigateManufacturing, onNavigateWhyUs, onNavigateGallery, onNavigateContact, onNavigateNews } = props;
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const actions = {
    labs: onNavigateManufacturing,
    'why-us': onNavigateWhyUs,
    gallery: onNavigateGallery,
    contact: onNavigateContact,
    news: onNavigateNews,
    academy: () => { window.location.href = '/academy/index.html'; },
    openings: () => { setShowAll(true); scrollTo('careers-openings'); },
    process: () => scrollTo('careers-hiring-process'),
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return OPENINGS;
    return OPENINGS.filter((job) =>
      [job.title, job.team, job.location, job.type].some((field) => field.toLowerCase().includes(q))
    );
  }, [query]);

  const visibleJobs = showAll || query ? filtered : filtered.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-sans selection:bg-accent selection:text-white antialiased">
      <Navbar {...props} activePage="careers" />

      {/* Hero */}
      <section className="relative h-[520px] sm:h-[620px] w-full flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/manufacturing/nethawk-composite-fabrication.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/50 via-[#000000]/40 to-[#000000]/95" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-16 sm:pb-20 text-center space-y-5">
          <nav aria-label="Breadcrumb" className="text-sm text-zinc-300 flex items-center justify-center gap-3">
            <button onClick={onNavigateHome} className="hover:text-white transition-colors">Home</button>
            <span className="text-zinc-500">/</span>
            <span className="text-white">Careers</span>
          </nav>
          <h1 className="font-normal text-4xl sm:text-6xl tracking-tight text-white">
            Be Valued. Be Inspired. Be Legendary.
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed max-w-3xl mx-auto">
            Join Nethawk Solutions and you’ll be among the best in the business. We don’t just build world-class
            unmanned systems — we build an environment that challenges, empowers and encourages growth. Here you’ll
            have the opportunities and support to build your legacy, one where the sky isn’t the limit.
          </p>
        </div>
      </section>

      <main className="flex-grow">
        {/* Current Openings */}
        <section
          id="careers-openings"
          className="relative bg-[#000000] py-16 sm:py-20 px-6 sm:px-12 scroll-mt-20"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        >
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-normal text-center text-2xl sm:text-3xl text-white">Current Openings</h2>

            <div className="flex gap-4 rounded-xl border border-white/10 bg-[#0a0a0a] p-5 sm:p-6 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <div className="space-y-2">
                <p className="font-semibold text-white">Important Information for Job Seekers</p>
                <p>
                  We never charge candidates for our services. All official recruiting communication from our team
                  comes from an @nethawksolutions.org email address. We do not use public email domains (e.g. Gmail,
                  Yahoo) to contact candidates.
                </p>
                <p>
                  If you receive a message from someone claiming to be a Nethawk recruiter using a public domain,
                  please report it to{' '}
                  <a href={`mailto:${CAREERS_EMAIL}`} className="text-accent-bright hover:text-accent-bright">{CAREERS_EMAIL}</a>.
                </p>
              </div>
            </div>

            <div className="relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search jobs by keyword..."
                aria-label="Search jobs by keyword"
                className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-accent-bright transition-colors"
              />
            </div>

            <ul className="divide-y divide-white/10 border-y border-white/10">
              {visibleJobs.map((job) => (
                <li key={job.title} className="py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <div className="flex-1 min-w-0 space-y-1">
                    <p className="text-white font-medium">{job.title}</p>
                    <p className="text-xs text-zinc-400 flex flex-wrap gap-x-4 gap-y-1">
                      <span>{job.team}</span>
                      <span>{job.location}</span>
                      <span>{job.type}</span>
                    </p>
                  </div>
                  <a
                    href={applyHref(job.title)}
                    className="self-start sm:self-auto px-5 py-2 rounded-full border border-white/30 text-xs font-medium text-white hover:bg-white hover:text-black transition-all"
                  >
                    Apply
                  </a>
                </li>
              ))}
              {visibleJobs.length === 0 && (
                <li className="py-8 text-center text-sm text-zinc-400">
                  No openings match “{query}”. Send us your CV at{' '}
                  <a href={applyHref('General Application')} className="text-accent-bright hover:text-accent-bright">{CAREERS_EMAIL}</a>.
                </li>
              )}
            </ul>

            {!showAll && !query && filtered.length > visibleJobs.length && (
              <div className="text-center">
                <button
                  onClick={() => setShowAll(true)}
                  className="px-6 py-2.5 rounded-full border border-white/60 text-xs font-medium text-white hover:bg-white hover:text-black transition-all"
                >
                  View All Current Openings
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Explore Cards */}
        <section className="py-16 sm:py-24 px-6 sm:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {EXPLORE_CARDS.map((card) => (
              <article key={card.title} className="space-y-4">
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
                  <img src={card.image} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-medium text-white">{card.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{card.text}</p>
                <LinkArrow onClick={actions[card.action]}>{card.cta}</LinkArrow>
              </article>
            ))}
          </div>
        </section>

        {/* Alternating Feature Bands */}
        {FEATURES.map((feature) => {
          const isLight = feature.tone === 'light';
          const imageLeft = feature.imageSide === 'left';
          return (
            <section key={feature.title} className={`relative overflow-hidden ${featureTones[feature.tone]}`}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[420px]`}>
                <div className={`relative h-72 lg:h-auto ${imageLeft ? '' : 'lg:order-2'}`}>
                  <img src={feature.image} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  <div
                    className={`hidden lg:block absolute inset-0 ${
                      imageLeft ? 'bg-gradient-to-r' : 'bg-gradient-to-l'
                    } from-transparent via-transparent ${
                      isLight ? 'to-[#f4f6f9]' : feature.tone === 'dark' ? 'to-[#000000]' : 'to-[#0a0a0a]'
                    }`}
                  />
                </div>
                <div className={`flex items-center px-6 sm:px-12 lg:px-16 py-12 lg:py-16 ${imageLeft ? '' : 'lg:order-1'}`}>
                  <div className="max-w-xl space-y-5">
                    <h2 className={`font-normal text-2xl sm:text-3xl leading-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                      {feature.title}
                    </h2>
                    <p className={`text-sm leading-relaxed ${isLight ? 'text-zinc-600' : 'text-zinc-300'}`}>{feature.text}</p>
                    <button
                      onClick={actions[feature.action]}
                      className={`px-6 py-2.5 rounded-full border-2 text-xs font-medium transition-all ${
                        isLight
                          ? 'border-accent-bright text-accent hover:bg-accent hover:text-white'
                          : 'border-accent-bright text-white hover:bg-accent hover:text-black'
                      }`}
                    >
                      {feature.cta}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Highlights */}
        <section className="py-16 sm:py-24 px-6 sm:px-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {HIGHLIGHTS.map((card) => (
              <article key={card.title} className="space-y-4">
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
                  <img src={card.image} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-medium text-white">{card.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{card.text}</p>
                <LinkArrow onClick={actions[card.action]}>{card.cta}</LinkArrow>
              </article>
            ))}
          </div>
        </section>

        {/* Hiring Process */}
        <section id="careers-hiring-process" className="px-6 sm:px-12 pb-20 sm:pb-28 scroll-mt-20">
          <div className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 sm:p-12 space-y-10">
            <div className="text-center space-y-2">
              <h2 className="font-normal text-3xl sm:text-4xl text-white">Our Hiring Process</h2>
            </div>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {HIRING_STEPS.map((item) => (
                <li key={item.step} className="space-y-2">
                  <span className="font-mono text-accent-bright text-sm">{item.step}</span>
                  <h3 className="font-medium text-white">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ol>
            <div className="text-center">
              <a
                href={applyHref('General Application')}
                className="inline-block px-7 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-all hover:scale-105 shadow-xl"
              >
                Send a General Application
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer {...props} />
    </div>
  );
}
