import contentful from 'contentful';
import {
	CONTENTFUL_SPACE_ID,
	CONTENTFUL_ACCESS_KEY,
} from '$env/static/private';

export async function load({ params }) {
	const client = contentful.createClient({
		space: CONTENTFUL_SPACE_ID,
		accessToken: CONTENTFUL_ACCESS_KEY
	});

	const { items } = await client.getEntries({
		content_type: 'news',
		'fields.slug': params.slug
	});

	const res = await client.getEntries({ content_type: "news" })

	return {
		article: items[0],
		cards: res.items
	};
}
