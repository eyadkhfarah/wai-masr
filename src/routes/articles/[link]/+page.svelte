<script>
	import Email from '../../../lib/Components/Email.svelte';
	import image from '../../../lib/images/no-image-square.png';
	import { example } from '../../../utils/articles';
</script>

<svelte:head>
	<title>وعي مصر :: قسم</title>
	<meta name="description" content={`قسم {} المقالات`} />
</svelte:head>

<section>
	<div class="flex gap-3 h-fit my-10">
		<div class="w-2 bg-red rounded-3xl" />
		<h1 class="m-0">القسم</h1>
	</div>

	<div class="grid gap-7 md:grid-cols-3">
		<div class="grid gap-3 col-span-2">
			{#each example as card (card.id)}
				<div class="card flex gap-8 border-t-2 border-t-gray-300 group">
					<img src={image} alt="وعي مصر" class="h-28" />
					<div class="grid gap-5 h-fit">
						<h2 class="group-hover:text-red transition-all duration-300 ease-in-out">{card.title}</h2>
						<p class="text-slate-500">{card.desc}</p>
					</div>
				</div>
			{/each}
		</div>
		<Email />
	</div>
</section>
