export const NATI_REPO_URL = 'https://github.com/iNfix-2/NATI';

export const NETHAWK_NAV_LINKS = [
  { name: 'Why us?', href: '#/why-us' },
  { name: 'Platforms', href: '#/platforms', sublinks: [
    { name: 'AR3 EVO', href: '#/ar3' },
    { name: 'AR5', href: '#/ar5' },
    { name: 'ARX', href: '#/arx' }
  ]},
  { name: 'Missions', href: '#/missions' },
  { name: 'ATLAS', href: '#/atlas' },
  { name: 'Space', href: '#/space' },
  { name: 'Digital', href: '#/digital' },
  { name: 'About', href: '#/about' },
  { name: 'Contact', href: '#/contact' },
];

export const WHY_US_PILLARS = [
  {
    id: 'pillar-1',
    number: '01',
    title: 'The right team and right culture',
    description: 'With thousands of operational flight hours, our highly experienced team is deeply rooted in Software, Data, and AI. Our operations personnel act as our customer-in-residence, continually informing hardware and software iteration.'
  },
  {
    id: 'pillar-2',
    number: '02',
    title: 'Fully-proven UAV technology',
    description: 'A proven global benchmark in real-time maritime and tactical perception. Our systems have been actively deployed across frontline operations, maritime interdiction, and complex border security missions.'
  },
  {
    id: 'pillar-3',
    number: '03',
    title: "We're a manufacturer and an operator",
    description: 'Our UAS are designed for rapid field assembly and effortless operation. We provide complete turnkey intelligence-as-a-service or grant full sovereign autonomy through comprehensive training programs.'
  },
  {
    id: 'pillar-4',
    number: '04',
    title: 'Real-time intelligence as a service',
    description: 'Combining 20+ hour endurance aircraft with satellite communications, optical/SAR sensor fusion, and an AI/ML ground data center ensuring decision-makers receive actionable intelligence instantaneously.'
  }
];

export const VALUE_CHAIN_STAGES = [
  {
    id: 'comp',
    step: '01',
    title: 'Components & Materials',
    points: [
      'Internal development of sub-systems and sensors that deliver strategic advantage',
      'Advanced composite materials engineered for harsh environmental tolerances',
      'Continuous make/buy optimization to assure long-term cost competitiveness'
    ]
  },
  {
    id: 'payloads',
    step: '02',
    title: 'Sub-systems & Payloads',
    points: [
      'Mission-driven payload design with hot-swappable sensor bays',
      'Native integration of EO/IR, SAR radar, AIS, SIGINT, and laser designation',
      'Full control over hardware firmware and edge-processing pipelines'
    ]
  },
  {
    id: 'integration',
    step: '03',
    title: 'Product Design & System Integration',
    points: [
      'Flexible acquisition: procured as capital equipment or as-a-Service',
      'Full vertical control over user experience, avionics, and flight telemetry',
      'Continuous R&D feedback loop powered by active frontline operations'
    ]
  },
  {
    id: 'production',
    step: '04',
    title: 'Production & Testing',
    points: [
      'Total quality control across manufacturing, precision assembly, and bench testing',
      'State-of-the-art facilities with AS9100 aerospace certification standards',
      'Scalable high-throughput production lines supporting rapid surge demands'
    ]
  },
  {
    id: 'operation',
    step: '05',
    title: 'Operation & Maintenance',
    points: [
      'Turnkey flight operations delivered by certified pilots and payload specialists',
      'Operator and technician flight certification programs via NATI Academy',
      'Modular swappable line-replaceable units (LRUs) for 99%+ operational availability'
    ]
  },
  {
    id: 'intelligence',
    step: '06',
    title: 'Data Exploitation & Mission Intelligence',
    points: [
      'Edge AI/ML inference onboard for real-time target identification and tracking',
      'ATLAS intelligence ground suite for mission planning, live feeds, and evidential review',
      'Multi-source sensor correlation delivered with ultra-low latency'
    ]
  }
];

export const MISSIONS_LIST = [
  {
    id: 'ew',
    badge: 'MISSION 01',
    title: 'Autonomous Collaborative Electronic Warfare',
    description: 'Autonomous multi-UAS swarms performing coordinated electronic attack, emitter geolocation, signal jamming, and tactical relay in contested electromagnetic environments.',
    image: '/assets/images/missions/nethawk-command-center.jpg',
    thumb: '/assets/images/missions/nethawk-command-center.jpg',
    tag: 'Contested Spectrum // Electronic Attack'
  },
  {
    id: 'shipborne',
    badge: 'MISSION 02',
    title: 'Shipborne Maritime Surveillance',
    description: 'Precision VTOL operations launched directly from ship decks to provide persistent 360-degree over-the-horizon surveillance, vessel classification, and EEZ patrol.',
    image: '/assets/images/missions/persistent-awareness.jpg',
    thumb: '/assets/images/missions/persistent-awareness.jpg',
    tag: 'Maritime ISR // Vessel Identification'
  },
  {
    id: 'tactical-combat',
    badge: 'MISSION 03',
    title: 'Combat ISR & Force Protection',
    description: 'Tactical intelligence, surveillance, and reconnaissance delivered directly to field commanders in GPS-denied environments with optical and synthetic aperture radar fusion.',
    image: '/assets/images/missions/nethawk-tactical-team.jpg',
    thumb: '/assets/images/missions/nethawk-tactical-team.jpg',
    tag: 'Tactical Reconnaissance // GPS-Denied'
  },
  {
    id: 'wildlife',
    badge: 'MISSION 04',
    title: 'Marine Wildlife & Environmental Protection',
    description: 'Large-scale ocean and coastal monitoring to detect illegal fishing, track cetaceans and endangered marine life, monitor oil spills, and safeguard protected marine sanctuaries.',
    image: '/assets/images/services/research-innovation.jpg',
    thumb: '/assets/images/services/research-innovation.jpg',
    tag: 'Environmental Sensing // Ocean Monitoring'
  },
  {
    id: 'sar',
    badge: 'MISSION 05',
    title: 'Search & Rescue (SAR) Operations',
    description: 'High-endurance aerial coverage capable of detecting vessels in distress, life rafts, and individuals in harsh sea conditions, relaying precise coordinates to rescue teams.',
    image: '/assets/platforms/ops-live-vtol.jpg',
    thumb: '/assets/platforms/ops-live-vtol.jpg',
    tag: 'Emergency Response // Life Saving'
  },
  {
    id: 'infrastructure',
    badge: 'MISSION 06',
    title: 'Border & Critical Infrastructure Defense',
    description: 'Persistent 24/7 patrol of land borders, energy pipelines, offshore platforms, and strategic military installations with automated anomaly detection.',
    image: '/assets/images/missions/nethawk-engineering-team.jpg',
    thumb: '/assets/images/missions/nethawk-engineering-team.jpg',
    tag: 'Critical Assets // Perimeter Security'
  }
];

