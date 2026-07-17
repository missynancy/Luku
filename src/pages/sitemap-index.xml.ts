import { getCollection } from 'astro:content';

export async function GET() {
  const posts = (await getCollection('posts')).filter((post) => !post.data.draft);
  const urls = posts.map((post) => `  <url><loc>https://missynancy.github.io/Luku/posts/${post.slug}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}