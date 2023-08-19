<script>
	// @ts-nocheck
	export let card;
</script>

<a
	href={'/post/' + card.fields.slug}
	aria-label={card.fields.title}
	data-sveltekit-prefetch
	class="border-none group"
>
	<div class="card flex gap-8 border-t-2 border-t-gray-300">
		<img
			src={`https:${card.fields.thumbnail.fields.file.url}`}
			alt={card.fields.title}
			class="object-cover lg:h-28 lg:w-28 h-20 w-20"
			width="80"
			height="80"
		/>
		<div class="grid gap-5 h-fit">
			<h2
				class="group-hover:text-red m-0 lg:text-2xl text-lg text-text transition-all duration-300 ease-in-out"
			>
				{card.fields.title}
			</h2>
			<p class="text-gray-400 m-0 lg:text-base text-xs">
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