export const PLATFORMS_DATA = {
  ar3: {
    id: 'ar3',
    name: 'AR3 EVO',
    badge: 'TACTICAL VTOL & FIXED-WING',
    tagline: 'One System, Multiple Aircraft',
    heroDesc: "Forged in demanding operational theaters, the AR3 Evolution reflects hard-earned combat and civil insight. Designed to operate in GPS- and comms-denied environments, it redefines tactical versatility.",
    image: '/assets/images/platforms/nethawk-tactical-uav.jpg',
    overviewCards: [
      { title: 'One System, Multiple Aircraft', desc: 'Deploy multiple platforms with distinct configurations, working in coordinated swarms for the same mission objective.' },
      { title: 'Fully Modular Architecture', desc: 'Adapt payloads, communications, propulsion, and launch methods according to specific mission requirements.' },
      { title: 'Precision VTOL Capability', desc: 'Operate from just 5x5 metres, including ship decks, austere forward operating bases, and unprepared terrain.' },
      { title: 'Mission-Ready in Minutes', desc: 'From transport cases to airborne in under 5 minutes, with operator certification achievable in 5 days.' }
    ],
    specs: {
      mtow: '25 kg (up to 30 kg VTOL)',
      endurance: 'Up to 22h (FW) / 14h (VTOL)',
      payload: '6 kg',
      cruiseSpeed: '46 knots (85 km/h)',
      commsRange: 'Up to 230 km (LOS / Satcom)',
      launchRecovery: 'Catapult / VTOL / Parachute',
      dimensions: '4.2 m (Wingspan) x 1.96 m (Length)'
    },
    subsystems: [
      { name: 'Payloads', desc: 'Dual-sensor EO/IR gimbals, compact SAR radar, AIS receivers, SIGINT receivers, and laser designators.' },
      { name: 'Modular Architecture', desc: 'Seamlessly transition between fixed-wing catapult launch and vertical takeoff and landing (VTOL) configuration in the field.' },
      { name: 'Propulsion', desc: 'Heavy-fuel, combustion, or pure electric configurations optimized for endurance, speed, or high-altitude operations.' },
      { name: 'Communications', desc: 'Plug-and-play encrypted line-of-sight datalink, tactical MANET mesh radios, and LTE/SATCOM backhauls.' }
    ],
    configurations: [
      {
        name: 'Detect & Identify (ISR)',
        desc: 'Persistent monitoring, automated target classification, and precise tracking in complex environments.',
        payloads: ['EO/IR HD Gimbal with Thermal', 'Synthetic Aperture Radar (SAR)', 'Ground Moving Target Indicator (GMTI)', 'Laser Target Designator']
      },
      {
        name: 'Electronic Attack & EW',
        desc: 'Tactical effect delivery, directional communications jamming, and electronic denial in contested spectrum.',
        payloads: ['Directional EW Antennas', 'Anti-Jamming GPS Navigation Node', 'Target-Specific RF Disruptors', 'SIGINT Sensor Package']
      },
      {
        name: 'Communications Relay',
        desc: 'Secure communication bridge between dispersed ground units, maritime assets, and command nodes.',
        payloads: ['Tactical MANET Mesh Radios', 'BVLOS Satcom Integration', 'ADS-B / IFF Transponders', 'Encrypted C2 Relays']
      },
      {
        name: 'Maritime Wide Area Surveillance',
        desc: 'Persistent coverage over littoral and open ocean domains with automated vessel detection.',
        payloads: ['Maritime Search Radar', 'High-Sensitivity AIS Receiver', 'Optical Maritime Gimbal', 'Marine VHF Comms Bridge']
      }
    ]
  },
  ar5: {
    id: 'ar5',
    name: 'AR5',
    badge: 'MALE FIXED-WING SYSTEM',
    tagline: 'Europe’s Leading UAS for Maritime & Persistent Intelligence',
    heroDesc: 'The AR5 is the most advanced medium-altitude, medium-endurance fixed-wing UAS on the market. Engineered for long-range maritime patrol, border security, and search and rescue with unmatched cost-efficiency.',
    image: '/assets/platforms/nsl-drone-capture-2.jpg',
    specs: {
      mtow: '180 kg',
      endurance: '20+ hours',
      payload: '50 kg',
      cruiseSpeed: '100 km/h (54 knots)',
      commsRange: 'Unlimited (Global SATCOM)',
      launchRecovery: 'Unprepared Airstrip / Short Runway',
      dimensions: '7.3 m (Wingspan) x 4.0 m (Length)'
    },
    capabilities: [
      { title: 'Persistent Maritime Patrol', desc: 'Scans thousands of square nautical miles per sortie with fused radar and optical sensors.' },
      { title: 'Search & Rescue (SAR)', desc: 'Rapidly locates vessels in distress and deploys emergency beacons or life rafts directly to survivors.' },
      { title: 'Land Border Surveillance', desc: 'Continuous day and night monitoring along national borders with automated thermal detection.' },
      { title: 'Environmental & Fisheries Monitoring', desc: 'Monitors EEZ compliance, detects illegal transshipments, and maps environmental anomalies.' }
    ]
  },
  arx: {
    id: 'arx',
    name: 'ARX',
    badge: 'AUTONOMOUS SWARM & EW',
    tagline: 'The Game Changer',
    heroDesc: 'ARX is a breakthrough next-generation autonomous uncrewed system engineered for collaborative swarm operations, attritable tactical effects, and synchronized electronic warfare across multidomain battlespaces.',
    image: '/assets/platforms/nsl-drone-capture-7.jpg',
    specs: {
      mtow: 'Modular Swarm Class',
      endurance: 'High Speed & Tactical Range',
      payload: 'Interchangeable Mission Pods',
      cruiseSpeed: 'High Subsonic / Tactical Sprint',
      commsRange: 'Collaborative AI Mesh',
      launchRecovery: 'Canister / Tube / Catapult',
      dimensions: 'Compact Foldable Airframe'
    },
    capabilities: [
      { title: 'Collaborative Swarm Autonomy', desc: 'Decentralized peer-to-peer AI algorithms coordinate distributed search, distraction, and strike profiles.' },
      { title: 'Multidomain Electronic Attack', desc: 'Suppresses adversary radar networks and disrupts command links ahead of primary assets.' },
      { title: 'Attritable Mass Capability', desc: 'Cost-effective scalable manufacturing designed for high-intensity operational density.' },
    ]
  }
};

