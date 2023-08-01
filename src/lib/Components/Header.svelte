<script>
// @ts-nocheck

	/**
	 * @type {any}
	 */
	import { page } from '$app/stores';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FiSearch from 'svelte-icons-pack/fi/FiSearch';
	import CgMenuRightAlt from 'svelte-icons-pack/cg/CgMenuRightAlt';

	import logo from '../images/logo.svg';
	import NavModal from './NavModal.svelte';

	import { menu } from '../../utils/navLink';

	/**
	 * @type {boolean}
	 */
	let menuTab = false;
	
	/**
	 * @type {string}
	 */
	let search;

	function handeler() {
		menuTab = !menuTab;
	};

	// let visible = false

	// function show() {
	// 	window.addEventListener("scroll", () => {
	// 	  if (window.scrollY > 400) {
	// 		visible(true);
	// 	  } else {
	// 		visible(false);
	// 	  }
	// 	});

	// }
	// ${ visible ? "bg-black": "bg-red"}
	// console.log(visible)

	</script>


<header class="bg-red p-5 flex md:static sticky gap-5 md:justify-between items-center">
	<span class="text-xl md:hidden block cursor-pointer" class:open={menuTab}>
		<Icon src={CgMenuRightAlt} on:click={handeler}/>
	</span>

	<a href="/" class="text-white">
		<img src={logo} alt="لوجو وعي مصر" class="md:h-16 h-9" />
	</a>

	<div class="border-b-4 border-black md:flex hidden gap-4 items-center">
		<input
			type="text"
			class="bg-transparent border-none placeholder:text-white focus:border-none p-2 px-3"
			placeholder="بحث..."
			bind:value={search}
		/>
		<a href={`/search-result?search=` + search} class="text-white"><Icon src={FiSearch} /></a>
	</div>
</header>
<header class={`sticky top-0 bg-red z-40 text-white`}>

	<nav class="border-t border-gray-900 p-3 md:flex justify-between items-center hidden">
		<ul class="flex gap-5">
			{#each menu as link (link.id)}
				<li><a href={link.link} class="text-white border-2 border-red hover:border-b-white">{link.name}</a></li>
			{/each}
		</ul>

		<p class="flex items-center gap-5 opacity-25">
			{new Intl.DateTimeFormat('ar-u-nu-en', { dateStyle: 'full' }).format(new Date())}
			<!-- <span>—</span>
			{new Intl.DateTimeFormat('ar-u-nu-en', { dateStyle: 'full' }).format(new Date())} -->
		</p>
	</nav>
</header>

<NavModal {menuTab} {handeler}/>
