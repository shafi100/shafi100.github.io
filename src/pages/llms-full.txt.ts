import { getCollection } from 'astro:content';
import { SITE, SOCIALS } from '../config';
import { experience, education } from '../data/experience';
import { alsoAcross, skillTiers } from '../data/skills';
import { highlights } from '../data/highlights';
import { impactMetrics } from '../data/metrics';
import { caseStudies } from '../data/caseStudies';
import { projectCategories, projects } from '../data/projects';
import { products } from '../data/products';
import { mcpToolGroups, mcpToolCount } from '../data/tools';

// /llms-full.txt — the complete site content as plain markdown, generated from
// the same data modules that render the pages, so it never drifts from the site.
export async function GET({ site }) {
  const base = (site ?? new URL('https://shafi.me')).toString().replace(/\/$/, '');

  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const out: string[] = [];
  const line = (s = '') => out.push(s);

  line(`# ${SITE.name} — ${SITE.role}`);
  line();
  line(`> ${SITE.description}`);
  line(`> Specializations: ${SITE.specializations.join(', ')}.`);
  line();
  line(
    `${base} · Sitemap: ${base}/sitemap-index.xml · LLM index: ${base}/llms.txt · Blog post markdown: ${base}/blog/<slug>.md`
  );
  line();

  line('## Profile');
  line();
  line(
    'Software engineer and technical leader with about ten years of experience (nine full-time, plus a part-time start while finishing university) building SaaS and web products, cloud-native backend systems, distributed platforms and engineering tooling. Primarily experienced in backend, platform and distributed systems, with consistent full-stack work throughout the career. Has repeatedly taken ownership beyond a narrowly defined engineering role: designing architecture, leading implementation, mentoring engineers, working directly with customers and stakeholders, improving developer experience, recovering troubled projects, and owning products from idea through maintenance.'
  );
  line();

  line('## Impact in numbers');
  line();
  impactMetrics.forEach((m) => line(`- ${m.value} — ${m.label}`));
  line();

  line('## Career highlights');
  for (const h of highlights) {
    line();
    line(`### ${h.title}`);
    line();
    line(h.context);
    line();
    line(h.outcome);
    line();
    h.metrics.forEach((m) => line(`- ${m.value} — ${m.label}`));
  }
  line();

  line('## Case studies');
  for (const study of caseStudies) {
    line();
    line(`### ${study.title}`);
    line();
    line(`${study.company} · ${study.period}. ${study.subtitle}`);
    line(`Full page: ${base}/work/${study.slug}/ · markdown: ${base}/work/${study.slug}.md`);
    line();
    line('**Context.** ' + study.context);
    line();
    line('**The problem.** ' + study.problem);
    line();
    line('**What I did.**');
    study.did.forEach((item) => line(`- ${item}`));
    line();
    line('**What changed.** ' + study.diagramIntro);
    line();
    line('**The result.** ' + study.result);
    line();
    study.metrics.forEach((m) => line(`- ${m.value} — ${m.label}`));
    line();
    line(`**What I would do differently.** ${study.differently}`);
  }
  line();

  line('## Professional experience');
  for (const job of experience) {
    line();
    line(`### ${job.role} — ${job.company} (${job.period})`);
    line();
    line(job.summary);
    if (job.url) line(`Company site: ${job.url}`);
    job.highlights?.forEach((hl) => line(`- ${hl}`));
    if (job.tech) line(`Stack: ${job.tech.join(', ')}`);
  }
  line();

  line('## Products');
  for (const p of products) {
    line();
    line(`### ${p.name} — ${p.status}`);
    line();
    line(p.tagline);
    line();
    line(p.description);
    line(`Role: ${p.role}`);
    if (p.tech?.length) line(`Tech: ${p.tech.join(', ')}`);
    p.ownership?.forEach((o) => line(`- ${o}`));
  }
  line();

  line('## Projects');
  for (const category of projectCategories) {
    line();
    line(`### ${category}`);
    line();
    projects
      .filter((p) => p.category === category)
      .forEach((p) => {
        const url = p.url && p.url.startsWith('http') ? ` (${p.url})` : '';
        let entry = `- ${p.name}${url} — ${p.role}. ${p.description}`;
        if (p.docs) entry += `${p.description.endsWith('.') ? '' : '.'} Documentation: ${p.docs}`;
        line(entry);
      });
  }
  line();

  line('## Skills (grouped by honest depth, not percentages)');
  line();
  skillTiers.forEach((tier) => {
    const skills = tier.skills
      .map((s) => s.name + (s.where ? ` (${s.where})` : '') + (s.note ? ` [${s.note}]` : ''))
      .join(', ');
    line(`- ${tier.title}: ${skills}`);
  });
  line(`- Also across: ${alsoAcross.join(', ')}`);
  line();

  line('## Education');
  line();
  education.forEach((e) => line(`- ${e.degree}, ${e.school} (${e.period})`));
  line();

  line('## Tools');
  line();
  line(`- portfolio MCP — persistent context memory for AI agents. An MCP server that indexes every local project (structure, dependencies, technologies, features, architecture analyses, cross-project relationships) and exposes ${mcpToolCount} tools to any MCP-compatible agent. Documentation: https://shafi-.github.io/portfolio/ · Source: https://github.com/shafi-/portfolio`);
  mcpToolGroups.forEach((g) => line(`  - ${g.title}: ${g.tools.join(', ')}`));
  line(`- Jest Error Viewer — paste a Jest assertion error and get expected vs received parsed, pretty-printed and diffed: ${base}/tools/jest-error-viewer/`);
  line();

  line('## Contact');
  line();
  line(`- Status: ${SITE.availability}`);
  line(`- Email: ${SITE.email}`);
  SOCIALS.filter((s) => s.url.startsWith('http')).forEach((s) => line(`- ${s.label}: ${s.url}`));
  line();

  line('---');
  line();
  line('# Blog posts');
  for (const post of posts) {
    const url = `${base}/blog/${post.id}/`;
    line();
    line(`## ${post.data.title}`);
    line();
    line(
      `Published: ${post.data.pubDate.toISOString().slice(0, 10)} · ${url} · markdown: ${base}/blog/${post.id}.md`
    );
    if (post.data.tags.length) line(`Tags: ${post.data.tags.join(', ')}`);
    if (post.data.description) {
      line();
      line(post.data.description);
    }
    line();
    line(post.body ?? '');
  }

  return new Response(out.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
