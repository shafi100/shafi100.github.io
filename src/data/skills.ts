export interface TieredSkill {
  name: string;
  /** where the skill was used — more credible than a bare list */
  where?: string;
  /** honest depth qualifier */
  note?: string;
}

export interface SkillTier {
  title: string;
  blurb: string;
  skills: TieredSkill[];
}

/**
 * Skills grouped by depth, not percentage bars — this is also how I answer
 * "what are you strong at?" honestly in interviews.
 */
export const skillTiers: SkillTier[] = [
  {
    title: 'Daily, deep',
    blurb: 'The stack I reach for by default and know at the debugging level.',
    skills: [
      { name: 'TypeScript' },
      { name: 'Node.js' },
      { name: 'NestJS' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Redis' },
      { name: 'Jest' },
      { name: 'AWS', note: 'Lambda · ECS · SQS · SNS · S3' },
      { name: 'Event-driven architecture' },
      { name: 'Microservices' },
      { name: 'Distributed systems' },
      { name: 'System design' },
    ],
  },
  {
    title: 'Strong, regular use',
    blurb: 'Production experience I keep returning to.',
    skills: [
      { name: 'React', where: 'Durbin Labs · own projects' },
      { name: 'Next.js', where: 'Durbin Labs · production projects' },
      { name: 'AngularJS micro-frontends', where: 'TestReach' },
      { name: 'Vue.js', where: 'Japan Travel' },
      { name: 'Laravel · PHP', where: 'Japan Travel' },
      { name: 'Supabase', where: 'MyDokan' },
      { name: 'Flutter · Dart · Android', where: 'MyDokan' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'Serverless Framework' },
      { name: 'Elasticsearch' },
      { name: 'Express' },
      { name: 'MeteorJS', where: 'Durbin Labs' },
      { name: 'WebRTC', where: 'Durbin Labs' },
    ],
  },
  {
    title: 'Working exposure',
    blurb: 'Real work, bounded depth — stated plainly rather than padded.',
    skills: [
      { name: 'Python', note: 'ETL level' },
      { name: 'Go', note: 'open-source tools, built with AI agents' },
      { name: 'GCP' },
      { name: 'Azure' },
      { name: 'C++' },
      { name: 'Java', where: 'Android' },
      { name: 'MySQL' },
      { name: 'Nuxt' },
    ],
  },
  {
    title: 'Growing',
    blurb: 'Where I am deliberately investing next.',
    skills: [
      { name: 'LLM agents & agentic workflows' },
      { name: 'AI developer tooling' },
      { name: 'Model Context Protocol (MCP)' },
    ],
  },
];

/** Tools and practices not tied to a tier. */
export const alsoAcross: string[] = ['Git & CI/CD', 'REST API design', 'Requirement & solution analysis', 'Laravel Blade', 'HTML/CSS'];

/** High-demand chips for the home page — the daily-deep tier, roughly. */
export const coreSkills: string[] = [
  'TypeScript',
  'Node.js',
  'NestJS',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Jest',
  'AWS (Lambda · ECS · SQS · SNS)',
  'Serverless',
  'Event-Driven Architecture',
  'Microservices',
  'Distributed Systems',
  'System Design',
  'LLMs & AI Agents',
];
