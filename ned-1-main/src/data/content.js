export const PLATFORMS_DATA = [
  {
    id: 'nh-3',
    name: 'NH-3 EVO',
    badge: 'TACTICAL UAS',
    tagline: 'Shipborne and expeditionary multi-mission tactical unmanned aerial system.',
    description: 'The NH-3 is an agile, shipborne and tactical system designed for rapid deployment from maritime vessels or austere land environments. Featuring catapult launch or autonomous VTOL options, it delivers persistent over-the-horizon intelligence with minimal logistical footprint.',
    specs: {
      endurance: '16+ Hours',
      wingspan: '4.0 m',
      mtow: '28 kg',
      payload: 'Up to 5 kg',
      range: '100+ km LOS / BVLOS SATCOM',
      ceiling: '3,000 m (10,000 ft)',
      launch: 'Catapult / Runway / VTOL Module'
    },
    capabilities: [
      'Dual optical/thermal gyro-stabilized gimbal',
      'Maritime vessel automatic detection & AIS integration',
      'Autonomous emergency return & water flotation',
      'Low acoustic & thermal signature'
    ],
    payloadOptions: ['EO/IR HD Gimbal', 'Laser Rangefinder', 'Maritime AIS Receiver', 'Tactical Mesh Relay'],
    status: 'OPERATIONAL / DEPLOYED'
  },
  {
    id: 'nh-5',
    name: 'NH-5 SEAHAWK',
    badge: 'MEDIUM ALTITUDE LONG ENDURANCE',
    tagline: 'European benchmark for long-range maritime and land surveillance.',
    description: 'The NH-5 is an enterprise-class MALE system capable of continuous 20+ hour oceanic and territorial surveillance. Integrated with onboard Synthetic Aperture Radar (SAR), satellite communications, and edge AI, it monitors millions of square kilometers per mission.',
    specs: {
      endurance: '20+ Hours',
      wingspan: '7.3 m',
      mtow: '180 kg',
      payload: 'Up to 50 kg',
      range: 'Unlimited via SATCOM BVLOS',
      ceiling: '5,000 m (16,500 ft)',
      launch: 'Automated Runway / Prepared Strip'
    },
    capabilities: [
      'Multi-sensor simultaneous operations (SAR + EO/IR + AIS)',
      'Global Satellite Communication (BVLOS)',
      'Life-raft deployment for maritime Search & Rescue (SAR)',
      'Extreme weather and high sea-state survivability'
    ],
    payloadOptions: ['Synthetic Aperture Radar (SAR)', 'Maritime Surface Search Radar', 'High-Res EO/MWIR Gimbal', 'Life Raft Pod (x2)', 'Cellular Search & Rescue'],
    status: 'UK & EU FRONT-LINE SERVICE'
  },
  {
    id: 'nh-x',
    name: 'NH-X COLLABORATIVE',
    badge: 'AUTONOMOUS SWARM & EW',
    tagline: 'Next-generation AI-driven autonomous collaborative electronic warfare platform.',
    description: 'Engineered for contested airspace, NH-X operates in networked autonomous swarms capable of executing coordinated electronic warfare, decoy operations, and multi-vector intelligence gathering without reliance on constant GPS or human command links.',
    specs: {
      endurance: '8+ Hours',
      wingspan: '2.5 m',
      mtow: '35 kg',
      payload: 'Up to 12 kg (Modular EW Bay)',
      range: 'Mesh Networked Swarm (BVLOS)',
      ceiling: '6,000 m (20,000 ft)',
      launch: 'Pneumatic Tube / Vehicle Mounted'
    },
    capabilities: [
      'Distributed AI swarm decision-making',
      'RF emission localization & electronic attack',
      'GPS-denied navigation via optical terrain reference',
      'Collaborative target cueing & sensor handoff'
    ],
    payloadOptions: ['Wideband RF Sensor', 'Electronic Attack / Jammer', 'Optical Navigation Edge Unit', 'Decoy Transponder'],
    status: 'ADVANCED CAPABILITY EVALUATION'
  }
];

