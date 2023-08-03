<script>
	import { navigating } from '$app/stores';
	import Loading from '../lib/Components/Loading.svelte';
	import Footer from '../lib/Components/Footer.svelte';
	import Header from '../lib/Components/Header.svelte';
	import './styles.css';
	import { Delayed } from '../lib/store';
</script>

<div class="app">
	<Header />

	{#if $Delayed}
		<Loading />
	{:else}
		<main>
			<slot />
		</main>
	{/if}

	<Footer />
</div>

<style>
</style>
