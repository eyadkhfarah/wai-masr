<script>
    // 
    import H1 from "../../lib/Components/Text/H1.svelte";
    
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
	import FiSearch from 'svelte-icons-pack/fi/FiSearch';

</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
</svelte:head>

<section class="flex justify-between gap-7">
	<div class="grid h-fit">
		<H1>شارك معانا في مهمتنا</H1>
		<p>لو حابب تكون جزء من فريقنا وتساهم في الفريق وتسهم انك تزود الوعي القومي المصري</p>
	</div>

	<img src={team} alt="team" class="h-96 w-fit" srcset="">
</section>

<section class="bg-red m-0 md:px-32 p-5">
	<div class="flex w-full justify-between">
		<img src={designer} alt="graphic designer" class="w-28 h-28" srcset="">
		<img src={cms} alt="graphic designer" class="w-28 h-28" srcset="">
		<img src={writer} alt="graphic designer" class="w-28 h-28" srcset="">
		<img src={reporter} alt="graphic designer" class="w-28 h-28" srcset="">
		<img src={editing} alt="graphic designer" class="w-28 h-28" srcset="">
	</div>
</section>