export const MISSIONS_DATA = [
  {
    id: 'mission-ew',
    number: '01',
    title: 'Autonomous Collaborative Electronic Warfare',
    category: 'Contested Spectrum Defense',
    summary: 'Distributed UAS swarms executing real-time RF detection, electronic counter-measures, and dynamic signal relay in high-threat environments.',
    details: 'NetHawk platforms coordinate autonomously to map electromagnetic emissions, identify hostile emitters, and perform targeted electronic disruption while securing friendly communications through resilient mesh networking.',
    keyMetrics: [
      { label: 'Swarm Mesh Node Latency', value: '< 8 ms' },
      { label: 'Frequency Spectrum Coverage', value: '100 MHz - 18 GHz' },
      { label: 'GPS-Denied Accuracy', value: '99.4%' }
    ],
    tacticalTag: 'TACTICAL DOMAIN // AIR & EW'
  },
  {
    id: 'mission-maritime',
    number: '02',
    title: 'Shipborne & Maritime Surveillance',
    category: 'Blue-Water & EEZ Operations',
    summary: 'Persistent monitoring of Exclusive Economic Zones (EEZ), international sea lanes, vessel tracking, and maritime anti-smuggling interdiction.',
    details: 'Operating directly from coast guard cutters or naval vessels, our platforms track hundreds of vessels simultaneously through automated AIS cross-referencing and Synthetic Aperture Radar, identifying dark targets that switch off transponders.',
    keyMetrics: [
      { label: 'Continuous Patrol Radius', value: '1,200 NM' },
      { label: 'Automated Dark Vessel ID', value: '100% Real-Time' },
      { label: 'Sea-State Survivability', value: 'Up to State 6' }
    ],
    tacticalTag: 'TACTICAL DOMAIN // MARITIME'
  },
  {
    id: 'mission-border',
    number: '03',
    title: 'Territorial & Border Defense',
    category: 'Land Sovereignty & Defense',
    summary: 'Persistent Intelligence, Surveillance and Reconnaissance (ISR) delivering uninterrupted situational awareness across expansive frontier borders.',
    details: 'Deployed along critical national frontiers and allied territories, NetHawk systems provide all-weather day/night observation, automatic mover detection, and instantaneous telemetry transmission to military command centers.',
    keyMetrics: [
      { label: 'Mission Readiness Surge', value: '< 15 Minutes' },
      { label: 'Thermal Target Classification', value: '15+ km Range' },
      { label: 'Operational Availability', value: '99.8%' }
    ],
    tacticalTag: 'TACTICAL DOMAIN // LAND & AIR'
  },
  {
    id: 'mission-ecology',
    number: '04',
    title: 'Marine Wildlife & Ecological Protection',
    category: 'Environmental Stewardship',
    summary: 'Non-invasive aerial conservation, illegal fishing deterrents, oil spill detection, and biodiversity health tracking across protected reserves.',
    details: 'Our long-endurance platforms fly high-altitude silence corridors to monitor whale migration routes, detect micro-emissions from illegal vessel discharges, and survey critical coastal ecosystems without disrupting natural habitats.',
    keyMetrics: [
      { label: 'Acoustic Signature Impact', value: 'Undetectable at 500m' },
      { label: 'Protected Sanctuary Coverage', value: '500,000+ km²' },
      { label: 'Oil Slick Thickness Analysis', value: 'Multi-Spectral' }
    ],
    tacticalTag: 'CIVIL DOMAIN // ENVIRONMENTAL'
  }
];

