import { caseStudies } from '../../data/caseStudies';

export function getStaticPaths() {
  return caseStudies.map((study) => ({ params: { slug: study.slug }, props: { study } }));
}

// /work/<slug>.md — the case study as raw markdown, for LLM consumption,
// mirroring the blog's markdown endpoints.
export function GET({ props }: { props: { study: (typeof caseStudies)[number] } }) {
  const { study } = props;

  const lines: string[] = [
    `# ${study.title}`,
    '',
    `> ${study.subtitle}`,
    '',
    `${study.company} · ${study.period}`,
    '',
    '## Context',
    '',
    study.context,
    '',
    '## The problem',
    '',
    study.problem,
    '',
    '## What I did',
    '',
    ...study.did.map((item) => `- ${item}`),
    '',
    '## What changed',
    '',
    study.diagramIntro,
    '',
    '## The result',
    '',
    study.result,
    '',
    ...study.metrics.map((m) => `- **${m.value}** — ${m.label}`),
    '',
    '## What I would do differently',
    '',
    study.differently,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
