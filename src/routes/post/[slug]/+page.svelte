<script>
	// @ts-nocheck

	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import Email from '$lib/Components/Email.svelte';

	import news from '$lib/images/google-news.svg';

	let copied = false;
	let copiedClass = false;

	const toggleCopy = () => {
		copiedClass = !copiedClass;
	};

	export let data;

	let article = data.article;
	let cards = data.cards;

	let reading;

	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { onMount } from 'svelte';
	import RiBusinessLinksLine from 'svelte-icons-pack/ri/RiBusinessLinksLine';
	import RiLogoFacebookCircleFill from 'svelte-icons-pack/ri/RiLogoFacebookCircleFill';
	import RiLogoWhatsappLine from 'svelte-icons-pack/ri/RiLogoWhatsappLine';
	import RiLogoTwitterFill from 'svelte-icons-pack/ri/RiLogoTwitterFill';

	import RiSystemCheckLine from 'svelte-icons-pack/ri/RiSystemCheckLine';
	import { browser } from '$app/environment';

	import { copy } from 'svelte-copy';

	import { categories } from '../../../utils/categories';
</script>

<svelte:head>
	<title>{article.fields.title} :: وعي - مصر</title>
	<meta name="description" content={article.fields.subtitle} />

	<meta property="og:title" content={article.fields.title} />
	<meta property="og:description" content={article.fields.subtitle} />
	<meta property="og:image" content={`https:${article.fields.thumbnail.fields.file.url}`} />
	<meta property="article:published_time" content={article.sys.createdAt} />
	<meta property="article:modified_time" content={article.sys.updatedAt} />
	<!-- Twitter -->
	<meta property="twitter:title" content={article.fields.title} />
	<meta property="og:description" content={article.fields.subtitle} />
	<meta property="og:image:alt" content={article.fields.subtitle} />
	<meta property="article:section" content={article.fields.category} />
	<meta name="twitter:creator" content="@" />
	<meta property="og:type" content="article" />
	<meta name="twitter:creator" content={article.fields.author.fields.twitterUrl} />

	{#each article.fields.tags as tag (tag)}
		<meta property="article:tag" content={tag} />
	{/each}

	<script
		type="application/ld+json"
		key="structured-data"
		dangerouslySetInnerHTML={{
			__html: `
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://waimasr.vercel.app/post/${article.fields.slug}"
            },
            "headline": "${article.fields.title}",
            "description": "${article.fields.subtitle}",
            "image": "${article.fields.thumbnail.fields.file.url}",
            "author": [
              {
                "@type": "Person",
                "name": "${article.fields.author.fields.name}",
                "url": "https://waimasr.vercel.app/author/${article.fields.author.fields.slug}"
              }
            ],
            "publisher": {
              "@type": "Organization",
              "name": "وعي - مصر"
            },
            "datePublished": "${article.sys.createdAt}",
            "dateModified": "${article.sys.updatedAt}"
          }
        `
		}}
	></script>
</svelte:head>

<section class="lg:grid lg:grid-cols-4 gap-10 m-0">
	<span class="lg:block hidden">
		<Email />
	</span>
	<article class="col-span-2 grid h-fit gap-9" id="article">
		<div class="grid gap-4">
			{#each categories as categor}
				{#if categor.title.includes(article.fields.category)}
					<a href={'/articles/' + categor.link} class="flex gap-3 border-none text-text h-fit">
						<div class="w-2 bg-red rounded-3xl" />
						{article.fields.category}
					</a>
				{/if}
			{/each}

			<!--  -->
			<h1 class="m-0">{article.fields.title}</h1>
		</div>

		<div class="grid gap-4 w-full">
			<div class="md:flex grid gap-5 md:text-base text-sm w-full">
				<p class="m-0">
					الكتاب | <span class="font-black text-blue-600">{article.fields.author.fields.name}</span>
				</p>
				<span class="md:block hidden">—</span>
				<p class="m-0">
					تاريخ | <span>
						{new Date(article.sys.createdAt).toLocaleDateString('ar-arab', {
							calendar: 'coptic',
							weekday: 'long'
						})}
						{new Date(article.sys.createdAt).toLocaleDateString('ar-arab', {
							calendar: 'coptic',
							day: 'numeric'
						})}
						{new Date(article.sys.createdAt).toLocaleDateString('ar-arab', {
							calendar: 'coptic',
							month: 'short'
						})}
						{parseFloat(
							new Date(article.sys.createdAt).toLocaleDateString('ar-arab', {
								calendar: 'coptic',
								year: 'numeric'
							})
						) + Number(4525)}
						<span>—</span>
						{new Date(article.sys.createdAt).toLocaleDateString('ar-arab', {
							dateStyle: 'full'
						})}
					</span>
				</p>
			</div>
			<div class="flex lg:justify-end justify-between gap-5 md:text-base w-full text-xl font-black">
				<div class="flex lg:justify-end justify-between w-full gap-5">
					<span class="text-sm">شارك المقالة</span>
					<div class="flex gap-4 relative">
						<a
							href={`https://www.facebook.com/sharer/sharer.php?u=${`https://waimasr.vercel.app/post/${article.fields.slug}`}&t=${
								article.fields.subtitle
							}`}
							target="_blank"
							class="border-none"
							aria-label="شارك عبر الفيسبوك"><Icon src={RiLogoFacebookCircleFill} /></a
						>
						<a
							href={`https://www.twitter.com/intent/tweet?text=${
								article.fields.subtitle
							}&url=${`https://waimasr.vercel.app/post/${article.fields.slug}`}&hastags=وعي_مصر`}
							target="_blank"
							class="border-none"
							aria-label="شارك عبر الاكس"><Icon src={RiLogoTwitterFill} /></a
						>
						<a
							href={`https://wa.me/?text=${`https://waimasr.vercel.app/post/${article.fields.slug}`}&hastags=وعي_مصر`}
							target="_blank"
							class="border-none"
							aria-label="شارك عبر الواتس"><Icon src={RiLogoWhatsappLine} /></a
						>
						<span
							class="cursor-pointer"
							use:copy={`https://waimasr.vercel.app/post/${article.fields.slug}`}
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
			</div>
		</div>
		<img
			src={`https:${article.fields.thumbnail.fields.file.url}`}
			alt={article.fields.title}
			class="w-full"
		/>

		<h2 class="font-black italic text-lg">{article.fields.subtitle}</h2>
		<div bind:this={reading}>{@html documentToHtmlString(article.fields.post)}</div>

		<div class="flex gap-3 h-fit">
			<div class="w-2 bg-red rounded-3xl" />
			<h2 class="text-2xl m-0">التاجات</h2>
		</div>

		<div class="flex gap-5 flex-wrap">
			{#each article.fields.tags as tag (tag)}
				<span class="p-2 whitespace-nowrap bg-red font-black text-white">
					{tag}
				</span>
			{/each}
		</div>
	</article>

	<span>
		<aside class="md:sticky top-16 md:m-0 mt-14 w-full">
			<div class="flex gap-3 h-fit w-full mb-5">
				<div class="w-2 bg-red rounded-3xl" />
				<h3 class="m-0 whitespace-nowrap">مقالات ممكن تعجبك</h3>
			</div>

			{#each cards as card, index (card.sys.id)}
				{#if index < 5 && card.fields.title != article.fields.title}
					<a
						href={`/post/${card.fields.slug}`}
						data-sveltekit-reload
						data-sveltekit-prefetch
						aria-label={card.fields.title}
						class="border-none group"
					>
						<div class="card border-t-gray-300 border-t-2 flex gap-8">
							<div class="grid gap-5 h-fit">
								<h4
									class="text-xl text-text group-hover:text-red transition-all ease-in-out duration-300"
								>
									{card.fields.title}
								</h4>
								<div class="flex gap-5 text-gray-400 text-sm">
									<span class="flex gap-3 border-none text-text whitespace-nowrap h-fit">
										<div class="w-2 bg-red rounded-3xl" />
										{card.fields.category}
									</span>
									<span>—</span>
									<p class="whitespace-nowrap">
										{new Date(article.sys.createdAt).toLocaleDateString('ar-arab', {
											calendar: 'coptic',
											weekday: 'long'
										})}
										{new Date(article.sys.createdAt).toLocaleDateString('ar-arab', {
											calendar: 'coptic',
											day: 'numeric'
										})}
										{new Date(article.sys.createdAt).toLocaleDateString('ar-arab', {
											calendar: 'coptic',
											month: 'short'
										})}
										{parseFloat(
											new Date(article.sys.createdAt).toLocaleDateString('ar-arab', {
												calendar: 'coptic',
												year: 'numeric'
											})
										) + Number(4525)}
									</p>
								</div>
							</div>
						</div>
					</a>
				{/if}
			{/each}
		</aside>
	</span>
</section>

<section>
	<div class="p-6 md:px-28 flex justify-between items-center bg-red">
		<h3 class="m-0 text-white">تابعنا في Google News</h3>
		<img src={news} class="h-20 w-20" alt="" />
	</div>
</section>
