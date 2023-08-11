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
	{#each article as card (card.sys.id)}
		{#if card.fields.title === search, card.fields.category === search}
			<a href={'/post/' + card.fields.slug} data-sveltekit-prefetch class="border-none group">
				<div class="card md:flex grid gap-8 border-t-2 border-t-gray-300">
					<img
						src={`https:${card.fields.thumbnail.fields.file.url}`}
						alt={card.fields.title}
						class="md:h-28 md:w-fit w-full"
					/>
					<div class="grid gap-5 h-fit">
						<h2 class="group-hover:text-red text-text transition-all duration-300 ease-in-out">
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
		{/if}
	{/each}
</section>
