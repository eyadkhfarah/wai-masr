<script>
	// @ts-ignore
	import { Icon } from 'svelte-icons-pack';
	import { RiArrowsArrowLeftLine } from 'svelte-icons-pack/ri';
</script>

<div class="md:grid gap-4 text-white w-full bg-red border p-4 h-fit hidden md:sticky top-28">
	<h2 class="m-0">حبيت مقالاتنا؟</h2>
	<p class="m-0 w-full">اكتب وابعت مقالتك لينا واحنا هننشرها لك</p>

	<a
		class="Whitebtn leading-none flex w-full items-center gap-6 border-b-black hover:border-b-white"
		href="/contact"
		rel="noopener noreferrer"
		>أنشر مقالتك<span><Icon color="black" src={RiArrowsArrowLeftLine} /></span></a
	>
</div>
