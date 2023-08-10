<script>
	// @ts-nocheck
	import H1 from '../../lib/Components/Text/H1.svelte';
	import og from '../../lib/images/main.png';

	export let data;

	let events = data.events;

	let title = 'وعي - مصر :: المناسبات';
	let desc = 'أهم المناسبات والاعياد المصرية';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<link rel="canonical" href="https://waimasr.vercel.app/events" />

</svelte:head>

<section>
	<H1>مناسبات</H1>
	{#each events as event (event.sys.id)}
		<a href={`/events/${event.fields.slug}`} class="border-none">
			<div class="grid gap-7 md:grid-cols-3">
				<div class="h-80 w-full col-span-2 bg-rose-950 text-white relative">
					<img
						src={event.fields.image.fields.file.url}
						alt={event.fields.name}
						class="object-cover h-80 w-full"
					/>
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
		</a>
	{/each}
</section>
