import contentful from 'contentful';
import {
	CONTENTFUL_SPACE_ID,
	CONTENTFUL_ACCESS_KEY,
	NEXT_PUBLIC_DOMAIN_URL
} from '$env/static/private';

export async function load({ params }) {
	try {
		const client = contentful.createClient({
			space: CONTENTFUL_SPACE_ID,
			accessToken: CONTENTFUL_ACCESS_KEY
		});

		const { items } = await client.getEntries({
			content_type: 'news',
			'fields.slug': params.slug
		});

		// const res = await client.getEntries({ content_type: 'news' });

		if (items) {
			return {
				article: items[0],
				status: 200
				// cards: res.items
			};
		}
	} catch (error) {
		return new Response(JSON.stringify(error));
	}
}
