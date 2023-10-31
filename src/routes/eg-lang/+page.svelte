<script>
	// @ts-nocheck

	// /** @type {import('./$types').PageData} */
	// export let data;
	import H1 from '$lib/Components/Text/H1.svelte';

	import og from '$lib/images/main.png';
	import BlackBtn from '$lib/Components/Button/BlackBtn.svelte';
	import H2 from '$lib/Components/Text/H2.svelte';

	let title = 'اتعلم اللغة المصرية :: وعي - مصر';
	let desc = `تقدر تتعلم اللغة المصرية سواء بالكتابة الهيروغليفية أو الكتابة القبطية مع وعي - مصر.`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
</svelte:head>

<section>
	<H1>أتعلم اللغة المصرية</H1>
	<p>{desc}</p>
</section>

<section>
	<H2>الكتابة الهيروغليفية</H2>
	<p>
		تقدر تتعلم طريقة كتابة ونطق الحروف المصرية بالكتابة الهيروغليفية مع الدكتورة/ هدي عبد العزيز في
		برنامج <span>لغتنا القديمة</span>
	</p>

	<div class="w-full h-full grid place-items-center gap-4 mb-6">
		<iframe
			class="w-full lg:h-96 h-56 lg:px-60"
			src="https://www.youtube.com/embed/videoseries?list=PLEwb2eC2meYV_MGgWLmGJJzft2XOdNDxU"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
</section>

<section>
	<H2>الكتابة هيراطيقية</H2>
	<p>
		تقدر تتعلم طريقة كتابة ونطق الحروف المصرية بالكتابة الهيراطيقية دلوقتي عندنا مع الأثرية/ هند أسماعيل
	</p>

	<div class="w-full h-full grid place-items-center gap-4 mb-6">
		<iframe
			class="w-full lg:h-96 h-56 lg:px-60"
			src="https://www.youtube.com/embed/videoseries?si=YoTXrc7pSpbqvuME&amp;list=PLbv84SI-QKkudhaTTuVtqVZIHnsDgWgvf"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
</section>

<section>
	<H2>الكتابة القبطية</H2>
	<p>
		تقدر تتعلم طريقة كتابة ونطق الحروف المصرية بالكتابة القبطية مع باسون/ جورج في اليوتيوب بعنوان <span
			>لغتنا المصرية</span
		>
	</p>

	<div class="w-full h-full grid place-items-center gap-4 mb-6">
		<iframe
			class="w-full lg:h-96 h-56 lg:px-60"
			src="https://www.youtube.com/embed/videoseries?list=PLXmLW5uUnh2PP3f_NaqxF6VebB69sRjXR"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
</section>

<section class="grid place-items-center">
	<h2 class="text-center">تقدر تدخل مبارة مكتبة الأسكندرية لتعليم الكتابة الهيروغليفية دلوقتي</h2>
	<BlackBtn
		label={'أدخل علي المبادرة'}
		link={'https://www.bibalex.org/learnhieroglyphs/Lesson/Introduction_Ar.aspx'}
		newTab={true}
	/>
</section>
