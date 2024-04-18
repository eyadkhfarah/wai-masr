<script>
	// @ts-nocheck

	import logo from '../images/logo.svg';

	// @ts-ignore
	import { Icon } from 'svelte-icons-pack';

	import {
		RiLogosTwitterXLine,
		RiArrowsArrowLeftLine,
		RiLogosTelegramFill,
		RiLogosYoutubeFill,
		RiLogosFacebookCircleFill,

		RiLogosInstagramLine

	} from 'svelte-icons-pack/ri';

	import { footerLink } from '../../utils/footerLink';
</script>

<footer class="grid gap-5 md:p-7 md:px-32 p-5 pb-24 text-white bg-red">
	<div class="grid gap-5 text-center">
		<h2 class="text-4xl">سجل في نشرتـــنا اليوميــــة</h2>
		<p>عشان يوصلك كل جديد</p>

		<div class="lg:border-b-8 border-black mb-14">
			<form
				netlify
				action="https://app.us13.list-manage.com/subscribe/post?u=12828e0dccc7b63c7af44ec09&amp;id=64ffd839d7&amp;f_id=001890e2f0"
				method="post"
				id="mc-embedded-subscribe-form"
				name="mc-embedded-subscribe-form"
				target="_self"
				class="md:flex grid md:gap-0 gap-4 items-center md:text-base text-sm validate"
			>
				<input
					type="email"
					id="mce-EMAIL"
					required
					value=""
					name="email"
					class="bg-transparent lg:border-none border-t-0 border-x-0 border-b-8 border-black focus:ring-0 py-6 px-0 text-white placeholder:text-white w-full"
					placeholder="بريدك الالكتروني"
				/>

				<span
					class="cursor-pointer flex justify-between items-center gap-2 lg:border-none border-b-4 border-black py-4"
				>
					<input
						type="submit"
						name="subscribe"
						id="mc-embedded-subscribe"
						value="اشترك دلوقتي"
						class="lg:w-36 w-full cursor-pointer text-right"
					/>
					<Icon src={RiArrowsArrowLeftLine} size={25} />
				</span>
			</form>
		</div>
	</div>
	<div class="flex items-center justify-center">
		<a href="/" class="space-y-20 py-26"
			><img src={logo} alt="لوجو وعي - مصر" class="h-24" height="96" width="240" /></a
		>
	</div>

	<div class="grid gap-6 text-center place-items-center">
		<div class="flex flex-row-reverse gap-2 text-white text-3xl">
			<a
				href="https://web.facebook.com/W3i.EG"
				class="hover:text-black transition-all p-3 ease-in-out duration-300"
				target="_blank"
				aria-label="صفحة الفيسبوك"
				title="تابع وعي مصر علي الفيسبوك"><Icon src={RiLogosFacebookCircleFill} color="white" /></a
			>
			 <a
				href="https://www.instagram.com/w3i.eg"
				class="hover:text-black transition-all p-3 ease-in-out duration-300"
				target="_blank"
				title="تابع وعي مصر علي الانستاجرام"
				aria-label="صفحة الانستجرام"><Icon src={RiLogosInstagramLine} color="white" /></a
			>
			<a
				href="https://www.twitter.com/W3iEgy"
				class="hover:text-black transition-all p-3 ease-in-out duration-300"
				target="_blank"
				title="تابع وعي مصر علي الاكس (تويتر)"
				aria-label="صفحة الاكس"><Icon src={RiLogosTwitterXLine} color="white" /></a
			>
			<a
				href="https://t.me/W3iEgy"
				class="hover:text-black transition-all p-3 ease-in-out duration-300"
				target="_blank"
				title="اشترك في قناة وعي مصر علي التليجرام"
				aria-label="قناة التليجرام"><Icon src={RiLogosTelegramFill} color="white" /></a
			>
			<a
				href="https://www.youtube.com/@w3istation"
				class="hover:text-black transition-all p-3 ease-in-out duration-300"
				target="_blank"
				title="اشترك في محطة وعي علي اليوتيوب"
				aria-label="قناة اليوتيوب"><Icon src={RiLogosYoutubeFill} color="white" /></a
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
							class="text-white w-full p-3 hover:border-b-white border-b-red border-b-4 transition-all ease-in-out duration-300"
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
