<script>
	// @ts-nocheck

	// /** @type {import('./$types').PageData} */
	export let data;
	let article = data.articles;
	let events = data.events;

	import H1 from '../../lib/Components/Text/H1.svelte';
	import { page } from '$app/stores';

	import og from '../../lib/images/main.png';

	let search = $page.url.searchParams.get('search');

	function getFilteredCountries(article, search) {
		if (search) {
			return article.filter((art) => {
				return (
					art.fields.title.toLowerCase().includes(search.toLowerCase()) ||
					art.fields.subtitle.toLowerCase().includes(search.toLowerCase())
				);
			});
		} else {
			return article;
		}
	}

	let title = `وعي - مصر :: بحث ${search}`;
	let desc = 'تواصل مع فريق وعي مصر';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
</svelte:head>

<section>
	<H1>نتائج البحث {search}</H1>
	{#each getFilteredCountries(article, search) as card (card.sys.id)}
		<a href={'/post/' + card.fields.slug} data-sveltekit-prefetch class="border-none group">
			<div class="card lg:flex md:grid gap-8 border-t-2 border-t-gray-300">
				<img
					src={`https:${card.fields.thumbnail.fields.file.url}`}
					alt={card.fields.title}
					class="lg:h-28 lg:w-fit md:h-full md:w-full"
				/>
				<div class="grid gap-5 h-fit">
					<h2 class="group-hover:text-red lg:m-0 text-text transition-all duration-300 ease-in-out">
						{card.fields.title}
					</h2>
					<p class="text-gray-400 m-0">
						{new Date(card.sys.createdAt).toLocaleDateString('ar-EG', {
							year: 'numeric',
							month: 'short',
							day: 'numeric'
						})} |
						<span class="text-blue-600 font-black"
							><a href="/" class="border-none">{card.fields.category}</a></span
						>
					</p>
				</div>
			</div>
		</a>
	{/each}
</section>
