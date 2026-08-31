export type ProjectCategory = 'all' | 'fintech' | 'saas-ai' | 'design-systems' | 'mobile';

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  role: string;
  duration: string;
  summary: string;
  heroImage: string;
  tags: string[];
  metrics: Metric[];
  overview: {
    challenge: string;
    opportunity: string;
    myRole: string[];
    tools: string[];
  };
  research: {
    targetAudience: string;
    keyInsights: { title: string; desc: string }[];
    problemStatements: string[];
  };
  designProcess: {
    phase: string;
    title: string;
    description: string;
    highlights: string[];
  }[];
  solution: {
    title: string;
    description: string;
    features: { title: string; description: string; tag: string }[];
  };
  impact: {
    headline: string;
    stats: Metric[];
    quote?: {
      text: string;
      author: string;
      role: string;
    };
  };
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  content: string;
  project: string;
}

export interface DesignToken {
  name: string;
  value: string;
  type: 'color' | 'typography' | 'spacing' | 'radius';
}
