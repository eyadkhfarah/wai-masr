<script>
	import { browser } from '$app/environment';

	let hidden = true;

	if (browser) {
		window.addEventListener(
			'scroll',

			() => {
				if (window.scrollY > 100) {
					hidden = true;
				} else {
					hidden = false;
				}
			}
		);
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiSystemArrowUpLine from 'svelte-icons-pack/ri/RiSystemArrowUpLine';
</script>

<!-- <svelte:window on:scroll={handleOnScroll} /> -->

<button
	class={`${
		hidden ? 'lg:bottom-14 bottom-5' : 'bottom-[-9em]'
	} border-2 border-black hover:border-black cursor-pointer flex gap-4 items-center hover:bg-red transition-all ease-in-out duration-300 fixed right-5 text-white bg-black p-3`}
	on:click={scrollToTop}
>
	اطلع لفوق<span><Icon src={RiSystemArrowUpLine} color="white" /></span>
</button>
