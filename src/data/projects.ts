export type ProjectCategory = 'Open Source' | 'Professional';

export interface Project {
  name: string;
  url?: string;
  /** documentation site, if the project has one */
  docs?: string;
  description: string;
  role: string;
  category: ProjectCategory;
  featured?: boolean;
  /** small badge for projects without a public URL */
  note?: string;
}

export const projects: Project[] = [
  // Open source
  {
    name: 'loop',
    url: 'https://github.com/shafi-/loop',
    docs: 'https://shafi-.github.io/loop/',
    description:
      'A harness engine that provides discussion rooms with LLM-powered personas and a deterministic pipeline system to run work. Accessible from both the CLI and a UI.',
    role: 'Creator',
    category: 'Open Source',
    featured: true,
  },
  {
    name: 'portfolio',
    url: 'https://github.com/shafi-/portfolio',
    docs: 'https://shafi-.github.io/portfolio/',
    description:
      'Persistent context memory for AI agents via MCP — lets an AI agent understand and discuss multiple projects across directories: architecture, feature lists and other insights. A local “brain” for a developer’s project ecosystem.',
    role: 'Creator',
    category: 'Open Source',
    featured: true,
  },
  {
    name: 'Nest Starter',
    url: 'https://github.com/shafi-/nest-starter',
    description:
      'A boilerplate to start implementing your idea with an easy-to-use NestJS project — authentication and Swagger integrated out of the box.',
    role: 'Creator',
    category: 'Open Source',
  },
  {
    name: 'InfoMap',
    url: 'https://infotree.netlify.app',
    description: 'A way to organize and present information in a beautiful, hierarchical tree structure.',
    role: 'Creator',
    category: 'Open Source',
  },
  // Professional
  {
    name: 'TestReach',
    url: 'https://testreach.com',
    description:
      'A global SaaS assessment platform serving organizations that conduct online examinations (CIPS, ACCA, BC and others). End-to-end assessment: authoring, candidate management, marking, result publication and remote invigilation.',
    role: 'Senior Software Engineer',
    category: 'Professional',
    featured: true,
  },
  {
    name: 'Doctor Dekhao',
    url: 'https://doctordekhao.com',
    description:
      'A telemedicine platform enabling patients to find and connect with doctors through video calls. White-label solution bridging the gap between patients and healthcare providers.',
    role: 'Development Team Lead',
    category: 'Professional',
  },
  {
    name: 'Hida.travel',
    url: 'https://hida.travel',
    description:
      'Multilingual tourism information platform for the Hida prefecture of Japan, built for the Hida Prefecture Authority to promote regional tourism.',
    role: 'Lead Developer',
    category: 'Professional',
  },
  {
    name: 'Ota.com',
    url: 'https://ota.com',
    description:
      'Multilingual tourism information portal for the Ota ward of Tokyo, Japan, built for the Ota authorities to showcase local attractions to international visitors.',
    role: 'Lead Developer',
    category: 'Professional',
  },
  {
    name: 'DuPlate',
    url: 'https://duplate.com',
    description:
      'End-to-end restaurant management SaaS — from ingredient purchase planning and inventory management to home delivery.',
    role: 'Lead Developer · Architect · Cloud Maintainer',
    category: 'Professional',
  },
  {
    name: 'DuWholesale',
    url: 'https://duwholesale.com',
    description:
      'End-to-end wholesale management solution covering procurement planning, inventory management and delivery logistics.',
    role: 'Lead Developer · Architect · Cloud Maintainer',
    category: 'Professional',
  },
];

export const projectCategories: ProjectCategory[] = ['Open Source', 'Professional'];
