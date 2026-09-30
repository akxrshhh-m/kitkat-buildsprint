import {
  Event,
  Club,
  EvidenceFile,
  TimelineEvent,
  UserInterest,
} from '../types/event';

export const events: Event[] = [
  {
    id: 'evt-001',
    missionNumber: 1,
    title: 'The Veil Breach Investigation',
    category: 'RECONNAISSANCE',
    description:
      'Investigate structural damage to the veil over Tokyo Metropolitan Tunnel A-7. Collect residual cursed energy signatures, map the breach radius, and avoid direct combat if possible.',
    date: '2026-10-15',
    time: '6:00 PM',
    venue: 'Tokyo Metropolitan Tunnel A-7',
    host: 'Paranormal Sciences Society',
    entryFee: 0,
    capacity: 20,
    registered: 6,
    image: '/missions/veil-breach.jpeg',
    tags: ['RECON', 'VEIL', 'INVESTIGATION', 'FIELD'],
    rank: 'GRADE_3',
    popularity: 58,
  },
  {
    id: 'evt-002',
    missionNumber: 2,
    title: 'Cursed Object Sealing Workshop',
    category: 'COMBAT TRAINING',
    description:
      'Practical training on neutralizing and sealing Grade 3–2 cursed objects. Students practice talisman application, barrier basics, and containment protocol under supervised conditions.',
    date: '2026-10-18',
    time: '4:00 PM',
    venue: 'Jingu Underground Dojo',
    host: 'Jujutsu Sorcery Club',
    entryFee: 300,
    capacity: 15,
    registered: 6,
    image: '/missions/cursed-object-sealing.jpeg',
    tags: ['SEALING', 'WORKSHOP', 'TALISMAN', 'COMBAT'],
    rank: 'GRADE_3',
    popularity: 64,
  },
  {
    id: 'evt-003',
    missionNumber: 3,
    title: 'Midnight Domain Expansion Drill',
    category: 'ADVANCED COMBAT',
    description:
      'High-risk night drill focused on incomplete Domain Expansion deployment and anti-domain techniques (Simple Domain, Falling Blossom Emotion). Medical staff on standby. Critical clearance recommended.',
    date: '2026-10-22',
    time: '11:00 PM',
    venue: 'Campus Rooftop Observatory',
    host: 'Nightwalkers Guild',
    entryFee: 500,
    capacity: 8,
    registered: 2,
    image: '/missions/midnight-domain.jpeg',
    tags: ['DOMAIN EXPANSION', 'COMBAT', 'DRILL', 'CRITICAL'],
    rank: 'GRADE_1',
    popularity: 91,
    trending: true,
    cursedEnergyLevel: 88,
    liveInterest: 34,
  },
  {
    id: 'evt-004',
    missionNumber: 4,
    title: 'Shikigami Summoning Seminar',
    category: 'THEORY',
    description:
      'Theoretical breakdown of Shikigami taming rituals, medium catalysts, and contract limitations. Includes case studies from Grade 1 summoners and restricted archive references.',
    date: '2026-10-25',
    time: '2:00 PM',
    venue: 'Library Annex - Restricted Section',
    host: 'Esoteric Research Circle',
    entryFee: 0,
    capacity: 30,
    registered: 8,
    image: '/missions/shikigami-seminar.jpeg',
    tags: ['SHIKIGAMI', 'THEORY', 'SEMINAR', 'CONTRACT'],
    rank: 'GRADE_4',
    popularity: 52,
  },
  {
    id: 'evt-005',
    missionNumber: 5,
    title: 'Reverse Cursed Technique Lab',
    category: 'HEALING ARTS',
    description:
      'Intensive lab session on multiplying negative cursed energy to generate positive healing output. Restricted to advanced students. Focus on stabilization and controlled application.',
    date: '2026-10-28',
    time: '10:00 AM',
    venue: 'Medical Sciences Building B3',
    host: 'Restorative Arts Society',
    entryFee: 200,
    capacity: 12,
    registered: 8,
    image: '/missions/reverse-cursed-lab.jpeg',
    tags: ['RCT', 'HEALING', 'MEDICAL', 'LAB'],
    rank: 'GRADE_2',
    popularity: 76,
  },
  {
    id: 'evt-006',
    missionNumber: 6,
    title: 'Binding Vow Negotiation Practice',
    category: 'DIPLOMACY',
    description:
      'Study ethical and metaphysical implications of Binding Vows. Practice self-imposed restrictions versus mutual pacts, including negotiation simulations with escalating stakes.',
    date: '2026-11-02',
    time: '7:00 PM',
    venue: 'Conference Hall East',
    host: 'Contract Law & Ethics Board',
    entryFee: 0,
    capacity: 25,
    registered: 7,
    image: '/missions/binding-vow.jpeg',
    tags: ['BINDING VOW', 'DIPLOMACY', 'LAW', 'ETHICS'],
    rank: 'GRADE_4',
    popularity: 48,
  },
  {
    id: 'evt-007',
    missionNumber: 7,
    title: 'Black Flash Trigger Conditioning',
    category: 'COMBAT TRAINING',
    description:
      'Physical and mental conditioning designed to raise the probability of spatial distortion within 0.000001 seconds of impact. High intensity. Critical combat track.',
    date: '2026-11-05',
    time: '5:00 PM',
    venue: 'Outdoor Training Grounds',
    host: 'Jujutsu Sorcery Club',
    entryFee: 400,
    capacity: 10,
    registered: 3,
    image: '/missions/black-flash.jpeg',
    tags: ['BLACK FLASH', 'COMBAT', 'TRAINING', 'CRITICAL'],
    rank: 'GRADE_1',
    popularity: 94,
    trending: true,
    cursedEnergyLevel: 95,
    liveInterest: 42,
  },
  {
    id: 'evt-008',
    missionNumber: 8,
    title: 'Cursed Womb Containment Operation',
    category: 'FIELD MISSION',
    description:
      'CRITICAL ALERT. A suspected Special Grade cursed womb has been located. Immediate deployment required to establish an extraction barrier and neutralize the threat before metamorphosis completes.',
    date: '2026-11-09',
    time: '9:00 PM',
    venue: 'Abandoned Wing - Annex 4',
    host: 'Nightwalkers Guild',
    entryFee: 600,
    capacity: 6,
    registered: 1,
    image: '/missions/cursed-womb.jpg',
    tags: ['CURSED WOMB', 'CRITICAL', 'FIELD OPERATION', 'SPECIAL GRADE'],
    rank: 'SPECIAL_GRADE',
    popularity: 99,
    featured: true,
    trending: true,
    cursedEnergyLevel: 100,
    liveInterest: 85,
  },
];

