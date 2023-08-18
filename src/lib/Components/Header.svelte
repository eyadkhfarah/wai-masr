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

	let hidden = true;

	function handleOnScroll() {
		if (window.scrollY > 160) {
			hidden = true;
		} else {
			hidden = false;
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

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

	let scrollPrecent = '0';

	let change = true;

	let year = new Date().toLocaleDateString('ar-arab', { calendar: 'coptic', year: 'numeric' });
</script>

<svelte:window on:scroll={handleOnScroll} />

<header
	class:bg-black={change}
	class="bg-black p-5 z-[100] lg:grid flex grid-cols-3 lg:static sticky top-0 transition-all ease-in-out duration-300 gap-5 lg:justify-between items-center"
>
	<button
		class="text-xl lg:hidden block cursor-pointer text-white"
		class:open={menuTab}
		on:click={handeler}
		aria-label="menu"
	>
		<Icon src={CgMenuRightAlt} color="white" />
	</button>

	<div class=" gap-5 text-white lg:grid hidden">
		<span class="text-2xl font-black">{time}</span>

		<div class="grid gap-2 text-xs opacity-50">
			<span class="flex items-center gap-5">
				{new Date().toLocaleDateString('ar-arab', { dateStyle: 'full' })}
			</span>

			<span class="flex items-center gap-5">
				{new Date().toLocaleDateString('ar-arab', { calendar: 'coptic', weekday: 'long' })}
				-
				{new Date().toLocaleDateString('ar-arab', { calendar: 'coptic', day: 'numeric' })}
				/
				{new Date().toLocaleDateString('ar-arab', { calendar: 'coptic', month: 'long' })}
				/
				{parseFloat(year) + Number(4525)}
			</span>
		</div>
	</div>

	<div class="lg:grid flex w-full place-items-center gap-4 items-center">
		<a href="/" aria-label="وعي مصر" class="text-white border-none">
			<img src={logo} alt="لوجو وعي مصر" class="lg:h-16 h-12" />
		</a>

		<span class="text-white font-black lg:text-xl text-sm">قلب مشروع الوعي القومي المصري </span>
	</div>

	<div class="border-b-4 justify-self-end border-red w-fit lg:flex hidden gap-4 items-center">
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
<header class={`sticky top-0 bg-black z-40 text-white transition-all ease-in-out duration-300`}>
	<nav class="border-t border-gray-900 p-3 text-sm lg:flex justify-between items-center hidden">
		<ul class="flex gap-5 list-none m-0 p-0">
			{#each menu as link (link.id)}
				<li>
					<a
						href={link.link}
						aria-label={link.name}
						class:border-b-red={link.link === $page.url.pathname}
						target={`${link.newTab === false ? "_blank" : "_self"}`}
						class="text-white whitespace-nowrap border-b-4 transition-all ease-in-out duration-300 border-b-black hover:border-b-white"
						>{link.name}</a
					>
				</li>
			{/each}
		</ul>

		<div class={`${hidden ? "opacity-50" : "opacity-0"} whitespace-nowrap md:hidden flex gap-5 transition-all ease-in-out duration-200`}>
			<span>{time}</span>

			<span class="flex items-center gap-5">
				{new Date().toLocaleDateString('ar-arab', { dateStyle: 'full' })}
			</span>

			<span class="flex items-center gap-5">
				{new Date().toLocaleDateString('ar-arab', { calendar: 'coptic', weekday: 'long' })}
				-
				{new Date().toLocaleDateString('ar-arab', { calendar: 'coptic', day: 'numeric' })}
				/
				{new Date().toLocaleDateString('ar-arab', { calendar: 'coptic', month: 'long' })}
				/
				{parseFloat(year) + Number(4525)}
			</span>
		</div>
	</nav>
</header>

<NavModal {menuTab} on:click={handeler} />
