<script>
// @ts-nocheck

	import Email from '../../lib/Components/Email.svelte';

	import { categories } from '../../utils/categories';

	import og from '../../lib/images/main.png';
	import H1 from '../../lib/Components/Text/H1.svelte';


	export let data;

	let article = data.articles;
</script>

<svelte:head>
	<title>وعي مصر :: مقالات</title>
	<meta name="description" content="اهم المقالات والمصار والاراء القومية" />
	<meta property="og:image" content={og} />
	<meta property="og:title" content="وعي مصر :: مقالات" />
	<meta property="og:description" content="اهم المقالات والمصادر والاراء القومية" />
</svelte:head>

<section>
	<H1>مقالات</H1>

	<div class="flex mt-4 overflow-x-auto">
		{#each categories as category}
			<a class="Blackbtn p-2 border-b-gray-300 hover:border-b-red border-b-2" href={`/articles/${category.link}`}
				>{category.title}</a
			>
		{/each}
	</div>

	<div class="grid gap-7 md:grid-cols-3">
		<div class="grid gap-3 col-span-2">
			{#each article as card (card.sys.id)}
				<a href={'/post/' + card.fields.slug} data-sveltekit-prefetch class="border-none group">
					<div class="card md:flex grid gap-8 border-t-2 border-t-gray-300">
						<img src={`https:${card.fields.thumbnail.fields.file.url}`} alt={card.fields.title} class="md:h-28 md:w-fit w-full " />
						<div class="grid gap-5 h-fit">
							<h2 class="group-hover:text-red text-text transition-all duration-300 ease-in-out">
								{card.fields.title}
							</h2>
							<p class="text-gray-400 m-0">
								{new Date(card.sys.createdAt).toLocaleDateString('ar-EG', {
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								})} | <span class="text-blue-600 font-black"
									><a href="/" class="border-none">{card.fields.category}</a></span
								>
							</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
		<Email />
	</div>
</section>
