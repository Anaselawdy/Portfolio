import { CaseStudy, Experience, Testimonial } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Anas Elawdy',
  title: 'Senior Product Designer & Design Systems Lead',
  location: 'Dubai / Remote (UTC+3 / UTC+4)',
  email: 'anas.elawdy.design@gmail.com',
  availableForWork: true,
  availabilityText: 'Available for Q3/Q4 2026 Projects & Advisory',
  bio: 'Specializing in complex enterprise UX, cross-border fintech platforms, and scalable design token architectures. I bridge the gap between high-fidelity interaction craft and business impact.',
  yearsExperience: '8+',
  productsShipped: '16+',
  totalFundingImpact: '$65M+',
  socialLinks: {
    github: 'https://github.com/Anaselawdy/Portfolio',
    linkedin: 'https://linkedin.com/in/anaselawdy',
    dribbble: 'https://dribbble.com/anaselawdy',
    figma: 'https://figma.com/@anaselawdy',
    twitter: 'https://x.com/anaselawdy',
  },
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'apex-pay',
    title: 'Apex Pay — Cross-Border Multi-Currency Settlement Platform',
    client: 'Apex Financial Technologies',
    category: 'fintech',
    categoryLabel: 'Fintech & Payments',
    year: '2025 - 2026',
    role: 'Lead Product Designer',
    duration: '9 Months',
    summary: 'Redesigned the multi-currency payout flow and merchant dashboard, reducing transfer drop-offs by 38% and unlocking $14.2M in monthly transaction volume.',
    heroImage: 'fintech-apex',
    tags: ['Fintech UX', 'Multi-Currency', 'Web & Mobile', 'Design Systems'],
    metrics: [
      { label: 'Drop-off Reduction', value: '-38%', description: 'Streamlined 6-step compliance to a 2-step adaptive flow' },
      { label: 'Monthly Volume', value: '$14.2M', description: 'Immediate uplift within 90 days post-launch' },
      { label: 'SUS Usability Score', value: '89.4', description: 'Up from 62.1 on the legacy system' },
    ],
    overview: {
      challenge: 'Merchants dealing in cross-border settlements struggled with opaque FX fees, high rejection rates on AML verification, and cluttered multi-currency balances that caused cognitive overload.',
      opportunity: 'Create a unified, transparent liquidity cockpit where CFOs and treasury managers can execute instant currency hedges and batch payments with 1-click certainty.',
      myRole: [
        'End-to-end UX research with 24 enterprise treasury leads across MENA and Europe',
        'Information architecture and payment wizard overhaul',
        'High-fidelity interactive prototype in Figma & code sandbox',
        'Design tokens integration with frontend React engineers',
      ],
      tools: ['Figma', 'Protopie', 'Mobbin', 'Tailwind CSS', 'UserTesting'],
    },
    research: {
      targetAudience: 'Treasury Managers, Fintech Founders, and Operations Leads processing $50k+ monthly cross-border transactions.',
      keyInsights: [
        {
          title: 'Fee Anxiety at Point of Transfer',
          desc: '74% of users abandoned transfers at step 4 because exchange rates fluctuated without clear locked-in countdowns.',
        },
        {
          title: 'Batch Payment Friction',
          desc: 'Uploading 500+ employee payouts had zero inline validation, leading to cryptic batch failure emails 2 hours later.',
        },
        {
          title: 'Multi-Wallet Disorientation',
          desc: 'Users had to toggle 8 individual currency tabs to understand total liquidity position.',
        },
      ],
      problemStatements: [
        'How might we provide real-time FX rate guarantee locks during payout compilation?',
        'How might we offer instant cell-by-cell CSV validation before submission?',
        'How might we present global consolidated liquidity in a single digestible glance?',
      ],
    },
    designProcess: [
      {
        phase: '01. Discovery & Synthesis',
        title: 'User Journeys & Error Matrix',
        description: 'Audited 120 recorded session logs and mapped the friction points in the KYC/AML verification ladder.',
        highlights: ['Eliminated 7 redundant fields', 'Created automated address lookup', 'Introduced contextual tooltips for SWIFT vs IBAN'],
      },
      {
        phase: '02. Wireframing & Prototyping',
        title: 'Adaptive Payout Wizard',
        description: 'Designed a smart 2-pane checkout layout where the transaction summary and real-time fee breakdown dynamically pinned to the right.',
        highlights: ['Live rate lock countdown timer (60s)', 'Instant beneficiary memory search', 'Split-settlement simulator'],
      },
      {
        phase: '03. Visual Craft & Tokens',
        title: 'Fintech Micro-Interactions & States',
        description: 'Crafted crisp tabular numeric typography, high-contrast security verification cues, and smooth transition physics.',
        highlights: ['Zero-latency optimistic UI updates', 'Biometric & passkey authentication dialogs', 'WCAG AAA color contrast compliance'],
      },
    ],
    solution: {
      title: 'The Liquidity Command Center',
      description: 'A modular, high-density dashboard that gives financial operators total control over FX conversions, automated sweep rules, and mass beneficiary routing.',
      features: [
        {
          title: 'Live FX Rate Anchor',
          description: 'A 60-second guaranteed rate freeze bar that visibly tracks lock duration before execution.',
          tag: 'Core Feature',
        },
        {
          title: 'Smart CSV Validator',
          description: 'Inline table editor highlighting invalid IBANs and duplicate entries directly in the browser.',
          tag: 'Efficiency',
        },
        {
          title: 'Unified Balance Wheel',
          description: 'Visual asset distribution graph with instant 1-tap currency rebalancing.',
          tag: 'Data Viz',
        },
      ],
    },
    impact: {
      headline: 'Transforming cross-border transactions into an effortless 45-second flow.',
      stats: [
        { label: 'Time-to-Execute Payout', value: '45s', description: 'Down from 4.8 minutes on legacy flow' },
        { label: 'Support Ticket Reduction', value: '-62%', description: 'Fewer payout failure queries' },
        { label: 'NPS Score', value: '+48', description: 'Across 3,200 surveyed business accounts' },
      ],
      quote: {
        text: 'Anas did not just redesign our screens — he completely unblocked our product roadmap by rethinking how our users relate to FX risk.',
        author: 'Marcus Vance',
        role: 'VP of Product, Apex Financial',
      },
    },
  },
  {
    id: 'pulse-design-system',
    title: 'Pulse — Multi-Brand Enterprise Design System & Token Engine',
    client: 'Hyperion Cloud Systems',
    category: 'design-systems',
    categoryLabel: 'Design Systems & Tooling',
    year: '2025',
    role: 'Design Systems Architect & Lead',
    duration: '7 Months',
    summary: 'Architected an enterprise design system powering 6 standalone products across web and native mobile with automated Figma-to-Code token pipelines.',
    heroImage: 'design-system-pulse',
    tags: ['Design Systems', 'Token Architecture', 'Accessibility', 'Figma Variables', 'Component Library'],
    metrics: [
      { label: 'Design-to-Dev Velocity', value: '+3.2x', description: 'Feature handoff cycle reduced from 3 weeks to 4 days' },
      { label: 'Shared Components', value: '94+', description: '100% TypeScript typed & accessible primitives' },
      { label: 'Code Duplication Drop', value: '-71%', description: 'Unified CSS & style variables across 6 repos' },
    ],
    overview: {
      challenge: 'Six distinct product squads were creating ad-hoc buttons, modal dialogs, and inconsistent color variants, resulting in a fragmented customer experience and thousands of lines of duplicate CSS.',
      opportunity: 'Create a foundational design system with multi-tier design tokens (Global, Semantic, Component-level) that automatically syncs from Figma variables to npm packages.',
      myRole: [
        'Component taxonomy, state modeling, and token structure hierarchy',
        'Accessible primitives (Base UI, Radix primitives compatibility)',
        'Comprehensive documentation portal with live editable code playgrounds',
        'Squad onboarding, bi-weekly governance council, and contribution workflows',
      ],
      tools: ['Figma Variables', 'Style Dictionary', 'Storybook', 'Tailwind CSS', 'GitHub Actions'],
    },
    research: {
      targetAudience: '45+ Product Designers, 120+ Software Engineers, and Product Managers across multi-disciplinary squads.',
      keyInsights: [
        {
          title: 'Inconsistent Component Variants',
          desc: 'Found 34 different button implementations and 19 shades of blue across the active web codebases.',
        },
        {
          title: 'Accessibility Blindspots',
          desc: 'Only 28% of modals had correct keyboard focus trap and ARIA screen reader attributes.',
        },
        {
          title: 'Handoff Ambiguity',
          desc: 'Engineers spent 40% of sprint time clarifying spacing specs, hover states, and responsive breakpoints.',
        },
      ],
      problemStatements: [
        'How might we create a single source of truth for design tokens that compiles to CSS, iOS Swift, and Android XML?',
        'How might we ensure every component is fully WCAG 2.2 AA compliant out of the box?',
        'How might we empower external squads to contribute components without breaking governance?',
      ],
    },
    designProcess: [
      {
        phase: '01. Token Architecture',
        title: '3-Layer Semantic Token System',
        description: 'Structured tokens into Primitive (Raw hex/px), Semantic (Role/Context), and Component-scoped definitions.',
        highlights: ['Dark/Light mode themes via CSS custom properties', 'Density modifiers (Comfortable, Compact, Dense)', 'Automated GitHub Action token deploy'],
      },
      {
        phase: '02. Component Craft & Primitives',
        title: 'State Matrices & Accessibility First',
        description: 'Documented all states (Default, Hover, Active, Focus-Visible, Disabled, Loading, Error) for each of the 94 primitives.',
        highlights: ['Full keyboard navigation tests', 'High-contrast focus ring geometry', 'Sub-pixel alignment across viewport scales'],
      },
      {
        phase: '03. Documentation & Governance',
        title: 'Living Documentation Platform',
        description: 'Built an interactive design system documentation site with live code sandbox, props tables, and UX usage guidelines.',
        highlights: ['Do / Don’t visual design rules', 'Direct Storybook integration', 'Component changelog & versioning RFCs'],
      },
    ],
    solution: {
      title: 'The Pulse Engine Ecosystem',
      description: 'A modular, headless-compatible UI framework that unifies visual identity across web applications, native tablet clients, and internal operational tooling.',
      features: [
        {
          title: 'Adaptive Theming Engine',
          description: 'Instant multi-brand theme switching with zero runtime CSS-in-JS overhead.',
          tag: 'Architecture',
        },
        {
          title: 'Smart Form Primitives',
          description: 'Composable inputs, selects, and comboboxes with automated validation states.',
          tag: 'UX Library',
        },
        {
          title: 'Data-Grid Component',
          description: 'High-performance virtualized table supporting pinning, grouping, and batch actions.',
          tag: 'Data Display',
        },
      ],
    },
    impact: {
      headline: 'Unifying 6 products under one cohesive, bulletproof design language.',
      stats: [
        { label: 'Engineering Adoption', value: '100%', description: 'All active squads migrated in 6 months' },
        { label: 'Accessibility Rating', value: '100%', description: 'Passed independent WCAG 2.2 audit' },
        { label: 'Design Debt Cleaned', value: '3,800+ lines', description: 'Legacy ad-hoc CSS eradicated' },
      ],
      quote: {
        text: 'Pulse completely changed our engineering velocity. We ship features in days that used to take three sprints to align.',
        author: 'Elena Rostova',
        role: 'Director of Frontend Engineering, Hyperion',
      },
    },
  },
  {
    id: 'cognito-ai',
    title: 'Cognito AI — Visual Workflow Builder for Autonomous AI Agents',
    client: 'Cognito Systems Inc.',
    category: 'saas-ai',
    categoryLabel: 'AI & Canvas Tooling',
    year: '2025',
    role: 'Principal UX/UI Designer',
    duration: '6 Months',
    summary: 'Designed an infinite-canvas agent builder that lets developers and non-technical operators visually orchestrate multi-model AI agents, loops, and tools.',
    heroImage: 'ai-cognito',
    tags: ['AI Agent UX', 'Canvas Interface', 'Complex SaaS', 'Node Graph'],
    metrics: [
      { label: 'Time to First Agent', value: '8 Mins', description: 'Down from 45 minutes of manual code config' },
      { label: 'Active Retention (W4)', value: '64%', description: 'Top quartile for developer infrastructure tools' },
      { label: 'Workflow Runs', value: '2.4M+', description: 'Processed in first 6 months' },
    ],
    overview: {
      challenge: 'Building multi-agent workflows required writing complex Python orchestration scripts with zero visibility into execution loops, tool call errors, or token consumption.',
      opportunity: 'Design an intuitive infinite node-canvas interface where users can drag, connect, debug, and trace AI agents with live visual pulse animations.',
      myRole: [
        'Canvas interaction model (pan, zoom, multi-select, port snapping)',
        'Node design language (Prompts, RAG Retreival, API Tools, Logic Branches, Human-in-the-Loop)',
        'Live debug execution inspector with token breakdown and latency charts',
        'Usability testing with 18 AI developers and automation engineers',
      ],
      tools: ['Figma', 'React Flow', 'Mobbin', 'Protopie', 'Tailwind CSS'],
    },
    research: {
      targetAudience: 'AI Engineers, Solutions Architects, and Product Operations teams building automated AI pipelines.',
      keyInsights: [
        {
          title: 'Debugging Blindspots',
          desc: 'Developers could not see which specific node failed during a multi-step agent execution chain.',
        },
        {
          title: 'Port Connection Cognitive Load',
          desc: 'Traditional node tools have cluttered connector wires that turn into a visual spaghetti after 10 nodes.',
        },
        {
          title: 'Prompt Iteration Slowness',
          desc: 'Testing a single prompt tweak required re-running the entire 10-node pipeline from scratch.',
        },
      ],
      problemStatements: [
        'How might we provide step-by-step single-node execution mocking directly on the canvas?',
        'How might we design smart orthogonal auto-routing wires with clear directional data flow?',
        'How might we surface LLM token cost and latency per node in real time?',
      ],
    },
    designProcess: [
      {
        phase: '01. Canvas Architecture',
        title: 'Spatial Information Hierarchy',
        description: 'Defined spatial zoom levels (LOD 1: Full details, LOD 2: Summary cards, LOD 3: Minimap thumbnail).',
        highlights: ['Keyboard-first canvas navigation (Space+Drag, Cmd+K node menu)', 'Magnetic connector port snapping', 'Ghost node suggestions based on previous output type'],
      },
      {
        phase: '02. Debugger Experience',
        title: 'Live Time-Travel Step Debugger',
        description: 'Created a timeline drawer allowing users to scrub back and forth through an agent execution run to inspect raw JSON payloads.',
        highlights: ['Color-coded node status glows (Emerald = Success, Amber = Running, Rose = Fault)', '1-click prompt replay test', 'Live streaming text preview in output ports'],
      },
      {
        phase: '03. Token & Cost Economics',
        title: 'Real-Time Cost Inspector',
        description: 'Designed compact telemetry badges displaying input/output token counts, estimated USD spend, and p95 latency.',
        highlights: ['Model comparison dropdown with live pricing estimate', 'Token budget guardrail threshold alerts', 'Dark-optimized high-density HUD UI'],
      },
    ],
    solution: {
      title: 'The Visual Agent Canvas',
      description: 'A responsive, high-performance canvas environment that turns abstract LLM orchestration into a visual, debuggable diagram.',
      features: [
        {
          title: 'Adaptive Smart Ports',
          description: 'Connection ports that validate data schema compatibility before wire release.',
          tag: 'Canvas UX',
        },
        {
          title: 'Human-in-the-Loop Node',
          description: 'A pause-and-review node that pings Slack or displays an in-canvas approval banner.',
          tag: 'Governance',
        },
        {
          title: 'Live Execution Ray',
          description: 'Animated pulse traveling along active wires to illustrate async agent execution.',
          tag: 'Micro-Interaction',
        },
      ],
    },
    impact: {
      headline: 'Empowering 50,000+ engineers to build autonomous workflows without code fatigue.',
      stats: [
        { label: 'User Growth', value: '180%', description: 'Month-over-month platform growth' },
        { label: 'Debugging Time', value: '-75%', description: 'Faster resolution of prompt & API faults' },
        { label: 'Enterprise Contracts', value: '14 Signed', description: 'Including Fortune 500 tech firms' },
      ],
      quote: {
        text: 'The canvas Anas designed is so natural that our non-technical product managers build complex agents on their first day.',
        author: 'Arjun Mehta',
        role: 'CEO & Co-Founder, Cognito AI',
      },
    },
  },
  {
    id: 'aura-health',
    title: 'Aura — Biometric Sleep & Circadian Health Mobile Companion',
    client: 'Aura Technologies',
    category: 'mobile',
    categoryLabel: 'Mobile & Health Tech',
    year: '2024 - 2025',
    role: 'Lead Mobile UX Designer',
    duration: '8 Months',
    summary: 'Designed an iOS & Android health companion app that translates complex biometric sensor data into actionable daily recovery scores and sleep coaching.',
    heroImage: 'mobile-aura',
    tags: ['iOS HIG', 'Health UX', 'Data Visualization', 'Micro-Interactions', 'Mobile App'],
    metrics: [
      { label: 'Daily Active Users (DAU)', value: '380k+', description: 'Grew from 45k in first year' },
      { label: '30-Day Retention', value: '58%', description: 'Vs 24% industry average for fitness apps' },
      { label: 'App Store Rating', value: '4.9 ★', description: 'Across 42,000+ user reviews' },
    ],
    overview: {
      challenge: 'Wearable health apps bombard users with raw graphs (HRV, SpO2, REM cycles) that cause anxiety and confusion instead of helping them sleep better.',
      opportunity: 'Create a calming, glanceable health interface centered around a daily "Recovery Score" and personalized circadian rhythm timeline.',
      myRole: [
        'End-to-end iOS and Android design following Apple Human Interface Guidelines and Material 3',
        'Interactive haptic feedback design and ambient micro-animations',
        'Accessibility optimization for low-light evening bedtime usage',
        'Clinical advisory board workshops and sleep science synthesis',
      ],
      tools: ['Figma', 'Protopie', 'Mobbin', 'Principle', 'After Effects'],
    },
    research: {
      targetAudience: 'Health-conscious professionals, athletes, and individuals suffering from irregular sleep cycles.',
      keyInsights: [
        {
          title: 'Nighttime Eye Strain & Anxiety',
          desc: 'High-contrast white backgrounds and aggressive red alert icons elevated heart rate when users checked the app in bed.',
        },
        {
          title: 'Graph Overload',
          desc: '82% of users did not know if an HRV of 42ms was good or bad without contextual baseline comparison.',
        },
        {
          title: 'Actionable Advice Deficit',
          desc: 'Users wanted to know: "What should I do today?" rather than just viewing raw sleep stage charts.',
        },
      ],
      problemStatements: [
        'How might we design a soothing, pitch-dark interface with zero blue-light emission for nighttime checks?',
        'How might we convert complex biometric stats into clear contextual baselines?',
        'How might we deliver 1 single high-impact wellness recommendation each morning?',
      ],
    },
    designProcess: [
      {
        phase: '01. Ambient Visual System',
        title: 'Circadian Dark Palette',
        description: 'Designed a dynamic UI that subtly transitions from energizing dawn amber in the morning to deep obsidian midnight at bedtime.',
        highlights: ['OLED true-black power saving mode', 'Zero blue-tinted light elements', 'Warm monochromatic data scales'],
      },
      {
        phase: '02. Data Storytelling',
        title: 'Glanceable Recovery Wheel',
        description: 'Synthesized 7 biometric metrics into a singular 0-100 score surrounded by radial hypnogram sleep stages.',
        highlights: ['Interactive scrubber to scrub through night heart-rate spikes', 'Personal baseline band indicators', 'Haptic feedback on optimal bedtime milestones'],
      },
      {
        phase: '03. Daily Habit Loops',
        title: 'Contextual Action Cards',
        description: 'Introduced 1-tap morning check-ins and smart caffeine cut-off notifications based on actual sleep quality.',
        highlights: ['Interactive iOS Lock Screen & Home Screen widgets', 'Apple HealthKit two-way data sync', 'Custom micro-animations for breathwork coach'],
      },
    ],
    solution: {
      title: 'The Circadian Companion',
      description: 'A mobile experience that feels more like a calm sanctuary than a clinical medical monitor.',
      features: [
        {
          title: 'The Recovery Wheel',
          description: 'A tactile radial dial summarizing sleep debt, strain readiness, and autonomic nervous balance.',
          tag: 'Core UI',
        },
        {
          title: 'Wind-Down Mode',
          description: 'Screen dimming with guided ambient 4-7-8 breathing soundscape visualization.',
          tag: 'Bedtime UX',
        },
        {
          title: 'Smart Habit Correlation',
          description: 'Automatic detection of how late dinners or workouts impacted REM sleep recovery.',
          tag: 'Insights',
        },
      ],
    },
    impact: {
      headline: 'Helping over 380,000 people reclaim their rest and daily vitality.',
      stats: [
        { label: 'Average Sleep Boost', value: '+34 Mins', description: 'Reported by users after 3 weeks of coaching' },
        { label: 'User Satisfaction', value: '96%', description: 'Praising calming visual design and widget ease' },
        { label: 'Apple Editorial Feature', value: 'App of Day', description: 'Featured in 38 countries' },
      ],
      quote: {
        text: 'Aura is the rare health app that actually makes you feel calmer when you open it. Anas’s design craft is on another level.',
        author: 'Dr. Sarah Lin',
        role: 'Chief Medical Officer & Co-Founder, Aura Health',
      },
    },
  },
];

