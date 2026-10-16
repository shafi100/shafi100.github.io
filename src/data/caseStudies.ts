export type DiagramKind = 'reporting' | 'ingestion' | 'reliability' | 'leadership';

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  companyUrl?: string;
  period: string;
  tags: string[];
  context: string;
  problem: string;
  did: string[];
  result: string;
  metrics: { value: string; label: string }[];
  /** honest reflection, per the case-study structure */
  differently: string;
  diagram: DiagramKind;
  /** diagram + section intro rendered above the fold of the page */
  diagramIntro: string;
}

/**
 * Case studies follow the structure: Context → Problem → What I did →
 * Result → What I would do differently. Facts come from the master CV and
 * personal-website-plan.md; keep them coarse and confidential-safe (no
 * internal codenames — "DataLake", not the internal version name).
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'reporting-platform',
    title: 'The reporting platform that removed an engineering bottleneck',
    subtitle:
      'Replacing a third-party BI tool with customer self-service — and cutting template maintenance from half a day to about two minutes.',
    company: 'TestReach',
    companyUrl: 'https://testreach.com',
    period: '2022 — present',
    tags: ['Platform engineering', 'Reporting', 'AWS', 'Self-service'],
    context:
      'TestReach is a global SaaS assessment platform serving organizations that run online examinations. Reporting ran on a third-party BI tool, and reports were an engineering task: customers requested them, an engineer generated them, and the customer waited. As the customer base grew, that queue grew with it — and report templates could only be changed through a slow, multi-team collaboration with risky rollbacks.',
    problem:
      'Three compounding issues: customers waited days for reports an engineer had to generate; template maintenance cost roughly half a day of cross-team effort per change; and demand swung wildly with examination schedules, so capacity had to be provisioned for peaks that mostly never came.',
    did: [
      'Designed the architecture for the replacement platform around one principle: the customer, not engineering, generates the report.',
      'Built report generation to stream output directly to S3, so report size is not bounded by memory or disk on the generating service.',
      'Turned template maintenance into an automated pipeline — a self-paced pull request merges, deploys in about two minutes, and rolls back as a single commit revert.',
      'Shipped the report module as an AngularJS micro frontend so it integrates into multiple parts of the platform.',
      'Used monitoring and time-window analysis of real usage to progressively reduce infrastructure allocation instead of guessing at peak capacity.',
    ],
    result:
      'Customers generate their own reports according to their business agreements — no engineering queue, no days of waiting. Because template changes became fast and low-risk, the team has kept creating and expanding them — 60+ templates today, maintained through the ~2-minute pipeline instead of half-day cross-team efforts. Reports over 20 GB stream straight to S3 with no size ceiling, some generate up to ~2x faster than the previous workflow, and infrastructure allocation is roughly half of what it was, without the resource spikes the old system showed. The third-party BI tool remains only as a temporary fallback and is planned for discontinuation.',
    metrics: [
      { value: 'Days → self-serve', label: 'report delivery — no engineering queue' },
      { value: '½ day → ~2 min', label: 'template maintenance' },
      { value: '20+ GB', label: 'reports streamed to S3, no size ceiling' },
      { value: '~50%', label: 'less infrastructure allocation' },
    ],
    differently:
      'I would ship the automated template pipeline from day one. The first templates were maintained the old way, and only the pain of half-day, multi-team changes made the case for automation obvious in hindsight. I would also have instrumented usage windows earlier — the infrastructure savings came from data we were already collecting but only later started acting on.',
    diagram: 'reporting',
    diagramIntro:
      'What actually changed is the operational model, on both the customer side and the engineering side:',
  },
  {
    slug: 'ingestion-platform',
    title: 'DataLake: a type-safe ingestion library as leverage',
    subtitle:
      'One platform and one library that turned data ingestion from a recurring engineering project into a straightforward integration.',
    company: 'TestReach',
    companyUrl: 'https://testreach.com',
    period: '2022 — present',
    tags: ['Data engineering', 'Type safety', 'Developer experience', 'Distributed systems'],
    context:
      'The platform runs many backend microservices, and every one of them needs to emit events into the central data platform. Demand is spiky by nature — examination schedules drive sharp, predictable-but-large surges — and the data feeds reporting and analytics downstream.',
    problem:
      'Each service that integrated with the lake implemented its own ingestion path. The effort repeated, and the behavior diverged: different retry logic, different error handling, different type assumptions. At millions of events per day, small inconsistencies become real operational noise.',
    did: [
      'Led the design of the DataLake ingestion platform and its service-integration model.',
      'Designed a companion type-safe ingestion library for backend engineers, with minimal integration effort as the explicit design goal.',
      'Made consistent behavior — retries, batching, error semantics — the library’s job, not each service’s.',
      'Kept the producer contract typed end to end, so breaking changes surface at compile time rather than in the queue at 2 a.m.',
    ],
    result:
      'The platform processes roughly 2–2.5 million ingestion events per day and absorbs the examination-schedule spikes without manual intervention. Ingestion went from a recurring engineering task to a relatively straightforward integration, and behavior is consistent across services. It is a strong example of developer leverage: a small engineering investment that improves productivity across many engineers — and one of the projects I am most proud of.',
    metrics: [
      { value: '~2–2.5M', label: 'ingestion events per day' },
      { value: '1 library', label: 'instead of N bespoke ingestion paths' },
      { value: 'Compile time', label: 'where producer contract breaks surface' },
    ],
    differently:
      'The library should have shipped together with the platform. The first integrating services predate it, and they paid exactly the inconsistency cost the library later removed — migrating them was work the library’s existence could have avoided. I would also invest in producer-contract conformance tests earlier.',
    diagram: 'ingestion',
    diagramIntro:
      'The shape of the leverage — many services, one typed path into the lake:',
  },
  {
    slug: 'reliability',
    title: 'Reliability: designing for failure at millions of events a day',
    subtitle:
      'Retries, exponential backoff, queue fairness and a webhook platform redesign — and a ~60% drop in processing failures.',
    company: 'TestReach',
    companyUrl: 'https://testreach.com',
    period: '2022 — present',
    tags: ['Reliability', 'Event-driven architecture', 'SQS', 'Webhooks'],
    context:
      'The platform is event-driven at its core: AWS queueing services, asynchronous processing, and an outbound webhook platform that delivers assessment events to customer systems. At assessment scale, even small failure rates are large absolute numbers.',
    problem:
      'Failed processing and failed deliveries did not fail politely. Naive retries amplified load exactly when the system was struggling, one busy tenant could starve others through shared queues, and every team handled failure differently — so failures surfaced as inconsistent, hard-to-reason-about behavior.',
    did: [
      'Generalized queue-based processing with retries and exponential backoff as the standard pattern, instead of per-team ad hoc handling.',
      'Introduced queue fairness so a single high-volume tenant cannot starve everyone else.',
      'Redesigned the webhook platform around the same failure model: bounded retries, backoff, and observable delivery state.',
      'Reduced producer-side failures at the source with the type-safe ingestion library.',
    ],
    result:
      'Event-processing failures dropped by roughly 60%, and behavior under examination-schedule spikes became predictable rather than dramatic. The same failure model now applies across queues and webhooks, which makes new integrations boring — the highest compliment an asynchronous system can get.',
    metrics: [
      { value: '~60%', label: 'fewer event-processing failures' },
      { value: 'Exponential', label: 'backoff as the default retry curve' },
      { value: 'Per-tenant', label: 'queue fairness under load' },
    ],
    differently:
      'Dead-letter handling and replay tooling should be part of the first queue, not a follow-up. Reliability work is cheapest when the failure model is designed in from the start; retrofitting observability and replay onto live queues cost more than building them upfront would have.',
    diagram: 'reliability',
    diagramIntro:
      'The failure model in one picture — fail, back off, recover:',
  },
  {
    slug: 'team-recovery',
    title: 'Team recovery: delivering the projects that had already failed',
    subtitle:
      'Joining as an engineering manager amid missed deadlines and lost confidence — and leaving the team delivering beyond its own expectations.',
    company: 'Durbin Labs',
    companyUrl: 'https://durbinlabs.com',
    period: 'Aug 2021 — Dec 2021',
    tags: ['Engineering management', 'Mentoring', 'Delivery'],
    context:
      'I joined Durbin Labs as an engineering manager during a difficult stretch: several customer projects had already missed their deadlines, customer relationships were at risk, and the engineering team had become demoralized — it had lost confidence in its own ability to deliver.',
    problem:
      'The visible problem was late projects. The actual problem was a team that had stopped believing its estimates, priorities that shifted without a clear owner, and technical blockers that nobody felt empowered to remove. Adding pressure would have made all of it worse.',
    did: [
      'Took ownership of the delayed customer projects and set practical delivery priorities — what ships, in what order, and why.',
      'Removed technical blockers personally while staying hands-on: architecture, backend implementation, code reviews, AWS infrastructure, production troubleshooting.',
      'Mentored engineers and deliberately handed them ownership, so recovery did not depend on me heroically holding every thread.',
      'Rebuilt delivery processes around what the team could actually commit to.',
    ],
    result:
      'Multiple previously missed projects were delivered within a relatively short period, customer trust was restored, and the team delivered beyond its own initial perception of its capability — which was the outcome that mattered most for everything that came after.',
    metrics: [
      { value: 'Multiple', label: 'missed projects delivered' },
      { value: 'Hands-on', label: 'management: architecture, code, production' },
      { value: 'Trust', label: 'restored with customers and within the team' },
    ],
    differently:
      'I would formalize the sequencing and the stakeholder communication cadence much sooner. Recovery only started working once priorities were explicit and status was honest; doing that in week one instead of discovering it through iteration would have removed weeks of thrash.',
    diagram: 'leadership',
    diagramIntro:
      'Leadership range, and the arc of the recovery:',
  },
];

export const caseStudySlugs = new Set(caseStudies.map((c) => c.slug));
