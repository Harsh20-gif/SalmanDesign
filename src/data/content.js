// ============================================================
// src/data/content.js
// All client-editable content lives here.
// Update phone, email, address, projects, testimonials, etc.
// ============================================================

// ── Contact Details ──────────────────────────────────────────
export const PHONE = '+919837418514';           // Raw digits for tel: and wa.me links
export const PHONE_DISPLAY = '+91 98374 18514'; // Formatted for display
export const EMAIL = 'info@salmandesign.com';   // ← Replace with real email
export const WHATSAPP_NUMBER = '919837418514';  // Country code + number, no +

export const ADDRESS = {
  line1: 'Near Post Office, Opp. PNB',
  line2: 'Dhampur Road, Nehtaur (Bijnor)',
  state: 'Uttar Pradesh',
  pin: '246731',
};

// Google Maps link (update with real coordinates / place ID)
export const MAPS_URL =
  'https://maps.google.com/?q=Nehtaur,Bijnor,Uttar+Pradesh';

// ── Company ───────────────────────────────────────────────────
export const COMPANY = {
  name: 'Salman Design & Consultant',
  tagline: 'We Build Your Dreams',
  owner: 'Er. M. Salman',
  qualification: 'B.Tech (Civil Engineering)',
};

// ── Hero ──────────────────────────────────────────────────────
export const HERO = {
  headline: 'Building Your Dreams with\nPrecision & Trust',
  subtext:
    'From architectural blueprints to stunning 3D visualizations and flawless construction — we bring your vision to life with expertise and integrity.',
  cta1: { label: 'View Projects', href: '#projects' },
  cta2: { label: 'Call Now', href: `tel:${PHONE}` },
};

// ── About ─────────────────────────────────────────────────────
export const ABOUT = {
  bio: `Er. M. Salman is a qualified civil engineer (B.Tech) with years of hands-on experience in architectural design, structural engineering, interior solutions, and project management. Based in Nehtaur, Bijnor, Salman Design & Consultant has built a reputation for delivering projects that balance aesthetics, functionality, and budget — on time, every time.`,
  mission:
    'Our mission is to transform every client\'s vision into a lasting structure — with honesty, craftsmanship, and cutting-edge design tools.',
  highlights: [
    { label: 'Quality Assured', desc: 'ISI-grade materials & vetted contractors.' },
    { label: 'Full Transparency', desc: 'Detailed BOQ & cost breakdowns upfront.' },
    { label: 'On-Time Delivery', desc: 'Milestone-based schedules you can trust.' },
  ],
};

// ── Stats ─────────────────────────────────────────────────────
export const STATS = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '+', label: 'Happy Clients' },
  { value: 6, suffix: '', label: 'Expert Services' },
];

// ── Services ──────────────────────────────────────────────────
// iconName references react-icons — resolved in Services component
export const SERVICES = [
  {
    id: 'arch',
    iconName: 'FaBuilding',
    title: 'Architectural Design',
    desc: 'Innovative floor plans, elevations, and working drawings tailored to your plot size and lifestyle.',
  },
  {
    id: 'interior',
    iconName: 'MdChair',
    title: 'Interior Design',
    desc: 'Space planning, material selection, furniture layouts, and mood-board creation for every room.',
  },
  {
    id: '3d',
    iconName: 'MdViewInAr',
    title: '3D Visualization',
    desc: 'Photorealistic 3D renders and walkthroughs so you see your home before the first brick is laid.',
  },
  {
    id: 'construction',
    iconName: 'FaHardHat',
    title: 'Construction',
    desc: 'End-to-end construction management with quality checks at every stage.',
  },
  {
    id: 'engineering',
    iconName: 'FaDraftingCompass',
    title: 'Site Engineering',
    desc: 'Structural design, soil testing coordination, and on-site supervision by qualified engineers.',
  },
  {
    id: 'estimation',
    iconName: 'FaCalculator',
    title: 'Cost Estimation',
    desc: 'Detailed BOQ, item-wise rate analysis, and accurate project cost reports.',
  },
];