export const PLATFORMS_LIST = [
  {
    id: 'ar3',
    name: 'AR3 EVO',
    role: 'TACTICAL VTOL & FIXED-WING',
    tagline: 'One system, multiple aircraft. Adaptable for GPS-denied tactical operations.',
    image: '/assets/images/platforms/nethawk-tactical-uav.jpg',
    specs: {
      mtow: '25 kg (30 kg VTOL)',
      wingspan: '4.2 m',
      endurance: 'Up to 22h FW / 14h VTOL',
      payload: '6 kg Modular Bay',
      comms: '230 km LOS & Satcom'
    },
    desc: 'Versatile tactical platform configurable for VTOL or catapult launch with integrated EO/IR, radar, and EW.'
  },
  {
    id: 'ar5',
    name: 'AR5',
    role: 'MALE FIXED-WING SYSTEM',
    tagline: 'Europe’s leading UAS for maritime and overland persistent surveillance.',
    image: '/assets/platforms/nsl-drone-capture-2.jpg',
    specs: {
      mtow: '180 kg',
      wingspan: '7.3 m',
      endurance: '20+ Hours',
      payload: '50 kg Multi-Sensor',
      comms: 'Unlimited SATCOM'
    },
    desc: 'Medium-altitude long-endurance system optimized for EEZ patrol, search and rescue, and border monitoring.'
  },
  {
    id: 'arx',
    name: 'ARX',
    role: 'AUTONOMOUS SWARM & EW',
    tagline: 'The Game Changer in collaborative multi-domain swarm operations.',
    image: '/assets/platforms/nsl-drone-capture-7.jpg',
    specs: {
      mtow: 'Swarm Class',
      wingspan: 'Foldable Airframe',
      endurance: 'Tactical Range',
      payload: 'Interchangeable Pods',
      comms: 'Collaborative AI Mesh'
    },
    desc: 'Next-generation attritable swarm intelligence and synchronized electronic attack UAS.'
  },
  {
    id: 'field-ops-vtol',
    name: 'Field Ops VTOL UAS',
    role: 'TACTICAL EXPEDITIONARY',
    tagline: 'Rapid launch and recovery for shipborne and remote austere operations.',
    image: '/assets/platforms/ops-live-vtol.jpg',
    specs: {
      mtow: 'VTOL Class',
      wingspan: 'Fixed-Wing VTOL',
      endurance: 'Extended Ops',
      payload: 'ISR Gimbal',
      comms: 'Tactical Datalink'
    },
    desc: 'Flight-line proven expeditionary VTOL platform for field operations and special tasking.'
  }
];

export const ATLAS_FEATURES = [
  {
    id: 'prepare',
    number: '01',
    title: 'Prepare Mission',
    subtitle: 'UAV Mission Enhancer ATLAS',
    desc: 'Empowers mission commanders to plan operations with surgical precision.',
    bullets: [
      'Create and distribute standardized digital mission briefs',
      'Define operational objectives and polygonal search areas on 3D maps',
      'Select optimal airframe, propulsion, and payload configurations',
      'Automated airspace clearance and approval workflows'
    ]
  },
  {
    id: 'follow',
    number: '02',
    title: 'Follow Live',
    subtitle: 'Real-Time Edge Telemetry',
    desc: 'Stream ultra-low-latency video feeds and fused telemetry directly in any web browser without local software installation.',
    bullets: [
      'Dual optical and thermal live video stream with augmented reality overlays',
      'Real-time flight path, telemetry, and payload sensor orientation',
      'Atmospheric layers integration (winds, oceanic currents, AIS tracks)',
      'Instant timeline scrubbing to replay critical moments while live stream continues'
    ]
  },
  {
    id: 'search-live',
    number: '03',
    title: 'Search Live',
    subtitle: 'Active Fleet Awareness',
    desc: 'Query ongoing operations across multiple deployed platforms simultaneously.',
    bullets: [
      'Filter missions by geographical coordinates or target classification',
      'Real-time heatmaps of cumulative sensor coverage',
      'Dynamic re-tasking of airborne assets with one-click waypoints'
    ]
  },
  {
    id: 'explore',
    number: '04',
    title: 'Explore Data',
    subtitle: 'Automated Target Analytics',
    desc: 'Deep inspection and cross-correlation of identified vessels, vehicles, and objects of interest.',
    bullets: [
      'Comprehensive vessel registry lookup and AIS track history',
      'AI-powered anomaly detection (dark vessels, transshipment behaviors)',
      'Cross-correlation of optical captures with historical database sightings'
    ]
  },
  {
    id: 'search-past',
    number: '05',
    title: 'Search Past Missions',
    subtitle: 'Evidential Intelligence Archive',
    desc: 'Complete historical mission archive indexed for forensic investigation and court-admissible evidence.',
    bullets: [
      'Full mission playback with synchronized multi-sensor recordings',
      'Spatial search across months of historical patrol tracks',
      'Export cryptographically-signed evidentiary packages'
    ]
  },
  {
    id: 'search-vessels',
    number: '06',
    title: 'Search Vessels',
    subtitle: 'Maritime Domain Awareness',
    desc: 'Integrated database of global maritime tracks, suspicious vessels, and historical sightings.',
    bullets: [
      'Instant search by MMSI, IMO, vessel name, or visual characteristics',
      'Automated dark-vessel alerts when AIS signal is deliberately disabled',
      'Direct integration with national coast guard and naval C2 networks'
    ]
  }
];

export const SPACE_PRODUCTS = {
  gamalink: {
    title: 'GAMALINK',
    subtitle: 'SDR-Based Inter-Satellite Link (ISL)',
    desc: 'GAMALINK is one of the world’s most advanced and flexible software-defined radios for space applications. It provides simultaneous support for multi-node in-orbit communication, inter-satellite ranging, and ground telemetry.',
    specs: [
      { label: 'Frequency Band', value: 'S-band (2.2 to 2.45 GHz)' },
      { label: 'Comms Range', value: '10 cm to 1000+ km' },
      { label: 'RF Output Power', value: '100 mW to 4 W (Adjustable)' },
      { label: 'Net Data Rate', value: '10 kbps to 500 kbps (Adaptive)' },
      { label: 'Ranging Accuracy', value: 'Better than 50 cm (3-sigma)' },
      { label: 'Range Rate Accuracy', value: 'Better than 1 mm/s' },
      { label: 'Time Correlation', value: 'Better than 1 ms' },
      { label: 'Radiation Protection', value: 'Qualified for TID up to 20 krad (SEE/SEL tolerant)' },
      { label: 'Supply Voltage', value: '22V to 32V unregulated' },
      { label: 'Mass & Dimensions', value: '450g / 96 x 94 x 45 mm' }
    ]
  },
  gamasar: {
    title: 'GAMASAR',
    subtitle: 'Spaceborne Synthetic Aperture Radar',
    desc: 'GAMASAR technology provides cloud-penetrating and light-independent radar imaging to capture high-resolution surface data day and night. Deployable on smallsats or high-altitude UAS.'
  },
  missions: [
    {
      name: 'ESA HERA Mission',
      role: 'Planetary Defence & Inter-Satellite Communications',
      desc: "Providing the critical Inter-Satellite Link (ISL) subsystem supporting coordinated spacecraft communications and precision ranging around the Didymos binary asteroid system.",
      link: 'https://www.heramission.space'
    },
    {
      name: 'ESA PROBA-3 Mission',
      role: 'Precision Satellite Formation Flying',
      desc: 'Enabling millimetre-precision relative positioning between two formation-flying satellites creating an artificial solar eclipse in orbit to study the Sun’s corona.',
      link: 'https://www.esa.int'
    },
    {
      name: 'ATLARCTIC Programme',
      role: 'Compact X-band SAR Earth Observation',
      desc: 'Advanced radar satellite constellation study with the European Space Agency under InCubed for all-weather maritime and Arctic security monitoring.',
      link: 'https://www.tekever.com/space/'
    }
  ]
};

