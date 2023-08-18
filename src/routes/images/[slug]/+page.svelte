<script>
	// @ts-nocheck

	// /** @type {import('./$types').PageData} */
	// export let data;

	import H1 from '$lib/Components/Text/H1.svelte';

	import og from '$lib/images/main.png';
	let title = ' :: وعي - مصر';
	let desc = '';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />

	<script type="application/ld+json">
        {
          "@context": "https://schema.org/",
          "@type": "ImageObject",
          "contentUrl": {`""`},
          "license": "https://waimasr.vercel.app/terms",
        //   "acquireLicensePage": "https://example.com/how-to-use-my-images",
          "creditText": "Wai Masr",
          "creator": {
            "@type": "Person",
            "name": {`""`}
           },
          "copyrightNotice": {`""`}
        }
	</script>
</svelte:head>
