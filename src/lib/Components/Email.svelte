<script>
	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiSystemArrowLeftLine from 'svelte-icons-pack/ri/RiSystemArrowLeftLine';
</script>

<div class="md:grid gap-4 text-white bg-red border p-4 h-fit hidden md:sticky top-28">
	<h2 class="m-0">حبيت مقالاتنا؟</h2>
	<p>اشترك في نشراتنا البريدية دلوقتي</p>

	<form
		action="https://app.us13.list-manage.com/subscribe/post?u=12828e0dccc7b63c7af44ec09&amp;id=64ffd839d7&amp;f_id=001890e2f0"
		method="post"
		id="mc-embedded-subscribe-form"
		name="mc-embedded-subscribe-form"
		target="_self"
	>
		<input
			type="email"
			name="email"
			id="mce-EMAIL"
			required
			value=""
			class="input placeholder:text-white text-white border-b-black"
			placeholder="بريدك الالكتروني"
		/>

		<span class="cursor-pointer flex gap-2 items-center">
			<input
				type="submit"
				name="subscribe"
				id="mc-embedded-subscribe"
				value="اشترك"
				class="Whitebtn w-full font-black border-b-black"
			/>

			<span><Icon color="black" src={RiSystemArrowLeftLine} /></span>
		</span>
	</form>
</div>
