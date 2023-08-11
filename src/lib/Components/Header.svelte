<script>
	// @ts-nocheck
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FiSearch from 'svelte-icons-pack/fi/FiSearch';
	import CgMenuRightAlt from 'svelte-icons-pack/cg/CgMenuRightAlt';

	import logo from '../images/logo.svg';
	import NavModal from './NavModal.svelte';

	import { menu } from '../../utils/navLink';
	import { page } from '$app/stores';

	let menuTab = false;

	/**
	 * @type {string}
	 */
	let search;

	function handeler() {
		menuTab = !menuTab;
	}

	let scrollPrecent = '0';

	let change = true;

	let year = new Date().toLocaleDateString('ar-arab', { calendar: 'coptic', year: 'numeric' });
</script>

<header
	class:bg-black={change}
	class="bg-black p-5 z-[100] flex lg:static sticky top-0 transition-all ease-in-out duration-300 gap-5 lg:justify-between items-center"
>
	<button
		class="text-xl lg:hidden block cursor-pointer text-white"
		class:open={menuTab}
		on:click={handeler}
	>
		<Icon src={CgMenuRightAlt} color="white" />
	</button>

	<a href="/" class="text-white border-none">
		<img src={logo} alt="لوجو وعي مصر" class="lg:h-16 h-9" />
	</a>

	<div class="border-b-4 border-red lg:flex hidden gap-4 items-center">
		<input
			type="search"
			class="bg-transparent border-none placeholder:text-white text-white focus:border-none p-0 py-3"
			placeholder="بحث..."
			bind:value={search}
		/>
		<a href={`/search-result?search=` + search} data-sveltekit-reload class="text-white border-none"
			><Icon src={FiSearch} /></a
		>
	</div>
</header>
<header class={`sticky top-0 bg-black z-40 text-white transition-all ease-in-out duration-300`}>
	<nav class="border-t border-gray-900 p-3 lg:flex justify-between items-center hidden">
		<ul class="flex gap-5 list-none m-0 p-0">
			{#each menu as link (link.id)}
				<li>
					<a
						href={link.link}
						class:border-b-red={link.link === $page.url.pathname}
						class="text-white border-b-4 transition-all ease-in-out duration-300 border-b-black hover:border-b-white">{link.name}</a
					>
				</li>
			{/each}
		</ul>

		<span class="flex items-center gap-5 opacity-25">
			{new Date().toLocaleDateString('ar-arab', { calendar: 'coptic', weekday: 'long' })}
			-
			{new Date().toLocaleDateString('ar-arab', { calendar: 'coptic', day: 'numeric' })}
			/
			{new Date().toLocaleDateString('ar-arab', { calendar: 'coptic', month: 'long' })}
			/
			{parseFloat(year) + Number(4525)}
		</span>
	</nav>
</header>

<NavModal {menuTab} on:click={handeler} />
