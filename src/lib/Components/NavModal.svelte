<script>
	// @ts-nocheck

	import { menu } from '../../utils/navLink';

	import { Icon } from 'svelte-icons-pack';
	import { RiSystemCloseLine } from 'svelte-icons-pack/ri';
	import { FiSearch } from 'svelte-icons-pack/fi';
	import { page } from '$app/stores';

	export let menuTab = false;

	let search;
</script>

{#if menuTab}
	<nav
		class:left-0={menuTab}
		class="lg:hidden md:flex flex-col gap-10 bg-primary text-white p-8 fixed top-0 h-full w-full z-[100] transition-all duration-300 ease-in-out overflow-y-auto"
	>
		<div class="flex justify-between items-center">
			<button class="cursor-pointer p-3 text-3xl w-fit h-fit" aria-label="close" on:click>
				<Icon src={RiSystemCloseLine} color="black" size={25} />
			</button>

			<span class="flex items-center gap-5 text-gray-500 font-black text-sm">
				{new Date().toLocaleDateString('ar-u-nu-arab', { calendar: 'coptic', weekday: 'long' })}
				-
				{new Date().toLocaleDateString('ar-u-nu-arab', { calendar: 'coptic', day: 'numeric' })}
				/
				{new Date().toLocaleDateString('ar-u-nu-arab', { calendar: 'coptic', month: 'long' })}
				/
				{parseFloat(
					new Date().toLocaleDateString('ar-arab', { calendar: 'coptic', year: 'numeric' })
				) + Number(4525)}
			</span>
		</div>

		<div class="flex gap-3 h-fit w-full border-b-4 border-red items-center my-7">
			<input
				type="search"
				class="bg-transparent focus:ring-0 border-none w-full placeholder:text-black focus:border-none p-2 px-3"
				placeholder="بحث..."
				bind:value={search}
			/>
			<a
				href={`/search-result?search=` + search}
				aria-label={search}
				data-sveltekit-reload
				class="border-none"></a
			>
		</div>
		<Icon src={FiSearch} color="black" />
		<ul class="grid gap-9 list-none m-0 p-0">
			{#each menu as link (link.id)}
				{#if link.link != '/support'}
					<li class="">
						<a
							href={link.link}
							aria-label={link.name}
							on:click
							target={`${link.newTab === false ? '_self' : '_blank'}`}
							class="text-text font-black hover:text-red transition-all duration-300 ease-in-out flex items-center gap-4 group border-none"
							data-sveltekit-prefetch
							class:text-red={link.link === $page.url.pathname}
						>
							<div class="w-2 rounded-3xl group-hover:bg-red z-[120]" />
							<span>{link.name}</span>
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
{/if}