export const clubs: Club[] = [
  {
    id: 'club-001',
    name: 'Paranormal Sciences Society',
    specialization: 'Reconnaissance & Veil Tracking',
    memberCount: 42,
    upcomingEvents: 1,
    description:
      'Tracks residual cursed energy, veil integrity, and breach signatures across campus sectors.',
    logo: 'eye', // was 👁️
    color: '#4cc9f0',
  },
  {
    id: 'club-002',
    name: 'Jujutsu Sorcery Club',
    specialization: 'Combat & Practical Application',
    memberCount: 115,
    upcomingEvents: 2,
    description:
      'Premier combat society for sealing drills, Black Flash conditioning, and field readiness.',
    logo: 'swords', // was ⚔️
    color: '#ef233c',
  },
  {
    id: 'club-003',
    name: 'Nightwalkers Guild',
    specialization: 'High-Risk Night Operations',
    memberCount: 18,
    upcomingEvents: 2,
    description:
      'Elite unit for after-dark Special Grade containment and advanced domain drills.',
    logo: 'moon', // was 🌙
    color: '#7209b7',
  },
  {
    id: 'club-004',
    name: 'Esoteric Research Circle',
    specialization: 'Shikigami & Restricted Theory',
    memberCount: 35,
    upcomingEvents: 1,
    description:
      'Academic circle for summoning contracts, archive research, and esoteric technique study.',
    logo: 'scroll', // was 📜
    color: '#4361ee',
  },
  {
    id: 'club-005',
    name: 'Restorative Arts Society',
    specialization: 'Reverse Cursed Technique',
    memberCount: 22,
    upcomingEvents: 1,
    description:
      'Medical-focused sorcerers specializing in positive energy generation and field healing.',
    logo: 'heart-pulse', // was ⚕️
    color: '#06d6a0',
  },
  {
    id: 'club-006',
    name: 'Contract Law & Ethics Board',
    specialization: 'Binding Vows & Diplomacy',
    memberCount: 28,
    upcomingEvents: 1,
    description:
      'Oversees pacts, vows, negotiation ethics, and jujutsu political protocol.',
    logo: 'scale', // was ⚖️
    color: '#f72585',
  },
];

