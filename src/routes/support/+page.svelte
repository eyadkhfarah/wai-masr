<script>
	import H1 from "../../lib/Components/Text/H1.svelte";

    import og from '../../lib/images/main.png';
    let title = 'وعي مصر :: أدعمنا';
	let desc = 'ادعم فريق وعي مصر ماديا';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
</svelte:head>

<section>
    <H1>أدعمنا</H1>
</section>