<script>
    // 
    import H1 from "../../lib/Components/Text/H1.svelte";
    
	import og from '../../lib/images/main.png';
    let title = 'وعي مصر :: انضم لينا';
	let desc = 'انضم مع فريق وعي مصر';

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