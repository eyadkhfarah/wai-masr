<script>
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();


	export let tabs;
	export let activeTab;
</script>

<div class="flex w-full border-b-2 lg:text-base text-sm text-gray-400 border-b-gray-300">
	{#each tabs as tab}
		<button
        on:click={() => dispatch("tabChange", tab)}
			class={`border-b-2 w-full lg:p-4 p-2 whitespace-nowrap ${
				tab === activeTab ? 'border-b-red border-b-4 font-black text-text' : ''
			} text-gray-400 cursor-pointer`}>{tab}</button
		>
	{/each}
</div>
