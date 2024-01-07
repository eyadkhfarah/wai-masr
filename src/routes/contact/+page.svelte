<script>
	// @ts-nocheck

	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiSystemArrowLeftLine from 'svelte-icons-pack/ri/RiSystemArrowLeftLine';
	import RiLogoFacebookCircleFill from 'svelte-icons-pack/ri/RiLogoFacebookCircleFill';
	import RiLogoInstagramLine from 'svelte-icons-pack/ri/RiLogoInstagramLine';
	import RiLogoTwitterFill from 'svelte-icons-pack/ri/RiLogoTwitterFill';
	import RiLogoTelegramFill from 'svelte-icons-pack/ri/RiLogoTelegramFill';
	import H1 from '$lib/Components/Text/H1.svelte';

	import og from '$lib/images/main.png';
	let title = 'وعي - مصر :: اتواصل معانا';
	let desc = 'تواصل مع فريق وعي - مصر';

	import { form, field } from 'svelte-forms';
	import { required, email, pattern, min } from 'svelte-forms/validators';

	const FirstName = field('FirstName', '', [required()]);
	const LastName = field('LastName', '', [required()]);
	const emails = field('email', '', [
		email(),
		required(),
		pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/)
	]);
	const phone = field('phone', '', [required(), min(11)]);
	const governate = field('governate', '');
	const message = field('message', '', [required()]);

	const myForm = form(FirstName, LastName, emails, phone, governate, message);

	// async function submit(event) {
	// 	const form = event.target;
	// 	const data = new FormData(form);

	// 	console.log(data);

	// 	// await fetch('/api/newsletter', {
	// 	//   method: 'POST',
	// 	//   body: data
	// 	// })
	// }
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
		<H1>اتواصل معنا</H1>

		<p class="m-0">
			تقدروا تتواصلوا معانا أي وقت وتقولونا آراءكم واقتراحاتكم في كل المواضيع اللي شوفتوها أو تحبوا
			تشوفوها في المستقبل. متتردوش إنكم تمشاركوا أفكاركم ومواضيعكم المفضلة. هنكون مبسوطين جدًا
			بالتفاعل معاكم وتلبية مقترحاتكم وطلباتكم في أقرب فرصة متاحة.
		</p>

		<h2 class="m-0 text-xl">أو تقدروا توصلولنا من علي حساباتنا في مواقع التواصل الاجتماعي</h2>

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

		<h2 class="m-0 text-xl">أو علي بريدنا الالكتروني</h2>

		<a href="mailto:nationalism.awareness@gmail.com" class="w-fit"
			>nationalism.awareness@gmail.com</a
		>
	</div>

	<form netlify class="w-full grid gap-5" method="POST">
		<input
			type="text"
			name="First Name"
			required
			id="firstName"
			placeholder="اسمك الاول*"
			class="input"
		/>
		<!-- {#if $myForm.hasError('FirstName.required')}
			<p class="text-red">اكتب اسمك الاول</p>
		{/if} -->
		<input
			type="text"
			name="Last Name"
			required
			id="lastName"
			placeholder="اسم العائلة*"
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
		<input type="tel" name="phone" id="phone" placeholder="رقم الموبايل" class="input" />
		<input type="text" name="governate" id="governate" placeholder="محافظتك" class="input" />

		<textarea
			class="input"
			name="message"
			id="message"
			rows={10}
			cols={30}
			placeholder="ابعتلنا رسالتك*"
			required
		/>

		<input accept="application/pdf" type="file" id="actual-btn" hidden />

		<label
			for="actual-btn"
			class="input text-center p-4 font-black hover:border-b-black transition-all ease-in-out duration-300 cursor-pointer"
			>أرفع مقالتك بملف PDF <span /></label
		>

		<button type="submit" class="Blackbtn w-full font-black">
			ابعــــت
			<span><Icon color="red" src={RiSystemArrowLeftLine} /></span>
		</button>
	</form>
</section>
