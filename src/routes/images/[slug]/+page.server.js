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
		content_type: 'images',
		'fields.slug': params.slug
	});

	return {
		images: items[0],
	};
}