export const DIGITAL_SOLUTIONS = [
  {
    title: 'Smart Mobility & Transportation',
    desc: 'Engineering high-availability urban mobility platforms, parking automation, and micro-mobility fleet management.',
    clients: ['GIRA Lisbon Bike Hire', 'ePark Smart Parking', 'AICEP']
  },
  {
    title: 'Mission-Critical Enterprise Systems',
    desc: 'Scalable, secure enterprise architectures handling millions of transactions across public utilities and banking infrastructure.',
    clients: ['EDP Global Energy', 'GALP Energy', 'Santander Bank']
  },
  {
    title: 'Government & Digital Public Services',
    desc: 'Transforming citizen services through secure identity verification, digitized administrative workflows, and high-trust portals.',
    clients: ['AMA Agency for Administrative Modernisation', 'National Public Registries']
  },
  {
    title: 'Cybersecurity & Defence Software',
    desc: 'Hardened software pipelines, cryptographic communication layers, and automated threat monitoring for sovereign infrastructure.',
    clients: ['Defence Agencies', 'Critical Infrastructure Providers']
  }
];

export const ABOUT_STORY = [
  {
    year: '2026',
    title: 'Global Expansion & Industrial Scaling',
    desc: 'Continued expansion with state-of-the-art manufacturing facilities, sovereign UAS production in the UK, France, and Africa, and expanding defense deployments globally.'
  },
  {
    year: '2025',
    title: 'European Defense Unicorn Milestone',
    desc: 'Recognized as one of Europe’s foremost defense-tech scale-ups, backed by leading global institutional investors to accelerate autonomous dual-use aerospace technology.'
  },
  {
    year: '2021',
    title: 'European Maritime UAS Leadership',
    desc: 'Became the dominant provider of uncrewed maritime perception services to European agencies, while expanding dedicated Space and Digital technology divisions.'
  },
  {
    year: '2010',
    title: 'Pioneering Software-Defined Aerospace',
    desc: 'Identified the critical convergence of UAS hardware and AI algorithms, initiating deep R&D into modular composite airframes and autonomous flight avionics.'
  },
  {
    year: '2001',
    title: 'Foundation in AI & Distributed Systems',
    desc: 'Founded by computer scientists and AI researchers dedicated to developing intelligent, highly distributed architectures and autonomous mission systems.'
  }
];

export const NEWS_ARTICLES = [
  {
    id: 'corvus-contract',
    date: '12 February 2026',
    category: 'DEFENCE CONTRACT',
    title: 'TEKEVER signs up to £400 million CORVUS contract to deliver next-generation battlefield intelligence capability to the British Army',
    summary: 'The landmark contract brings TEKEVER’s AR5 long-endurance UAS into service with the British Army, delivering persistent over-the-horizon ISR and anchoring sovereign manufacturing capability.',
    image: '/assets/platforms/nsl-drone-capture-2.jpg',
    readTime: '4 min read'
  },
  {
    id: 'flowcopter-acquisition',
    date: '01 September 2026',
    category: 'STRATEGIC ACQUISITION',
    title: 'TEKEVER acquires Flowcopter to expand autonomous capabilities through breakthrough propulsion technology',
    summary: 'Integration of innovative hydraulic transmission propulsion enables next-generation heavy-lift autonomous aerial systems for harsh contested environments.',
    image: '/assets/platforms/ops-live-vtol.jpg',
    readTime: '3 min read'
  },
  {
    id: 'maritime-portugal',
    date: '23 June 2026',
    category: 'GOVERNMENT CONTRACT',
    title: 'TEKEVER Wins Contract to Strengthen Maritime Surveillance in Portugal',
    summary: 'National Maritime Authority selects AR3 EVO systems for persistent coastal surveillance, search and rescue, and fisheries protection with direct operator training.',
    image: '/assets/images/missions/persistent-awareness.jpg',
    readTime: '3 min read'
  },
  {
    id: 'sapient-mou',
    date: '15 May 2026',
    category: 'TECHNOLOGY PARTNERSHIP',
    title: 'TEKEVER and Sapient Perception sign MOU to explore next-generation airborne ISR sensing',
    summary: 'Joint development to integrate open-architecture autonomous sensing and edge-AI target recognition across TEKEVER fixed-wing and VTOL UAS fleets.',
    image: '/assets/images/missions/nethawk-command-center.jpg',
    readTime: '3 min read'
  }
];

export const CORE_SERVICES = [
  {
    id: 'service-1',
    category: 'DEFENCE TECH & UAS',
    date: 'SERVICE DIVISION 01',
    title: 'Tactical & Long-Endurance UAS Platforms',
    summary: 'Mission-ready uncrewed aerial systems (AR3 EVO, AR5, ARX) delivering multi-sensor tactical ISR, precision VTOL, and satellite-enabled persistence.',
    image: '/assets/images/platforms/nethawk-tactical-uav.jpg'
  },
  {
    id: 'service-2',
    category: 'INTELLIGENCE AS A SERVICE',
    date: 'SERVICE DIVISION 02',
    title: 'ATLAS Real-Time Mission Intelligence',
    summary: 'End-to-end mission planning, edge video analytics, live sensor feeds, and evidential search suite for commanders and decision-makers.',
    image: '/assets/images/missions/nethawk-command-center.jpg'
  },
  {
    id: 'service-3',
    category: 'SPACE & SATELLITE TECH',
    date: 'SERVICE DIVISION 03',
    title: 'Inter-Satellite Links & Space Radar',
    summary: 'GAMALINK SDR communication nodes and GAMASAR synthetic aperture radar engineered for planetary science, satellite swarms, and earth observation.',
    image: '/assets/images/services/research-innovation.jpg'
  },
  {
    id: 'service-4',
    category: 'ACADEMY & NATI',
    date: 'SERVICE DIVISION 04',
    title: 'NATI Professional UAS Training & Certification',
    summary: 'Comprehensive pilot, sensor operator, technician, and maintenance engineering certification programs delivering sovereign operational autonomy.',
    image: '/assets/images/services/academy-training.jpg'
  }
];

export const GLOBAL_OFFICES = [
  {
    country: 'PORTUGAL (HQ)',
    city: 'Lisbon',
    address: 'Edifício Gonçalves Zarco, R. da Cintura do Porto de Lisboa, 1350-352 Lisboa, Portugal',
    contact: 'info@nethawksolutions.org'
  },
  {
    country: 'UNITED KINGDOM',
    city: 'Bristol',
    address: 'Assembly Building A, Cheese Lane, Bristol BS2 0JJ, United Kingdom',
    contact: 'uk@nethawksolutions.org'
  },
  {
    country: 'FRANCE',
    city: 'Toulouse',
    address: '51 rue Raymond IV, 31000 Toulouse, France',
    contact: 'france@nethawksolutions.org'
  },
  {
    country: 'UNITED STATES',
    city: 'Fayetteville, NC',
    address: '225 Ray Avenue, Suite 310, Fayetteville, North Carolina 28301, USA',
    contact: 'usa@nethawksolutions.org'
  },
  {
    country: 'ESTONIA',
    city: 'Tallinn',
    address: 'Maakri 25, Tallinn, 10145, Estonia',
    contact: 'estonia@nethawksolutions.org'
  },
  {
    country: 'WEST AFRICA HUB',
    city: 'Abuja / Lagos',
    address: 'Nethawk Defense Technology Complex, Abuja, Nigeria',
    contact: 'info@nethawksolutions.org'
  }
];

