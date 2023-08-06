import contentful from 'contentful';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_KEY } from '$env/static/private';

export async function load() {
	const client = contentful.createClient({
		space: CONTENTFUL_SPACE_ID,
		accessToken: CONTENTFUL_ACCESS_KEY
	});

	const res = await client.getEntries({ content_type: 'news' });

	return {
		articles: res.items
	};
}