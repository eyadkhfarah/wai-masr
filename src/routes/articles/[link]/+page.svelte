<script>
	// @ts-nocheck

	import Email from '$lib/Components/Email.svelte';
	import image from '$lib/images/no-image-square.png';
	import { example } from '$utils/articles';

	import { categories } from '$utils/categories';
	import og from '$lib/images/main.png';

	export let data;

	let category = data.menu;
	let articles = data.articles;
</script>

<svelte:head>
	<title>وعي مصر :: {category.title}</title>
	<meta name="description" content={`قسم ${category.title} المقالات`} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={`وعي مصر :: ${category.title}`} />
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
				class:border-b-red={categorys.title === category.title}
				class:text-red={categorys.title === category.title}
				class="Blackbtn p-2 border-b-gray-300 hover:border-b-red border-b-2"
				href={`/articles/${categorys.link}`}>{categorys.title}</a
			>
		{/each}
	</div>

	<div class="grid gap-7 lg:grid-cols-3">
		<div class="grid gap-3 col-span-2">
			{#each articles as card (card.sys.id)}
				{#if card.fields.category === category.title}
					<a href={'/post/' + card.fields.slug} data-sveltekit-prefetch class="border-none group">
						<div class="card md:flex grid gap-8 border-t-2 border-t-gray-300">
							<img
								src={`https:${card.fields.thumbnail.fields.file.url}`}
								alt={card.fields.title}
								class="md:h-28 md:w-fit w-full"
							/>
							<div class="grid gap-5 h-fit">
								<h2
									class="group-hover:text-red lg:m-0 text-text transition-all duration-300 ease-in-out"
								>
									{card.fields.title}
								</h2>
								<p class="text-gray-400 m-0">
									{new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
										calendar: 'coptic',
										day: 'numeric'
									})}
									{new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
										calendar: 'coptic',
										month: 'short'
									})}
									{parseFloat(
										new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
											calendar: 'coptic',
											year: 'numeric'
										})
									) + Number(4525)} |
									<span class="text-blue-600 font-black"
										><a href="/" class="border-none">{card.fields.category}</a></span
									>
								</p>
							</div>
						</div>
					</a>
				{/if}
			{/each}
		</div>
		<Email />
	</div>
</section>
