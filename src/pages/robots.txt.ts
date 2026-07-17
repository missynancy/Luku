export const GET = () => {
  return new Response(`User-agent: *\nAllow: /\nSitemap: https://missynancy.github.io/Luku/sitemap-index.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};