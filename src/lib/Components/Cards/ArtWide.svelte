<script>
	// @ts-nocheck
	export let card;
</script>

<a
	data-sveltekit-prefetch
	aria-label={card.fields.title}
	href={`/post/${card.fields.slug}`}
	class="group"
>
	<div class="card grid gap-4">
		<img
			loading="lazy"
			src={`https:${card.fields.thumbnail.fields.file.url}`}
			alt={card.fields.title}
			class="object-cover h-[20rem] w-full"
			height="20rem"
		/>
		<h2 class="text-black text-xl group-hover:text-red transition-all ease-in-out duration-300">
			{card.fields.title}
		</h2>
		<p class="text-gray-400">
			{new Date(card.fields.created).toLocaleDateString('ar-arab', {
				dateStyle: 'full'
			})} 
		</p>
	</div>
</a>
