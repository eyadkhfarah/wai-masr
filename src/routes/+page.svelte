<script>
	// @ts-nocheck

	export let data;

	// console.log(data)

	let article = data.articles;

	import { example } from '../utils/articles';

	import image from '../lib/images/no-image.png';
	import square from '../lib/images/no-image-square.png';

	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiSystemArrowLeftLine from 'svelte-icons-pack/ri/RiSystemArrowLeftLine';
</script>

<svelte:head>
	<title>وعي مصر</title>
	<meta name="description" content="نبض التيار القومي المصري." />
	<meta property="og:image" content="/main.png" />
	<meta property="og:title" content="وعي مصر" />
	<meta property="og:description" content="نبض التيار القومي المصري." />
</svelte:head>

<section class="bg-red m-0">
	<div class="grid md:grid-cols-3 gap-9">
		<div class="h-80 p-10 col-span-2 bg-rose-950 text-white relative">
			<div class="grid gap-5 absolute bottom-6">
				<div>
					<h2>حفل حد معين</h2>
					<p class="opacity-25">الميعاد: 13 مايو 2023</p>
				</div>
				<a class="Whitebtn flex items-center gap-6" href="/events" rel="noopener noreferrer"
					>اقرا التفاصيل<span><Icon color="white" src={RiSystemArrowLeftLine} /></span></a
				>
			</div>
		</div>

		<div class="grid gap-4 h-fit">
			<div class="flex gap-3 h-fit">
				<div class="w-2 bg-black rounded-3xl" />
				<span>خبر صغير بس طويل سيكا</span>
			</div>
			<div class="flex gap-3 h-fit">
				<div class="w-2 bg-black rounded-3xl" />
				<span>خبر صغير بس طويل سيكا</span>
			</div>
		</div>
	</div>

	<div class="">
		<div class="mt-6 row-span-2">
			<h2 class="bg-rose-950 p-4 text-base w-fit text-white">اخر المقالات</h2>
			<div class="md:flex grid gap-5">
				<div class="bg-primary md:grid-cols-3 grid md:w-fit">
					{#each article as card, index (card.sys.id)}
						{#if index < 3}
							<a href={`/post/${card.fields.slug}`}>
								<div
									class="card px-5 flex justify-center md:border-r border-b border-gray-300 gap-4"
								>
									<img
										src={card.fields.thumbnail.fields.file.url}
										alt="وعي مصر"
										class="w-20 h-20"
									/>
									<div class="grid gap-3 h-fit w-full">
										<span class="text-gray-400 text-xs"
											>{new Date(card.sys.createdAt).toLocaleDateString('ar-EG', {
												year: 'numeric',
												month: 'short',
												day: 'numeric'
											})}</span
										>
										<h3 class="text-black text-sm m-0">{card.fields.title}</h3>
									</div>
								</div>
							</a>
						{/if}
					{/each}
				</div>
				<div class="row-span-1 text-white">
					<h3>عايز تكتب مقالات؟</h3>
					<p>ابعت مقالتك لينا واحنا هننشرها لك</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="grid">
	<!-- <div class="flex gap-3 h-fit my-10">
		<div class="w-2 bg-black rounded-3xl" />
		<h2>أجدد المقالات</h2>
	</div> -->
	<div class="grid md:grid-cols-4 md:grid-rows-1 gap-10 h-fit">
		<div class="grid gap-14 w-full">
			{#each article as card, index (card.sys.id)}
				{#if index < 3}
					<a class="border-none" href={`/post/${card.fields.slug}`}>
						<div class="card p-0 grid gap-4">
							<div class="flex text-text gap-3 h-fit">
								<div class="w-2 bg-red rounded-3xl" />
								{card.fields.category}
							</div>
							<h2 class="text-black text-xl">{card.fields.title}</h2>
							<p class="text-gray-400">
								{new Date(card.sys.createdAt).toLocaleDateString('ar-EG', {
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								})} | <span class="text-blue-600 font-black">{card.fields.author.fields.name}</span>
							</p>
						</div>
					</a>
				{/if}
			{/each}
			<div class="border-t-gray-300 border-t-2 border-primary w-full">
				<a
					class="text-text font-black flex justify-between items-center py-5 border-none"
					href="/articles"
					rel="noopener noreferrer"
					>اقرا اكتر <span><Icon color="red" src={RiSystemArrowLeftLine} /></span></a
				>
			</div>
		</div>

		<div class="relative w-full h-fit col-span-2">
			<a href={'/post/' + article[0].fields.slug} class="border-none">
				<div class="absolute bottom-0 grid bg-gradient-to-t from-black place-items-center gap-4 text-center w-full px-7">
					<div class="flex font-black text-text gap-3 h-fit">
						<div class="w-2 bg-red rounded-3xl" />
						{article[0].fields.category}
					</div>
					<h2 class="text-white">
						{article[0].fields.title}
					</h2>
					<p class="text-gray-400">
						{new Date(article[0].sys.createdAt).toLocaleDateString('ar-EG', {
							year: 'numeric',
							month: 'short',
							day: 'numeric'
						})} |
						<span class="text-blue-600 font-black">{article[0].fields.author.fields.name}</span>
					</p>
				</div>
				<img
					src={article[0].fields.square.fields.file.url}
					alt={article[0].fields.title}
					class="w-fit opacity-"
				/>
			</a>
		</div>

		<div class="grid gap-5 h-full w-full">
			<div class="flex justify-between border-b-2 text-gray-400 border-b-gray-300">
				<span class="border-b-4 border-b-red text-text font-black cursor-pointer py-4"
					>اخر المقالات</span
				>
				<span class="border cursor-pointer py-4">الاكثر قراءة</span>
				<span class="border cursor-pointer py-4">اخبار تضرف</span>
			</div>
			{#each article as card, index (card.sys.id)}
				{#if index < 5}
					<a href={`/post/${card.fields.slug}`} class="border-none">
						<div class="card p-0 flex gap-4">
							<img
								src={card.fields.thumbnail.fields.file.url}
								alt={card.fields.title}
								class="w-20 h-20"
							/>
							<div class="grid h-fit gap-3">
								<h2 class="text-black text-base">{card.fields.title}</h2>
								<p class="text-gray-400">
									{new Date(card.sys.createdAt).toLocaleDateString('ar-EG', {
										year: 'numeric',
										month: 'short',
										day: 'numeric'
									})} |
									<span class="text-blue-600 font-black"
										><a href="/" class="border-none">{card.fields.category}</a></span
									>
								</p>
							</div>
						</div>
					</a>
				{/if}
			{/each}
		</div>
	</div>
</section>

<section class="grid">
	<div class="flex gap-3 h-fit my-10">
		<div class="w-2 bg-black rounded-3xl" />
		<h2>مقالات مختارة</h2>
	</div>
	<div class="grid gap-6 md:grid-cols-3">
		{#each article as card, index (card.sys.id)}
			{#if index < 3}
				<a href={`/post/${card.fields.slug}`} class="border-none">
					<div class="card grid gap-4">
						<img
							src={card.fields.thumbnail.fields.file.url}
							alt={card.fields.title}
							class="w-full"
						/>
						<h2 class="text-black text-xl">{card.fields.title}</h2>
						<p class="text-gray-400">
							{new Date(article[0].sys.createdAt).toLocaleDateString('ar-EG', {
								year: 'numeric',
								month: 'short',
								day: 'numeric'
							})} | <span class="text-blue-600 font-black"
								><a href="/" class="border-none">{card.fields.category}</a></span
							>
						</p>
					</div>
				</a>
			{/if}
		{/each}
	</div>
	<a class="Blackbtn" href="/articles" rel="noopener noreferrer"
		>اقرا اكتر <span><Icon color="red" src={RiSystemArrowLeftLine} /></span></a
	>
</section>

<section class="bg-black text-white">
	<div class="grid gap-5">
		<h2>عايز تعرف اخر الاخفار والمناسبات؟</h2>
		<p>سجل بالبريد الالكتروني علشان توصلك كل المقالات واحدث المناسبات وابرز الاسئلة</p>
	</div>
</section>

<section class="grid">
	<div class="flex gap-3 h-fit my-10">
		<div class="w-2 bg-black rounded-3xl" />
		<h2>ابرز المناسبات</h2>
	</div>
	<div class="flex gap-6">
		<div class="h-80 w-full p-10 col-span-2 bg-rose-950 text-white relative">
			<div class="grid gap-5 absolute bottom-6">
				<div>
					<h2>حفل حد معين</h2>
					<p class="opacity-25">الميعاد: 13 مايو 2023</p>
				</div>
			</div>
		</div>
		<div class="h-80 w-full p-10 col-span-2 bg-rose-950 text-white relative">
			<div class="grid gap-5 absolute bottom-6">
				<div>
					<h2>حفل حد معين</h2>
					<p class="opacity-25">الميعاد: 13 مايو 2023</p>
				</div>
			</div>
		</div>
		<div class="h-80 w-full p-10 col-span-2 bg-rose-950 text-white relative">
			<div class="grid gap-5 absolute bottom-6">
				<div>
					<h2>حفل حد معين</h2>
					<p class="opacity-25">الميعاد: 13 مايو 2023</p>
				</div>
			</div>
		</div>
		<!-- {#each example as card (card.id)}
			<div class="card grid gap-4">
				<img src={image} alt="وعي مصر" class="w-full rounded-xl" />
				<h2>{card.title}</h2>
				<p class="text-slate-500">{card.desc}</p>
			</div>
		{/each} -->
	</div>
	<a class="Blackbtn" href="/events" rel="noopener noreferrer"
		>شوف مناسبات اكتر <span><Icon color="red" src={RiSystemArrowLeftLine} /></span></a
	>
</section>
