import { getCollection } from 'astro:content';
import { SITE, SOCIALS } from '../config';

// /llms.txt — the llms.txt convention: a curated, LLM-friendly index of the site.
// Spec: https://llmstxt.org
export async function GET({ site }) {
  const base = (site ?? new URL('https://shafi.me')).toString().replace(/\/$/, '');

  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const lines: string[] = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    `> ${SITE.role} — ${SITE.specializations.join(' · ')}. BUET CSE graduate, based in Bangladesh, working globally.`,
    '',
    `Senior software engineer and technical leader with about ten years of experience building commercial SaaS products, cloud-native backend systems, distributed platforms and engineering tooling. Career highlights: designing the architecture for a next-generation reporting platform that replaced a third-party BI tool (customer self-service instead of an engineering queue; template maintenance cut from half a day to ~2 minutes — fast and reliable enough that the team keeps adding templates, 60+ today; 20+ GB reports streamed straight to S3; millions of API calls/day at peak; roughly half the previous infrastructure allocation), the DataLake data ingestion platform (~2–2.5M events/day) with a type-safe ingestion library, a ~60% reduction in event-processing failures, engineering team & project recovery, 100/100 Lighthouse scores across all four categories at Japan Travel, and MyDokan — a privately distributed product owned end to end.`,
    '',
    'Full site content for LLMs: ' + base + '/llms-full.txt',
    '',
    '## Pages',
    `- [About](${base}/about/): career arc, the platform systems diagram, depth-tiered skills, engineering philosophy and education.`,
    `- [Case studies](${base}/work/): four deep dives — reporting platform, DataLake ingestion, reliability, team recovery — each with context, problem, actions, results and a "what I would do differently" retrospective. Raw markdown: ${base}/work/<slug>.md`,
    `- [Résumé](${base}/cv/): printable résumé generated from the same source data as the site.`,
    `- [Products](${base}/products/): everything shipped — MyDokan (live, distributed privately, email for access), the AI-agent tooling (loop, portfolio MCP), open source and client platform work (TestReach, Doctor Dekhao, Hida.travel, Ota.com, DuPlate, DuWholesale).`,
    `- [Blog](${base}/blog/): technical articles. Raw markdown for each post: ${base}/blog/<slug>.md`,
    `- [Tools](${base}/tools/): the full portfolio MCP tool inventory and the interactive Jest Error Viewer.`,
    '',
    '## Blog posts',
    ...posts.map(
      (p) =>
        `- [${p.data.title}](${base}/blog/${p.id}.md): ${p.data.description ?? ''} (${p.data.pubDate
          .toISOString()
          .slice(0, 10)})`
    ),
    '',
    '## Contact',
    `- Email: ${SITE.email}`,
    ...SOCIALS.filter((s) => s.url.startsWith('http')).map((s) => `- ${s.label}: ${s.url}`),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
