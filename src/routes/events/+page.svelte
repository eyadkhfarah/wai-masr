<script>
	// @ts-nocheck

	export let data;

	let events = data.events;
</script>

<svelte:head>
	<title>وعي مصر :: المناسبات</title>
	<meta name="description" content="نبض التيار القومي المصري." />
</svelte:head>

<!-- <Loading /> -->
<section>
	<div class="flex gap-3 h-fit my-10">
		<div class="w-2 bg-red rounded-3xl" />
		<h1 class="m-0">مناسبات</h1>
	</div>
	{#each events as event (event.sys.id)}
	<div class="grid gap-7 md:grid-cols-3">
		<div class="h-80 w-full col-span-2 bg-rose-950 text-white relative">
			<img src={event.fields.image.fields.file.url} alt={event.fields.name} class="object-cover h-80 w-full" />
			<div class="grid gap-5 absolute bottom-0 md:p-10 p-5 bg-gradient-to-t from-black w-full">
				<h2>{event.fields.name}</h2>
				<p class="opacity-75">
					الميعاد: {new Date(event.fields.date).toLocaleDateString('ar-EG', {
						year: 'numeric',
						month: 'short',
						day: 'numeric'
					})}
				</p>
			</div>
		</div>
	</div>
	{/each}
</section>
