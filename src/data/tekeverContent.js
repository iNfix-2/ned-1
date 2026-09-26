

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
    title: 'Critical Infrastructure Surveillance',
    description: 'Precision VTOL operations launched directly from ship decks to provide persistent 360-degree over-the-horizon surveillance, vessel classification, and EEZ patrol.',
    image: '/assets/images/missions/critical-infrastructure.jpg',
    thumb: '/assets/images/missions/critical-infrastructure.jpg',
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
    id: 'sar',
    badge: 'MISSION 04',
    title: 'Search & Rescue (SAR) Operations',
    description: 'High-endurance aerial coverage capable of detecting vessels in distress, life rafts, and individuals in harsh sea conditions, relaying precise coordinates to rescue teams.',
    image: '/assets/platforms/ops-live-vtol.jpg',
    thumb: '/assets/platforms/ops-live-vtol.jpg',
    tag: 'Emergency Response // Life Saving'
  },
  {
    id: 'infrastructure',
    badge: 'MISSION 05',
    title: 'Critical Infrastructure Defence',
    description: 'Persistent 24/7 patrol of land borders, energy pipelines, offshore platforms, and strategic military installations with automated anomaly detection.',
    image: '/assets/images/missions/border-defense.jpg',
    thumb: '/assets/images/missions/border-defense.jpg',
    tag: 'Critical Assets // Perimeter Security'
  }
];

