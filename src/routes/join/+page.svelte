<script>
	//
	import H1 from '../../lib/Components/Text/H1.svelte';

	import og from '../../lib/images/main.png';

	import team from '../../lib/images/Jobs/team.svg';
	import designer from '../../lib/images/Jobs/graphic-design.svg';
	import cms from '../../lib/images/Jobs/cms.svg';
	import reporter from '../../lib/images/Jobs/news-reporter.svg';
	import editing from '../../lib/images/Jobs/video-editing.svg';
	import writer from '../../lib/images/Jobs/writer.svg';

	let title = 'وعي مصر :: انضم لينا';
	let desc = 'انضم مع فريق وعي مصر';

	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';

	import RiSystemArrowLeftLine from 'svelte-icons-pack/ri/RiSystemArrowLeftLine';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
</svelte:head>

<section class="lg:flex md:grid md:place-items-center justify-between gap-7">
	<div class="grid h-fit">
		<H1>شارك معانا في مهمتنا</H1>
		<p>لو حابب تكون جزء من فريقنا وتساهم في الفريق وتسهم انك تزود الوعي القومي المصري</p>
	</div>

	<img src={team} alt="team" class="h-96 w-fit" />
</section>

<section class="bg-red m-0 lg:px-32 p-5 py-12">
	<h1 class="my-7 text-white">أهم الأقسام</h1>
	<div class="lg:flex md:h-full w-full justify-between gap-4">
		<div class="lg:grid flex gap-9 mb-3 lg:place-items-center bg-white p-4 w-full">
			<img src={designer} alt="graphic designer" class="lg:h-28 h-16 w-fit" />
			<div class="grid">
				<h2 class="m-0 text-red">جرافيك ديزاينر</h2>
			</div>
		</div>
		<div class="lg:grid flex gap-9 mb-3 lg:place-items-center bg-white p-4 w-full">
			<img src={cms} alt="cms" class="w-fit lg:h-28 h-16" />
			<div class="grid">
				<h2 class="m-0 text-red">إدارة الموقع</h2>
			</div>
		</div>
		<div class="lg:grid flex gap-9 mb-3 lg:place-items-center bg-white p-4 w-full">
			<img src={writer} alt="writer" class="w-fit lg:h-28 h-16" />
			<div class="grid">
				<h2 class="m-0 text-red">كتابة محتوي</h2>
			</div>
		</div>
		<div class="lg:grid flex gap-9 mb-3 lg:place-items-center bg-white p-4 w-full">
			<img src={editing} alt="editior" class="w-fit lg:h-28 h-16" />
			<div class="grid">
				<h2 class="m-0 text-red">مونتاج</h2>
			</div>
		</div>
		<div class="lg:grid flex gap-9 mb-3 lg:place-items-center bg-white p-4 w-full">
			<img src={reporter} alt="presenter" class="w-fit lg:h-28 h-16" />
			<div class="grid">
				<h2 class="m-0 text-red">تقديم</h2>
			</div>
		</div>
	</div>
</section>

<section class="grid place-items-center">
	<h2>مستني ايه تعالي انضم معانا دلوقتي</h2>
	<a class="Blackbtn" href="https://forms.gle/weNzsctgZPJKHSb5A" rel="noopener noreferrer"
		>قدم دلوقتي<span><Icon color="red" src={RiSystemArrowLeftLine} /></span></a
	>
</section>
