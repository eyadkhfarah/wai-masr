<script>
	// @ts-nocheck

	import og from '$lib/images/main.png';
	let title = 'اعلن عندنا :: وعي - مصر';
	let desc = `لو عايز تعلن عن مشروعك أو منتج هتلاقي جمهورك اللي انت عايزه`;

	// @ts-ignore
	import H1 from '$lib/Components/Text/H1.svelte';

	import Image from '$lib/images/design objectives.svg';
	import H2 from '$lib/Components/Text/H2.svelte';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
</svelte:head>

<section>
	<div class="lg:flex grid gap-9 justify-between">
		<div class="lg:w-1/2">
			<H1>أعلن عندنا</H1>
			<p>
				احنا شغالين بكل جهدنا علشان نكتبلك علي مقالات بشكل افضل و اسرع و ننشر الوعي القومي في
				الجمهورية المصرية لكن الشغل ده محتاج منا جهد كبير ووقت وفلوس علشان نقدمها لكم بأفضل شكل
				ممكن.
			</p>

			<p>علشان كده تقدر تعلن عن منتجك ومشروعك عندنا و وده بجانب خدمة Google Ad Sense.</p>

			<p>تقدر تتواصل معنا عن طريق البريد الالكتروني علشان تعرف أفضل باقات أعلانات لك.</p>

			<p>وبمجرد موافقة علي إعلانتك هتظهر في أول المقالة او في الصفحة الرئيسية.</p>

			<p class="font-black">
				لو عايز معلومات بخصوص خيارات الإعلان: <span
					><a href="mailto:nationalism.awareness@gmail.com" class="w-fit"
						>nationalism.awareness@gmail.com</a
					></span
				>
			</p>
		</div>
		<img src={Image} alt="ads" height="320" class="h-80 w-fit" />
	</div>
</section>
