import { categories } from '../../utils/categories';
import { menu } from '../../utils/navLink';
let site = 'https://wai-masr.vercel.app';

import {client} from '../../lib/contentful-fetch'


export async function GET() {

    const res = await client.getEntries({ content_type: 'news' });
    const res1 = await client.getEntries({ content_type: 'events' });

    const article = res.items
    const events = res1.items
    
    return new Response(
		`
        <?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="https://www.w3.org/1999/xhtml"
            xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
            xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
        >
        ${menu.filter((link) => link.link.indexOf("https://")).map((page) => 
					`<url>
            <loc>${site}${page.link}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>`
				).join('')}
        <url>
            <loc>${site}/privacy-policy</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        <url>
            <loc>${site}/terms</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        ${categories.map((page) => 
					`<url>
            <loc>${site}/article/${page.link}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>`
				).join('')}
        ${article.map((page) => 
					`<url>
            <loc>${site}/post/${page.fields.slug}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>`
				).join('')}
        ${events.map((page) => 
					`<url>
            <loc>${site}/events/${page.fields.slug}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>`
				).join('')}
        </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}

        
	);
}