// Keep your real campus evidence photos — only relink event IDs
export const evidenceFiles: EvidenceFile[] = [
  {
    id: 'evi-001',
    fileNumber: '001',
    type: 'POSTER',
    image: '/evidence/evidence-001.jpg',
    title: 'Hackathon / Competition Poster — Mission Signal',
    location: 'Main Corridor / Tech Notice Board',
    date: '2026-09-28',
    status: 'VERIFIED',
    connectedEventId: 'evt-008',
    description:
      'Campus poster signal recovered and cross-linked to high-priority field operations intelligence.',
  },
  {
    id: 'evi-002',
    fileNumber: '002',
    type: 'AUDITION',
    image: '/evidence/evidence-002.jpg',
    title: 'Audition Call — Performance Signal Detected',
    location: 'Arts Block / Audition Point',
    date: '2026-09-29',
    status: 'VERIFIED',
    connectedEventId: 'evt-002',
    description:
      'Audition notice recovered on campus and logged as verified cultural/training signal.',
  },
  {
    id: 'evi-003',
    fileNumber: '003',
    type: 'BUILDING',
    image: '/evidence/evidence-003.jpg',
    title: 'DACA Board — Department of Arts & Cultural Activities',
    location: 'DACA  / Arts & Cultural Department',
    date: '2026-09-30',
    status: 'VERIFIED',
    connectedEventId: 'evt-006',
    description:
      'DACA board capture with multiple overlapping campus signals for arts and society activity.',
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'tl-001',
    eventId: 'evt-001',
    time: '18:00',
    title: 'The Veil Breach Investigation',
    category: 'RECONNAISSANCE',
    venue: 'Tokyo Metropolitan Tunnel A-7',
    day: 'TODAY',
  },
  {
    id: 'tl-002',
    eventId: 'evt-002',
    time: '16:00',
    title: 'Cursed Object Sealing Workshop',
    category: 'COMBAT TRAINING',
    venue: 'Jingu Underground Dojo',
    day: 'TOMORROW',
  },
  {
    id: 'tl-003',
    eventId: 'evt-003',
    time: '23:00',
    title: 'Midnight Domain Expansion Drill',
    category: 'ADVANCED COMBAT',
    venue: 'Campus Rooftop Observatory',
    day: 'THIS_WEEK',
  },
  {
    id: 'tl-004',
    eventId: 'evt-004',
    time: '14:00',
    title: 'Shikigami Summoning Seminar',
    category: 'THEORY',
    venue: 'Library Annex - Restricted Section',
    day: 'THIS_WEEK',
  },
  {
    id: 'tl-005',
    eventId: 'evt-005',
    time: '10:00',
    title: 'Reverse Cursed Technique Lab',
    category: 'HEALING ARTS',
    venue: 'Medical Sciences Building B3',
    day: 'THIS_WEEK',
  },
  {
    id: 'tl-006',
    eventId: 'evt-007',
    time: '17:00',
    title: 'Black Flash Trigger Conditioning',
    category: 'COMBAT TRAINING',
    venue: 'Outdoor Training Grounds',
    day: 'NEXT_WEEK',
  },
  {
    id: 'tl-007',
    eventId: 'evt-008',
    time: '21:00',
    title: 'Cursed Womb Containment Operation',
    category: 'FIELD MISSION',
    venue: 'Abandoned Wing - Annex 4',
    day: 'NEXT_WEEK',
  },
  {
    id: 'tl-008',
    eventId: 'evt-006',
    time: '19:00',
    title: 'Binding Vow Negotiation Practice',
    category: 'DIPLOMACY',
    venue: 'Conference Hall East',
    day: 'NEXT_WEEK',
  },
];

export const userInterests: UserInterest[] = [
  { id: 'int-01', label: 'COMBAT', tag: 'COMBAT', selected: false },
  { id: 'int-02', label: 'DOMAIN', tag: 'DOMAIN', selected: false },
  { id: 'int-03', label: 'HEALING', tag: 'HEALING', selected: false },
  { id: 'int-04', label: 'SHIKIGAMI', tag: 'SHIKIGAMI', selected: false },
  { id: 'int-05', label: 'RECON', tag: 'RECON', selected: false },
  { id: 'int-06', label: 'SEALING', tag: 'SEALING', selected: false },
  { id: 'int-07', label: 'LAW', tag: 'LAW', selected: false },
  { id: 'int-08', label: 'CRITICAL', tag: 'CRITICAL', selected: false },
];

export const getRankLabel = (rank: string): string => {
  switch (rank) {
    case 'SPECIAL_GRADE':
      return 'SPECIAL GRADE';
    case 'GRADE_1':
      return 'GRADE 1';
    case 'GRADE_2':
      return 'GRADE 2';
    case 'GRADE_3':
      return 'GRADE 3';
    case 'GRADE_4':
      return 'GRADE 4';
    default:
      return rank;
  }
};

export const getRankColor = (rank: string): string => {
  switch (rank) {
    case 'SPECIAL_GRADE':
      return '#ef233c';
    case 'GRADE_1':
      return '#7209b7';
    case 'GRADE_2':
      return '#4361ee';
    case 'GRADE_3':
      return '#06d6a0';
    case 'GRADE_4':
      return '#6c6c8a';
    default:
      return '#4361ee';
  }
};

export const getCategoryIcon = (category: string): string => {
  switch (category) {
    case 'RECONNAISSANCE':
      return '👁️';
    case 'COMBAT TRAINING':
      return '⚔️';
    case 'ADVANCED COMBAT':
      return '🔥';
    case 'THEORY':
      return '📜';
    case 'HEALING ARTS':
      return '⚕️';
    case 'DIPLOMACY':
      return '⚖️';
    case 'FIELD MISSION':
      return '⛩️';
    default:
      return '●';
  }
};