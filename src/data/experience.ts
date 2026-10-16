export interface Job {
  role: string;
  company: string;
  url?: string;
  period: string;
  summary: string;
  highlights?: string[];
  tech?: string[];
  current?: boolean;
}

export const experience: Job[] = [
  {
    role: 'Senior Software Engineer',
    company: 'TestReach Ltd',
    url: 'https://testreach.com',
    period: 'Jan 2022 — Present',
    current: true,
    summary:
      'TestReach, based in Dublin, is a global SaaS assessment platform used by organizations that conduct online examinations (CIPS, ACCA, BC and others). My work spans backend engineering, platform architecture, distributed systems, frontend engineering, reporting, data infrastructure, reliability, developer experience and production operations — architecting, leading implementation and owning maintenance of most of the systems below.',
    highlights: [
      'Designed the architecture for and own the next-generation reporting platform: customers self-serve their reports, and template maintenance dropped from half a day of multi-team collaboration to a ~2-minute pipeline — fast and reliable enough that the team keeps adding templates (60+ and counting). Reports over 20 GB stream straight to S3, peak APIs see millions of calls/day, some reports generate up to ~2x faster and infrastructure allocation is roughly half of what it was.',
      'Built the reporting module as an AngularJS micro frontend, integrated into multiple micro frontends across the platform.',
      'Led the design of the DataLake ingestion platform (~2–2.5M ingestion events/day) and designed a type-safe ingestion library that turns ingestion into a minimal-effort integration for backend engineers.',
      'Generalized reliability work — queue-based processing, retries, exponential backoff, webhook platform redesign, queue fairness — reduced event-processing failures by ~60%.',
      'Core implementer and architect on the result calculation system, helping the team lead coordinate the implementation.',
      'Led small engineering groups (3–4 engineers) and cross-team initiatives (~10 engineers), moving between architect, technical lead, core implementer and system owner.',
    ],
    tech: ['Event-driven architecture on AWS', 'Node.js (TypeScript)', 'PostgreSQL', 'MongoDB', 'Redis', 'Jest', 'Micro-frontend architecture (AngularJS)'],
  },
  {
    role: 'CEO / Product & Engineering Owner',
    company: 'MyDokan',
    period: 'Independent · Ongoing',
    summary:
      'My own product, distributed privately. I operate as CEO / Chief of Everything, owning the complete product lifecycle — talking directly with users, planning and prioritizing features, designing and implementing frontend and backend, deployment, maintenance, customer support, marketing and day-to-day operations. Built on Supabase, with Flutter/Dart on the Android app.',
    highlights: [
      'Own the complete loop: user conversations, problem discovery, feature planning and prioritization, implementation, deployment, support and marketing.',
      'Ship and operate the product solo — frontend, backend, infrastructure and operations.',
    ],
    tech: ['Supabase', 'Flutter', 'Dart', 'Android'],
  },
  {
    role: 'Engineering Manager / Senior Software Engineer',
    company: 'Durbin Labs Ltd',
    url: 'https://durbinlabs.com',
    period: 'Aug 2021 — Dec 2021',
    summary:
      'Joined during a difficult period of customer dissatisfaction and multiple missed project deadlines. Took ownership of delayed customer projects and helped deliver them, restored customer confidence, and rebuilt a demoralized team.',
    highlights: [
      'Recovered multiple delayed customer projects and restored customer trust.',
      'Rebuilt team confidence: clarified priorities, removed technical blockers, mentored engineers, established practical delivery processes.',
      'Stayed hands-on throughout: architecture, backend implementation, code reviews, AWS infrastructure and production troubleshooting.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Japan Travel K.K.',
    url: 'https://japantravel.co.jp',
    period: 'Jul 2020 — Jul 2021',
    summary:
      'Full-stack engineer on products serving international travelers: production frontend experiences built from design mockups with Laravel Blade and VueJS, plus backend Laravel development, caching and application architecture.',
    highlights: [
      'Built production frontend experiences from design mockups — Laravel Blade for server-rendered interfaces, VueJS for interactive areas — alongside backend Laravel development.',
      'Met the COO’s challenge of a perfect 100/100 in all four Lighthouse categories by building custom dependency tree-shaking tooling.',
    ],
    tech: ['Laravel (Blade)', 'Vue.js', 'Performance tooling', 'Caching'],
  },
  {
    role: 'Software Engineer',
    company: 'Durbin Labs Ltd',
    url: 'https://durbinlabs.com',
    period: 'Nov 2017 — Jun 2020',
    summary:
      'Built multiple commercial SaaS products across healthcare/telemedicine, education/e-learning and restaurant applications.',
    highlights: [
      'Built commercial SaaS products across healthcare/telemedicine, education/e-learning and restaurant applications.',
      'Developed the restaurant application frontend and provided frontend technical guidance to other project teams.',
      'Grew from implementation into backend architecture, AWS infrastructure, database design, deployment and performance optimization.',
    ],
    tech: ['Node.js', 'MeteorJS', 'React', 'Next.js', 'MongoDB', 'AWS', 'WebRTC'],
  },
  {
    role: 'Junior Software Engineer',
    company: 'Durbin Labs Ltd',
    url: 'https://durbinlabs.com',
    period: 'Mar 2017 — Jul 2017 · Part-time',
    summary: 'Started the professional journey at Durbin Labs while finishing university, working on edutech products.',
  },
  {
    role: 'Android Developer Intern',
    company: 'Optimus Soft',
    period: '2 months · Part-time',
    summary: 'Dhaka-based startup working in different sectors. Developed an Android app for the company.',
    tech: ['Android', 'Java'],
  },
  {
    role: 'Backend Developer',
    company: 'rOngin',
    url: 'https://rongin.com',
    period: 'Voluntary',
    summary:
      'rOngin (Bengali for “colorful”) is a volunteer organization working for the betterment of street people, especially street children. Developed the backend of its book-sharing web application where anyone can share and borrow books.',
    tech: ['PHP', 'MySQL'],
  },
];

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export const education: Education[] = [
  {
    school: 'Bangladesh University of Engineering and Technology (BUET)',
    degree: 'B.Sc. in Computer Science & Engineering',
    period: '2013 — 2017',
  },
];