export const WHY_NETHAWK = [
  {
    title: 'Indigenous Capability',
    desc: 'Advancing local digital, engineering, and technology sovereignty.'
  },
  {
    title: 'Mission-Centric Development',
    desc: 'Engineered directly around operational problems and real-world needs.'
  },
  {
    title: 'Integrated Delivery',
    desc: 'Connecting software, hardware, intelligence, and deployment into one partner.'
  },
  {
    title: 'Human-Capacity Development',
    desc: 'Training operators, engineers, and technicians to operate and sustain systems.'
  }
];

export const VALUES_LIST = [
  { name: 'Excellence', desc: 'We pursue high standards in technology, engineering, service, and delivery.' },
  { name: 'Innovation', desc: 'We continuously explore better ways to solve complex problems.' },
  { name: 'Precision', desc: 'We value disciplined execution and attention to detail.' },
  { name: 'Integrity', desc: 'We operate with professionalism, accountability, and responsibility.' },
  { name: 'Security', desc: 'We protect people, systems, information, infrastructure, and mission-critical capabilities.' }
];

/* =========================================================================
   NATI (NETHAWK AVIATION TRAINING INSTITUTE) - INTEGRATED REPOSITORY DATA
   ========================================================================= */

export const NATI_OVERVIEW = {
  name: 'Nethawk Aviation Training Institute',
  acronym: 'NATI',
  tagline: 'Elevating African Aviation Through Discipline & Mastery.',
  description: 'NATI is a premier professional aviation institute training the professionals behind safe airspace — air traffic communicators, aerodrome emergency responders, tactical UAS pilots, and executive aviation leaders — through ICAO-aligned, instructor-led programmes.',
  coordinates: 'LAT: 6.5244° N | LON: 3.3792° E',
  stats: [
    { label: 'STANDARDS', value: 'ICAO Aligned', sub: 'Global Compliance' },
    { label: 'METHODOLOGY', value: '100% Instructor-Led', sub: 'Hands-on Training' },
    { label: 'ACADEMIC STRUCTURE', value: '3 Schools + UAS', sub: 'Multidisciplinary' },
    { label: 'ACCREDITED COURSES', value: '9+ Programs', sub: 'Certified Diplomas' }
  ],
  mission: 'Empowering aviation professionals with the technical mastery, operational discipline, and ethical foundations required to navigate and secure the future of global airspace.',
  vision: 'To become the benchmark for manned and unmanned aviation education, operational safety, and aerospace leadership across Africa and worldwide.'
};

export const NATI_CORE_VALUES = [
  {
    id: 'v-1',
    code: 'V_01',
    title: 'Discipline',
    description: 'Strict adherence to flight protocols, aviation law, and professional conduct ensuring total reliability across all operations.'
  },
  {
    id: 'v-2',
    code: 'V_02',
    title: 'Excellence',
    description: "We don't just meet standards; we set them. Our rigorous curriculum demands the highest level of technical proficiency and operational mastery."
  },
  {
    id: 'v-3',
    code: 'V_03',
    title: 'Safety',
    description: 'The safety of people, critical national infrastructure, and sovereign airspace is our primary, non-negotiable operational doctrine.'
  },
  {
    id: 'v-4',
    code: 'V_04',
    title: 'Innovation',
    description: 'Constant evolution of training methodologies to integrate AI-driven autonomy, computer vision, and next-gen flight systems.'
  },
  {
    id: 'v-5',
    code: 'V_05',
    title: 'Professionalism',
    description: 'Cultivating a mindset of elite performance, ethical stewardship, situational awareness, and decisive strategic leadership.'
  }
];

export const NATI_SCHOOLS = [
  {
    id: 'ALL',
    name: 'All Catalog',
    count: 10,
    badge: 'Comprehensive'
  },
  {
    id: 'ATS',
    name: 'Air Traffic Services & Comms',
    code: 'School 01',
    count: 5,
    badge: 'ATS & Nav'
  },
  {
    id: 'EMERGENCY',
    name: 'Airport Emergency & Firefighting',
    code: 'School 02',
    count: 3,
    badge: 'Fire & Rescue'
  },
  {
    id: 'EXECUTIVE',
    name: 'Executive & Aviation Management',
    code: 'School 03',
    count: 1,
    badge: 'Executive'
  },
  {
    id: 'UAV',
    name: 'Tactical UAV & Flight Autonomy',
    code: 'Flagship UAS',
    count: 1,
    badge: 'UAS Licensing'
  }
];

