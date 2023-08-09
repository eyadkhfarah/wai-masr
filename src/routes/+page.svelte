<script>
	// @ts-nocheck

	export let data;

	let article = data.articles;
	let events = data.events;

	import og from '../lib/images/main.png';
	import qoute from '../lib/images/quote.svg';

	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiSystemArrowLeftLine from 'svelte-icons-pack/ri/RiSystemArrowLeftLine';
</script>

<svelte:head>
	<title>وعي - مصر</title>
	<meta name="description" content="نبض التيار القومي المصري." />
	<meta property="og:image" content={og} />
	<meta property="og:title" content="وعي - مصر" />
	<meta property="og:description" content="نبض التيار القومي المصري." />
</svelte:head>

<section class="bg-black m-0 p-0">
	<div class="relative h-fit w-fit">
		<img
			src={`https:${events[0].fields.image.fields.file.url}`}
			alt={events[0].fields.name}
			class="lg:object-fill object-none lg:h-full h-[75em] opacity-40"
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
						<a class="Whitebtn flex items-center gap-6 border-b-red" href="/events" rel="noopener noreferrer"
							>اقرا التفاصيل<span><Icon color="red" src={RiSystemArrowLeftLine} /></span></a
						>
					</div>
				</div>
			</div>

			<div class="m-0 w-full">
				<h2 class="bg-red p-4 text-base w-fit m-0 text-white">اخر المقالات</h2>
				<div class="lg:flex sm:grid gap-5">
					<div class="bg-primary lg:grid-cols-3 h-fit grid md:w-full">
						{#each article as card, index (card.sys.id)}
							{#if index < 3}
								<a href={`/post/${card.fields.slug}`} class="md:border-red border-none">
									<div
										class="card px-5 flex justify-center md:border-r border-b border-gray-300 gap-4"
									>
										<img
											src={`https:${card.fields.thumbnail.fields.file.url}`}
											alt={card.fields.title}
											class="object-cover w-20 h-20"
										/>
										<div class="grid gap-3 h-fit w-full">
											<span class="text-gray-400 text-xs"
												>
												{new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
													calendar:'coptic',
													day: 'numeric'
												})}
												{new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
													calendar:'coptic',
													month: 'short'
												})} 
												{parseFloat(new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
													calendar:'coptic',
													year: 'numeric'
												})) + Number(4525)}</span
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
						<a class="Whitebtn flex w-full items-center gap-6 border-b-red" href="/contact" rel="noopener noreferrer"
							>أنشر مقالتك<span><Icon color="red" src={RiSystemArrowLeftLine} /></span></a
						>
					</div>
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
					<a class="border-none" href={`/post/${card.fields.slug}`}>
						<div class="card p-0 grid gap-4">
							<div class="flex text-text gap-3 h-fit">
								<div class="w-2 bg-red rounded-3xl" />
								{card.fields.category}
							</div>
							<h2 class="text-black text-xl">{card.fields.title}</h2>
							<p class="text-gray-400">
								{new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
									calendar:'coptic',
									day: 'numeric'
								})}
								{new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
									calendar:'coptic',
									month: 'short'
								})} 
								{parseFloat(new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
									calendar:'coptic',
									year: 'numeric'
								})) + Number(4525)} | <span class="text-blue-600 font-black">{card.fields.author.fields.name}</span>
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
			<a href={'/post/' + article[0].fields.slug} class="border-none">
				<div
					class="absolute bottom-0 grid bg-gradient-to-t from-black place-items-center gap-4 text-center w-full px-7"
				>
					<div class="flex font-black text-white gap-3 h-fit">
						<div class="w-2 bg-red rounded-3xl" />
						{article[0].fields.category}
					</div>
					<h2 class="text-white">
						{article[0].fields.title}
					</h2>
					<p class="text-gray-400">
						{new Date(article[0].sys.createdAt).toLocaleDateString('ar-arab', {
							calendar:'coptic',
							day: 'numeric'
						})}
						{new Date(article[0].sys.createdAt).toLocaleDateString('ar-arab', {
							calendar:'coptic',
							month: 'short'
						})} 
						{parseFloat(new Date(article[0].sys.createdAt).toLocaleDateString('ar-arab', {
							calendar:'coptic',
							year: 'numeric'
						})) + Number(4525)} |
						<span class="text-blue-600 font-black">{article[0].fields.author.fields.name}</span>
					</p>
				</div>
				<img
					src={`https:${article[0].fields.square.fields.file.url}`}
					alt={article[0].fields.title}
					class="w-fit"
					width="1080"
					height="1080"
				/>
			</a>
		</div>

		<div class="grid gap-5 h-fit w-full">
			<div class="flex justify-between border-b-2 text-gray-400 border-b-gray-300">
				<span class="border-b-4 border-b-red text-text font-black cursor-pointer py-4"
					>اخر المقالات</span
				>
				<span class="border cursor-pointer py-4">الاكثر قراءة</span>
				<span class="border cursor-pointer py-4">اخبار تشرف</span>
			</div>
			{#each article as card, index (card.sys.id)}
				{#if index < 4}
					<a href={`/post/${card.fields.slug}`} class="border-none">
						<div class="card p-0 flex gap-4">
							<img
								src={`https:${card.fields.thumbnail.fields.file.url}`}
								alt={card.fields.title}
								class="object-cover w-20 h-20"
							/>
							<div class="grid h-fit gap-3">
								<h2 class="text-black text-base">{card.fields.title}</h2>
								<p class="text-gray-400 text-sm">
									{new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
										calendar:'coptic',
										day: 'numeric'
									})}
									{new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
										calendar:'coptic',
										month: 'short'
									})} 
									{parseFloat(new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
										calendar:'coptic',
										year: 'numeric'
									})) + Number(4525)} |
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

	<a class="Blackbtn" href="https://maktabaqawmya.vercel.app" rel="noopener noreferrer"
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
				<a href={`/post/${card.fields.slug}`} class="border-none">
					<div class="card grid gap-4">
						<img
							src={`https:${card.fields.thumbnail.fields.file.url}`}
							alt={card.fields.title}
							class="w-full"
						/>
						<h2 class="text-black text-xl">{card.fields.title}</h2>
						<p class="text-gray-400">
							{new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
								calendar:'coptic',
								day: 'numeric'
							})}
							{new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
								calendar:'coptic',
								month: 'short'
							})} 
							{parseFloat(new Date(card.sys.createdAt).toLocaleDateString('ar-arab', {
								calendar:'coptic',
								year: 'numeric'
							})) + Number(4525)} |
							<span class="text-blue-600 font-black"
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
		<h2>عايز تعرف اخر الاخبار والمناسبات؟</h2>
		<p>سجل بالبريد الالكتروني علشان توصلك كل المقالات واحدث المناسبات وابرز الاسئلة</p>
	</div>

	<img src="" alt="" />
</section>

<section class="grid">
	<div class="flex gap-3 h-fit my-10">
		<div class="w-2 bg-black rounded-3xl" />
		<h2>ابرز المناسبات</h2>
	</div>
	<div class="lg:flex md:grid gap-6">
		{#each events as event (event.sys.id)}
			<a href={`/events/${event.fields.slug}`} class="w-fit">
				<div class="grid gap-7 lg:grid-cols-3 w-fit">
					<div class="h-80 w-full col-span-2 bg-rose-950 text-white relative">
						<img
							src={`https:${event.fields.image.fields.file.url}`}
							alt={event.fields.name}
							class="object-cover h-80 w-full"
						/>
						<div
							class="grid gap-5 absolute bottom-0 md:p-10 p-5 bg-gradient-to-t from-black w-full"
						>
							<h2>{event.fields.name}</h2>
							<p class="opacity-75">
								الميعاد: {new Date(event.fields.date).toLocaleDateString('ar-EG', {
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								})}
							</p>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
	<a class="Blackbtn" href="/events" rel="noopener noreferrer"
		>شوف مناسبات اكتر <span><Icon color="red" src={RiSystemArrowLeftLine} /></span></a
	>
</section>
