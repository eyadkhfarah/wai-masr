<script>
	// @ts-nocheck

	import { menu } from '../../utils/navLink';

	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiSystemCloseLine from 'svelte-icons-pack/ri/RiSystemCloseLine';
	import FiSearch from 'svelte-icons-pack/fi/FiSearch';
	import { page } from '$app/stores';

	export let menuTab = false;

	let search;
</script>

{#if menuTab}
	<nav
		class:open={menuTab}
		class={`md:hidden flex flex-col gap-10 bg-primary text-white p-8 fixed top-0 h-full w-full z-[100] transition-all duration-300 ease-in-out`}
	>
		<button class="cursor-pointer text-3xl w-fit h-fit" on:click>
			<Icon src={RiSystemCloseLine} color="black" />
		</button>

		<div class="flex gap-3 h-fit w-full border-b-4 border-red items-center">
			<input
				type="search"
				class="bg-transparent border-none w-full placeholder:text-black focus:border-none p-2 px-3"
				placeholder="بحث..."
				bind:value={search}
			/>
			<a href={`/search-result?search=` + search} class="border-none"
				><Icon src={FiSearch} color="black" /></a
			>
		</div>

		<ul class="grid gap-9 list-none m-0 p-0">
			{#each menu as link (link.id)}
				<li class="">
					<a
						href={link.link}
						on:click
						class="text-text font-black hover:text-red transition-all duration-300 ease-in-out flex items-center gap-4 group border-none"
						data-sveltekit-prefetch
						class:text-red={link.link === $page.url.pathname }
					>
						<div class="w-2 rounded-3xl group-hover:bg-red z-[120]" />
						<span>{link.name}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}

<style>
	nav.open {
		right: 0px;
		transition: all 300ms ease-in-out;
	}
	nav {
		right: 3000px;
		transition: all 300ms ease-in-out;
	}
</style>
