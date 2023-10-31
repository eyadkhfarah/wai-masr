<script>
	// @ts-nocheck
	import Events from '$lib/Components/Cards/Events.svelte';
	import H1 from '$lib/Components/Text/H1.svelte';
	import og from '$lib/images/main.png';

	export let data;

	let events = data.events;

	let title = 'فعاليات :: وعي - مصر';
	let desc = 'أهم فعاليات والاعياد المصرية';

	import { JsonLd } from 'svelte-meta-tags';

</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
</svelte:head>

<section>
	<H1>فعاليات</H1>
	<div class="grid lg:grid-cols-4 gap-4">
		{#each events as event (event.sys.id)}
		<div class="col-span-3">

			<Events {event} />
		</div>
		{/each}
	</div>
</section>
