export interface HighlightMetric {
  value: string;
  label: string;
}

export interface Highlight {
  slug: string;
  title: string;
  /** one-liner used on cards */
  tagline: string;
  /** the fuller story, used on the About page */
  context: string;
  outcome: string;
  metrics: HighlightMetric[];
}

export const highlights: Highlight[] = [
  {
    slug: 'reporting-platform',
    title: 'Next-Generation Reporting Platform',
    tagline: 'Replaced a third-party BI tool with a self-service platform customers use directly.',
    context:
      'Designed the architecture for — and helped implement — the reporting platform that replaced a third-party BI tool, designing it around customer self-service and owning it through architecture, implementation, production operation and maintenance.',
    outcome:
      'The operational model changed from “customer requests report → engineer generates report → customer waits” to customers generating reports independently, according to their business agreements. Template maintenance dropped from half a day of multi-team collaboration to a ~2-minute automated pipeline — one self-paced PR merge, rollback is a one-commit revert — fast and reliable enough that the team has kept creating templates ever since (60+ today). Reports over 20 GB stream directly to S3, so there is no size ceiling; some reports generate up to ~2x faster than the previous third-party workflow; infrastructure allocation is roughly half of what it was, without the resource spikes.',
    metrics: [
      { value: 'Days → self-serve', label: 'report delivery' },
      { value: '½ day → ~2 min', label: 'template maintenance, via automation' },
      { value: '20+ GB', label: 'reports streamed straight to S3' },
      { value: '~2x', label: 'faster generation for some reports' },
    ],
  },
  {
    slug: 'datalake-ingestion',
    title: 'DataLake & the Type-Safe Ingestion Library',
    tagline: 'A data platform plus a reusable library that turned data ingestion into a simple integration for every team.',
    context:
      'Led the design of the DataLake data-ingestion platform — its architecture and the ingestion approach used by backend services — and designed a companion type-safe ingestion library that lets microservices ingest data with minimal implementation effort, stronger type safety and consistent behavior.',
    outcome:
      'The platform absorbs the sharp demand spikes that examination schedules drive, processing ~2–2.5 million ingestion events per day. The library turned data ingestion from a recurring engineering task into a straightforward integration — a small engineering investment that improves productivity and consistency across many engineers. It remains one of the engineering projects I am most proud of because of its effectiveness and leverage.',
    metrics: [
      { value: '2–2.5M', label: 'ingestion events per day' },
      { value: '1 lib', label: 'used across microservices' },
    ],
  },
  {
    slug: 'team-recovery',
    title: 'Team & Project Recovery',
    tagline: 'Rebuilt a demoralized engineering team and delivered the projects that had already missed their deadlines.',
    context:
      'As an Engineering Manager, joined a situation where several customer projects had missed deadlines, customer relationships were at risk, and the team had lost confidence in its own ability to deliver.',
    outcome:
      'Recovered multiple delayed projects, restored customer trust, and established practical delivery priorities — while providing hands-on technical leadership, mentoring engineers, improving engineering practices, and continuing to contribute directly to architecture and implementation. The team subsequently delivered beyond its own initial perception of capability.',
    metrics: [{ value: '3–4 → ~10', label: 'engineers led, from teams to cross-team initiatives' }],
  },
  {
    slug: 'lighthouse-100',
    title: '100/100 Across All Four Lighthouse Categories',
    tagline: "Met the COO's performance challenge at Japan Travel by building custom dependency tree-shaking tooling.",
    context:
      'Working full-stack at Japan Travel — building frontend experiences from design mockups with Laravel Blade and VueJS, plus backend Laravel development — the COO challenged the team to achieve 100/100 in every Lighthouse category.',
    outcome:
      'Built custom tooling to tree-shake dependencies and cut unnecessary application payload, and achieved a perfect score: 100/100 Performance, Accessibility, Best Practices and SEO. Performance engineering via developer tooling rather than manual optimization.',
    metrics: [
      { value: '4×100', label: 'Performance · Accessibility · Best Practices · SEO' },
    ],
  },
  {
    slug: 'mydokan',
    title: 'MyDokan — Chief of Everything',
    tagline: 'My own product: the entire loop from user conversations through code, deployment, support and marketing.',
    context:
      'MyDokan is a product where I operate as CEO / Chief of Everything, owning the complete product lifecycle — talking directly with users, planning and prioritizing features, designing and implementing solutions, and running the day-to-day operation. Built on Supabase as its backend.',
    outcome:
      'Direct exposure to the complete product lifecycle without separating engineering from product, customer, marketing and operational responsibilities — moving between customer conversations, product decisions, implementation and business operations.',
    metrics: [{ value: '1 person', label: 'product · engineering · business' }],
  },
];
