<script>
	// @ts-nocheck

	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	export let data;
	let image = data.images;

	let imageClick = null;

	let copied = false;
	let copiedClass = false;

	const toggleCopy = () => {
		copiedClass = !copiedClass;
	};

	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiBusinessLinksLine from 'svelte-icons-pack/ri/RiBusinessLinksLine';
	import RiLogoFacebookCircleFill from 'svelte-icons-pack/ri/RiLogoFacebookCircleFill';
	import RiLogoWhatsappLine from 'svelte-icons-pack/ri/RiLogoWhatsappLine';
	import RiLogoTwitterFill from 'svelte-icons-pack/ri/RiLogoTwitterFill';

	import RiSystemCheckLine from 'svelte-icons-pack/ri/RiSystemCheckLine';

	import { copy } from 'svelte-copy';

	import H1 from '$lib/Components/Text/H1.svelte';

	import og from '$lib/images/main.png';
	import { JsonLd } from 'svelte-meta-tags';
	let title = `${image.fields.title} :: وعي - مصر`;
	let desc = image.fields.description.content[0].content[0].value;
</script>

<JsonLd
	schema={{
		'@type': 'ImageObject',
			contentUrl: 'https:' + image.fields.image[0].fields.file.url,
			license: 'https:w3ieg.com/terms',
			creditText: 'Wai Masr',
			creator: {
				'@type': 'Person',
				name: image.fields.owner
			},
		copyrightNotice: 'Wai Masr',
	}}
/>



<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />

	{#each image as tag}
		<meta property="og:image" content={`https:${tag.fields.image[0].fields.file.url}`} />=
	{/each}

	<meta property="og:image:alt" content={image.fields.title} />

	<!-- Twitter -->
	<meta property="twitter:title" content={image.fields.title} />
	<meta property="og:description" content={image.fields.description.content[0].content[0].value} />
</svelte:head>

<section class="grid lg:grid-cols-2 gap-9">
	<div>
		<span class="lg:sticky top-16">
			<H1>{image.fields.title}</H1>
			<p class="font-black">صاحب الصورة | <span class="text-red">{image.fields.owner}</span></p>
			<div class="flex my-5 text-xl border-b-2 border-b-red pb-5 justify-between w-full gap-5">
				<span class="font-black">شارك الصورة</span>
				<div class="flex gap-4 relative">
					<a
						href={`https://www.facebook.com/sharer/sharer.php?u=${`https://w3ieg.com/images/${image.fields.slug}`}&t=${
							image.fields.description.content[0].content[0].value
						}`}
						target="_blank"
						class="border-none"
						aria-label="شارك عبر الفيسبوك"><Icon src={RiLogoFacebookCircleFill} /></a
					>
					<a
						href={`https://www.twitter.com/intent/tweet?text=${
							image.fields.description.content[0].content[0].value
						}&url=${`https://w3ieg.com/images/${image.fields.slug}`}&hastags=وعي_مصر`}
						target="_blank"
						class="border-none"
						aria-label="شارك عبر الاكس"><Icon src={RiLogoTwitterFill} /></a
					>
					<a
						href={`https://wa.me/?text=${`https://w3ieg.com/images/${image.fields.slug}`}&hastags=وعي_مصر`}
						target="_blank"
						class="border-none"
						aria-label="شارك عبر الواتس"><Icon src={RiLogoWhatsappLine} /></a
					>
					<span
						class="cursor-pointer"
						use:copy={`https://w3ieg.com/images/${image.fields.slug}`}
						on:svelte-copy={() => (copied = !copied)}
					>
						<Icon src={RiBusinessLinksLine} />
					</span>
					{#if copied}
						<span
							class:copied={copiedClass}
							class="text-base bg-red text-white p-2 absolute left-0 bottom-9 flex gap-2 items-center"
							>تم النسخ<span><Icon src={RiSystemCheckLine} color="white" /></span></span
						>
					{/if}
				</div>
			</div>
			<div>{@html documentToHtmlString(image.fields.description)}</div>
		</span>
	</div>

	<div class="grid gap-4">
		{#each image.fields.image as one}
			<div>
				<img
					loading="lazy"
					class="h-full max-w-full rounded-lg cursor-pointer"
					src={`https:${one.fields.file.url}`}
					alt={one.fields.title}
					width={one.fields.file.details.image.width}
					height={one.fields.file.details.image.height}
				/>
			</div>
		{/each}
	</div>
</section>
<!-- 
<div>
	<span>&times;</span>
	image.fields.image[0].fields.file.url
	 {#if imageClick === image.fields.image.fields.file.url}
		
	{/if}
	<img
		class="h-auto max-w-full rounded-lg cursor-pointer"
		src={`https:${image.fields.image.fields.file.url}`}
		alt=""
	/> 
</div> -->
