<script>
	// @ts-nocheck

	export let data;

	let article = data.articles;
	let events = data.events;

	let tabs = ['اخر المقالات', 'مختارات وعي', 'اخبار تشرف'];
	let activeTab = 'اخر المقالات';

	function tabChange(e) {
		activeTab = e.detail;
	}

	import og from '$lib/images/main.png';
	import qoute from '$lib/images/quote.svg';

	import Tabs from '$lib/Components/Tabs.svelte';

	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiSystemArrowLeftLine from 'svelte-icons-pack/ri/RiSystemArrowLeftLine';
	import Events from '$lib/Components/Cards/Events.svelte';
</script>

<svelte:head>
	<title>وعي - مصر</title>
	<meta name="description" content="إبدأ تجربتك الأولى في القومية المصرية من وعي - مصر" />
	<meta property="og:image" content={og} />
	<meta property="og:title" content="وعي - مصر" />
	<meta property="og:description" content="إبدأ تجربتك الأولى في القومية المصرية من وعي - مصر" />
</svelte:head>

<section class="bg-black m-0 p-0">
	<div class="relative h-fit w-fit">
		<img
			src={`https:${events[0].fields.image.fields.file.url}`}
			alt={events[0].fields.name}
			class="object-cover lg:h-[35rem] h-[75em] opacity-40"
			width="1920"
		/>

		<div
			class="md:px-28 bg-gradient-to-t w-full from-black absolute bottom-0 grid h-full md:p-0 p-5"
		>
			<div class="grid gap-9 z-10">
				<div class="py-10 text-white">
					<div class="grid gap-5">
						<div>
							<h1>{events[0].fields.name}</h1>
							<p class="opacity-40">
								الميعاد: {new Date(events[0].fields.date).toLocaleDateString('ar-EG', {
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								})}
							</p>
						</div>
						<a
							class="Whitebtn flex items-center gap-6 border-b-red"
							data-sveltekit-prefetch
							aria-label={events[0].fields.name}
							href="/events"
							rel="noopener noreferrer"
							>اقرا التفاصيل<span><Icon color="red" src={RiSystemArrowLeftLine} /></span></a
						>
					</div>
				</div>
			</div>

			<div class="m-0 w-full lg:flex items-end lg:mb-8 md:grid gap-10">
				<div class="md:mb-5">
					<h2 class="bg-red p-4 text-base w-fit m-0 text-white">اخر المقالات</h2>
					<div class="lg:flex md:grid gap-5">
						<div class="bg-primary lg:grid-cols-3 h-fit grid md:w-full">
							{#each article as card, index (card.sys.id)}
								{#if index < 3}
									<a
										data-sveltekit-prefetch
										aria-label={card.fields.title}
										href={`/post/${card.fields.slug}`}
										class="md:border-red border-none"
									>
										<div
											class="card px-5 flex justify-center md:border-r border-b border-gray-300 gap-4"
										>
											<img
												src={`https:${card.fields.thumbnail.fields.file.url}`}
												alt={card.fields.title}
												class="object-cover w-20 h-20"
											/>
											<div class="grid gap-3 h-fit w-full">
												<span class="text-gray-400 text-xs">
													{new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
														calendar: 'coptic',
														day: 'numeric'
													})}
													{new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
														calendar: 'coptic',
														month: 'short'
													})}
													{parseFloat(
														new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
															calendar: 'coptic',
															year: 'numeric'
														})
													) + Number(4525)}</span
												>
												<h3 class="text-black text-sm m-0">{card.fields.title}</h3>
											</div>
										</div>
									</a>
								{/if}
							{/each}
						</div>
					</div>
				</div>
				<div class="text-white grid gap-3 h-fit lg:mt-0 mt-10">
					<h3 class="m-0 w-full whitespace-nowrap">عايز تكتب مقالات؟</h3>
					<p class="m-0 text-xs w-full">ابعت مقالتك لينا واحنا هننشرها لك</p>
					<a
						class="Whitebtn flex w-full items-center gap-6 border-b-red"
						href="/contact"
						rel="noopener noreferrer"
						>أنشر مقالتك<span><Icon color="red" src={RiSystemArrowLeftLine} /></span></a
					>
				</div>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="lg:grid lg:grid-cols-4 gap-10 h-fit">
		<div class="grid gap-9 w-full h-fit">
			{#each article as card, index (card.sys.id)}
				{#if index < 3}
					<a
						class="border-none"
						data-sveltekit-prefetch
						aria-label={card.fields.title}
						href={`/post/${card.fields.slug}`}
					>
						<div class="card p-0 grid gap-4">
							<div class="flex text-text gap-3 h-fit">
								<div class="w-2 bg-red rounded-3xl" />
								{card.fields.category}
							</div>
							<h2 class="text-black md:text-xl text-sm">{card.fields.title}</h2>
							<p class="text-gray-400">
								{new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
									dateStyle: 'full'
								})} |
								<span class="text-blue-600 font-black">{card.fields.author.fields.name}</span>
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

		<div class="relative w-full h-fit md:m-0 mb-4 col-span-2">
			<a
				href={'/post/' + article[0].fields.slug}
				data-sveltekit-prefetch
				aria-label={article[0].fields.title}
				class="border-none"
			>
				<div
					class="absolute bottom-0 grid bg-gradient-to-t from-black place-items-center lg:gap-4 gap-2 text-center w-full px-7"
				>
					<div class="flex font-black text-white gap-3 h-fit">
						<div class="w-2 bg-red rounded-3xl" />
						{article[0].fields.category}
					</div>
					<h2 class="text-white md:text-3xl text-lg">
						{article[0].fields.title}
					</h2>
					<p class="text-gray-400 lg:text-base text-sm">
						{new Date(article[0].sys.createdAt).toLocaleDateString('ar-arab', {
							dateStyle: 'full'
						})} |
						<span class="text-blue-600 font-black">{article[0].fields.author.fields.name}</span>
					</p>
				</div>
				<img
					src={`https:${article[0].fields.square.fields.file.url}`}
					alt={article[0].fields.title}
					class="object-cover h-full w-full"
				/>
			</a>
		</div>

		<div class="grid gap-5 h-fit w-full">
			<Tabs {tabs} {activeTab} on:tabChange={tabChange} />
			{#if activeTab === 'اخر المقالات'}
				{#each article as card, index (card.sys.id)}
					{#if index < 4}
						<a
							href={`/post/${card.fields.slug}`}
							data-sveltekit-prefetch
							aria-label={card.fields.title}
							class="border-none"
						>
							<div class="card p-0 flex gap-4">
								<img
									src={`https:${card.fields.thumbnail.fields.file.url}`}
									alt={card.fields.title}
									class="object-cover w-20 h-20"
								/>
								<div class="grid h-fit gap-3">
									<h2 class="text-black text-base m-0">{card.fields.title}</h2>
									<p class="text-gray-400 text-sm">
										{new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
											dateStyle: 'full'
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
			{:else if activeTab === 'مختارات وعي'}
				{#each article as card, index (card.sys.id)}
					{#if index < 4 && card.fields.feature == false}
						<a
							href={`/post/${card.fields.slug}`}
							data-sveltekit-prefetch
							aria-label={card.fields.title}
							class="border-none"
						>
							<div class="card p-0 flex gap-4">
								<img
									src={`https:${card.fields.thumbnail.fields.file.url}`}
									alt={card.fields.title}
									class="object-cover w-20 h-20"
								/>
								<div class="grid h-fit gap-3">
									<h2 class="text-black text-base m-0">{card.fields.title}</h2>
									<p class="text-gray-400 text-sm">
										{new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
											dateStyle: 'full'
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
			{:else if activeTab === 'اخبار تشرف'}
				{#each article as card, index (card.sys.id)}
					{#if index < 4 && card.fields.category === 'اخبار تشرف'}
						<a
							href={`/post/${card.fields.slug}`}
							data-sveltekit-prefetch
							aria-label={card.fields.title}
							class="border-none"
						>
							<div class="card p-0 flex gap-4">
								<img
									src={`https:${card.fields.thumbnail.fields.file.url}`}
									alt={card.fields.title}
									class="object-cover w-20 h-20"
								/>
								<div class="grid h-fit gap-3">
									<h2 class="text-black text-base m-0">{card.fields.title}</h2>
									<p class="text-gray-400 text-sm">
										{new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
											dateStyle: 'full'
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
			{/if}
			<!-- '', '' -->
		</div>
	</div>
</section>

<section>
	<div class="border-4 border-red w-full p-16 relative text-center">
		<span
			class="text-2xl font-black text-center absolute left-[39%] md:left-[45%] -top-9 bg-primary p-4"
			>مقولة</span
		>
		<div class="grid gap-4">
			<p class="text-2xl font-black text-center m-0 italic z-10">
				الجاهل الذي لا يصغي لا يصل إلى شيء، فهو يساوي بين المعرفة والجهل، وبين المفيد والضار. ويفعل
				الشائبات فيستاء الناس منه يوميًا
			</p>

			<p class="m-0">بتاح حتب</p>
		</div>
		<img
			src={qoute}
			alt="مقولة تابعة للمكتبة القومية"
			class="opacity-10 absolute md:left-[43%] left-[30%] top-[30%] w-44"
		/>
	</div>

	<a
		class="Blackbtn"
		data-sveltekit-prefetch
		aria-label="المكتبة القومية"
		href="https://maktabaqawmya.vercel.app"
		rel="noopener noreferrer"
		>ادخل المكتبة القومية <span><Icon color="red" src={RiSystemArrowLeftLine} /></span></a
	>
</section>

<section class="grid">
	<div class="flex gap-3 h-fit my-10">
		<div class="w-2 bg-black rounded-3xl" />
		<h2>مقالات مختارة</h2>
	</div>
	<div class="grid gap-6 lg:grid-cols-3">
		{#each article as card, index (card.sys.id)}
			{#if index < 3}
				<a
					data-sveltekit-prefetch
					aria-label={card.fields.title}
					href={`/post/${card.fields.slug}`}
					class="border-none"
				>
					<div class="card grid gap-4">
						<img
							src={`https:${card.fields.thumbnail.fields.file.url}`}
							alt={card.fields.title}
							class="w-full"
						/>
						<h2 class="text-black text-xl">{card.fields.title}</h2>
						<p class="text-gray-400">
							{new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
								dateStyle: 'full'
							})} |
							<span class="text-blue-600 font-black" data-sveltekit-prefetch
								><a aria-label={card.fields.title} href="/" class="border-none"
									>{card.fields.category}</a
								></span
							>
						</p>
					</div>
				</a>
			{/if}
		{/each}
	</div>
	<a
		data-sveltekit-prefetch
		class="Blackbtn"
		aria-label="المزيد من المقالات"
		href="/articles"
		rel="noopener noreferrer"
		>اقرا اكتر <span><Icon color="red" src={RiSystemArrowLeftLine} /></span></a
	>
</section>

<section class="bg-black text-white">
	<div class="grid gap-5">
		<h2>عايز تعرف اخر الاخبار والمناسبات؟</h2>
		<p>سجل بالبريد الالكتروني علشان توصلك كل المقالات واحدث المناسبات وابرز الاسئلة</p>
	</div>
</section>

<section class="grid">
	<div class="flex gap-3 h-fit my-10">
		<div class="w-2 bg-black rounded-3xl" />
		<h2>ابرز الفعاليات</h2>
	</div>
	<div class="grid lg:grid-cols-2 gap-6">
		{#each events as event, index (event.sys.id)}
			{#if index < 4}
				<Events {event} />
			{/if}
		{/each}
	</div>
	<a
		data-sveltekit-prefetch
		class="Blackbtn"
		aria-label="المزيد من الفعاليات"
		href="/events"
		rel="noopener noreferrer"
		>شوف فعاليات اكتر <span><Icon color="red" src={RiSystemArrowLeftLine} /></span></a
	>
</section>
