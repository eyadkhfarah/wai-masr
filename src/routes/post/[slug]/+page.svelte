<script>
	// @ts-nocheck

	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import { BLOCKS, MARKS } from '@contentful/rich-text-types';
	import Email from '../../../lib/Components/Email.svelte';

	let copied = false;
	let copiedClass = false;

	const toggleCopy = () => {
		copiedClass = !copiedClass;
	};

	export let data;

	let article = data.article;
	// let card = data.card;

	const options = {
		renderMark: {
			[MARKS.BOLD]: (text) => `<custom-bold>${text}<custom-bold>`
		},
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content)}</p>`
		}
	};

	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiBusinessLinksLine from 'svelte-icons-pack/ri/RiBusinessLinksLine';
	import RiLogoFacebookCircleFill from 'svelte-icons-pack/ri/RiLogoFacebookCircleFill';
	import RiLogoInstagramLine from 'svelte-icons-pack/ri/RiLogoInstagramLine';
	import RiLogoTwitterFill from 'svelte-icons-pack/ri/RiLogoTwitterFill';

	import RiSystemCheckLine from 'svelte-icons-pack/ri/RiSystemCheckLine';

	// const options = {
	// 	renderNode: {
	// 		[BLOCKS.QUOTE]: (node, children) => <q>{children}</q>,
	// 		[BLOCKS.HYPERLINK]: (node, children) => (
	// 			<a className="text-primary" href={node.data.uri}>
	// 				{children}
	// 			</a>
	// 		),
	// 		[BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-7">{children}</p>
	// 	}
	// };
</script>

<svelte:head>
	<title>{article.fields.title} :: وعي مصر</title>
	<meta name="description" content={article.fields.subtitle} />

	<meta property="og:title" content={article.fields.title} />
	<meta property="og:description" content={article.fields.subtitle} />
	<meta property="og:image" content={article.fields.thumbnail.fields.file.url} />
	<meta property="article:published_time" content={article.sys.createdAt} />
	<meta property="article:modified_time" content={article.sys.updatedAt} />
	<!-- Twitter -->
	<meta property="twitter:title" content={article.fields.title} />
	<meta property="og:description" content={article.fields.subtitle} />
	<meta property="og:image:alt" content={article.fields.subtitle} />
	<meta property="article:section" content={article.fields.category} />
	<meta name="twitter:creator" content="@" />
	<meta property="og:type" content="article" />
	<meta name="twitter:creator" content="@nickbilton" />

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
              "@id": "https://wai-masr.vercel.app/post/${article.fields.slug}"
            },
            "headline": "${article.fields.title}",
            "description": "${article.fields.subtitle}",
            "image": "${article.fields.thumbnail.fields.file.url}",
            "author": [
              {
                "@type": "Person",
                "name": "${article.fields.author.fields.name}",
                "url": "https://wai-masr.vercel.app/author/${article.fields.author.fields.slug}"
              }
            ],
            "publisher": {
              "@type": "Organization",
              "name": "وعي مصر"
            },
            "datePublished": "${article.sys.createdAt}",
            "dateModified": "${article.sys.updatedAt}"
          }
        `
		}}
	></script>
</svelte:head>

<section class="grid md:grid-cols-4 gap-10">
<Email />
	<article class="col-span-2 grid h-fit gap-9">
		<div class="grid gap-4">
			<a href="/" class="flex gap-3 border-none text-text h-fit">
				<div class="w-2 bg-red rounded-3xl" />
				{article.fields.category}
			</a>
			<h1 class="m-0">{article.fields.title}</h1>
		</div>

		<div class="grid gap-4 justify-between">
			<div class="flex gap-5 md:text-base">
				<p class="m-0">
					الكتاب | <span class="font-black text-blue-600">{article.fields.author.fields.name}</span>
				</p>
				<span>—</span>
				<p class="m-0">
					تاريخ | {new Date(article.sys.createdAt).toLocaleDateString('ar-EG', {
						weekday: 'long',
						year: 'numeric',
						month: 'short',
						day: 'numeric'
					})}
				</p>
			</div>
			<div class="flex gap-5 text-xl font-black relative">
				<span class="text-sm">شارك المقالة</span>
				<a href="https://www.facebook.com/" class="border-none" aria-label="صفحة الفيسبوك"
					><Icon src={RiLogoFacebookCircleFill} /></a
				>
				<a href="https://www.instagram.com/" class="border-none" aria-label="صفحة الانستجرام"
					><Icon src={RiLogoInstagramLine} /></a
				>
				<a href="https://www.twitter.com/" class="border-none" aria-label="صفحة الاكس"
					><Icon src={RiLogoTwitterFill} /></a
				>
				<span class="cursor-pointer">
					<Icon src={RiBusinessLinksLine} />
				</span>

				{#if copied}
					<button
						class:copied={copiedClass}
						class="text-base bg-red text-white p-2 absolute left-0 bottom-9 flex gap-2 items-center"
						>تم النسخ<span><Icon src={RiSystemCheckLine} color="white" /></span></button
					>
				{/if}
			</div>
		</div>
		<img src={article.fields.thumbnail.fields.file.url} alt={article.fields.title} class="w-full" />

		<h2 class="font-black italic text-lg">{article.fields.subtitle}</h2>
		<div>{@html documentToHtmlString(article.fields.post)}</div>

		<div class="flex gap-3 h-fit">
			<div class="w-2 bg-red rounded-3xl" />
			<h2 class="text-2xl">التاجات</h2>
		</div>

		<div class="flex gap-5 flex-wrap">
			{#each article.fields.tags as tag (tag)}
				<span class="p-2 whitespace-nowrap bg-red font-black text-white">
					{tag}
				</span>
			{/each}
		</div>
	</article>
	<aside class="sticky top-28">
		<div class="flex gap-3 h-fit mb-5">
			<div class="w-2 bg-red rounded-3xl" />
			<h3 class="m-0">مقالات ممكن تعجبك</h3>
		</div>

		<div class="grid col-span-1">
			<!-- {#each card as card, index (card.sys.id)}
				{#if index < 5}
					<div class="card border-t-gray-300 border-t-2 flex gap-8">
						<div class="grid gap-5 h-fit">
							<h2 class="text-xl">{card.fields.title}</h2>
							<div class="flex gap-5 text-gray-400 text-sm">
								<a href="/" class="flex gap-3 border-none text-text h-fit">
									<div class="w-2 bg-red rounded-3xl" />
									{card.fields.category}
								</a>
								<span>—</span>
								<p>تاريخ | {new Date(article.sys.createdAt).toLocaleDateString('ar-EG', {
									weekday: 'long',
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								})}</p>
							</div>
						</div>
					</div>
				{/if}
			{/each} -->
		</div>
	</aside>
</section>