export const PLATFORMS_LIST = [
  {
    id: 'dji-m3t',
    name: 'DJI M3T (Mavic 3 Thermal)',
    role: 'RAPID-DEPLOYMENT MULTIROTOR',
    image: '/assets/images/fleet/dji-m3t.jpg',
    desc: 'Rapid-deployment tactical and inspection platform.',
    specs: {
      endurance: 'Rapid deployment',
      wingspan: 'Foldable multirotor',
      mtow: 'Compact class',
      payload: 'Thermal & zoom camera',
      comms: 'Enterprise datalink'
    },
    payloadOptions: ['Thermal imaging', 'Zoom camera', 'Wide-angle camera'],
    capabilities: [
      'Tactical ISR and rapid situational awareness',
      'Asset and infrastructure inspection',
      'Search and rescue support'
    ]
  },
  {
    id: 'dji-m400',
    name: 'DJI M400',
    role: 'HEAVY-DUTY ENTERPRISE MULTIROTOR',
    image: '/assets/images/fleet/dji-m400.jpg',
    desc: 'Heavy-duty enterprise flagship for advanced payload delivery, extended operations, and complex environments.',
    specs: {
      endurance: 'Extended operations',
      wingspan: 'Enterprise multirotor',
      mtow: 'Heavy-lift class',
      payload: 'Advanced payload delivery',
      comms: 'Enterprise datalink'
    },
    payloadOptions: ['Interchangeable gimbal payloads', 'Advanced payload delivery'],
    capabilities: [
      'Extended-duration enterprise operations',
      'Operations in complex environments',
      'Advanced payload integration'
    ]
  },
  {
    id: 'vt290',
    name: 'VT290',
    role: 'FIXED-WING VTOL',
    image: '/assets/images/fleet/vt290.jpg',
    desc: 'Fixed-wing VTOL (Vertical Take-Off and Landing) for long-range mapping, surveillance, and corridor inspections.',
    specs: {
      endurance: 'Long-range',
      wingspan: 'Fixed-wing VTOL',
      mtow: 'VTOL launch & recovery',
      payload: 'Mapping & surveillance',
      comms: 'BVLOS-capable'
    },
    payloadOptions: ['Mapping camera', 'Surveillance gimbal'],
    capabilities: [
      'Long-range mapping',
      'Aerial surveillance',
      'Corridor inspections'
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

export const NEWS_ARTICLES = [
  {
    id: 'nethawk-dicon-mou',
    date: '26 September 2026',
    category: 'DEFENCE PARTNERSHIP',
    title: 'Nethawk Solutions signs MOU with the Defence Industries Corporation of Nigeria (DICON)',
    summary: 'Nethawk Solutions has signed a Memorandum of Understanding with the Defence Industries Corporation of Nigeria (DICON), establishing a framework for cooperation on defence technology and unmanned systems.',
    image: '/assets/images/news/dicon-mou-group.webp',
    readTime: '2 min read',
    body: [
      { type: 'p', text: 'Nethawk Solutions has signed a Memorandum of Understanding (MOU) with the Defence Industries Corporation of Nigeria (DICON), the corporation responsible for developing Nigeria\'s indigenous defence industry.' },
      { type: 'p', text: 'The agreement was marked at DICON\'s headquarters, where the Nethawk leadership team met the Director General of DICON together with senior officers and management of the corporation for a working session.' },
      { type: 'img', src: '/assets/images/news/dicon-mou-meeting.webp', caption: 'The Nethawk and DICON teams in session at DICON headquarters.' },
      { type: 'h', text: 'Strengthening local defence capability' },
      { type: 'p', text: 'The MOU sets out a framework for cooperation between the two organisations, bringing together Nethawk\'s unmanned aircraft systems, engineering and training capabilities with DICON\'s mandate to build Nigeria\'s defence manufacturing base.' },
      { type: 'img', src: '/assets/images/news/dicon-mou-document.webp', caption: 'Nethawk\'s leadership with a senior DICON officer and the signed Memorandum of Understanding.' },
      { type: 'p', text: 'Nethawk looks forward to working closely with DICON to deliver secure, homegrown technology that supports the Armed Forces of Nigeria and national security.' },
      { type: 'img', src: '/assets/images/news/dicon-mou-leadership.webp', caption: 'Nethawk\'s leadership with a senior DICON officer at the corporation\'s headquarters.' },
      { type: 'img', src: '/assets/images/news/dicon-mou-group.webp', caption: 'The Nethawk and DICON delegations after the signing.' },
    ],
  },
  {
    id: 'nigeria-police-uas-training',
    date: '26 September 2026',
    category: 'ACADEMY & NATI',
    title: 'Nethawk trains officers of the Nigeria Police Force through NATI',
    summary: 'Officers of the Nigeria Police Force are training at the Nethawk Aviation Training Institute (NATI), building the unmanned aircraft skills that modern policing and public safety now depend on.',
    image: '/assets/images/news/police-training-officers.webp',
    readTime: '2 min read',
    body: [
      { type: 'p', text: 'Nethawk Solutions, through the Nethawk Aviation Training Institute (NATI), is training officers of the Nigeria Police Force on one of its professional training programmes.' },
      { type: 'p', text: 'The programme brings officers into NATI\'s classrooms and onto its flight line, combining instructor-led ground school with hands-on practice on the enterprise unmanned aircraft used in real operations.' },
      { type: 'img', src: '/assets/images/news/police-training-classroom.webp', caption: 'Officers of the Nigeria Police Force in a NATI classroom session.' },
      { type: 'h', text: 'Ground school with experienced instructors' },
      { type: 'p', text: 'In the classroom, NATI instructors take officers through the principles behind safe and effective unmanned operations, from aviation safety and flight planning to the rules that govern where and how drones can be flown.' },
      { type: 'img', src: '/assets/images/news/police-training-lecture.webp', caption: 'A NATI instructor leads a lesson for the officers.' },
      { type: 'img', src: '/assets/images/news/police-training-guest-speaker.webp', caption: 'A guest speaker addresses the officers during the programme.' },
      { type: 'h', text: 'From the classroom to the flight line' },
      { type: 'p', text: 'Theory is paired with practical sessions at NATI\'s flight line, where trainees work with enterprise multirotor platforms under the supervision of certified instructors.' },
      { type: 'img', src: '/assets/images/news/police-training-flight-line.webp', caption: 'Trainees at the NATI flight line with an enterprise multirotor.' },
      { type: 'p', text: 'By equipping law-enforcement personnel with these skills, Nethawk and NATI aim to support safer communities and a more capable, technology-enabled police force.' },
    ],
  },
  {
    id: 'uyoyo-edosio-visit',
    date: '26 September 2026',
    category: 'DEFENCE TECH & UAS',
    title: 'AfDB\'s Uyoyo Zino Edosio tours Nethawk\'s defence technology and UAS facility',
    summary: 'Strategic partner Ms. Uyoyo Zino Edosio, Chief Innovation and Digital Expert at the African Development Bank Group, visited Nethawk to see how homegrown defence technology, unmanned systems and specialist training are building Africa\'s security and innovation capacity.',
    image: '/assets/images/news/edosio-visit-group.webp',
    readTime: '3 min read',
    body: [
      { type: 'p', text: 'Nethawk Solutions hosted Ms. Uyoyo Zino Edosio, Chief Innovation and Digital Expert at the African Development Bank Group and a strategic partner of Nethawk, together with her delegation, for a tour of the company\'s defence technology and unmanned aircraft systems (UAS) facility and the Nethawk Aviation Training Institute (NATI).' },
      { type: 'p', text: 'Ms. Edosio leads the African Development Bank Group\'s digital transformation agenda and manages a portfolio of more than $600 million spanning technology infrastructure, startup and innovation programmes, and digital skills for young Africans. Her visit brought that perspective on innovation-led growth to one of Nigeria\'s homegrown defence technology companies.' },
      { type: 'img', src: '/assets/images/news/edosio-visit-welcome.webp', caption: 'Ms. Edosio is welcomed by the Nethawk leadership on arrival.' },
      { type: 'h', text: 'Defence technology, built in Africa' },
      { type: 'p', text: 'The Nethawk leadership walked the delegation through how the company designs, integrates and operates unmanned systems for intelligence, surveillance and reconnaissance (ISR), border and perimeter security and the protection of critical national infrastructure, supported by its SkyGrid mission software and Affenas secure intelligence communications.' },
      { type: 'p', text: 'The conversation centred on sovereign capability: building and maintaining defence technology locally, so that African security agencies depend less on imported systems while the skills, jobs and intellectual property stay on the continent.' },
      { type: 'img', src: '/assets/images/news/edosio-visit-tour.webp', caption: 'The delegation is briefed during the facility tour.' },
      { type: 'h', text: 'Inside the UAV labs' },
      { type: 'p', text: 'In the labs, Nethawk engineers took the delegation through a mission-ready multirotor platform and its stabilised sensor payload, explaining how aircraft are configured, maintained and flown on live security operations.' },
      { type: 'img', src: '/assets/images/news/edosio-visit-labs.webp', caption: 'Nethawk engineers present a multirotor ISR platform to the delegation.' },
      { type: 'p', text: 'At the fabrication benches, the delegation watched the engineering team at work on a carbon-fibre composite airframe, alongside the wiring and avionics assembly that turn locally built structures into flight-ready aircraft.' },
      { type: 'img', src: '/assets/images/news/edosio-visit-composites-lab.webp', caption: 'The delegation watches Nethawk engineers build a carbon-fibre composite airframe.' },
      { type: 'h', text: 'Training the security workforce' },
      { type: 'p', text: 'The delegation also sat in on a live NATI class alongside officers of the Nigeria Police Force, seeing how the institute prepares UAS pilots and operators for security and public-safety roles.' },
      { type: 'img', src: '/assets/images/news/edosio-visit-classroom.webp', caption: 'The delegation sits in on a NATI class with officers of the Nigeria Police Force.' },
      { type: 'p', text: 'The visit highlighted where Nethawk\'s work meets Ms. Edosio\'s focus on innovation, digital skills and homegrown technology: defence technology that strengthens national security while creating high-skill jobs and a deep-tech industrial base across Africa.' },
      { type: 'p', text: 'Nethawk thanks Ms. Edosio and her team for the visit and looks forward to deepening the partnership.' },
      { type: 'img', src: '/assets/images/news/edosio-visit-group.webp', caption: 'Ms. Uyoyo Zino Edosio and her delegation with the Nethawk team.' },
    ],
  },
  {
    id: 'german-partners-facility-visit',
    date: '26 September 2026',
    category: 'STRATEGIC PARTNERSHIP',
    title: 'German partners visit the Nethawk facility',
    summary: 'A delegation from Nethawk\'s partners in Germany toured the Nethawk facility, meeting the leadership, the engineering team and the UAV labs where the company designs, develops and tests its unmanned systems.',
    image: '/assets/images/news/german-partners-group.webp',
    readTime: '2 min read',
    body: [
      { type: 'p', text: 'Nethawk Solutions welcomed a delegation from its partners in Germany for a visit to the Nethawk facility.' },
      { type: 'p', text: 'The visitors were received by the Nethawk leadership and shown around the site before sitting down for discussions on the company\'s work in unmanned systems and defence technology.' },
      { type: 'img', src: '/assets/images/news/german-partners-arrival.webp', caption: 'The delegation is shown around the Nethawk facility.' },
      { type: 'img', src: '/assets/images/news/german-partners-meeting.webp', caption: 'Discussions with the Nethawk leadership.' },
      { type: 'h', text: 'Meeting the engineering team' },
      { type: 'p', text: 'The delegation then met Nethawk\'s engineers, who explained how the team takes unmanned aircraft from design through development and testing.' },
      { type: 'img', src: '/assets/images/news/german-partners-engineers.webp', caption: 'A Nethawk engineer briefs the delegation.' },
      { type: 'h', text: 'Inside the UAV labs' },
      { type: 'p', text: 'In the labs, the visitors looked over prototype airframes developed in-house, as well as the multirotor platforms, payloads and ground control equipment Nethawk uses on operations.' },
      { type: 'img', src: '/assets/images/news/german-partners-prototypes.webp', caption: 'A member of the delegation inspects prototype airframes in the design lab.' },
      { type: 'img', src: '/assets/images/news/german-partners-uav-lab.webp', caption: 'Multirotor platforms and ground control equipment in the UAV lab.' },
      { type: 'p', text: 'Nethawk thanks its German partners for the visit and looks forward to continued collaboration.' },
      { type: 'img', src: '/assets/images/news/german-partners-group.webp', caption: 'The German delegation with the Nethawk leadership.' },
    ],
  },
  {
    id: 'china-partners-facility-visit',
    date: '26 September 2026',
    category: 'STRATEGIC PARTNERSHIP',
    title: 'Partners from China visit the Nethawk facility',
    summary: 'Nethawk Solutions hosted a delegation from its partners in China, who toured the NATI training spaces and the Nethawk UAV labs and met the engineering team.',
    image: '/assets/images/news/china-partners-classroom.webp',
    readTime: '2 min read',
    body: [
      { type: 'p', text: 'Nethawk Solutions welcomed a delegation from its partners in China for a visit to the Nethawk facility and the Nethawk Aviation Training Institute (NATI).' },
      { type: 'p', text: 'The visit began in the NATI training block, where the delegation was introduced to the institute and the way it prepares UAS pilots, operators and technicians.' },
      { type: 'img', src: '/assets/images/news/china-partners-classroom.webp', caption: 'The delegation in a NATI classroom.' },
      { type: 'img', src: '/assets/images/news/china-partners-conversation.webp', caption: 'Conversation during the visit to the training block.' },
      { type: 'h', text: 'Inside the UAV labs' },
      { type: 'p', text: 'In the labs, the Nethawk engineering team walked the delegation through the components and systems they work on, from airframe parts to the electronics that bring each aircraft together.' },
      { type: 'img', src: '/assets/images/news/china-partners-labs.webp', caption: 'The delegation is shown components in the Nethawk labs.' },
      { type: 'img', src: '/assets/images/news/china-partners-labs-discussion.webp', caption: 'Discussion with the engineering team in the labs.' },
      { type: 'p', text: 'Nethawk thanks its partners for the visit and looks forward to continued collaboration.' },
    ],
  },
  {
    id: 'chairman-gmd-helipad',
    date: '26 September 2026',
    category: 'LEADERSHIP',
    title: 'Nethawk Chairman and GMD on the helipad',
    summary: 'Nethawk Solutions\' Chairman and Group Managing Director met at the helipad, spending time with the aircraft and underlining the company\'s commitment to aviation in all its forms.',
    image: '/assets/images/news/leadership-helipad-greeting.webp',
    readTime: '1 min read',
    body: [
      { type: 'p', text: 'The Chairman and the Group Managing Director (GMD) of Nethawk Solutions came together at the helipad, where the leadership met beside the helicopter and spent time with the aircraft.' },
      { type: 'img', src: '/assets/images/news/leadership-helipad-greeting.webp', caption: 'The Chairman and GMD greet each other beside the helicopter.' },
      { type: 'p', text: 'For a company that designs, operates and trains people on unmanned aircraft, manned aviation is never far away. Through the Nethawk Aviation Training Institute (NATI), Nethawk bridges traditional aviation and advanced unmanned aircraft systems, and the leadership\'s time on the flight line reflects that commitment.' },
      { type: 'img', src: '/assets/images/news/leadership-helipad-conversation.webp', caption: 'The Chairman and GMD in conversation on the helipad.' },
      { type: 'img', src: '/assets/images/news/leadership-helicopter-cockpit.webp', caption: 'A closer look at the helicopter and its cockpit.' },
      { type: 'p', text: 'Nethawk\'s leadership continues to champion aviation excellence across the company, from the classroom to the flight line.' },
    ],
  },
  {
    id: 'nda-commandant-visit',
    date: '24 September 2026',
    category: 'DEFENCE PARTNERSHIP',
    title: 'Commandant of the Nigerian Defence Academy visits Nethawk and NATI facility',
    summary: 'The Commandant and senior officers of the Nigerian Defence Academy toured Nethawk\'s UAS operations and training facility, observed live drone demonstrations and discussed collaboration on unmanned systems training for future officers.',
    image: '/assets/images/news/nda-visit-group-wide.webp',
    readTime: '4 min read',
    body: [
      { type: 'p', text: 'Nethawk Solutions and the Nethawk Aviation Training Institute (NATI) hosted the Commandant of the Nigerian Defence Academy (NDA), accompanied by senior officers and members of his team, on an official visit to our UAS operations and training facility.' },
      { type: 'p', text: 'The Commandant was received on arrival by the Nethawk leadership team before a guided tour of the facility, which brings together flight operations, ground school, mission planning and UAV engineering under one roof.' },
      { type: 'h', text: 'Live flight demonstrations' },
      { type: 'p', text: 'At the flight line, NATI pilots and mission operators carried out live demonstrations of enterprise multirotor platforms. The delegation watched pre-flight checks, precision take-off and landing, and aerial surveillance manoeuvres, while operators explained how live video and telemetry are relayed to a ground control station.' },
      { type: 'img', src: '/assets/images/news/nda-visit-demo.webp', caption: 'The delegation observes a live UAV flight demonstration.' },
      { type: 'p', text: 'The Commandant also took a close look at the ground control equipment, as a NATI operator walked through flight controls, camera and sensor payloads, and the safety systems built into every mission.' },
      { type: 'img', src: '/assets/images/news/nda-visit-controller.webp', caption: 'A NATI operator demonstrates the ground control station to the Commandant.' },
      { type: 'h', text: 'Building the next generation of UAS professionals' },
      { type: 'p', text: 'Discussions focused on the growing role of unmanned aircraft systems in defence and national security, and on how structured UAS training can prepare officer cadets and personnel for modern operational environments. Areas explored included:' },
      { type: 'list', items: [
        'UAS pilot and mission operator training aligned with international standards',
        'Intelligence, surveillance and reconnaissance (ISR) using drones',
        'Mission planning, command and control, and data analysis with SKYGRID',
        'Research, maintenance and indigenous UAV engineering capability',
        'Opportunities for practical training and knowledge exchange between NDA and NATI'
      ] },
      { type: 'quote', text: 'It was an honour to host the Commandant and his team. The Nigerian Defence Academy shapes the future leaders of our armed forces, and we are committed to supporting them with world-class, home-grown expertise in unmanned systems.', cite: 'Nethawk Solutions Leadership' },
      { type: 'img', src: '/assets/images/news/nda-visit-observing.webp', caption: 'The Commandant and Nethawk leadership follow the demonstration flight.' },
      { type: 'h', text: 'Looking ahead' },
      { type: 'p', text: 'The visit closed with a group photograph alongside NATI instructors, pilots and staff. Nethawk thanks the Commandant and the Nigerian Defence Academy for their time and interest, and looks forward to deepening collaboration in training, research and the responsible use of UAS technology in Nigeria\'s defence and security sector.' }
    ]
  },
  {
    id: 'gurara-dam-uav-security',
    date: '24 September 2026',
    category: 'CRITICAL INFRASTRUCTURE',
    title: 'Nethawk secures Gurara Dam with advanced UAV surveillance and infrastructure monitoring',
    summary: 'Persistent aerial overwatch, thermal imaging and real-time command reporting now protect the dam, its switchyard and the transmission corridors that serve the surrounding region.',
    image: '/assets/images/news/gurara-dam-uav-operators.webp',
    readTime: '4 min read',
    body: [
      { type: 'p', text: 'Nethawk Solutions has deployed an advanced Unmanned Aerial Vehicle (UAV) security and monitoring programme at Gurara Dam, one of Nigeria\'s most important water and energy assets. The operation gives the site\'s security and operations teams continuous eyes over the dam structure, its high-voltage switchyard and the transmission lines that run across the surrounding terrain.' },
      { type: 'h', text: 'Why Gurara Dam matters' },
      { type: 'p', text: 'Gurara Dam supports water supply and power infrastructure for communities across the region. Its footprint covers open water, steep hillsides, access roads and electrical installations, which makes it difficult to protect with ground patrols alone. Blind spots, long response times and limited night visibility are exactly the gaps that aerial surveillance is designed to close.' },
      { type: 'img', src: '/assets/images/news/gurara-dam-substation.webp', caption: 'The Gurara switchyard and transmission towers are now covered by scheduled and on-demand UAV patrols.' },
      { type: 'h', text: 'What Nethawk deployed' },
      { type: 'list', items: [
        'Persistent aerial patrols over the dam wall, reservoir edge, switchyard and perimeter fencing',
        'Day and night EO/IR (electro-optical and thermal) imaging to detect intrusions and equipment hot spots',
        'Corridor inspections along power lines and access roads to spot encroachment, vandalism and damage early',
        'Live video and alerts streamed to a command post through SKYGRID mission planning and monitoring',
        'Rapid-response flights that put a drone over any reported incident within minutes'
      ] },
      { type: 'h', text: 'From surveillance to insight' },
      { type: 'p', text: 'Every flight is planned, logged and reviewed on SKYGRID. Imagery is geotagged and archived so that changes around the site, from new footpaths to vegetation growth near live equipment, can be tracked over time. Thermal data helps maintenance teams find overheating components before they fail, turning security patrols into a source of engineering intelligence as well.' },
      { type: 'quote', text: 'Critical infrastructure needs protection that never blinks. At Gurara we are combining certified UAV crews, thermal sensing and live command reporting so that the people responsible for this asset can see everything, respond faster and plan maintenance with confidence.', cite: 'Nethawk Solutions Operations Team' },
      { type: 'h', text: 'Built on local capability' },
      { type: 'p', text: 'The programme is flown by NATI-trained Nigerian pilots and mission operators, and supported by Nethawk engineers on the ground. It demonstrates how home-grown UAV expertise can strengthen the security of national assets while building skilled, high-value jobs in the sector.' },
      { type: 'p', text: 'Nethawk is extending the same model to other dams, power stations, pipelines and industrial sites. Organisations interested in aerial security or inspection for their facilities can contact our operations team to arrange a site assessment.' }
    ]
  },
  {
    id: 'defence-modernization',
    date: '12 September 2026',
    category: 'DEFENCE TECH & UAS',
    title: 'Nethawk Solutions expands tactical UAS deployment across strategic defense corridors',
    summary: 'Delivering sovereign long-endurance autonomous intelligence, persistent over-the-horizon aerial surveillance, and integrated tactical command systems.',
    image: '/assets/gallery/IMG_1665.jpg',
    readTime: '4 min read'
  },
  {
    id: 'nati-academy-expansion',
    date: '01 September 2026',
    category: 'ACADEMY & NATI',
    title: 'NATI Aviation Training Institute launches advanced tactical BVLOS pilot & mission operator cohorts',
    summary: 'Accelerating human-capacity development with ICAO-aligned curriculum, flight simulation labs, and sovereign aerospace engineering certifications.',
    image: '/assets/images/nati/IMG_1829.jpg',
    readTime: '3 min read'
  },
  {
    id: 'manufacturing-scale',
    date: '23 August 2026',
    category: 'ADVANCED MANUFACTURING',
    title: 'Nethawk inaugurates high-precision composite airframe & avionics integration facility',
    summary: 'Scaling sovereign manufacturing throughput for composite structures, encrypted radio datalinks, and mission-critical avionics.',
    image: '/assets/images/manufacturing/nethawk-composite-airframe-lab.webp',
    readTime: '3 min read'
  },
  {
    id: 'ai-c2-integration',
    date: '15 August 2026',
    category: 'INTELLIGENT SYSTEMS',
    title: 'SkyGrid Tactical C2 and Edge AI telemetry deployed for multi-domain mission operations',
    summary: 'Real-time geospatial tracking, automated target classification, and multi-sensor intelligence fusion delivered to field commanders.',
    image: '/assets/images/skygrid/skygrid-flight-center-demo.webp',
    readTime: '3 min read'
  }
];

// Our Values: LIFE
export const VALUES_LIST = [
  { name: 'Loyalty', desc: 'We stand by our clients, our people and the communities we serve.' },
  { name: 'Integrity', desc: 'We operate with honesty, accountability and professionalism in everything we do.' },
  { name: 'Fearlessness', desc: 'We take on hard problems and demanding missions with courage and resolve.' },
  { name: 'Excellence', desc: 'We hold ourselves to the rigorous standards of certified aviation and security professionals.' }
];

export const VISION_TEXT = 'To position Africa at the forefront of sustainable security and Pan-African community safety, where innovative aerial intelligence serves the everyday well-being of people across all nations, allowing citizens, businesses, and communities to flourish together.';
export const MISSION_TEXT = 'To deliver people-centric Defence-Technology solutions that combine cutting-edge enterprise UAS technology with the rigorous standards of certified aviation and security professionals, ensuring a safe foundation for sustainable Pan-African development.';
export const HEAD_OFFICE = 'No. 2, The Hub, Industrial Area, Farin Gida, Mando, Kaduna, Nigeria';
