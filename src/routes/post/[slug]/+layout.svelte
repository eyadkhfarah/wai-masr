<!-- <script>

	let scrollPrecent = '0';

	function updateProgressBar() {
		let precent = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100 + "%"

        return precent = scrollPrecent
	}

</script>

<svelte:window on:scroll={updateProgressBar} />

<div class={`h-2 w-[${scrollPrecent}] bg-red transition-all ease-in-out duration-300 fixed lg:top-12 md:top-[38px] z-10`} />
<slot /> -->
