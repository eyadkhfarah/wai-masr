// @ts-nocheck
import { client } from '../../lib/contentful-fetch';

const website = 'https://wai-masr.vercel.app';

export async function GET() {
	const res = await client.getEntries({ content_type: 'news' });

	const article = res.items;

  function addLeadingZero(num) {
    num = num.toString();
    while (num.length < 2) num = "0" + num;
    return num;
  }
  
  function buildRFC822Date(dateString) {
    const dayStrings = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthStrings = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    const timeStamp = Date.parse(dateString);
    const date = new Date(timeStamp);
  
    const day = dayStrings[date.getDay()];
    const dayNumber = addLeadingZero(date.getDate());
    const month = monthStrings[date.getMonth()];
    const year = date.getFullYear();
    const time = `${addLeadingZero(date.getHours())}:${addLeadingZero(date.getMinutes())}:00`;
    const timezone = date.getTimezoneOffset() === 0 ? "GMT" : "BST";
  
    //Wed, 02 Oct 2002 13:00:00 GMT
    return `${day}, ${dayNumber} ${month} ${year} ${time} ${timezone}`;
  }

	return new Response(
		`<?xml version="1.0" encoding="utf-8"?>
    <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
        <title>وعي مصر</title>
        <link>${website}</link>
        <description>نبض التيار القومي المصري</description>
        <copyright>كل الحقوق محفوظة لدي وعي مصر</copyright>
        <atom:link href="${website}/rss.xml" rel="self" type="application/rss+xml"/>
        <language>
          <![CDATA[ ar ]]>
        </language>
        ${article.map(
					(post) =>
						`<item>
              <title>${post.fields.title}</title>
              <description>${post.fields.subtitle}</description>
              <link>${website}/posts/${post.fields.slug}/</link>
              <guid isPermaLink="true">${website}/posts/${post.fields.slug}</guid>
              <dc:creator>${post.fields.author.fields.name}</dc:creator>
              <pubDate>${buildRFC822Date(post.sys.createdAt)}</pubDate>
              <category>${post.fields.category}</category>
              <enclosure url="https:${post.fields.thumbnail.fields.file.url}" length="0" type="image/jpeg"/>
            </item>
            `
				).join('')}
      </channel>
    </rss>`
	);
}
