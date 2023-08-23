<script>
	// @ts-nocheck

	export let data;

	let article = data.articles;
	let events = data.events;
	let images = data.images;

	let tabs = ['اخر المقالات', 'مختارات وعي', 'الأكثر قراءة'];
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
	import H2 from '$lib/Components/Text/H2.svelte';

	// Article Cards
	import ArtTab from '$lib/Components/Cards/ArtTab.svelte';
	import ArtWide from '$lib/Components/Cards/ArtWide.svelte';
	import ArtImage from '$lib/Components/Cards/ArtImage.svelte';
	import ArtText from '$lib/Components/Cards/ArtText.svelte';
	import BlackBtn from '$lib/Components/Button/BlackBtn.svelte';
	import WhiteBtn from '$lib/Components/Button/WhiteBtn.svelte';
</script>

<svelte:head>
	<title>وعي - مصر</title>
	<meta name="description" content="إبدأ تجربتك الأولى في القومية المصرية من وعي - مصر" />
	<meta property="og:image" content={og} />
	<meta property="og:title" content="وعي - مصر" />
	<meta property="og:description" content="إبدأ تجربتك الأولى في القومية المصرية من وعي - مصر" />
</svelte:head>

<section class="bg-black m-0 mt-[-9.7rem] z-0 p-0">
	<div class="relative h-fit w-fit">
		<img
			loading="lazy"
			decoding="async"
			src={`https:${events[0].fields.image.fields.file.url}`}
			alt={events[0].fields.name}
			class="object-cover lg:h-[100vh] h-[75em] opacity-40"
			width="1920"
		/>

		<div class="md:px-28 bg-gradient-to-t w-full from-black absolute bottom-0 grid md:p-0 p-5">
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

						<span class="w-fit">
							<WhiteBtn label={'شوف التفاصيل'} link={`/events/${events[0].fields.slug}`} />
						</span>
					</div>
				</div>
			</div>

			<div class="">
				<h2 class="bg-red p-4 text-base w-fit m-0 text-white">اخر المقالات</h2>
				<div class="md:mb-5 lg:flex grid gap-5">
					<div class="bg-primary lg:grid-cols-3 h-full grid md:w-full">
						{#each article as card, index (card.sys.id)}
							{#if index < 3}
								<a
									data-sveltekit-prefetch
									aria-label={card.fields.title}
									href={`/post/${card.fields.slug}`}
									class="md:border-red border-none group"
								>
									<div
										class="card px-5 flex justify-center md:border-r border-b border-gray-300 gap-4"
									>
										<img
											src={`https:${card.fields.square.fields.file.url}`}
											alt={card.fields.title}
											class="object-cover w-20 h-20"
											width="80"
											height="80"
										/>
										<div class="grid gap-3 h-fit w-full">
											<span class="text-gray-400 text-xs">
												{new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
													dateStyle: 'full'
												})}</span
											>
											<h3
												class="text-black text-sm m-0 group-hover:text-red transition-all ease-in-out duration-300"
											>
												{card.fields.title}
											</h3>
										</div>
									</div>
								</a>
							{/if}
						{/each}
					</div>
					<div class="text-white grid h-fit lg:mt-0 mt-10">
						<h3 class="m-0 w-full whitespace-nowrap">عايز تكتب مقالات؟</h3>
						<p class="my-1 text-xs w-full">ابعت مقالتك لينا واحنا هننشرها لك</p>
						<WhiteBtn label={'أنشر مقالتك'} link={`/contact`} />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="lg:grid lg:grid-cols-4 gap-5 h-fit">
		<div class="grid gap-2 w-full h-fit">
			{#each article as card, index (card.sys.id)}
				{#if index < 3}
					<ArtText {card} />
				{/if}
			{/each}
			<a
				class="text-text w-full font-black flex justify-between items-center py-5 border-none"
				href="/articles"
				rel="noopener noreferrer"
				>اقرا اكتر <span><Icon color="red" src={RiSystemArrowLeftLine} /></span></a
			>
		</div>

		<ArtImage {article} />

		<div class="grid gap-5 h-fit w-full">
			<Tabs {tabs} {activeTab} on:tabChange={tabChange} />
			{#if activeTab === 'اخر المقالات'}
				{#each article as card, index (card.sys.id)}
					{#if index < 4}
						<ArtTab {card} />
					{/if}
				{/each}
			{:else if activeTab === 'مختارات وعي'}
				{#each article as card, index (card.sys.id)}
					{#if index < 4 && card.fields.feature == false}
						<ArtTab {card} />
					{/if}
				{/each}
			{:else if activeTab === 'الأكثر قراءة'}
				{#each article as card, index (card.sys.id)}
					{#if index < 4 && card.fields.category === 'اخبار تشرف'}
						<ArtTab {card} />
					{/if}
				{/each}
			{/if}
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
				لا تتم وطنية المرء إلا إذا عرف أمته قديمها وحديثها، فإن من جهل قديمها فهو مدَّع في حبها، لأن
				من جهل شيئًا عاداه
			</p>

			<p class="m-0">رائد الفكر القومي المصري - أحمد لطفي السيد</p>
		</div>
		<img
			loading="lazy"
			decoding="async"
			src={qoute}
			alt="مقولة تابعة للمكتبة القومية"
			class="opacity-10 absolute md:left-[43%] left-[30%] top-[30%] w-44"
		/>
	</div>

	<BlackBtn label={'ادخل المكتبة القومية'} link={'https://maktabaqawmya.vercel.app'} />
</section>

<section class="grid">
	<H2>مقالات مختارة</H2>
	<div class="grid gap-6 lg:grid-cols-3">
		{#each article as card, index (card.sys.id)}
			{#if index < 3}
				<ArtWide {card} />
			{/if}
		{/each}
	</div>

	<BlackBtn label={'المزيد من المقالات'} link={'/articles'} />
</section>

<section>
	<H2>محطة وعي</H2>

	<div class="w-full h-full lg:flex grid place-items-center gap-4 mb-6">
		<iframe
			class="w-full lg:h-60 h-56"
			src="https://www.youtube.com/embed/xIzWgdHdz8A"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
		<iframe
			class="w-full lg:h-60 h-56"
			src="https://www.youtube.com/embed/SSW6Pfa-xRw"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
		<iframe
			class="w-full lg:h-60 h-56"
			src="https://www.youtube.com/embed/hqcNi-WH47A"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>

	<BlackBtn label={'أتفرج في محطة وعي'} link={'https://www.youtube.com/@w3istation'} />
</section>

<section class="grid">
	<H2>ابرز الفعاليات</H2>
	<div class="grid lg:grid-cols-2 gap-6">
		{#each events as event, index (event.sys.id)}
			{#if index < 4}
				<Events {event} />
			{/if}
		{/each}
	</div>

	<BlackBtn label={'شوف فعاليات اكتر'} link={'/events'} />
</section>

<section>
	<H2>ألبوم الصور</H2>

	<div
		class="w-full max-w-full py-5 mx-auto mb-10 gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
	>
		{#each images as image, index (image.sys.id)}
			{#if index < 6}
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
			{/if}
		{/each}
	</div>

	<BlackBtn label={'شوف ألبوم الصور'} link={'/images'} />
</section>
