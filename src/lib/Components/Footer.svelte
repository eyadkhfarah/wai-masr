<script>
	import logo from '../images/logo.svg';

	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiLogoFacebookCircleFill from 'svelte-icons-pack/ri/RiLogoFacebookCircleFill';
	import RiLogoInstagramLine from 'svelte-icons-pack/ri/RiLogoInstagramLine';
	import RiLogoTwitterFill from 'svelte-icons-pack/ri/RiLogoTwitterFill';
	import RiSystemArrowLeftLine from 'svelte-icons-pack/ri/RiSystemArrowLeftLine';
	import RiLogoTelegramFill from 'svelte-icons-pack/ri/RiLogoTelegramFill';
</script>

<footer class="grid gap-5 md:p-7 md:px-32 p-5 text-white">
	<div class="grid gap-5 text-center">
		<h2 class="text-4xl">سجل في نشرتـــنا الاخبــــارية</h2>
		<p>وخليك متابع اخر المثالات والفعاليات</p>

		<div class="border-b-8 border-black mb-14">
			<form action="" class="flex items-center md:text-base text-sm">
				<input
					type="email"
					name=""
					class="bg-transparent border-none py-6 px-0 text-white placeholder:text-white w-full"
					placeholder="بريدك الالكتروني"
					id=""
				/>
				<span class="cursor-pointer flex gap-2 items-center">
					<input type="button" value="اشترك دلوقتي" class="w-36" />
					<Icon src={RiSystemArrowLeftLine} />
				</span>
			</form>
		</div>
	</div>
	<div class="flex items-center justify-center">
		<a href="/" class="space-y-20 py-26"><img src={logo} alt="لوجو وعي مصر" class="h-24" /></a>
	</div>

	<div class="grid gap-6 text-center place-items-center">
		<div class="flex gap-4 text-white text-3xl">
			<a
				href="https://web.facebook.com/W3i.EG"
				class="hover:text-black transition-all ease-in-out duration-300"
				aria-label="صفحة الفيسبوك"><Icon src={RiLogoFacebookCircleFill} color="white" /></a
			>
			<a
				href="https://www.instagram.com/w3i.eg"
				class="hover:text-black transition-all ease-in-out duration-300"
				aria-label="صفحة الانستجرام"><Icon src={RiLogoInstagramLine} color="white" /></a
			>
			<a
				href="https://www.twitter.com/W3iEgy"
				class="hover:text-black transition-all ease-in-out duration-300"
				aria-label="صفحة الاكس"><Icon src={RiLogoTwitterFill} color="white" /></a
			>
			<a
				href="https://t.me/W3iEgy"
				class="hover:text-black transition-all ease-in-out duration-300"
				aria-label="صفحة الاكس"><Icon src={RiLogoTelegramFill} color="white" /></a
			>
		</div>

		<div class="md:flex grid gap-6 md:w-full justify-between">
			<ul class="md:hidden gap-5 p-0 m-0 list-none text-white font-black flex">
				<li>
					<a
						href="/privacy-policy"
						class="text-white hover:border-b-white transition-all ease-in-out duration-300"
						>سياسة الخصوصية</a
					>
				</li>
				<li>—</li>
				<li>
					<a
						href="/terms"
						class="text-white hover:border-b-white transition-all ease-in-out duration-300"
						>الشروط والاحكام</a
					>
				</li>
			</ul>

			<p class="m-0">© {new Date().getFullYear()} وعي مصر - جميع الحقوق محفوظة</p>

			<ul class="md:flex gap-5 p-0 m-0 list-none text-white font-black hidden">
				<li>
					<a
						href="/privacy-policy"
						class="text-white hover:border-b-white transition-all ease-in-out duration-300"
						>سياسة الخصوصية</a
					>
				</li>
				<li>—</li>
				<li>
					<a
						href="/terms"
						class="text-white hover:border-b-white transition-all ease-in-out duration-300"
						>الشروط والاحكام</a
					>
				</li>
			</ul>
		</div>
	</div>
</footer>
