<script>
	// @ts-nocheck

	export let article;
</script>

<div class="relative w-full h-fit md:m-0 mb-4 col-span-2">
	<a
		href={'/post/' + article[0].fields.slug}
		data-sveltekit-prefetch
		aria-label={article[0].fields.title}
		class="border-none group"
	>
		<div
			class="absolute bottom-0 grid bg-gradient-to-t from-black place-items-center lg:gap-4 gap-2 text-center w-full px-7"
		>
			<div class="flex font-black text-white gap-3 h-fit">
				<div class="w-2 bg-red rounded-3xl" />
				{article[0].fields.category}
			</div>
			<h2
				class="text-white md:text-3xl text-lg transition-all ease-in-out duration-300"
			>
				{article[0].fields.title}
			</h2>
			<p class="text-gray-400 lg:text-base text-sm">
				{new Date(article[0].sys.createdAt).toLocaleDateString('ar-arab', {
					dateStyle: 'full'
				})} |
				<span class="text-blue-600 font-black">{article[0].fields.author.fields.name}</span>
			</p>
		</div>
		<img
			loading="lazy"
			decoding="async"
			src={`https:${article[0].fields.square.fields.file.url}`}
			alt={article[0].fields.title}
			class="object-cover h-full w-full"
		/>
	</a>
</div>
