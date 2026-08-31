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
  bio: "I'm a Product UI/UX designer with over 4 years of experience with a strong foundation in product design, currently working remotely with Qoodz on an F&B and loyalty system. My work blends design thinking, user research, and practical UI skills to craft impactful solutions across industries like F&B, e-commerce, real estate, education, and delivery services. Having collaborated across the UAE, Saudi Arabia, Iraq, and Korea—and backed by a unique analytical background in Law—I approach product strategy and user friction with structured logic and high-craft execution.",
  resumeUrl: 'https://drive.google.com/file/d/1-2wYdJzjU3xiwKBLo7oVgUfpCGRaZNWV/view',
  socialLinks: {
    github: 'https://github.com/Anaselawdy/Portfolio',
    linkedin: 'https://www.linkedin.com/in/anas-elawdy-a67678111/',
    email: 'mailto:anaselawdy14@gmail.com',
    phone: 'tel:+201017037847',
  },
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'qoodz-app',
    title: 'Qoodz — Mobile App & Merchant Dashboard Ecosystem',
    client: 'Qoodz F&B Technologies',
    category: 'fb-loyalty',
    categoryLabel: 'F&B & Loyalty System',
    year: '2024 - Present',
    role: 'Interaction & Product Designer',
    duration: 'Ongoing',
    region: 'GCC Market (Saudi Arabia & UAE)',
    platform: 'iOS, Android & Web Merchant Dashboard',
    summary: 'Designed an innovative F&B loyalty ecosystem featuring freemium brand discovery, habit-forming gamification (streaks & badges), in-store QR redemption, and merchant offer management.',
    heroImage: 'qoodz-main',
    tags: ['F&B Loyalty', 'Mobile App', 'Merchant Dashboard', 'Gamification', 'Arabic-First UX'],
    metrics: [
      { label: 'User Satisfaction', value: '90%', description: 'Users reported the app felt fun and easy to use' },
      { label: 'Freemium Preference', value: '87%', description: 'Preferred Qoodz over paid loyalty models (Zomato Pro)' },
      { label: 'Peer Recommendation', value: '75%', description: 'High organic viral sharing intent' },
    ],
    overview: {
      challenge: 'F&B establishments suffered from fragmented, isolated loyalty schemes, manual paper vouchers, and high merchant churn. Customers lacked a unified, enjoyable way to discover deals and accumulate rewards.',
      opportunity: 'Create a centralized, freemium dining companion tailored for Saudi & GCC culture with zero paywalls, location-aware deal discovery, and a real-time merchant control dashboard.',
      myRole: [
        'End-to-end UX research, user journey mapping, and information architecture',
        'Mobile app UI design for iOS & Android with Arabic-first typography and RTL layout',
        'Gamification architecture (points, badges, streaks, and reward feedback animations)',
        'Merchant web dashboard design for menu management, offer requests, and sales reporting',
      ],
      tools: ['Figma', 'Protopie', 'Mobbin', 'User Testing', 'Design Systems'],
    },
    research: {
      targetAudience: 'Dining enthusiasts, foodies, and restaurant managers across the GCC seeking seamless reward redemption.',
      keyInsights: [
        {
          title: 'Freemium Unlocks Mass Adoption',
          desc: 'Unlike Zomato Pro or Gastrofy which enforce paywalls, a free-for-everyone model drastically lowered CAC and accelerated brand onboarding.',
          impact: 'High',
        },
        {
          title: 'Gamification Drives Repeat Habits',
          desc: 'Users responded intensely to streaks, tier progression, and celebratory unlock animations after dining out.',
          impact: 'High',
        },
        {
          title: 'Cultural Context & Arabic Typography',
          desc: 'Localization required more than translation—spacing, conversational tone, and visual hierarchy were tailored for Saudi user comfort.',
          impact: 'Medium',
        },
      ],
      problemStatements: [
        'How might we eliminate friction during in-store offer redemption using QR codes?',
        'How might we empower restaurant partners to create and pause time-sensitive promotions in seconds?',
        'How might we make loyalty progression feel emotionally rewarding through micro-interactions?',
      ],
    },
    designProcess: [
      {
        phase: '01. Discovery & Competitive Analysis',
        title: 'Benchmarking Regional & Global F&B Apps',
        description: 'Analyzed Zomato, Talabat, The Entertainer, and Gastrofy to identify gaps in freemium accessibility and gamified retention.',
        highlights: ['Identified zero-paywall opportunity', 'Mapped merchant onboarding friction', 'Defined loyalty streak mechanics'],
      },
      {
        phase: '02. Usability Testing & Iteration',
        title: 'Testing Core Flows with 15+ Target Users',
        description: 'Conducted moderated testing on onboarding, discovery maps, QR scanning, and wallet balance clarity.',
        highlights: ['Added visual post-scan confirmation animation', 'Refined Arabic terminology with native reviewers', 'Enhanced pin color coding on discovery maps'],
      },
      {
        phase: '03. Merchant Command Dashboard',
        title: 'Empowering F&B Brand Managers',
        description: 'Designed a high-density web portal for tracking live redemption analytics, revenue share, and story promotions.',
        highlights: ['Offer request lifecycle workflow', 'Category & item performance breakdown reports', 'Multi-branch manager control'],
      },
    ],
    solution: {
      title: 'The Unified Dining & Loyalty Platform',
      description: 'A cohesive dual-sided system connecting food lovers with premier restaurants and cafes across Saudi Arabia and the UAE.',
      features: [
        {
          title: '1-Tap QR In-Store Redemption',
          description: 'Instant verification code with celebratory feedback animation that prevents fraud and staff confusion.',
          tag: 'Core Flow',
        },
        {
          title: 'Gamified Habit Loops',
          description: 'Weekly streaks, foodie badges, and loyalty point progression that encourage repeat dining visits.',
          tag: 'Engagement',
        },
        {
          title: 'Merchant Analytics Cockpit',
          description: 'Real-time sales reports, category breakdowns, and custom offer scheduling.',
          tag: 'Dashboard',
        },
      ],
    },
    impact: {
      headline: 'Transforming F&B loyalty into an engaging, habit-forming daily companion.',
      stats: [
        { label: 'Usability Rating', value: '90%', description: 'Rated easy and fun to navigate' },
        { label: 'Model Preference', value: '87%', description: 'Favored freemium access over paid clubs' },
        { label: 'Recommendation', value: '75%', description: 'Willingness to share with friends' },
      ],
      learnings: [
        'Designing for culture matters: Arabic typography and regional tone build immense user trust.',
        'Small micro-interactions and celebratory animations turn routine tasks into emotional hooks.',
        'Done is better than perfect: rapid user-backed iteration beats isolated polishing.',
      ],
      quote: {
        text: 'Qoodz bridges the gap between digital discovery and real-world restaurant visits with intuitive ease and cultural resonance.',
        author: 'Qoodz Product Leadership',
        role: 'F&B Technology Team',
      },
    },
  },
  {
    id: 'qoodz-digital-menu',
    title: 'Qoodz — Digital Menu Conversion & Discovery Experience',
    client: 'Qoodz F&B Technologies',
    category: 'fb-loyalty',
    categoryLabel: 'F&B Conversion UX',
    year: '2024 - 2025',
    role: 'Product & Interaction Designer',
    duration: '4 Months',
    region: 'GCC Market (Saudi Arabia & UAE)',
    platform: 'Mobile Application (iOS & Android)',
    summary: 'Designed a high-conversion digital menu feature integrated into restaurant brand profiles, driving a 27% increase in offer redemption and 2.5x more saved dishes.',
    heroImage: 'digital-menu',
    tags: ['Digital Menu', 'E-Commerce UX', 'Conversion Optimization', 'Visual Hierarchy'],
    metrics: [
      { label: 'Redemption Lift', value: '+27%', description: 'Higher conversion for menu viewers' },
      { label: 'Time on Brand Page', value: '+43%', description: 'Increased from 1m10s to 1m40s' },
      { label: 'Saved Dishes', value: '2.5x', description: 'Stronger purchase intent and repeat interest' },
    ],
    overview: {
      challenge: 'Users visiting restaurant brand pages lacked visibility into actual dishes, portion pricing, and item-specific discounts, leading to hesitation before visiting physical locations.',
      opportunity: 'Design a rich, image-driven digital menu experience bridging exploration and in-store ordering with clear discount badges and 1-tap offer claims.',
      myRole: [
        'Information architecture and categorized tab navigation',
        'Visual card layout optimizing food photography appeal',
        'Inline offer badge design and dish detail modals',
        'Usability testing with 6 foodies and 2 merchant partners in UAE',
      ],
      tools: ['Figma', 'Protopie', 'UserTesting', 'Mobbin'],
    },
    research: {
      targetAudience: 'Diners wanting to preview food items, pricing, and active discounts before committing to a dining venue.',
      keyInsights: [
        {
          title: 'Visuals Sell Food',
          desc: 'High-quality appetizing food imagery converted significantly higher than text-heavy descriptions.',
          impact: 'High',
        },
        {
          title: 'Context Drives Action',
          desc: 'Pairing the dish photo, price, and exact discount badge in one glance drastically lowered hesitation.',
          impact: 'High',
        },
        {
          title: 'Sticky Navigation Necessity',
          desc: 'Long restaurant menus required persistent category headers so users didn’t lose their scroll position.',
          impact: 'Medium',
        },
      ],
      problemStatements: [
        'How might we clarify whether a discount applies to the entire bill or a specific signature dish?',
        'How might we structure extensive menus without overwhelming mobile screens?',
      ],
    },
    designProcess: [
      {
        phase: '01. Architecture & Categorization',
        title: 'Scannable Sectional Layouts',
        description: 'Organized menus into Appetizers, Mains, Desserts, and Beverages with sticky tab navigation.',
        highlights: ['Bilingual Arabic/English labels', 'Persistent category switcher', 'Allergen & dietary tag indicators'],
      },
      {
        phase: '02. Detail Modals & CTAs',
        title: 'From Browsing to Claiming Offers',
        description: 'Introduced quick-preview dish modals displaying calories, ingredients, and direct "Get This Offer" CTA.',
        highlights: ['Floating explanation card for complex deals', 'Save favorite dish toggle', 'Merchant-uploaded custom photography guidelines'],
      },
    ],
    solution: {
      title: 'The Visual Appetite Engine',
      description: 'An interactive menu preview that builds emotional excitement and drives predictable footfall for partner restaurants.',
      features: [
        {
          title: 'Interactive Dish Modals',
          description: 'Crisp item popups with portion details, ingredients, and 1-tap offer activation.',
          tag: 'Micro-UX',
        },
        {
          title: 'Sticky Category Bar',
          description: 'Smooth scroll tracking allowing instant jumps between large food categories.',
          tag: 'Navigation',
        },
        {
          title: 'Inline Deal Badges',
          description: 'High-contrast tag highlights clearly demarcating item-specific vs total-bill promotions.',
          tag: 'Clarity',
        },
      ],
    },
    impact: {
      headline: 'Connecting user appetite directly to measurable restaurant revenue.',
      stats: [
        { label: 'Redemption Conversion', value: '+27%', description: 'Lift among menu viewers' },
        { label: 'Saved Dishes', value: '2.5x', description: 'Growth in user wishlists' },
        { label: 'Menu Engagement', value: '+32%', description: 'Increase in menu view duration' },
      ],
      learnings: [
        'Visual transparency eliminates buyer friction in the F&B sector.',
        'Restaurant managers reported guests arrived already knowing exactly what to order.',
      ],
    },
  },
  {
    id: 'pwc-ai-dashboard',
    title: 'PWC AI Management Dashboard — Intelligent Time & Workflow Optimizer',
    client: 'PWC AI Initiatives / Enterprise Productivity',
    category: 'ai-dashboard',
    categoryLabel: 'AI & Enterprise SaaS',
    year: '2024 - 2025',
    role: 'Product Designer & UX Researcher',
    duration: '5 Months',
    region: 'Global / Enterprise',
    platform: 'Web Application & Dashboard',
    summary: 'A streamlined dashboard designed to monitor and manage AI system performance, task prioritization, focus time blocks, and meeting optimization in real-time.',
    heroImage: 'ai-pwc',
    tags: ['AI Assistant UX', 'Task Automation', 'Focus Protection', 'Time Telemetry', 'Dashboard UI'],
    metrics: [
      { label: 'Task Auto-Prioritization', value: '100%', description: 'Automated deadline scheduling' },
      { label: 'Meeting Fatigue Drop', value: '-45%', description: 'Optimized calendar focus blocks' },
      { label: 'Workflow Efficiency', value: '+3.5 hrs', description: 'Gained per user weekly' },
    ],
    overview: {
      challenge: 'Enterprise professionals suffered from meeting overload, fragmented productivity apps, and constant context switching that prevented deep focus work.',
      opportunity: 'Design an AI-powered executive cockpit that monitors workload telemetry, automatically shields focus hours, optimizes meeting schedules, and integrates with Google Calendar & Outlook.',
      myRole: [
        'User persona definition (Busy Corporate Managers & Independent Freelancers)',
        'Information architecture, user flows, and wireframing',
        'High-density dashboard UI with focus mode HUD and real-time telemetry charts',
        'Usability testing plan execution across remote enterprise knowledge workers',
      ],
      tools: ['Figma', 'Protopie', 'User Research', 'Design Systems'],
    },
    research: {
      targetAudience: 'Corporate team leads, product managers, and knowledge workers juggling 20+ meetings and high-cognitive tasks weekly.',
      keyInsights: [
        {
          title: 'Meeting Overload Exhaustion',
          desc: 'Back-to-back 30-minute meetings fragmented daily schedules, leaving zero continuous blocks for deep analytical work.',
          impact: 'High',
        },
        {
          title: 'Automated Task Triage Need',
          desc: 'Users spent 45 minutes daily just organizing to-do lists rather than executing high-value tasks.',
          impact: 'High',
        },
        {
          title: 'Tool Consolidation',
          desc: 'Switching between email, calendars, and task managers caused high cognitive friction without two-way sync.',
          impact: 'Medium',
        },
      ],
      problemStatements: [
        'How might AI autonomously protect focus blocks without causing calendar scheduling conflicts?',
        'How might we surface daily productivity insights without feeling like micromanagement?',
      ],
    },
    designProcess: [
      {
        phase: '01. Persona & Flow Mapping',
        title: 'Mapping the Knowledge Worker Routine',
        description: 'Created detailed user journeys from morning schedule triage to end-of-day productivity wrap-ups.',
        highlights: ['Focus Block algorithm modeling', 'Meeting threshold triggers', 'Calendar integration architecture'],
      },
      {
        phase: '02. Wireframing & Focus Mode HUD',
        title: 'Minimalist High-Density UI',
        description: 'Designed dark-mode productivity dashboards with clean telemetry widgets and 1-tap focus activations.',
        highlights: ['End-of-day summary reports', 'Actionable meeting reduction recommendations', 'Zero-clutter interface'],
      },
    ],
    solution: {
      title: 'The Autonomous Workday Assistant',
      description: 'An intelligent operational layer that harmonizes tasks, meetings, and mental bandwidth.',
      features: [
        {
          title: 'Focus Time Shield',
          description: 'Intelligent calendar blocks that automatically deflect non-urgent invites during peak focus hours.',
          tag: 'Core Feature',
        },
        {
          title: 'Meeting Optimizer',
          description: 'AI auditing of recurring calls, suggesting async alternatives and shortenings.',
          tag: 'Efficiency',
        },
        {
          title: 'Time Usage Insights',
          description: 'Daily and weekly telemetry breakdown showing focus vs meeting ratios.',
          tag: 'Telemetry',
        },
      ],
    },
    impact: {
      headline: 'Empowering knowledge workers to reclaim 3.5+ hours of deep focus weekly.',
      stats: [
        { label: 'Focus Time Gained', value: '+3.5 hrs', description: 'Weekly uninterrupted work' },
        { label: 'Unnecessary Meetings Cut', value: '-30%', description: 'Replaced with async digests' },
        { label: 'User Satisfaction', value: '94%', description: 'Reported lower end-of-day stress' },
      ],
      learnings: [
        'AI productivity tools must reassure rather than add friction.',
        'Clean data visualization builds immediate credibility with enterprise decision-makers.',
      ],
    },
  },
  {
    id: 'childroo-tracker',
    title: 'ChildRoo — Smart Baby Tracker & Daily Routine Management',
    client: 'ChildRoo Parenting Technologies',
    category: 'mobile-health',
    categoryLabel: 'Health & Parenting Mobile App',
    year: '2024',
    role: 'Product Designer & UX Researcher',
    duration: '4 Months',
    region: 'Global Mobile Market',
    platform: 'Mobile Application (iOS & Android)',
    summary: 'A smart baby care and routine tracking app designed with calming aesthetics, tailored developmental plans, and a frictionless 1-tap "Quick Action" logging component.',
    heroImage: 'childroo-main',
    tags: ['Parenting Tech', 'Mobile UX', 'Health Tracking', 'Quick Actions', 'iOS HIG'],
    metrics: [
      { label: 'Logging Speedup', value: '1-Tap', description: 'Direct quick-action from home screen' },
      { label: 'App Store Rating', value: '4.8 ★', description: 'High ratings for calming visual design' },
      { label: 'Onboarding Completion', value: '92%', description: 'Streamlined developmental plan setup' },
    ],
    overview: {
      challenge: 'New parents are frequently sleep-deprived and overwhelmed. Existing tracking apps were rigid, clinical, and forced parents through 4-5 screen taps just to log a routine feed or sleep window.',
      opportunity: 'Create a warm, reassuring mobile companion with tailored developmental milestones and a zero-latency "Quick Action" card for instant 1-tap routine continuation.',
      myRole: [
        'Competitive analysis (Little One, Huckleberry, Baby Daybook)',
        'Calming mood board creation (soft colors, rounded typography, zero cognitive strain)',
        'UX architecture for personalized parenting plans and milestone checklists',
        'Innovative "Quick Action" component design for instant routine logging',
      ],
      tools: ['Figma', 'Protopie', 'User Interviews', 'iOS HIG'],
    },
    research: {
      targetAudience: 'New parents and caregivers managing newborn schedules while juggling fatigue and anxiety.',
      keyInsights: [
        {
          title: 'Parents Seek Speed, Not Exploration',
          desc: 'When opening the app during midnight feeds, parents want to tap once and lock the phone—every second counts.',
          impact: 'Critical',
        },
        {
          title: 'Emotional Reassurance vs Clinical Data',
          desc: 'Harsh alert colors and complex medical charts elevated parental anxiety; warm, gentle tones fostered calm.',
          impact: 'High',
        },
        {
          title: 'Customized Age-Based Plans',
          desc: 'A 2-week-old infant needs completely different routines than a 6-month-old; plans must adapt automatically.',
          impact: 'High',
        },
      ],
      problemStatements: [
        'How might we enable parents to log a routine event with a single tap from the home screen?',
        'How might we design a visual atmosphere that reduces maternal and paternal anxiety?',
      ],
    },
    designProcess: [
      {
        phase: '01. Research & Mood Boarding',
        title: 'Designing for Emotional Trust',
        description: 'Curated calming palettes and rounded tactile UI elements inspired by modern Scandinavian parenting craft.',
        highlights: ['Calming pastel contrast rules', 'Soft rounded touch targets (52px+)', 'Gentle haptic cues'],
      },
      {
        phase: '02. Quick Action Component',
        title: 'Frictionless Contextual Tracking',
        description: 'Designed a smart pinned home card that summarizes the current day routine and provides a 1-tap "Continue Routine" trigger.',
        highlights: ['Zero repetitive navigation', 'Smart context detection', 'Instant offline state synchronization'],
      },
    ],
    solution: {
      title: 'The Calming Parenting Companion',
      description: 'A gentle, intelligent mobile experience supporting parents through every stage of early childhood development.',
      features: [
        {
          title: '1-Tap Quick Action Card',
          description: 'Instantly mark feeding, sleep, or diaper milestones without digging through menus.',
          tag: 'Innovation',
        },
        {
          title: 'Adaptive Developmental Plan',
          description: 'Automated milestone checklist custom-tailored to the baby’s exact age and growth curve.',
          tag: 'Personalization',
        },
        {
          title: 'Soft Sleep & Routine Timeline',
          description: 'Glanceable hypnogram and feed intervals designed for low-light nighttime viewing.',
          tag: 'Health UI',
        },
      ],
    },
    impact: {
      headline: 'Reducing cognitive fatigue for thousands of new parents every day.',
      stats: [
        { label: 'Routine Logging Time', value: '< 2s', description: 'Down from 15 seconds' },
        { label: 'Parent Satisfaction', value: '96%', description: 'Praised calming design & speed' },
        { label: 'Weekly Retention', value: '78%', description: 'Consistent daily usage habits' },
      ],
      learnings: [
        'Design with deep empathy: understanding user state (fatigue, stress) is critical to UI decisions.',
        'A single well-placed Quick Action component can transform the entire utility of an app.',
      ],
    },
  },
  {
    id: 'qompos-pos-manager',
    title: 'Qompos — POS Manager "Command Center" Mobile App',
    client: 'Qompos Retail & F&B Systems',
    category: 'pos-enterprise',
    categoryLabel: 'POS & Operations Cockpit',
    year: '2024 - 2025',
    role: 'Lead Product Designer',
    duration: '6 Months',
    region: 'GCC Market (Saudi Arabia & UAE)',
    platform: 'Mobile Application (iOS & Android)',
    summary: 'A decision-making command center app for restaurant managers, replacing manual WhatsApp updates and physical end-of-day Z-report runs with real-time operational telemetry.',
    heroImage: 'qompos-main',
    tags: ['POS Manager', 'Financial Telemetry', 'Vibe Coding Architecture', 'At-a-Glance UX', 'Mobile Dashboard'],
    metrics: [
      { label: 'Data Latency', value: '0 Sec', description: 'Real-time vs 12hr manual delay' },
      { label: 'Time Saved Weekly', value: '10-15 hrs', description: 'Automated reporting for managers' },
      { label: 'Remote Visibility', value: '100%', description: 'Eliminated physical store visit needs' },
    ],
    overview: {
      challenge: 'Restaurant owners and managers operated blindly throughout the day, relying on chaotic WhatsApp groups, manual calls to cashiers, or physical store visits late at night to print end-of-day paper reports.',
      opportunity: 'Design an executive mobile command center that delivers instant financial reassurance ("Is my business healthy right now?") through high-contrast hero revenue cards and hourly staffing telemetry.',
      myRole: [
        'Survey discovery and user research with active restaurant managers across KSA & UAE',
        'Information architecture strategy: Strict hierarchy (Revenue > Operations > Inventory)',
        'Vibe Coding UX logic: Mapping user emotional states to low-density high-contrast UI',
        'Mobile chart design for peak-hour sales and staff shift planning',
      ],
      tools: ['Figma', 'Protopie', 'Vibe Coding Logic', 'Mobile UI'],
    },
    research: {
      targetAudience: 'F&B Business Owners, Operations Directors, and Branch Managers managing single or multi-unit outlets.',
      keyInsights: [
        {
          title: 'Managers Suffer from "Data Latency"',
          desc: 'Waiting 12+ hours for closing reports prevented managers from intervening when sales stalled mid-afternoon.',
          impact: 'Critical',
        },
        {
          title: 'Hero Metric Priority',
          desc: 'When surveying owners: "If you could see only ONE number on your screen, what would it be?" — 94% answered Net Revenue.',
          impact: 'High',
        },
        {
          title: 'Zero-Tap Insight Rule',
          desc: 'Managers check their phone on the go. Core health must require 0 taps and 2 seconds of cognitive scan.',
          impact: 'High',
        },
      ],
      problemStatements: [
        'How might we provide instant peace of mind on restaurant health within 2 seconds of app launch?',
        'How might we visualize hourly rush periods to help managers optimize staff allocation remotely?',
      ],
    },
    designProcess: [
      {
        phase: '01. Survey & Discovery Research',
        title: 'Uncovering Real Manager Frustrations',
        description: 'Surveyed restaurant decision-makers on current WhatsApp workflows and data latency pain points.',
        highlights: ['Confirmed manual reporting burnout', 'Identified top 3 priority KPIs', 'Defined multi-branch toggle logic'],
      },
      {
        phase: '02. Vibe Coding Architecture',
        title: 'Translating Emotional States to UI Logic',
        description: 'Structured layout rules around "Instant Reassurance": strict hierarchy, low density, high-contrast dark cards.',
        highlights: ['Hero revenue card with green/red trend badges', 'Simplified hourly bar chart', 'Zero-latency sync with POS terminals'],
      },
    ],
    solution: {
      title: 'The Mobile Command Center',
      description: 'A pocket cockpit giving hospitality leaders complete real-time control over branch performance and cash flow.',
      features: [
        {
          title: 'Hero Revenue Card',
          description: 'Prominent total revenue display with instantaneous percentage delta vs yesterday and last week.',
          tag: 'Hero KPI',
        },
        {
          title: 'Hourly Peak Radar',
          description: 'Simplified bar chart visualizing customer rush hours to adjust kitchen and floor staffing on the fly.',
          tag: 'Operations',
        },
        {
          title: 'Multi-Branch Switcher',
          description: '1-tap selector to inspect performance across multiple restaurant locations simultaneously.',
          tag: 'Enterprise',
        },
      ],
    },
    impact: {
      headline: 'Giving restaurant managers complete peace of mind and 15+ hours back every week.',
      stats: [
        { label: 'Data Latency', value: '0s', description: 'Real-time live updates' },
        { label: 'Weekly Time Saved', value: '12 hrs', description: 'Per store manager' },
        { label: 'Store Visit Needs', value: '-100%', description: 'Full remote oversight' },
      ],
      learnings: [
        'Treat mobile manager apps like high-stakes fintech portfolios: clarity and speed over decoration.',
        'Mapping user emotions (anxiety vs reassurance) directly produces better information architecture.',
      ],
    },
  },
];

export const EXPERIENCE_LIST: Experience[] = [
  {
    period: '2024 — Present',
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
    period: '2023 — 2024',
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
    period: '2021 — 2023',
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
