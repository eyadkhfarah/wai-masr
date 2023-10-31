<script>
	// @ts-nocheck

	import Email from '$lib/Components/Email.svelte';

	import { categories } from '../../../utils/categories';
	import og from '$lib/images/main.png';
	import ArtWide from '$lib/Components/Cards/ArtWide.svelte';

	export let data;

	let category = data.menu;
	let articles = data.articles;
</script>

<svelte:head>
	<title>{category.title} :: وعي - مصر</title>
	<meta name="description" content={`قسم ${category.title} المقالات`} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={`وعي - مصر :: ${category.title}`} />
	<meta property="og:description" content={`قسم ${category.title} المقالات`} />
</svelte:head>

<section>
	<div class="flex gap-3 h-fit">
		<div class="w-2 bg-red rounded-3xl" />
		<h1 class="m-0">{category.title}</h1>
	</div>

	<div class="flex mt-4 overflow-x-auto">
		{#each categories as categorys}
			<a
				data-sveltekit-prefetch
				data-sveltekit-reload
				aria-label={category.title}
				class:border-b-red={categorys.title === category.title}
				class:text-red={categorys.title === category.title}
				class="Blackbtn p-2 border-b-gray-300 hover:border-b-red border-b-2"
				href={`/articles/${categorys.link}`}>{categorys.title}</a
			>
		{/each}
	</div>

	<div class="grid gap-7 lg:grid-cols-3">
		{#each articles as card (card.sys.id)}
			{#if card.fields.category === category.title}
				<ArtWide {card} />
			{/if}
		{/each}
	</div>
</section>
