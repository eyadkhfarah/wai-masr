<script>
	import og from '../../lib/images/main.png';

	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiSystemArrowLeftLine from 'svelte-icons-pack/ri/RiSystemArrowLeftLine';
	import RiLogoFacebookCircleFill from 'svelte-icons-pack/ri/RiLogoFacebookCircleFill';
	import RiLogoInstagramLine from 'svelte-icons-pack/ri/RiLogoInstagramLine';
	import RiLogoTwitterFill from 'svelte-icons-pack/ri/RiLogoTwitterFill';
	import RiLogoTelegramFill from 'svelte-icons-pack/ri/RiLogoTelegramFill';
	import H1 from '../../lib/Components/Text/H1.svelte';

	let title = 'وعي مصر :: تواصل معنا';
	let desc = 'تواصل مع فريق وعي مصر';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
</svelte:head>

<section class="grid gap-5 md:grid-cols-2">
	<div class="grid gap-6 h-fit">
		<H1>تواصل معنا</H1>

		<p class="m-0">تقدر تتواصل مع فريق وعي مصر عن طريق انك تملا الفورم اللي قدامك ده.</p>

		<h2 class="m-0 text-xl">أو كلمنا علي حساباتنا في مواقع التواصل الاجتماعي</h2>

		<div class="flex items-center gap-5 text-3xl mb-5">
			<a
				href="https://web.facebook.com/W3i.EG"
				class="hover:text-black transition-all border-none ease-in-out duration-300"
				aria-label="صفحة الفيسبوك"><Icon src={RiLogoFacebookCircleFill} color="black" /></a
			>
			<a
				href="https://www.instagram.com/w3i.eg"
				class="hover:text-black transition-all border-none ease-in-out duration-300"
				aria-label="صفحة الانستجرام"><Icon src={RiLogoInstagramLine} color="black" /></a
			>
			<a
				href="https://www.twitter.com/W3iEgy"
				class="hover:text-black transition-all border-none ease-in-out duration-300"
				aria-label="صفحة الاكس"><Icon src={RiLogoTwitterFill} color="black" /></a
			>
			<a
				href="https://t.me/W3iEgy"
				class="hover:text-black transition-all border-none ease-in-out duration-300"
				aria-label="صفحة الاكس"><Icon src={RiLogoTelegramFill} color="black" /></a
			>
		</div>

		<h2 class="m-0 text-xl">أو كلمنا علي البريد الالكتروني بتاعنا</h2>

		<a href="mailto:nationalism.awareness@gmail.com" class="w-fit">nationalism.awareness@gmail.com</a>

	</div>

	<form class="w-full grid gap-5" action="">
		<input
			type="text"
			name="First Name"
			required
			id="firstName"
			placeholder="اسمك الاول*"
			class="input"
		/>
		<input
			type="text"
			name="Last Name"
			required
			id="lastName"
			placeholder="اسمك العائلة*"
			class="input"
		/>
		<input
			type="email"
			name="email"
			required
			id="email"
			placeholder="بريدك الإلكتروني*"
			class="input"
		/>
		<input
			type="tel"
			name="number"
			id="number"
			placeholder="رقم الهاتف (يستحسن يكون عليه واتس)"
			class="input"
		/>
		<input type="text" name="governate" id="governate" placeholder="محافظتك" class="input" />

		<textarea
			class="input"
			name="message"
			id="message"
			placeholder="عبر عن اللي نفسك فيه*"
			required
		/>

		<button type="button" class="Blackbtn w-full font-black" >
			<span>ابعت رسالتك</span>
			<span><Icon color="red" src={RiSystemArrowLeftLine} /></span>
		</button>
	</form>
</section>
