<script>
// @ts-nocheck

	export let card
</script>

<a
	href={`/post/${card.fields.slug}`}
	data-sveltekit-prefetch
	aria-label={card.fields.title}
	class="border-none group"
>
	<div class="card p-0 flex gap-4">
		<img
			src={`https:${card.fields.square.fields.file.url}`}
			alt={card.fields.title}
			class="object-cover w-20 h-20"
			width="80"
			height="80"
		/>
		<div class="grid h-fit gap-3">
			<h2 class="text-black lg:text-base text-xl  m-0 group-hover:text-red transition-all ease-in-out duration-300">{card.fields.title}</h2>
			<p class="text-gray-400 lg:text-xs text-base">
				{new Date(card.fields.created).toLocaleDateString('ar-arab', {
					dateStyle: 'full'
				})} |
				<span class="text-blue-600 font-black"
					><a href="/" class="border-none">{card.fields.category}</a></span
				>
			</p>
		</div>
	</div>
</a>
