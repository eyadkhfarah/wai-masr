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

<section>
    <H1>انضم لينا</H1>
</section>