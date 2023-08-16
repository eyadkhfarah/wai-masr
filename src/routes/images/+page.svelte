<script>
// @ts-nocheck

	export let data;

	let images = data.images;
	import H1 from '$lib/Components/Text/H1.svelte';

	import og from '$lib/images/main.png';
	let title = 'وعي - مصر :: ألبوم الصور ';
	let desc = `صفحة ألبوم الصور بموقع وعي - مصر.`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
</svelte:head>

<section>
	<H1>ألبوم الصور</H1>
</section>
