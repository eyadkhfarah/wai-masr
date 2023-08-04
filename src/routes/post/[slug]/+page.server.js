import contentful from 'contentful';
import {
	CONTENTFUL_SPACE_ID,
	CONTENTFUL_ACCESS_KEY,
	NEXT_PUBLIC_DOMAIN_URL
} from '$env/static/private';

export async function load({ params }) {
	const client = contentful.createClient({
		space: CONTENTFUL_SPACE_ID,
		accessToken: CONTENTFUL_ACCESS_KEY
	});

	const Article = () => {}

	function Card() {
		// const res = await client.getEntries({ content_type: 'news' });
	}

	const { items } = await client.getEntries({
		content_type: 'news',
		'fields.slug': params.slug
	});

	return {
		article: items[0],
		// cards: res.items
	};
}