export const NATI_COURSES = [
  {
    id: 'prog-01',
    number: '01',
    code: 'NATI-ATS-ELP',
    schoolId: 'ATS',
    schoolName: 'ATS & COMMUNICATION',
    title: 'English Language Proficiency Test',
    badge: 'ICAO Level 4+',
    type: 'Short Course',
    duration: '4 Weeks',
    image: '/assets/images/nati/programme-01-english.jpg',
    summary: 'Prepares aviation personnel in standard aeronautical English to communicate effectively within the aviation community on at least operational Level 4 of the ICAO Language Proficiency Rating Scale.',
    curriculum: [
      'ICAO Language Proficiency Rating Scale & Rubrics',
      'Aeronautical Radiotelephony Phraseology & Syntax',
      'Emergency & Non-Routine Transmission Dialogues',
      'Listening Comprehension & Accent Neutralization',
      'CBT Interactive Aviation Speaking Assessments'
    ],
    targetAudience: 'Air Traffic Controllers, Flight Dispatchers, Commercial Pilots, Aerodrome Ground Communicators.',
    prerequisites: 'Basic English comprehension, secondary school certificate.'
  },
  {
    id: 'prog-02',
    number: '02',
    code: 'NATI-ATS-AMS',
    schoolId: 'ATS',
    schoolName: 'ATS & COMMUNICATION',
    title: 'Aeronautical Mobile Service Course (AMS)',
    badge: 'ICAO Standards',
    type: 'Professional Certification',
    duration: '6 Weeks',
    image: '/assets/images/nati/programme-02-ams.jpg',
    summary: 'Provides rigorous training to produce highly skilled personnel serving as communication operators for exchanging critical flight information and air navigation safety data.',
    curriculum: [
      'Aeronautical Fixed & Mobile Telecommunication Network (AFTN/AMHS)',
      'HF/VHF Ground-to-Air Radio Transmission Systems',
      'Distress, Urgency, and Safety Message Handling Protocols',
      'Aviation Telecommunications Log Maintenance & Audit',
      'Digital Datalink Communications (CPDLC / ADS-C)'
    ],
    targetAudience: 'Aeronautical Station Operators, Radio Communicators, Flight Operations Officers.',
    prerequisites: 'Minimum 5 O\'Level credits including English and Physics/Technical science.'
  },
  {
    id: 'prog-03',
    number: '03',
    code: 'NATI-ATS-ATCRR',
    schoolId: 'ATS',
    schoolName: 'ATS & COMMUNICATION',
    title: 'Terminal / Area ATC Radar Refresher Course (ATCCRR)',
    badge: 'Radar Operations',
    type: 'Refresher Course',
    duration: '3 Weeks',
    image: '/assets/images/nati/programme-03-radar.jpg',
    summary: 'Enables practicing air traffic personnel to sharpen terminal and area radar control skills, providing high-precision vectoring, conflict resolution, and aerodrome surveillance.',
    curriculum: [
      'Primary & Secondary Surveillance Radar (SSR / Mode S)',
      'Terminal Area Radar Vectoring & Speed Control',
      'Loss of Separation & Conflict Alert Resolution',
      'Radar Vectoring in Severe Weather & Emergency Diversions',
      'High-Density Traffic Simulation Drills'
    ],
    targetAudience: 'Certified Air Traffic Controllers seeking license currency and radar re-validation.',
    prerequisites: 'Valid or previously held Air Traffic Controller License with Aerodrome / Approach ratings.'
  },
  {
    id: 'prog-04',
    number: '04',
    code: 'NATI-ATS-AAIMO',
    schoolId: 'ATS',
    schoolName: 'ATS & COMMUNICATION',
    title: 'Advanced Aeronautical Information Management Officers Course (AAIMO)',
    badge: 'Officer Level',
    type: 'Advanced Diploma',
    duration: '8 Weeks',
    image: '/assets/images/nati/programme-04-aaimo.jpg',
    summary: 'Delivers advanced officer training in the collection, validation, and dissemination of essential aeronautical data and flight planning information in compliance with ICAO Annex 15.',
    curriculum: [
      'Aeronautical Information Publications (AIP) & Supplements',
      'NOTAM Management, Decoding, and International Exchange',
      'Electronic Terrain and Obstacle Data (eTOD) Modeling',
      'Aeronautical Information Conceptual Model (AICM/AIXM)',
      'Flight Plan Validation, Route Analysis, and Airspace Briefings'
    ],
    targetAudience: 'Aeronautical Information Service (AIS) Officers, AIM Specialists, Flight Dispatch Supervisors.',
    prerequisites: 'Basic AIS/AIM certificate or relevant bachelor degree with aviation background.'
  },
  {
    id: 'prog-05',
    number: '05',
    code: 'NATI-ATS-FND',
    schoolId: 'ATS',
    schoolName: 'ATS & COMMUNICATION',
    title: 'Air Traffic Services / Communication — Foundation Course',
    badge: 'Foundation',
    type: 'Full Foundation Track',
    duration: '12 Weeks',
    image: '/assets/images/nati/programme-05-foundation.jpg',
    summary: 'Comprehensive entry-level curriculum introducing participants to general aviation principles, airspace classification, air traffic flow management, and ATS operational procedures.',
    curriculum: [
      'Introduction to Civil Aviation & International Air Law',
      'Airspace Classification, Navigation Aids & Altimetry',
      'Aerodrome Control Tower Procedures & Visual Flight Rules (VFR)',
      'Aviation Meteorology, Weather Charts, and METAR/TAF Decoding',
      'Flight Operations Coordination & Emergency Handover'
    ],
    targetAudience: 'Aspiring air traffic controllers, aviation cadets, airport operations staff.',
    prerequisites: '5 O\'Level credits including Mathematics, English, and Physics.'
  },
  {
    id: 'prog-06',
    number: '06',
    code: 'NATI-FIRE-AEP',
    schoolId: 'EMERGENCY',
    schoolName: 'EMERGENCY & FIRE',
    title: 'Airport Emergency Procedure (AEP)',
    badge: 'Emergency Response',
    type: 'Specialized Track',
    duration: '4 Weeks',
    image: '/assets/images/nati/programme-06-aep.jpg',
    summary: 'Enhances the tactical readiness and response coordination of aerodrome rescue personnel when handling aircraft accidents, chemical hazards, and mass-casualty incidents.',
    curriculum: [
      'Aerodrome Emergency Plan (AEP) Formulation & Execution',
      'Incident Command System (ICS) on Aerodrome Grounds',
      'Multi-Agency Liaison (Police, Paramedics, Civil Defense)',
      'Aircraft Crash Triage, Rapid Evacuation & Hazard Isolation',
      'Full-Scale Scenario Simulation & Tabletop Exercises'
    ],
    targetAudience: 'Airport fire chiefs, emergency response coordinators, aerodrome safety officers.',
    prerequisites: 'Basic firefighting qualification or aerodrome operations experience.'
  },
  {
    id: 'prog-07',
    number: '07',
    code: 'NATI-FIRE-SIM',
    schoolId: 'EMERGENCY',
    schoolName: 'EMERGENCY & FIRE',
    title: 'Competent Aircraft Live Fire Simulator',
    badge: 'Command Level',
    type: 'Practical Tactical Track',
    duration: '6 Weeks',
    image: '/assets/images/nati/programme-07-livefire.jpg',
    summary: 'Equips experienced airport firefighters with live fire-ground tactical command, fire station administration, and pressurized aircraft rescue techniques using real gas-fired simulator rigs.',
    curriculum: [
      'Full-Scale Aircraft Mock Fuselage Live-Fire Suppression',
      'Tactical Fire-Ground Command & Resource Allocation',
      'High-Expansion Foam, Aqueous Film-Forming Foam (AFFF) Applications',
      'Engine Nacelle, Wheel Well, and Internal Cabin Flashover Control',
      'Post-Incident Fire Investigation & Safety Auditing'
    ],
    targetAudience: 'Senior firefighters, airport fire station officers, tactical crew commanders.',
    prerequisites: 'Active airport firefighter status with minimum 2 years field experience.'
  },
  {
    id: 'prog-08',
    number: '08',
    code: 'NATI-FIRE-IFF',
    schoolId: 'EMERGENCY',
    schoolName: 'EMERGENCY & FIRE',
    title: 'Initial Fire Fighting Course (IFF)',
    badge: 'Entry Level Recruit',
    type: 'Recruit Foundation',
    duration: '10 Weeks',
    image: '/assets/images/nati/programme-08-iff.jpg',
    summary: 'Foundational recruit program enabling new personnel to master aerodrome rescue concepts, fire behavior, personal protective equipment, and specialized crash tender apparatus.',
    curriculum: [
      'Principles of Fire Behavior & Extinguishing Agents',
      'Self-Contained Breathing Apparatus (SCBA) Mastery & Smoke Navigation',
      'Airport Crash Fire Tender (CFT) Operations & Hydraulic Systems',
      'Aircraft Evacuation Slide, Canopy & Emergency Cut-in Techniques',
      'Basic Trauma Life Support (BTLS) & First Response'
    ],
    targetAudience: 'New recruits, aerodrome emergency response cadets.',
    prerequisites: 'Age 18-28, physically fit, minimum 5 O\'Level credits.'
  },
  {
    id: 'prog-09',
    number: '09',
    code: 'NATI-EXEC-OPS',
    schoolId: 'EXECUTIVE',
    schoolName: 'EXECUTIVE & MANAGEMENT',
    title: 'Executive Aviation Planning, Operations and Management Course',
    badge: 'Senior Executives',
    type: 'Executive Masterclass',
    duration: '2 Weeks Intensive',
    image: '/assets/images/nati/programme-09-executive.jpg',
    summary: 'Provides executive leadership and senior directors with high-level perspectives on aviation strategy, fleet economics, regulatory compliance, risk governance, and airport infrastructure management.',
    curriculum: [
      'Strategic Airport Infrastructure & Airspace Master Planning',
      'Aviation Safety Management Systems (SMS) Governance',
      'Fleet Lifecycle Economics & Aircraft Acquisition Strategies',
      'Civil Aviation Regulations & International Bilateral Agreements',
      'Crisis Communication & High-Level Aviation Incident Management'
    ],
    targetAudience: 'Civil Aviation Authority Directors, Airline Executives, Airport Managers, Defense Procurement Officials.',
    prerequisites: 'Senior executive, director, or managerial position in aviation/defense sector.'
  },
  {
    id: 'prog-uav',
    number: '10',
    code: 'NATI-UAV-P1',
    schoolId: 'UAV',
    schoolName: 'TACTICAL UAV CENTER',
    title: 'Professional UAV Pilot & Tactical Systems Certification',
    badge: 'CAA Licensed / BVLOS',
    type: 'Flagship UAS Program',
    duration: '8 Weeks (Hybrid)',
    image: '/assets/images/nati/classroom-components.png',
    summary: 'Accredited multi-rotor and fixed-wing unmanned aircraft systems (UAS) pilot certification covering BVLOS flight, sensor telemetry, edge AI payloads, and defense-grade tactical missions.',
    curriculum: [
      'UAS Aerodynamics, Flight Dynamics & Multi-rotor vs Fixed-wing Physics',
      'Aviation Meteorology, Air Law & Restricted Airspace Compliance',
      'Gimbal Optics, EO/IR Sensors, Photogrammetry & LIDAR Payloads',
      'Autonomous Waypoint Mission Planning & Telemetry Data Links',
      'Live Field Range BVLOS Flight Operations & Emergency Fail-Safe Recovery'
    ],
    targetAudience: 'Commercial drone pilots, defense/police tactical operators, geospatial surveyors, industrial inspection teams.',
    prerequisites: 'Minimum 17 years old, basic digital computer literacy, valid ID.'
  }
];

