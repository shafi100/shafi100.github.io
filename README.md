# portfolio-official

Personal portfolio of Md Abdullahil Shafi — the successor of the old Jekyll site
([shafi100.github.io](https://github.com/shafi100/shafi100.github.io)), rebuilt with
[Astro](https://astro.build) and Tailwind CSS. Deploys to GitHub Pages at [shafi.me](https://shafi.me).

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies (Node 20+)              |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

> **Note:** Astro 7 requires **Node 22.12+**. If your system `node` is older, use nvm:
> `nvm use 22` (or point PATH at `~/.nvm/versions/node/v22.20.0/bin`).

## Editing content

**Blog** — markdown-based via Astro content collections. Add a `.md` file to
`src/content/blog/` with this frontmatter and it appears on the blog, the home page and the RSS feed:

```md
---
title: "My post title"
description: "Short summary shown in listings."
pubDate: 2026-10-16
tags: [Tag1, Tag2]
---

Body in markdown.
```

**Projects** — `src/data/projects.ts`
**Products** — `src/data/products.ts` (add an object with `status: 'In development' | 'Coming soon'` to surface it in the pipeline section)
**Experience** — `src/data/experience.ts`
**Skills (depth tiers)** — `src/data/skills.ts` (`Daily, deep → Strong → Working exposure → Growing`; `coreSkills` feeds the home-page chips)
**Career highlights** — `src/data/highlights.ts`
**Impact metrics** — `src/data/metrics.ts` (the strip, the résumé "Selected impact" and `metricsAsOf` — update the as-of date when numbers change)
**Case studies** — `src/data/caseStudies.ts` (context → problem → what I did → result → what I'd do differently; each renders at `/work/<slug>/` with a diagram)
**Site metadata & social links** — `src/config.ts`
**Diagrams** — `src/components/diagrams/` (inline SVG/HTML, each with a text equivalent; the About-page ASCII diagram lives in `src/pages/about.astro`)
**Tools** — `src/pages/tools/`

Content rules (from `personal-website-plan.md`): facts come from `master-cv-main.md`; keep metrics
coarse and employer-safe; "DataLake", never the internal codename; the third-party reporting tool is
described generically; attribution is "designed the architecture for / led the design of".

## LLM & AI discoverability

The site is designed to be readable by search engines and LLM-powered assistants:

- `public/robots.txt` — explicitly allows the major AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot, …) and points at the sitemap.
- `/llms.txt` — LLM-friendly site index ([llms.txt spec](https://llmstxt.org)), generated at build time from the same data modules as the pages.
- `/llms-full.txt` — the complete site content (profile, highlights, case studies, experience, products, projects, skills, all blog posts) as plain markdown.
- `/blog/<slug>.md` and `/work/<slug>.md` — raw markdown versions of every blog post and case study.
- JSON-LD structured data — `Person` + `WebSite` schema on every page, `BlogPosting` on posts, `Article` on case studies.

## Lighthouse gate

The site claims 100/100 — `.github/workflows/lighthouse.yml` runs Lighthouse CI
(`lighthouserc.json`) on every push to `main` and **fails the build if any of the four
categories drops below 100**. There are no webfonts and no trackers by design; if the gate
ever proves flaky at exactly 100, relax `minScore` in `lighthouserc.json`.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on every push
to `main`. Serve this project from the `shafi100.github.io` user repository (or point the
`shafi.me` custom domain at it) and enable *Settings → Pages → Source: GitHub Actions*.
