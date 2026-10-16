import { getCollection } from 'astro:content';

// /blog/<slug>.md — raw markdown version of each post, for LLMs and readers
// that prefer plain content over rendered HTML.
export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

export function GET({ props }) {
  const { post } = props;
  const front = [
    '---',
    `title: ${JSON.stringify(post.data.title)}`,
    ...(post.data.description ? [`description: ${JSON.stringify(post.data.description)}`] : []),
    `pubDate: ${post.data.pubDate.toISOString().slice(0, 10)}`,
    ...(post.data.tags.length ? [`tags: [${post.data.tags.join(', ')}]`] : []),
    '---',
    '',
  ].join('\n');

  return new Response(front + (post.body ?? ''), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