export const NATI_UAV_PILOT_DETAILS = {
  aircraftCode: 'UAV-P1',
  simulatorVersion: 'FLIGHT_SIM_v4.2',
  duration: '8 Weeks',
  certification: 'CAA Licensed & BVLOS Certified',
  learningMode: 'Hybrid (Classroom, Virtual Sim & Live Flight Range)',
  modules: [
    {
      weeks: 'WEEKS 01-02',
      title: 'Foundations, Air Law & Aerodynamics',
      items: [
        'Introduction to Unmanned Aircraft Systems (UAS) architecture',
        'Principles of Flight: Lift, Weight, Thrust, and Drag in autonomous systems',
        'Multi-rotor vs Fixed-wing aerodynamic trade-offs and payload dynamics',
        'Battery Chemistry, LiPo Safety, and Powertrain Management',
        'Civil Aviation Airspace Regulations, NOTAMs, and Privacy Laws'
      ]
    },
    {
      weeks: 'WEEKS 03-04',
      title: 'Meteorology, Sensor Systems & Telemetry',
      items: [
        'Aviation Meteorology: Microclimates, Wind Shear, and Thermal Updrafts',
        'Telemetry Data Links: C2 Architecture, Frequency Hopping, and Range Planning',
        'Optical Payloads: High-Zoom EO/IR, Thermal Radiometry, and Multispectral Cameras',
        'GPS Navigation, RTK Precision Positioning, and Compass Calibration',
        'Flight Simulator v4.2 Emergency Situational Drills'
      ]
    },
    {
      weeks: 'WEEKS 05-06',
      title: 'Mission Planning, Photogrammetry & AI Exploitation',
      items: [
        'Autonomous Grid, Crosshatch, and Perimeter Mission Mapping',
        '2D/3D Orthomosaic Processing with LIDAR and Point Cloud Generation',
        'Edge AI Target Detection & Surveillance Doctrine',
        'Counter-UAS Detection and Electronic Interference Avoidance',
        'Pre-Flight Risk Assessments (SORA) and Checklist Rigor'
      ]
    },
    {
      weeks: 'WEEKS 07-08',
      title: 'Practical Flight Operations, BVLOS & Flight Test',
      items: [
        'Live Outdoor Range Multi-Rotor Precision Maneuvers (Class A & B)',
        'Fixed-Wing Long-Endurance Catapult/Hand Launch & Parachute/Belly Recovery',
        'Beyond Visual Line of Sight (BVLOS) Mission Execution',
        'Simulated System Failures: Motor Out, Link Loss, and Manual Override',
        'CAA Official Flight Examiner Assessment & License Issuance'
      ]
    }
  ]
};

export const NATI_ADMISSIONS_STEPS = [
  {
    step: '01',
    code: 'STEP 01',
    title: 'Select a Programme',
    desc: 'Browse our catalog of ATS, Emergency Response, Aviation Management, and Tactical UAS programs to identify the ideal career pathway.'
  },
  {
    step: '02',
    code: 'STEP 02',
    title: 'Submit Application',
    desc: 'Complete the online candidate portal form with your official identification, educational credentials, and chosen specialization.'
  },
  {
    step: '03',
    code: 'STEP 03',
    title: 'Screening & Aptitude Review',
    desc: 'Our academic board evaluates your profile. Shortlisted candidates undergo a brief technical assessment or flight suitability interview.'
  },
  {
    step: '04',
    code: 'STEP 04',
    title: 'Orientation & Induction',
    desc: 'Receive your admission letter, safety equipment kit, simulator credentials, and attend the campus flight deck induction week.'
  }
];

export const NATI_ADMISSIONS_REQUIREMENTS = [
  {
    title: 'Academic Pre-requisites',
    points: [
      'Minimum of 5 O\'Level credits including Mathematics and English in WAEC/NECO/GCE or equivalent international secondary certificate.',
      'For Advanced ATS and Radar programs, physics or technical science credits are required.'
    ]
  },
  {
    title: 'Age & Physical Suitability',
    points: [
      'Applicants must be at least 17 years of age at the date of admission.',
      'Firefighting candidates must meet minimum physical fitness standards (cardiovascular, visual acuity, hearing).'
    ]
  },
  {
    title: 'Security & Verification',
    points: [
      'Valid government-issued national identification card, international passport, or driver\'s license.',
      'Background verification clearance for airspace security compliance.'
    ]
  },
  {
    title: 'Digital & Technical Literacy',
    points: [
      'Proficiency in personal computing, basic software navigation, and analytical problem solving.',
      'Readiness for interactive computer-based training (CBT) and simulation software.'
    ]
  }
];

