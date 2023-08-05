import { client } from '../../lib/contentful-fetch';

const website = 'https://wai-masr.vercel.app';

export async function GET() {
	const res = await client.getEntries({ content_type: 'news' });

	const article = res.items;

	return new Response(
		`<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
      <channel>
        <title>وعي مصر</title>
        <link>${website}</link>
        <description>نبض التيار القومي المصري</description>
        

        ${article.map(
					(post) =>
						`
            
            <item>
              <title>${post.fields.title}</title>
              <description>${post.fields.subtitle}</description>
              <link>${website}/posts/${post.fields.slug}/</link>
              <pubDate>${new Date(post.sys.createdAt)}</pubDate>
              <content:encoded>${post.fields.subtitle} 
                <div style="margin-top: 50px; font-style: italic;">
                  <strong>
                    <a href="${website}/posts/${post.fields.slug}">
                      اقرا اكثر
                    </a>
                  </strong>  
                </div>
              </content:encoded>
            </item>
            `
				)}
      
      </channel>
    </rss>`
	);
}