// ── Projects ──────────────────────────────────────────────────
// Replace img URLs with real project photos before launch.
export const PROJECTS = [
  {
    id: 1,
    title: 'Modern Duplex Villa',
    category: 'Residential',
    location: 'Nehtaur, Bijnor',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=75',
    desc: 'A 3,200 sq-ft duplex with a double-height living room, home office, and rooftop terrace. Full architectural, 3D, and construction services.',
    tags: ['Architecture', '3D View', 'Construction'],
  },
  {
    id: 2,
    title: 'Commercial Showroom',
    category: 'Commercial',
    location: 'Dhampur, Bijnor',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=75',
    desc: 'Ground + 2 showroom with glass facade, structural steel mezzanine, and bespoke interior fit-out.',
    tags: ['Architecture', 'Interior', 'Engineering'],
  },
  {
    id: 3,
    title: 'Luxury Interior Makeover',
    category: 'Interior',
    location: 'Nagina, Bijnor',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=75',
    desc: 'Complete interior redesign of a 1,800 sq-ft apartment — false ceilings, modular kitchen, Italian marble flooring, and feature walls.',
    tags: ['Interior', '3D View'],
  },
  {
    id: 4,
    title: 'Residential 3D Concept',
    category: '3D Views',
    location: 'Nehtaur, Bijnor',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=75',
    desc: 'Photorealistic exterior and interior 3D visualization package for a G+1 residence before construction approval.',
    tags: ['3D View'],
  },
  {
    id: 5,
    title: 'Community Hall',
    category: 'Commercial',
    location: 'Seohara, Bijnor',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=75',
    desc: 'Large-span community hall with RCC frame structure, false ceiling, and professional AV integration.',
    tags: ['Architecture', 'Engineering', 'Construction'],
  },
  {
    id: 6,
    title: 'Farm House Design',
    category: 'Residential',
    location: 'Chandpur, Bijnor',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=75',
    desc: 'Rustic farmhouse with open courtyard, exposed-brick accents, 3D walkthrough, and cost estimation.',
    tags: ['Architecture', '3D View', 'Estimation'],
  },
  {
    id: 7,
    title: 'Office Interior Fit-Out',
    category: 'Interior',
    location: 'Bijnor City',
    img: 'https://images.unsplash.com/photo-1497366754035-f200586c52d1?w=600&q=75',
    desc: 'Corporate office interior with workstation planning, glass partitions, reception design, and brand-aligned palette.',
    tags: ['Interior', '3D View'],
  },
  {
    id: 8,
    title: 'G+2 Budget Home',
    category: 'Residential',
    location: 'Nehtaur, Bijnor',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=75',
    desc: 'Value-engineered 3-storey home with structural drawings, BOQ, and phased construction management.',
    tags: ['Architecture', 'Engineering', 'Estimation', 'Construction'],
  },
];

export const PROJECT_FILTERS = ['All', 'Residential', 'Commercial', 'Interior', '3D Views'];

// ── Process ───────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'We begin with a free site visit and in-depth discussion of your requirements, budget, and timeline.',
  },
  {
    step: '02',
    title: 'Design & 3D View',
    desc: 'Our team prepares architectural drawings and photorealistic 3D renders for your approval.',
  },
  {
    step: '03',
    title: 'Estimation & BOQ',
    desc: 'A detailed bill of quantities and cost estimate is shared — transparent, item-by-item.',
  },
  {
    step: '04',
    title: 'Construction & Handover',
    desc: 'We execute with quality materials and skilled labour, then hand over a completed, punch-free project.',
  },
];

// ── Testimonials ──────────────────────────────────────────────
// Replace with real client reviews before launch.
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rahul Sharma',
    location: 'Nehtaur',
    text: 'Salman bhai ne hamara ghar bilkul waise hi banaya jaise humne socha tha. 3D view dekhke to hum dange hi reh gaye! Budget bhi control raha.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Verma',
    location: 'Dhampur',
    text: 'The interior design team completely transformed our showroom. Modern, professional, and delivered two weeks ahead of schedule. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mohammad Arif',
    location: 'Bijnor',
    text: 'BOQ was spot-on — no hidden costs. The structural drawings passed the municipal office in the first attempt. Very professional service.',
    rating: 5,
  },
];

