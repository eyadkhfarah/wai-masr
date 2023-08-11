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
