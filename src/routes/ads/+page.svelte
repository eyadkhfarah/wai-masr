<script>
	// @ts-nocheck

	import og from '$lib/images/main.png';
	let title = 'وعي - مصر :: اعلن عندنا';
	let desc = `لو عايز تعلن عن مشروعك أو منتج هتلاقي جمهورك اللي انت عايزه`;

	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiLogoFacebookCircleFill from 'svelte-icons-pack/ri/RiLogoFacebookCircleFill';
	import RiLogoInstagramLine from 'svelte-icons-pack/ri/RiLogoInstagramLine';
	import RiLogoTwitterFill from 'svelte-icons-pack/ri/RiLogoTwitterFill';
	import RiLogoTelegramFill from 'svelte-icons-pack/ri/RiLogoTelegramFill';
	import H1 from '$lib/Components/Text/H1.svelte';

</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
</svelte:head>


<section>
    <H1>أعلن عندنا</H1>
</section>