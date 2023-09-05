<script>
	// @ts-nocheck

	export let data;

	let images = data.images;

	let struc = images.map(
		(image) =>
			`{
						'@context': 'https://schema.org/',
						'@type': 'ImageObject',
						contentUrl: 'https:${image.fields.image[0].fields.file.url}',
						license: 'https://w3ieg.com/terms',
						creditText: 'Wai Masr',
						creator: {
							'@type': 'Person',
							name: '${image.fields.owner}'
						},
						copyrightNotice: 'Wai Masr'
					},`
	);

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
	<script
		type="application/ld+json"
		key="structured-data"
		dangerouslySetInnerHTML={{
			__html: `[
				${struc}
				];`
		}}
	></script>
</svelte:head>

<section>
	<H1>ألبوم الصور</H1>

	<div
		class="w-full max-w-full py-5 mx-auto mb-10 gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
	>
		{#each images as image (image.sys.id)}
			<a
				href={`/images/${image.fields.slug}`}
				aria-label={image.fields.title}
				class="group relative h-fit"
			>
				<img
					loading="lazy"
					decoding="async"
					width={image.fields.image[0].fields.file.details.image.width}
					height={image.fields.image[0].fields.file.details.image.height}
					class="block h-full w-full object-cover object-center group-hover:opacity-50 transition-all ease-in-out duration-300"
					src={`https:${image.fields.image[0].fields.file.url}`}
					alt={image.fields.title}
				/>
				<span
					class="absolute bottom-3 right-3 transition-opacity opacity-0 group-hover:opacity-100 text-black text-xl font-black"
					>{image.fields.title}</span
				>
			</a>
		{/each}
	</div>
</section>
