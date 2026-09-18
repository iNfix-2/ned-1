export const NETHAWK_NAV_LINKS = [
  { name: 'Services', href: '#services', hasDot: true },
  { name: 'Defence Tech', href: '#defence-tech' },
  { name: 'AI & Systems', href: '#ai-systems' },
  { name: 'Academy', href: '#academy' },
  { name: 'Contact', href: '#contact' },
];

export const MISSIONS_LIST = [
  {
    id: 'isr',
    badge: 'NETHAWK DEFENCE TECH',
    title: 'ISR & Aerial Surveillance',
    description: "Tactical and long-endurance unmanned aerial systems (UAS/UAV) engineered for persistent aerial surveillance, special mission integration, and operational intelligence.",
    image: '/assets/images/missions/nethawk-command-center.jpg',
    thumb: '/assets/images/missions/nethawk-command-center.jpg',
    tag: 'Defence Tech // Tactical ISR'
  },
  {
    id: 'security',
    badge: 'SURVEILLANCE & SECURITY TECHNOLOGY',
    title: 'Persistent Awareness. Smarter Protection.',
    description: 'We integrate cameras, sensors, software, communications, analytics, and command interfaces to support authorized security, critical infrastructure, and asset surveillance.',
    image: '/assets/images/missions/persistent-awareness.jpg',
    thumb: '/assets/images/missions/persistent-awareness.jpg',
    tag: 'Critical Infrastructure // Perimeter Security'
  },
  {
    id: 'contested',
    badge: 'INTELLIGENT SYSTEMS',
    title: 'Operating in Complex Mission Environments',
    description: 'Autonomous systems and edge computer vision providing intelligent video analysis, automated pattern recognition, and real-time decision-support.',
    image: '/assets/images/missions/nethawk-tactical-team.jpg',
    thumb: '/assets/images/missions/nethawk-tactical-team.jpg',
    tag: 'AI & Machine Learning // Computer Vision'
  },
  {
    id: 'integration',
    badge: 'ENGINEERING & SYSTEMS INTEGRATION',
    title: 'From Concept to Operational Capability',
    description: 'Connecting hardware, embedded systems, avionics, sensors, communications, and command software into unified mission-ready solutions.',
    image: '/assets/images/missions/nethawk-engineering-team.jpg',
    thumb: '/assets/images/missions/nethawk-engineering-team.jpg',
    tag: 'Systems Integration // Mission Capability'
  }
];

export const PLATFORMS_LIST = [
  {
    id: 'tactical-uav',
    name: 'Tactical UAV Platform',
    role: 'NETHAWK DEFENCE TECH',
    tagline: 'Special mission integration for tactical over-the-horizon intelligence.',
    image: '/assets/platforms/nsl-drone-capture-5.jpg',
    specs: {
      mtow: 'Tactical Class',
      wingspan: 'Composite Airframe',
      endurance: 'High Endurance',
      payload: 'Modular Gimbal & EO/IR',
      comms: 'Encrypted GCS Link'
    },
    desc: 'Equipped with integrated avionics, secure ground-control systems, and payload bays for rapid-response surveillance.'
  },
  {
    id: 'long-endurance',
    name: 'Long-Endurance ISR UAS',
    role: 'PERSISTENT SURVEILLANCE',
    tagline: 'Advanced unmanned aerial system delivering persistent operational awareness.',
    image: '/assets/platforms/nsl-drone-capture-2.jpg',
    specs: {
      mtow: 'Heavy Payload',
      wingspan: 'Extended Span',
      endurance: 'Multi-Hour ISR',
      payload: 'Multi-Sensor Fusion',
      comms: 'BVLOS Satcom & Data'
    },
    desc: 'Designed for maritime, border, and critical infrastructure monitoring with simultaneous optical, thermal, and sensor payload integration.'
  },
  {
    id: 'counter-uas',
    name: 'Counter-UAS & Mission C2',
    role: 'DEFENCE INTEGRATION',
    tagline: 'Integrated command-and-control systems and counter-unmanned capabilities.',
    image: '/assets/platforms/nsl-drone-capture-7.jpg',
    specs: {
      mtow: 'Rapid Deploy',
      wingspan: 'Modular C2',
      endurance: '24/7 Operations',
      payload: 'RF & Radar Sensors',
      comms: 'Tactical Mesh C4ISR'
    },
    desc: 'Protecting critical assets, government infrastructure, and authorized defense perimeters against unauthorized aerial systems.'
  },
  {
    id: 'field-ops-vtol',
    name: 'Field Ops VTOL UAS',
    role: 'FIELD OPERATIONS',
    tagline: 'Flight-line proven VTOL platform in live operational handling.',
    image: '/assets/platforms/ops-live-vtol.jpg',
    specs: {
      mtow: 'VTOL Class',
      wingspan: 'Fixed-Wing VTOL',
      endurance: 'Extended Ops',
      payload: 'ISR Gimbal',
      comms: 'Tactical Data Link'
    },
    desc: 'Live field operations with rapid launch, recovery, and turnaround for surveillance and special mission tasking.'
  }
];

export const CORE_SERVICES = [
  {
    id: 'service-1',
    category: 'ENTERPRISE & DIGITAL',
    date: 'SERVICE DIVISION 01',
    title: 'Enterprise & Digital Solutions',
    summary: 'Technology That Works for Your Organisation. Enterprise software, business process automation, ERP and workflow solutions, payroll automation, cloud and digital infrastructure.',
    image: '/assets/images/services/enterprise-digital.jpg'
  },
  {
    id: 'service-2',
    category: 'SYSTEMS INTEGRATION',
    date: 'SERVICE DIVISION 02',
    title: 'Engineering & Systems Integration',
    summary: 'From Concept to Operational Capability. Systems engineering, embedded systems, electronics integration, prototype development, testing, validation, and lifecycle support.',
    image: '/assets/images/missions/nethawk-engineering-team.jpg'
  },
  {
    id: 'service-3',
    category: 'RESEARCH & INNOVATION',
    date: 'SERVICE DIVISION 03',
    title: 'Research & Innovation',
    summary: 'Engineering What Comes Next. AI and robotics, autonomous systems, UAV technologies, computer vision, sensor fusion, geospatial intelligence, and mission software.',
    image: '/assets/images/services/research-innovation.jpg'
  },
  {
    id: 'service-4',
    category: 'ACADEMY & NATI',
    date: 'SERVICE DIVISION 04',
    title: 'Academy & Professional Training',
    summary: 'Developing the People Behind the Technology. Specialized technical education via NATI (Nethawk Advanced Technology Institute) for UAV operators, engineers, and AI specialists.',
    image: '/assets/images/services/academy-training.jpg'
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
