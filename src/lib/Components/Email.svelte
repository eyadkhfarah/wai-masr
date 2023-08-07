<script>
    	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiSystemArrowLeftLine from 'svelte-icons-pack/ri/RiSystemArrowLeftLine';
</script>

<div class="md:grid gap-4 text-white bg-red border p-4 h-fit hidden md:sticky top-28">
    <h2 class="m-0">حبيت مقالاتنا؟</h2>
    <p>اشترك في نشراتنا البريدية دلوقتي</p>

    <form action="">
        <input type="email" name="email" id="email" class="input border-b-white" placeholder="بريدك الالكتروني">
        <button type="button" class="Whitebtn w-full font-black" >
			<span>اشترك</span>
			<span><Icon color="white" src={RiSystemArrowLeftLine} /></span>
		</button>
    </form>
</div>