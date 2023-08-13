import { categories } from '../../utils/categories';
import { menu } from '../../utils/navLink';
let site = 'https://waimasr.vercel.app';

import { client } from '../../lib/contentful-fetch';

export async function GET() {
	const res = await client.getEntries({ content_type: 'news' });
	const res1 = await client.getEntries({ content_type: 'events' });

	const article = res.items;
	const events = res1.items;

	return new Response(
		`
        <?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        >
        ${menu
					.filter((link) => link.link.indexOf('https://'))
					.map(
						(page) =>
							`<url>
            <loc>${site}${page.link}/</loc>
            <lastmod>2023-08-14</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>`
					)
					.join('')}
        <url>
            <loc>${site}/privacy-policy/</loc>
            <lastmod>2023-08-14</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        <url>
            <loc>${site}/terms/</loc>
            <lastmod>2023-08-14</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        ${categories
					.map(
						(page) =>
							`<url>
            <loc>${site}/article/${page.link}/</loc>
            <lastmod>2023-08-14</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>`
					)
					.join('')}
        ${article
					.map(
						(page) =>
							`<url>
            <loc>${site}/post/${page.fields.slug}/</loc>
            <lastmod>${new Date(page.sys.updatedAt).toISOString().slice(0, 10)}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>`
					)
					.join('')}
        ${events
					.map(
						(page) =>
							`<url>
            <loc>${site}/events/${page.fields.slug}/</loc>
            <lastmod>${new Date(page.sys.updatedAt).toISOString().slice(0, 10)}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>`
					)
					.join('')}
        </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
