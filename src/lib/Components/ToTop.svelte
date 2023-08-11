<script>
	let hidden = true;

	function handleOnScroll() {
		if (window.scrollY > 100) {
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

	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiSystemArrowUpLine from 'svelte-icons-pack/ri/RiSystemArrowUpLine';
</script>

<svelte:window on:scroll={handleOnScroll} />

<button
	class={`${hidden ? "bottom-5" : "bottom-[-9em]"} border-1-red hover:border-black cursor-pointer flex gap-4 items-center hover:bg-red transition-all ease-in-out duration-300 fixed right-5 text-white bg-black p-3`}
	on:click={scrollToTop}
>
	اطلع لفوق<span><Icon src={RiSystemArrowUpLine} color="white" /></span>
</button>
