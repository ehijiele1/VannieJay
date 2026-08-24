import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getPosts } from '../lib/hashnode';

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  const posts = await getPosts(100);
  const baseUrl = 'https://vanniejay.com.ng';
  const staticRoutes = [
    ['/', 'weekly', '1.0'],
    ['/about', 'monthly', '0.8'],
    ['/investment-solutions', 'monthly', '0.9'],
    ['/products', 'weekly', '0.9'],
    ['/services', 'monthly', '0.8'],
    ['/resources', 'weekly', '0.8'],
    ['/contact', 'monthly', '0.7'],
    ['/blog', 'daily', '0.9'],
  ];

  const urls = staticRoutes.map(([path, changefreq, priority]) =>
    `  <url><loc>${baseUrl}${path}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`
  ).join('\n');

  const postUrls = posts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.publishedAt).toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
${postUrls}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.status(200).send(sitemap);
}