export const EXPERIENCE_LIST: Experience[] = [
  {
    period: '2023 — Present',
    role: 'Lead Product Designer & Design Systems Lead',
    company: 'Apex Technologies / Freelance Advisory',
    location: 'Dubai / Remote',
    type: 'Full-time & Advisory',
    description: 'Leading UX architecture for fintech platforms, autonomous agent tooling, and multi-brand design systems for hyper-growth tech companies.',
    achievements: [
      'Architected cross-border payout system processing $14M+ monthly volume with 38% drop-off reduction',
      'Established multi-brand token system adopted across 6 enterprise applications and 120+ engineers',
      'Mentored 8 mid-level and junior designers in system thinking, interaction physics, and UX research',
    ],
    skills: ['Fintech UX', 'Design Systems', 'Token Architecture', 'Product Strategy', 'Team Leadership'],
  },
  {
    period: '2021 — 2023',
    role: 'Senior Product Designer',
    company: 'Hyperion Cloud Systems',
    location: 'Berlin / Remote',
    type: 'Full-time',
    description: 'Led end-to-end design for developer infrastructure dashboards, cloud telemetry tools, and user onboarding journeys.',
    achievements: [
      'Redesigned the cluster management console, increasing weekly active engagement by 52%',
      'Created the foundational component library in Figma & Storybook with zero WCAG AA violations',
      'Partnered closely with VP of Product to define 18-month product roadmap and UX KPIs',
    ],
    skills: ['Developer Tooling', 'Data Visualization', 'User Research', 'Figma', 'Usability Testing'],
  },
  {
    period: '2019 — 2021',
    role: 'Product & Interaction Designer',
    company: 'Vanguard Digital Labs',
    location: 'Cairo / Dubai',
    type: 'Full-time',
    description: 'Designed mobile consumer apps and responsive web platforms for high-growth e-commerce and logistics startups.',
    achievements: [
      'Shipped 4 mobile apps on iOS App Store & Google Play with average 4.8+ star ratings',
      'Engineered interactive micro-animations and prototyping specs that reduced dev QA bugs by 40%',
      'Conducted 60+ moderated usability tests and synthesized actionable design recommendations',
    ],
    skills: ['Mobile App Design', 'iOS HIG', 'Rapid Prototyping', 'Micro-interactions', 'User Journey Mapping'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marcus Vance',
    role: 'VP of Product',
    company: 'Apex Financial',
    avatarText: 'MV',
    content: 'Anas is the rare product designer who operates with the rigor of a systems architect and the taste of a master visual designer. He didn’t just make our fintech app beautiful — he completely unblocked our $14M monthly volume bottleneck.',
    project: 'Apex Pay Redesign',
  },
  {
    id: '2',
    name: 'Elena Rostova',
    role: 'Director of Frontend Engineering',
    company: 'Hyperion Cloud',
    avatarText: 'ER',
    content: 'Working with Anas is a developer’s dream. His design system tokens, state specifications, and component hierarchy were so clean and thorough that our implementation velocity tripled. He truly understands code constraints.',
    project: 'Pulse Design System',
  },
  {
    id: '3',
    name: 'Arjun Mehta',
    role: 'Co-Founder & CEO',
    company: 'Cognito AI',
    avatarText: 'AM',
    content: 'Designing an infinite canvas for AI agents is one of the hardest UX problems in software right now. Anas mastered the complexity and delivered an intuitive, delightful interface that our enterprise customers rave about every day.',
    project: 'Cognito AI Canvas',
  },
];

export const DESIGN_SKILLS = [
  { category: 'Product & UX Strategy', items: ['User Research & Synthesis', 'Information Architecture', 'Jobs-to-be-Done (JTBD)', 'Journey Mapping', 'Design Sprints', 'Usability Testing'] },
  { category: 'Visual & Interaction Craft', items: ['High-Fidelity UI Design', 'Micro-Interactions & Physics', 'Responsive Layouts', 'Design Systems (Tokens)', 'Typography & Data Viz', 'Accessibility (WCAG 2.2)'] },
  { category: 'Tools & Technologies', items: ['Figma (Variables & Dev Mode)', 'Protopie & Principle', 'Mobbin UX Intelligence', 'Tailwind CSS & React/Next.js', 'Storybook', 'Git & Version Control'] },
];