export const NATI_CALENDAR_TIMETABLE = [
  {
    week: 'WEEK 01',
    code: 'SCH_W01',
    title: 'Induction & Aviation Safety Briefing',
    status: 'COMPLETED',
    type: 'Foundation',
    topics: ['Campus Orientation & Facility Tour', 'Airspace Safety & Security Protocols', 'Flight Deck & Sim Kit Allocation']
  },
  {
    week: 'WEEK 02',
    code: 'SCH_W02_ACTIVE',
    title: 'Aerodynamics & Flight Dynamics II',
    status: 'ACTIVE NOW',
    progress: 75,
    type: 'Core Lectures',
    topics: ['Lab Assessment 01: Airfoil Lift Testing', 'Atmospheric Physics & Density Altitude', 'Telemetry Ground Station Setup']
  },
  {
    week: 'WEEK 03',
    code: 'SCH_W03',
    title: 'Propulsion, Power & Avionics Labs',
    status: 'UPCOMING',
    type: 'Technical Labs',
    topics: ['Brushless Motor & ESC Diagnostics', 'Battery Thermal Runaway Countermeasures', 'Sensor Gimbal Bus Calibration']
  },
  {
    week: 'WEEK 04',
    code: 'SCH_W04_EXAM',
    title: 'Mid-Term CBT Examination Block',
    status: 'EXAM BLOCK',
    type: 'Assessment',
    topics: ['Computer-Based Testing (CBT) Modules 1-3', 'Live Radar Separation Evaluation', 'Flight Simulator Check-ride Review']
  },
  {
    week: 'WEEK 05',
    code: 'SCH_BREAK',
    title: 'Reading & Technical Research Week',
    status: 'READING BREAK',
    type: 'Independent Study',
    topics: ['Remote Mentorship & Instructor Consultations', 'Autonomous Algorithm Research', 'Self-Paced Simulator Practice']
  },
  {
    week: 'WEEK 06',
    code: 'SCH_W06',
    title: 'Advanced Radar & Navigation Systems',
    status: 'UPCOMING',
    type: 'Advanced Labs',
    topics: ['Terminal Area Radar Vectoring Scenarios', 'Aeronautical Fixed Telecommunication Labs', 'NOTAM Drafting & Validation']
  },
  {
    week: 'WEEK 07',
    code: 'SCH_W07',
    title: 'Aviation Law, Ethics & Airspace Integration',
    status: 'UPCOMING',
    type: 'Legal & Ops',
    topics: ['ICAO Standards & Recommended Practices (SARPs)', 'Civil Aviation Enforcement Frameworks', 'BVLOS Incident Command Protocols']
  },
  {
    week: 'WEEK 08',
    code: 'SCH_W08_FINALS',
    title: 'Live Field Ops & Final Certification Flight',
    status: 'FINAL EXAM',
    type: 'Practical Range',
    topics: ['Aerodrome Live-Fire Simulation Tactical Drill', 'BVLOS Outdoor Flight Evaluation', 'Graduation & License Conferment']
  }
];

export const NATI_SERVICES = [
  {
    id: 'svc-1',
    code: 'GEO_SURV_X4',
    title: 'Aerial Mapping & Precision Survey',
    subtitle: 'High-resolution geospatial data for infrastructure, mining, construction, and agriculture.',
    image: '/assets/images/nati/svc-mapping.jpg',
    features: [
      { name: '2D/3D Orthomosaic', desc: 'Sub-centimeter terrain models and digital elevation twins.' },
      { name: 'NDVI Multispectral', desc: 'Crop vigor and vegetative health analytics for agriculture.' },
      { name: 'Volumetric Survey', desc: 'Rapid stockpile and excavation measurement with LiDAR.' }
    ]
  },
  {
    id: 'svc-2',
    code: 'SRV_INS_01',
    title: 'Critical Infrastructure Inspection',
    subtitle: 'Thermal and optical inspection of high-voltage lines, cell towers, pipelines, and industrial facilities.',
    image: '/assets/images/nati/maintenance-workshop.png',
    features: [
      { name: 'Thermal Thermography', desc: 'Pinpoint hot spots and electrical leakage with radiometric imaging.' },
      { name: 'Structural Integrity', desc: 'Crack detection and corrosion analysis on towering structures.' },
      { name: 'Hazard-Free Deployment', desc: 'Zero human exposure in high-risk, confined, or energized environments.' }
    ]
  },
  {
    id: 'svc-3',
    code: 'SRV_CONS_09',
    title: 'Aviation Consultancy & Safety Audits',
    subtitle: 'Strategic advisory on fleet acquisition, CAA/FAA regulatory compliance, and SMS establishment.',
    image: '/assets/images/nati/controller-briefing.png',
    features: [
      { name: 'Regulatory Certification', desc: 'Complete filing and operational manual (OM) approval assistance.' },
      { name: 'SMS Implementation', desc: 'Deploying ICAO-standard Safety Management Systems.' },
      { name: 'Fleet Sizing & Optimization', desc: 'CAPEX/OPEX modeling for industrial drone and aircraft fleets.' }
    ]
  },
  {
    id: 'svc-4',
    code: 'SRV_SEC_42',
    title: 'Tactical Security & Perimeter Patrol',
    subtitle: 'Persistent surveillance for military bases, coastal borders, maritime channels, and critical national assets.',
    image: '/assets/images/nati/field-training.png',
    features: [
      { name: 'Day/Night Tactical Video', desc: 'Long-range EO/IR cameras with automated moving target tracking.' },
      { name: 'Rapid Incident Relay', desc: 'Secure encrypted datalinks direct to tactical operations centers.' },
      { name: 'Counter-UAS Protection', desc: 'RF spectrum scanning and airspace denial support.' }
    ]
  },
  {
    id: 'svc-5',
    code: 'SRV_MAINT_05',
    title: 'UAS Maintenance, Overhaul & Avionics Support',
    subtitle: 'Authorized repair facility providing OEM spare parts, motor re-balancing, firmware flashing, and airworthiness testing.',
    image: '/assets/images/nati/svc-maintenance.jpg',
    features: [
      { name: 'Bench Avionics Testing', desc: 'Oscilloscope and spectrum analyzer diagnostics for autopilots.' },
      { name: 'Composite Airframe Repair', desc: 'Carbon-fiber structural patch bonding and structural realignment.' },
      { name: 'Periodic Safety Recertification', desc: 'Annual airworthiness validation and flight log verification.' }
    ]
  }
];

export const NATI_CAMPUS_GALLERY = [
  {
    id: 'gal-1',
    title: 'Aeronautical Simulation Center',
    category: 'Flight Simulation',
    image: '/assets/images/nati/simulation-class.png',
    desc: 'High-fidelity immersive ATC radar and UAV flight simulators.'
  },
  {
    id: 'gal-2',
    title: 'Hardware & Avionics Laboratory',
    category: 'Avionics Lab',
    image: '/assets/images/nati/drone-lab.png',
    desc: 'Dedicated workbench environment for autopilot integration and telemetry calibration.'
  },
  {
    id: 'gal-3',
    title: 'Controller Tactical Briefing Room',
    category: 'Flight Operations',
    image: '/assets/images/nati/controller-briefing.png',
    desc: 'Pre-flight briefing and post-mission telemetry review theatre.'
  },
  {
    id: 'gal-4',
    title: 'Precision Maintenance Workshop',
    category: 'Engineering',
    image: '/assets/images/nati/maintenance-workshop.png',
    desc: 'Full overhaul workshop for airframe mechanics, propulsion, and payload bays.'
  },
  {
    id: 'gal-5',
    title: 'Mission Operations & Command Planning',
    category: 'Command Center',
    image: '/assets/images/nati/mission-planning.png',
    desc: 'Multi-screen tactical C2 hub for coordinated fleet missions.'
  },
  {
    id: 'gal-6',
    title: 'Outdoor Live Flight Test Range',
    category: 'Field Operations',
    image: '/assets/images/nati/field-training.png',
    desc: 'Designated sovereign airspace range for BVLOS and tactical maneuvers.'
  }
];


