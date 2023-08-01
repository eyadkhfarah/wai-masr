<script>
	// @ts-nocheck

	import { menu } from '../../utils/navLink';

	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiSystemCloseLine from 'svelte-icons-pack/ri/RiSystemCloseLine';
	import FiSearch from 'svelte-icons-pack/fi/FiSearch';

	/**
	 * @type {Function}
	 */
	export let handeler
	export let menuTab = true;

	let search;
</script>

<nav
	class:open={menuTab}
	class={`md:hidden flex flex-col gap-10 bg-black text-white p-8 fixed top-0 h-full w-full z-[100]`}
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<span class=" cursor-pointer text-3xl w-fit h-fit" on:click={handeler}>
		<Icon src={RiSystemCloseLine} color="white" />
	</span>

	<div class="flex gap-3 h-fit w-full">
		<input
			type="text"
			class="bg-slate-800 rounded-2xl border-slate-800 p-2 px-3 w-full"
			placeholder="بحث..."
			bind:value={search}
		/>
		<a href={`/search-result?search=` + search} class="Whitebtn"><Icon src={FiSearch} /></a>
	</div>

	<ul class="grid gap-9">
		{#each menu as link (link.id)}
			<li class="">
				<a href={link.link} class="text-white flex items-center gap-4 group">
					<div class="w-2 rounded-3xl group-hover:bg-white z-[120]" />
					<span>{link.name}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	/* nav .open {
		right: 0px;
	} */
	nav {
		right: 3000px;
	}
</style>