export const ATLAS_FEATURES = [
  {
    id: 'ai-detection',
    title: 'Real-Time Edge Computer Vision',
    description: 'Onboard neural networks process high-resolution optical and thermal video directly on the aircraft, classifying vessels, vehicles, and individuals in milliseconds without downlink bottlenecks.'
  },
  {
    id: 'sensor-fusion',
    title: 'Multi-Sensor Fusion (SAR + EO/IR + AIS)',
    description: 'ATLAS fuses Synthetic Aperture Radar returns with optical zoom feeds and transponder telemetry into a unified geospatial tactical map.'
  },
  {
    id: 'mesh-autonomy',
    title: 'Decentralized Swarm Coordination',
    description: 'When multiple aircraft operate in theater, ATLAS negotiates patrol sectors, collision avoidance, and sensor handovers peer-to-peer.'
  },
  {
    id: 'cloud-relay',
    title: 'Intelligence-as-a-Service (IaaS)',
    description: 'Commanders and analysts access secure, latency-optimized live video, automated anomaly alerts, and mission replays via any modern web terminal or C4ISR system.'
  }
];

export const NEWS_DATA = [
  {
    id: 'corvus-contract',
    date: '12 SEPTEMBER 2026',
    category: 'DEFENCE CONTRACT',
    title: 'NetHawk Signs £400 Million Sovereign Capability Contract to Supply Next-Gen Autonomous Fleet',
    summary: 'The multi-year procurement agreement provides persistent long-range uncrewed aerial systems equipped with advanced Synthetic Aperture Radar and satellite datalinks to deliver strategic battlefield reconnaissance.',
    badge: 'MAJOR CONTRACT',
    readTime: '3 min read'
  },
  {
    id: 'flowcopter-propulsion',
    date: '01 SEPTEMBER 2026',
    category: 'AEROSPACE TECHNOLOGY',
    title: 'NetHawk Integrates Breakthrough Hydraulic Propulsion for Heavy-Lift Maritime Operations',
    summary: 'New propulsion architecture unlocks 40% higher payload capacity and extended sea-spray durability for the NH-5 fleet, expanding all-weather naval reconnaissance capabilities.',
    badge: 'TECHNOLOGY',
    readTime: '4 min read'
  },
  {
    id: 'portuguese-airforce',
    date: '18 AUGUST 2026',
    category: 'DEPLOYMENT',
    title: 'Portuguese Air Force Deploys NH-5 Autonomous Maritime Patrols across Atlantic EEZ',
    summary: 'Autonomous platforms take over continuous operations monitoring the Exclusive Economic Zone, curbing illicit maritime trafficking and coordinating ocean search-and-rescue operations.',
    badge: 'OPERATIONS',
    readTime: '2 min read'
  }
];

export const GLOBAL_HUBS = [
  {
    country: 'UNITED KINGDOM',
    city: 'Bristol',
    address: 'Assembly Building A, Cheese Lane, Bristol BS2 0JJ',
    coordinates: '51.4545° N, 2.5879° W',
    focus: 'Aerospace Engineering, Software & C2 Operations'
  },
  {
    country: 'PORTUGAL',
    city: 'Lisbon (HQ)',
    address: 'Edifício Gonçalves Zarco, R. da Cintura do Porto de Lisboa',
    coordinates: '38.7169° N, 9.1399° W',
    focus: 'Global Headquarters, R&D & Flight Testing Center'
  },
  {
    country: 'FRANCE',
    city: 'Toulouse',
    address: '51 Rue Raymond IV, 31000 Toulouse',
    coordinates: '43.6047° N, 1.4442° E',
    focus: 'Aerospace Systems & European Defense Integration'
  },
  {
    country: 'UNITED STATES',
    city: 'Fayetteville, NC',
    address: '225 Ray Avenue, Suite 310, Fayetteville, NC 28301',
    coordinates: '35.0527° N, 78.8784° W',
    focus: 'US Defense Partnerships & Allied Training'
  },
  {
    country: 'ESTONIA',
    city: 'Tallinn',
    address: 'Maakri 25, 10145 Tallinn',
    coordinates: '59.4370° N, 24.7535° E',
    focus: 'AI Cyber Resiliency & Eastern Flank Logistics'
  }
];
