import { getCollection } from 'astro:content';

const siteURL = 'https://missynancy.github.io';
const basePath = '/Luku';

export async function GET() {
  const posts = (await getCollection('posts')).filter((post) => !post.data.draft);

  const staticPages = ['', 'nutrition', 'fitness', 'style', 'about', 'contact', 'guide', 'shopping-checklist'];

  const staticUrls = staticPages.map((page) => {
    const path = page ? `${basePath}/${page}/` : `${basePath}/`;
    return `  <url><loc>${new URL(path, siteURL).href}</loc></url>`;
  });

  const postUrls = posts.map(
    (post) => `  <url><loc>${new URL(`${basePath}/posts/${post.slug}/`, siteURL).href}</loc></url>`
  );

  const urls = [...staticUrls, ...postUrls].join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    {
      headers: { 'Content-Type': 'application/xml; charset=utf-8' }
    }
  );
}
