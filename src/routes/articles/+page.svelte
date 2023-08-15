<script>
	// @ts-nocheck

	import Email from '$lib/Components/Email.svelte';

	import { categories } from '../../utils/categories';

	import og from '$lib/images/main.png';
	import H1 from '$lib/Components/Text/H1.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiSystemArrowRightSLine from 'svelte-icons-pack/ri/RiSystemArrowRightSLine';
	import RiSystemArrowLeftSLine from 'svelte-icons-pack/ri/RiSystemArrowLeftSLine';
	import { paginate, PaginationNav } from 'svelte-paginate';

	export let data;

	let article = data.articles;
	let items = article;
	let currentPage = 1;
	let pageSize = 6;
	$: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<svelte:head>
	<title>وعي - مصر :: مقالات</title>
	<meta name="description" content="اهم المقالات والمصار والاراء القومية" />
	<meta property="og:image" content={og} />
	<meta property="og:title" content="وعي - مصر :: مقالات" />
	<meta property="og:description" content="اهم المقالات والمصادر والاراء القومية" />
</svelte:head>

<section>
	<H1>مقالات</H1>

	<div class="flex mt-4 overflow-x-auto">
		{#each categories as category}
			<a
				data-sveltekit-prefetch
				aria-label={category.title}
				class="Blackbtn p-2 border-b-gray-300 hover:border-b-red border-b-2"
				href={`/articles/${category.link}`}>{category.title}</a
			>
		{/each}
	</div>

	<div class="grid gap-7 lg:grid-cols-3">
		<div class="grid gap-3 col-span-2">
			{#each paginatedItems as card (card.sys.id)}
				<a
					href={'/post/' + card.fields.slug}
					aria-label={card.fields.title}
					data-sveltekit-prefetch
					class="border-none group"
				>
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
									dateStyle: 'full'
								})} |
								<span class="text-blue-600 font-black"
									><a href="/" class="border-none">{card.fields.category}</a></span
								>
							</p>
						</div>
					</div>
				</a>
			{/each}
			<PaginationNav
				totalItems={items.length}
				{pageSize}
				{currentPage}
				limit={1}
				showStepOptions={true}
				global(.pagination-nav)
				global(.option)
				global(.option.active)
				on:setPage={(e) => (currentPage = e.detail.page)}
			>
				<span slot="prev"><Icon src={RiSystemArrowRightSLine} color="white" /></span>
				<span slot="next"><Icon src={RiSystemArrowLeftSLine} color="white" /></span>
			</PaginationNav>
		</div>
		<Email />
	</div>
</section>
