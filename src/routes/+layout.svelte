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
	<link rel="canonical" href={`https://w3ieg.com${$page.url.pathname}`} />
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

	<!-- Google Tag Manager -->
	<!-- Google Tag Manager -->
	<!-- Google Tag Manager -->
	<!-- Google Tag Manager -->
	<script>
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-K74BSCHL');
	</script>
	<!-- End Google Tag Manager -->

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

<!-- Google Tag Manager (noscript) -->
<noscript>
	<iframe
		src="https://www.googletagmanager.com/ns.html?id=GTM-K74BSCHL"
		height="0"
		width="0"
		style="display:none;visibility:hidden"
	/>
</noscript>
<!-- End Google Tag Manager (noscript) -->

<style>
</style>
