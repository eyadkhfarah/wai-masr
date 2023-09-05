<script>
	import logo from '../images/logo.svg';

	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiLogoFacebookCircleFill from 'svelte-icons-pack/ri/RiLogoFacebookCircleFill';
	import RiLogoInstagramLine from 'svelte-icons-pack/ri/RiLogoInstagramLine';
	import RiLogoTwitterFill from 'svelte-icons-pack/ri/RiLogoTwitterFill';
	import RiSystemArrowLeftLine from 'svelte-icons-pack/ri/RiSystemArrowLeftLine';
	import RiLogoTelegramFill from 'svelte-icons-pack/ri/RiLogoTelegramFill';
	import RiLogoYoutubeFill from 'svelte-icons-pack/ri/RiLogoYoutubeFill';

	import { footerLink } from '../../utils/footerLink';
</script>

<footer class="grid gap-5 md:p-7 md:px-32 p-5 pb-24 text-white bg-red">
	<div class="grid gap-5 text-center">
		<h2 class="text-4xl">سجل في نشرتـــنا اليوميــــة</h2>
		<p>عشان يوصلك كل جديد</p>

		<div class="border-b-8 border-black mb-14">
			<form
				action="https://app.us13.list-manage.com/subscribe/post?u=12828e0dccc7b63c7af44ec09&amp;id=64ffd839d7&amp;f_id=001890e2f0"
				method="post"
				id="mc-embedded-subscribe-form"
				name="mc-embedded-subscribe-form"
				target="_self"
				class="flex items-center md:text-base text-sm validate"
			>
				<input
					type="email"
					id="mce-EMAIL"
					required
					value=""
					name="email"
					class="bg-transparent focus:ring-0 border-none py-6 px-0 text-white placeholder:text-white w-full"
					placeholder="بريدك الالكتروني"
				/>

				<span class="cursor-pointer flex gap-2 items-center">
					<input
						type="submit"
						name="subscribe"
						id="mc-embedded-subscribe"
						value="اشترك دلوقتي"
						class="w-36"
					/>
					<Icon src={RiSystemArrowLeftLine} />
				</span>
			</form>
		</div>
	</div>
	<div class="flex items-center justify-center">
		<a href="/" class="space-y-20 py-26"><img src={logo} alt="لوجو وعي - مصر" class="h-24" /></a>
	</div>

	<div class="grid gap-6 text-center place-items-center">
		<div class="flex flex-row-reverse gap-4 text-white text-3xl">
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
			<a
				href="https://www.youtube.com/@w3istation"
				class="hover:text-black transition-all ease-in-out duration-300"
				aria-label="قناة اليوتيوب"><Icon src={RiLogoYoutubeFill} color="white" /></a
			>
		</div>

		<div class="md:flex grid md:m-0 mt-16 place-items-center gap-6 md:w-full justify-between">
			<!-- Moblie -->
			<ul
				class="md:hidden p-0 m-0 list-none w-full mb-9 text-white font-black text-base grid gap-9"
			>
				{#each footerLink as link (link.id)}
					<li>
						<a
							href={link.link}
							class="text-white w-full hover:border-b-white border-b-red border-b-4 transition-all ease-in-out duration-300"
							>{link.title}</a
						>
					</li>
				{/each}
			</ul>

			<p class="m-0">© {new Date().getFullYear()} وعي مصر - جميع الحقوق محفوظة</p>

			<ul class="md:flex gap-5 p-0 m-0 list-none text-white font-black hidden">
				{#each footerLink as link (link.id)}
					<li>
						<a
							href={link.link}
							class="text-white hover:border-b-white border-b-red border-b-4 transition-all ease-in-out duration-300"
							>{link.title}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</footer>
