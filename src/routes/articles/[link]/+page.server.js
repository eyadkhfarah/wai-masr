import contentful from 'contentful';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_KEY } from '$env/static/private';

import { categories } from '../../../utils/categories';

export async function load({ params }) {
	const client = contentful.createClient({
		space: CONTENTFUL_SPACE_ID,
		accessToken: CONTENTFUL_ACCESS_KEY
	});

	const res = categories.find((item) => {
		return item.link.toString() === params.link;
	});

	const res1 = await client.getEntries({ content_type: 'news' });

	return {
		articles: res1.items,
		menu: res
	};
}
