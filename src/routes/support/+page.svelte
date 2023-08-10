<script>
	import H1 from "../../lib/Components/Text/H1.svelte";

    import og from '../../lib/images/main.png';
    let title = 'وعي مصر :: أدعمنا';
	let desc = 'ادعم فريق وعي مصر ماديا';

	
	// @ts-ignore
</script>

<svelte:head>
	<script src="https://www.paypal.com/sdk/js?client-id=test&currency=USD"></script>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<link rel="canonical" href="https://waimasr.vercel.app/support" />
</svelte:head>

<section>
    <H1>أدعمنا</H1>
</section>

<section>
</section>