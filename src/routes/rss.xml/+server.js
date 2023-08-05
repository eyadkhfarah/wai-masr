// @ts-nocheck
import { client } from '../../lib/contentful-fetch';

const website = 'https://wai-masr.vercel.app';

export async function GET() {
	const res = await client.getEntries({ content_type: 'news' });

	const article = res.items;

	return new Response(
		`<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
        <title>وعي مصر</title>
        <link>${website}</link>
        <description>نبض التيار القومي المصري</description>
        <copyright>
كل الحقوق محفوظة لدي وعي مصر
</copyright>
<language>
<![CDATA[ ar ]]>
</language>
        ${article.map(
					(post) =>
						`
            <item>
              <title>${post.fields.title}</title>
              <description>${post.fields.subtitle}</description>
              <link>${website}/posts/${post.fields.slug}/</link>
              <guid isPermaLink="true">${website}/posts/${post.fields.slug}</guid>
              <dc:creator>${post.fields.author.fields.name}</dc:creator>
              <pubDate>${new Date(post.sys.createdAt)}</pubDate>
              <enclosure url="${
								post.fields.thumbnail.fields.file.url
							}" length="0" type="image/jpeg"/>
            </item>
            `
				)}
      
      </channel>
    </rss>`
	);
}