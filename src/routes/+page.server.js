import contentful from 'contentful';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_KEY } from '$env/static/private'

export async function load() {
const client = contentful.createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_KEY
});

const res = await client.getEntries({ content_type: "news" })
const res1 = await client.getEntries({ content_type: "events" })
const res2 = await client.getEntries({ content_type: 'images' });

  return {
      articles: res.items,
      events: res1.items,
      images: res2.items,
  }
}