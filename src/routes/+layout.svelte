<script>
	import { navigating, page } from '$app/stores';
	import Loading from '../lib/Components/Loading.svelte';
	import Footer from '../lib/Components/Footer.svelte';
	import Header from '../lib/Components/Header.svelte';
	import ToTop from '../lib/Components/ToTop.svelte';

	import './styles.css';
	import { Delayed } from '../lib/store';
	
</script>
<svelte:head>
	<link rel="canonical" href={`https://waimasr.vercel.app${$page.url.pathname}`}/>
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2125888694918985"
	crossorigin="anonymous"></script>


   <script src="https://www.googletagmanager.com/gtag/js?id=G-ZX7H2KPXNZ"></script>
   <script>
	   window.dataLayer = window.dataLayer || [];
	   function gtag() { dataLayer.push(arguments); }
	   gtag('js', new Date());
	   gtag('config', 'G-ZX7H2KPXNZ');
   </script>
</svelte:head>

<Header />

{#if $Delayed}
	<Loading />
{:else}
	<slot />
	<ToTop />
{/if}

<Footer />

<style>
</style>
