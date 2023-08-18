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
	<script type="application/ld+json">
		[{
		  "@context": "https://schema.org/",
		  "@type": "ImageObject",
		  "contentUrl": "https://example.com/photos/1x1/black-labrador-puppy.jpg",
		  "license": "https://example.com/license",
		  "acquireLicensePage": "https://example.com/how-to-use-my-images",
		  "creditText": "Labrador PhotoLab",
		  "creator": {
			"@type": "Person",
			"name": "Brixton Brownstone"
		   },
		  "copyrightNotice": "Clara Kent"
		},]
		</script>
</svelte:head>

<section>
	<H1>ألبوم الصور</H1>
</section>
