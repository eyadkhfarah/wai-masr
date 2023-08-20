<script>
	// @ts-nocheck

	import { navigating, page } from '$app/stores';
	import Loading from '$lib/Components/Loading.svelte';
	import Footer from '$lib/Components/Footer.svelte';
	import Header from '$lib/Components/Header.svelte';
	import ToTop from '$lib/Components/ToTop.svelte';

	import './styles.css';
	import { Delayed } from '$lib/store';
	import GoogleAnalytics from '$lib/Components/GoogleAnalytics.svelte';

	import { partytownSnippet } from '@builder.io/partytown/integration';
</script>

<svelte:head>
	<link rel="canonical" href={`https://waimasr.vercel.app${$page.url.pathname}`} />
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2125888694918985"
		crossorigin="anonymous"
	></script>

	<script>
		partytown = {
			forward: ['dataLayer.push']
		};
	</script>

	<GoogleAnalytics />

	{@html '<script>' + partytownSnippet() + '</script>'}
</svelte:head>

<Header />

{#if $Delayed}
	<Loading />
{:else}
	<main>
		<slot />
	</main>
{/if}

<Footer />
<ToTop />

<style>
</style>
