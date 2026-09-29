import { CaseStudy, Experience, Testimonial } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Anas Elawdy',
  title: 'Product UI/UX Designer',
  tagline: 'I Help Startups and Companies Create Intuitive Digital Experiences',
  phone: '+201017037847',
  email: 'anaselawdy14@gmail.com',
  location: 'Remote • UAE, Saudi Arabia & Global',
  currentRole: 'Product UI/UX Designer at Qoodz',
  availableForWork: true,
  availabilityText: 'Available for New Projects & Remote Roles',
  yearsExperience: '4+',
  regionsCollaborated: 'UAE, Saudi Arabia, Iraq & Korea',
  industries: 'F&B, Loyalty, E-commerce, AI Dashboards, Real Estate, Health & POS',
  bio: "I'm a Product UI/UX designer with over 4 years of experience with a strong foundation in product design, currently working remotely with Qoodz on an F&B and loyalty system. My work blends design thinking, user research, and practical UI skills to craft impactful solutions across industries like F&B, e-commerce, real estate, education, and delivery services. Having collaborated across the UAE, Saudi Arabia, Iraq, and Korea, and backed by a unique analytical background in Law, I approach product strategy and user friction with structured logic and high-craft execution.",
  resumeUrl: 'https://drive.google.com/file/d/1-2wYdJzjU3xiwKBLo7oVgUfpCGRaZNWV/view',
  socialLinks: {
    github: 'https://github.com/Anaselawdy/Portfolio',
    linkedin: 'https://www.linkedin.com/in/anas-elawdy-a67678111/',
    email: 'mailto:anaselawdy14@gmail.com',
    phone: 'tel:+201017037847',
  },
};

export { CASE_STUDIES, PROJECT_CATEGORIES } from './projectsData';


export const EXPERIENCE_LIST: Experience[] = [
  {
    period: '2024 - Present',
    role: 'Product UI/UX Designer',
    company: 'Qoodz (F&B & Loyalty Platform)',
    location: 'Remote • Saudi Arabia & UAE',
    type: 'Full-Time Remote',
    description: 'Leading product design for the Qoodz ecosystem, spanning iOS & Android consumer loyalty apps, visual digital menus, and the enterprise merchant web dashboard.',
    achievements: [
      'Designed end-to-end loyalty mobile app driving 90% usability satisfaction and 87% preference over paid clubs',
      'Created the Digital Menu conversion flow, generating +27% redemption conversion lift and 2.5x saved dishes',
      'Architected merchant analytics dashboard for offer requests, menu publishing, and multi-branch sales tracking',
    ],
    skills: ['F&B UX', 'Loyalty Systems', 'Arabic-First Design', 'Merchant Dashboards', 'Gamification'],
  },
  {
    period: '2023 - 2024',
    role: 'Product Designer & UX Researcher',
    company: 'Qompos & Autonomous Projects',
    location: 'Remote • GCC & International',
    type: 'Product Design',
    description: 'Designed the Qompos POS Manager "Command Center" mobile app, PWC AI Management Dashboard, and ChildRoo smart baby tracker.',
    achievements: [
      'Engineered Qompos Manager app delivering 0-second data latency and saving managers 10-15 hours weekly',
      'Designed PWC AI Dashboard for automated task scheduling, focus protection, and meeting optimization',
      'Created ChildRoo mobile app with 1-tap quick action routine tracking and calming health UI',
    ],
    skills: ['POS Systems', 'AI Interfaces', 'Mobile Health', 'User Research', 'Data Visualization'],
  },
  {
    period: '2021 - 2023',
    role: 'Product & UI/UX Designer',
    company: 'Digital Solutions & Client Collaborations',
    location: 'UAE, KSA, Iraq & Korea (Remote)',
    type: 'Design Consultant',
    description: 'Collaborated with startups and enterprises across the UAE, Saudi Arabia, Iraq, and Korea to craft intuitive digital products in e-commerce, real estate, and delivery.',
    achievements: [
      'Shipped responsive web platforms and cross-platform mobile apps for international clients',
      'Synthesized complex business requirements into high-converting user journeys and design systems',
      'Leveraged legal background to analyze user constraints, data compliance, and multi-stakeholder workflows',
    ],
    skills: ['E-Commerce', 'Real Estate Tech', 'Cross-Cultural UX', 'Figma', 'Prototyping'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Qoodz Product Lead',
    role: 'Product Leadership',
    company: 'Qoodz Technologies',
    avatarText: 'QD',
    content: 'Anas transformed our product experience. His ability to blend Arabic cultural fluency with gamified loyalty mechanics made Qoodz a favorite across the Saudi and UAE markets. His digital menu design directly lifted our redemption conversion by 27%.',
    project: 'Qoodz Mobile & Menu Flow',
  },
  {
    id: '2',
    name: 'Hospitality Operations Lead',
    role: 'Restaurant Operations Director',
    company: 'Qompos Partner Network',
    avatarText: 'QP',
    content: 'The Qompos Manager app Anas designed completely eliminated our need for manual WhatsApp check-ins and late-night store visits. It gives us live revenue reassurance in 2 seconds. Truly brilliant product thinking.',
    project: 'Qompos POS Command Center',
  },
  {
    id: '3',
    name: 'AI & Systems Architect',
    role: 'Senior Engineering Partner',
    company: 'Enterprise AI Initiatives',
    avatarText: 'AI',
    content: 'Anas brings a rare legal-grade analytical mindset to UX architecture. His PWC AI Dashboard balanced complex automation with clean, human-centered focus protection that our users loved immediately.',
    project: 'PWC AI Management Dashboard',
  },
];

export const DESIGN_SKILLS = [
  {
    category: 'Product Strategy & UX Research',
    items: [
      'User Research & Interviews',
      'Persona & Journey Mapping',
      'Information Architecture',
      'Competitive Benchmarking',
      'Usability Testing & Action Plans',
      'Analytical Problem Solving (Legal Background)',
    ],
  },
  {
    category: 'UI & Interaction Craft',
    items: [
      'High-Fidelity Mobile App UI (iOS & Android)',
      'Arabic-First & Bilingual RTL Design',
      'Gamification (Streaks, Badges, Points)',
      'High-Density Dashboard Systems',
      'Micro-Interactions & Physics',
      '1-Tap Quick Action Workflows',
    ],
  },
  {
    category: 'Tools & Industry Domains',
    items: [
      'Figma & Prototyping (Protopie, Principle)',
      'Design Systems & Component Specs',
      'Food & Beverage (F&B) & Loyalty',
      'POS & Retail Management',
      'AI Productivity Dashboards',
      'GCC Markets (Saudi Arabia, UAE, Iraq, Korea)',
    ],
  },
];
