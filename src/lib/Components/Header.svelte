<script>
	// @ts-nocheck
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FiSearch from 'svelte-icons-pack/fi/FiSearch';
	import CgMenuRightAlt from 'svelte-icons-pack/cg/CgMenuRightAlt';

	import logo from '../images/logo.svg';
	import NavModal from './NavModal.svelte';

	import { menu } from '../../utils/navLink';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	let menuTab = false;

	let hidden = true;

	if (browser) {
		window.addEventListener(
			'scroll',
			() => {
				if (window.scrollY > 140) {
					hidden = true;
				} else {
					hidden = false;
				}
			}
		)}

	/**
	 * @type {string}
	 */
	let search;

	function handeler() {
		menuTab = !menuTab;
	}

	let time = new Date();
	let h = time.getHours(); // 0 - 23
	let m = time.getMinutes(); // 0 - 59
	let s = time.getSeconds(); // 0 - 59
	let session = 'صباحاً';

	if (h == 0) {
		h = 12;
	}

	if (h > 12) {
		h = h - 12;
		session = 'مساءاً';
	}

	h = h < 10 ? '0' + h : h;
	m = m < 10 ? '0' + m : m;
	s = s < 10 ? '0' + s : s;

	time = h + ':' + m + ' ' + session;

	let year = new Date().toLocaleDateString('ar-arab', { calendar: 'coptic', year: 'numeric' });
</script>

<!-- <svelte:window on:scroll={handleOnScroll} /> -->

<header
	class={`z-[100] ${
		hidden || $page.url.pathname != '/' ? 'bg-black lg:static' : 'bg-transparent'
	} w-full p-5 flex sticky top-0 transition-all ease-in-out duration-300 gap-5 lg:justify-between items-center`}
>
	<button
		class="text-xl lg:hidden p-3 block cursor-pointer text-white"
		class:open={menuTab}
		on:click={handeler}
		aria-label="menu"
	>
		<Icon src={CgMenuRightAlt} color="white" size={25}/>
	</button>

	<div class="flex w-full place-items-center gap-4 items-center">
		<a href="/" aria-label="وعي مصر" class="text-white border-none">
			<img src={logo} alt="لوجو وعي مصر" class="lg:h-16 h-12" height="48" width="128"/>
		</a>

		<span class="text-white font-black lg:text-xl text-sm">قلب مشروع الوعي القومي المصري </span>
	</div>

	<div class="border-b-4 justify-self-end border-red w-fit md:flex hidden gap-4 items-center">
		<input
			type="search"
			class="bg-transparent border-none placeholder:text-white text-white p-0 py-3 focus:ring-0"
			placeholder="بحث..."
			bind:value={search}
		/>
		<a
			href={`/search-result?search=` + search}
			aria-label="بحث"
			data-sveltekit-reload
			class="text-white border-none"><Icon src={FiSearch} /></a
		>
	</div>
</header>

<nav
	class={`sticky top-0 ${
		hidden || $page.url.pathname != '/'
			? 'bg-black border-gray-900'
			: 'bg-transparent border-gray-400'
	}  z-40 text-white w-full transition-all ease-in-out duration-300 border-t p-3 text-base lg:flex justify-between items-center hidden`}
>
	<ul class="flex gap-5 list-none m-0 p-0">
		{#each menu as link (link.id)}
			{#if link.link != '/support'}
				<li>
					<a
						href={link.link}
						aria-label={link.name}
						target={`${link.newTab === false ? '_self' : '_blank'}`}
						class={`${
							link.link === $page.url.pathname ? 'text-red' : 'text-white'
						}  whitespace-nowrap hover:text-red transition-all ease-in-out duration-300`}
						>{link.name}</a
					>
				</li>
			{/if}
		{/each}
	</ul>

	<div
		class="opacity-50 whitespace-nowrap hidden md:flex gap-5 transition-all ease-in-out duration-200"
	>
		<span>{time}</span>

		<span class="flex items-center gap-5">
			{new Date().toLocaleDateString('ar-arab', { dateStyle: 'full' })}
		</span>

		<span class="flex items-center gap-5">
			{new Date().toLocaleDateString('ar-arab', { calendar: 'coptic', day: 'numeric' })}
			{new Date().toLocaleDateString('ar-arab', { calendar: 'coptic', month: 'long' })}
			{parseFloat(year) + Number(4525)}
		</span>
	</div>
</nav>

<NavModal {menuTab} on:click={handeler} />
