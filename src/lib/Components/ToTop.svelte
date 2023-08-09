<script>
	export let showOnPx = 150;
	let hidden = true;

	function goTop() {
		document.body.scrollIntoView();
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}

  // @ts-ignore
  import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiSystemArrowUpLine from 'svelte-icons-pack/ri/RiSystemArrowUpLine';
</script>

<svelte:window on:scroll={handleOnScroll} />

<div
	class="cursor-pointer flex gap-4 items-center hover:bg-red opacity-100 transition-all ease-in-out duration-300 fixed right-5 bottom-5 text-white bg-black p-3"
	on:click={goTop}
	class:opacity-0={hidden}
>
	اطلع لفوق<span><Icon src={RiSystemArrowUpLine} color="white"/></span>
</div>
