import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    category: 'Technology',
    title: 'The Future of MALE UAS in Maritime Surveillance',
    excerpt: 'How medium-altitude, long-endurance unmanned systems are reshaping coast guard and naval operations across contested maritime domains.',
    date: 'September 2026',
    readTime: '6 min read',
    image: '/assets/platforms/nsl-drone-capture-2.jpg',
  },
  {
    id: 2,
    category: 'Operations',
    title: 'From Assembly to Airborne in Under 5 Minutes',
    excerpt: 'A deep dive into the rapid deployment architecture of the AR3 EVO and what it means for forward operating base logistics.',
    date: 'August 2026',
    readTime: '4 min read',
    image: '/assets/images/manufacturing/IMG_6552.jpg',
  },
  {
    id: 3,
    category: 'Intelligence',
    title: 'Swarm Autonomy: The ARX Doctrine',
    excerpt: 'Decentralised AI mesh networks and collaborative mission planning — how attritable swarm systems are changing multidomain doctrine.',
    date: 'July 2026',
    readTime: '7 min read',
    image: '/assets/images/manufacturing/nethawk-13.jpg',
  },
  {
    id: 4,
    category: 'Industry',
    title: 'Lowest TCO: Engineering UAS for Long-Term Value',
    excerpt: 'Modular architectures reduce lifecycle costs by up to 40%. We break down the numbers behind total cost of ownership in defence procurement.',
    date: 'June 2026',
    readTime: '5 min read',
    image: '/assets/platforms/nsl-drone-capture-5.jpg',
  },
  {
    id: 5,
    category: 'Training',
    title: 'NATI Academy: Building the Next Generation of UAS Operators',
    excerpt: 'How structured operator certification programmes are bridging the talent gap in the unmanned systems sector across Africa and beyond.',
    date: 'May 2026',
    readTime: '4 min read',
    image: '/assets/images/nati/svc-training.jpg',
  },
  {
    id: 6,
    category: 'Intelligence',
    title: 'Skygrid: Real-Time Intelligence at Scale',
    excerpt: 'Our intelligence platform processes thousands of sensor feeds simultaneously. An inside look at the data pipeline powering real-time decision-making.',
    date: 'April 2026',
    readTime: '5 min read',
    image: '/assets/images/skygrid/skygrid-dashboard.webp',
  },
];

export default function BlogPage(props) {
  const {
    onNavigateHome, onNavigateMissions, onNavigateManufacturing, onNavigateAcademy,
    onNavigateDefenseTech, onNavigatePlatforms,
    onNavigateWhyUs, onNavigateAtlas, onNavigateSpace, onNavigateDigital, onNavigateAbout,
    onNavigateNews, onNavigateContact, onOpenContact, onOpenGallery, onNavigateBlog,
  } = props;

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-sans selection:bg-accent selection:text-white antialiased">
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
        onOpenGallery={onOpenGallery}
        onNavigateBlog={onNavigateBlog}
        activePage="blog"
      />

      <main className="flex-grow pt-28 pb-20 space-y-20 sm:space-y-28">

        {/* Hero */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto">
          <div className="space-y-5 max-w-3xl">
            <h1 className="font-normal text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-white">
              Intelligence from the <br />
              <span className="text-zinc-300">frontline of autonomy.</span>
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              Technology briefings, operational insights, and strategic thinking from the teams building and deploying the next generation of unmanned systems.
            </p>
          </div>
        </section>

        {/* Featured post */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto">
          <div className="relative isolate rounded-[32px] sm:rounded-[40px] overflow-hidden min-h-[420px] flex flex-col justify-end border border-white/10 shadow-2xl group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-100 transition-transform duration-700"
              style={{ backgroundImage: `url('${BLOG_POSTS[0].image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent" />
            <div className="relative z-10 p-8 sm:p-14 space-y-4 max-w-3xl">
              <span className="text-[11px] font-mono bg-accent/20 text-accent-bright border border-accent-bright/30 px-3 py-1 rounded-full uppercase tracking-wider">
                {BLOG_POSTS[0].category} · {BLOG_POSTS[0].readTime}
              </span>
              <h2 className="font-normal text-2xl sm:text-4xl text-white leading-tight">
                {BLOG_POSTS[0].title}
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {BLOG_POSTS[0].excerpt}
              </p>
              <div className="flex items-center space-x-2 text-accent-bright text-xs font-medium">
                <span>Read article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(1).map((post) => (
              <div
                key={post.id}
                className="rounded-[28px] bg-[#0a0a0a] border border-white/10 overflow-hidden hover:border-accent-bright/30 hover:bg-accent-wash transition-all duration-300 group cursor-pointer flex flex-col"
              >
                <div className="relative h-[180px] overflow-hidden">
                  <img loading="lazy" decoding="async"
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                </div>
                <div className="p-6 space-y-3 flex flex-col flex-grow">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono bg-accent/15 text-accent-bright border border-accent-bright/25 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-zinc-500">{post.readTime}</span>
                  </div>
                  <h3 className="font-medium text-sm sm:text-base text-white leading-snug group-hover:text-accent-bright transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="pt-3 flex items-center justify-between border-t border-white/10">
                    <span className="text-[10px] text-zinc-500">{post.date}</span>
                    <div className="flex items-center space-x-1 text-[10px] text-accent-bright">
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="px-6 sm:px-12 max-w-[1920px] mx-auto">
          <div className="rounded-[32px] bg-gradient-to-r from-[#031326] to-[#08203d] border border-white/15 p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <h3 className="font-medium text-2xl sm:text-3xl text-white">Stay ahead of the mission.</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Receive briefings, product updates, and operational insights directly from the Nethawk team.
              </p>
            </div>
            <button
              onClick={() => onOpenContact && onOpenContact()}
              className="px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all shadow-xl shrink-0 flex items-center space-x-2"
            >
              <span>Subscribe to Briefings</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      <Footer
        onOpenContact={onOpenContact}
        onNavigateHome={onNavigateHome}
        onNavigateMissions={onNavigateMissions}
        onNavigateManufacturing={onNavigateManufacturing}
        onNavigateAcademy={onNavigateAcademy}
        onNavigateDefenseTech={onNavigateDefenseTech}
        onNavigateWhyUs={onNavigateWhyUs}
        onNavigateNews={onNavigateNews}
        onNavigateContact={onNavigateContact}
      />
    </div>
  );
}
