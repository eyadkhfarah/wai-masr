<script>
// @ts-nocheck

	export let card
    
	import Category from '$lib/Components/Text/Category.svelte';
</script>

<a
	class="border-none group"
	data-sveltekit-prefetch
	data-sveltekit-reload
	aria-label={card.fields.title}
	href={`/post/${card.fields.slug}`}
>
	<div class="card p-0 grid gap-7 border-b-gray-300 border-b-2">
		<Category>{card.fields.category}</Category>
		<h2
			class="text-black m-0 group-hover:text-red transition-all ease-in-out duration-300 text-xl"
		>
			{card.fields.title}
		</h2>
		<p class="text-gray-400 text-base">
			{new Date(card.fields.created).toLocaleDateString('ar-arab', {
				dateStyle: 'full'
			})} |
			<span class="text-red font-black">{card.fields.author.fields.name}</span>
		</p>
	</div>
</a>
