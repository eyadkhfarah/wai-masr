<script>
// @ts-nocheck

	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';

	import RiSystemArrowLeftLine from 'svelte-icons-pack/ri/RiSystemArrowLeftLine';
	import RiDeviceRssLine from 'svelte-icons-pack/ri/RiDeviceRssLine';

	import H1 from '$lib/Components/Text/H1.svelte';
	import og from '$lib/images/main.png';
	import BlackBtn from '$lib/Components/Button/BlackBtn.svelte';
	let title = 'خدمة الـ RSS :: وعي - مصر';
	let desc = `صفحة خاصة لخدمة الـ RSS الخاصة بموقع وعي - مصر.`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
</svelte:head>

<section>
	<article>
		<H1>خدمة الـ RSS</H1>
		<p>
			هي خدمة هتخليك تشوف اخر المقالات بمجرد نزولها يعني بدل ما ترحو المواقع وتدور بنفسك الخدم دي
			بجيبلك كل المقالات زبتيجي علي هئية عنوان خبر او مختصر لنص الخبر او لينك الخبر بالكامل
		</p>

		<h2>يعني ايه RSS؟</h2>

		<p>ده مطلح لجملة Rich Site Summary, ملخص مكثف للموقع</p>

		<h2>الخدمة دي مدفوعة ولا مجانا؟</h2>

		<p>خدمة مجانية تماما ومفيش فيها اي رسمو علشان تستخدمها.</p>

		<h2>طب أزاي استفيد من الخدمة دي؟</h2>

		<p>انت ممكن تستفيد من الخدمة دي بأكتر من طريقة أهما:</p>

		<ul>
			<li>
				ان يكون المتصفح بتاعك يكون بيدعم RSS زي متصفح Firefox أو Opera أو أي متصفح أصدار 7.0 أو فوق
			</li>
			<li>
				ممكن تستخدمه عن طريق برامج قارئ الاخبار {`(News Reader)`} ودي اللي بتقرأ وتبعرض المقالات الجاية
				من خدمة RSS.
			</li>
		</ul>

		<h2>طب ازاي اجيب قارئ الأخبار ده؟</h2>

		<p>
			فيه برامج كتيرة جدا من برامج News Reader علي النت، وده ممكن تحمله من النت بسهولة. بس علشان
			مقالاتنا توصلكم أول بأول فريق وعي - مصر بيصح بأشهر البرامج دي:
		</p>

		<h3>اللي بيستخدموا ويندوز</h3>

		<ul>
			<li>Awasu</li>
			<li>News Crawler</li>
		</ul>

		<h3>اللي بيستخدموا ماكنتوش</h3>

		<ul>
			<li>NewsFire</li>
			<li>NetNewsWire</li>
		</ul>

		<h3>عن طريق المتصفح</h3>

		<ul>
			<li>Bloglines</li>
			<li>MyYahoo</li>
			<li>NewsGator</li>
		</ul>

		<h3>عن طريق البريد إلالكتروني</h3>

		<ul>
			<li>Thunderbird</li>
			<li>Feeder.co</li>
		</ul>
	</article>
</section>

<section class="grid place-items-center">

	<BlackBtn label={"شوف ملف RSS.XML"} newTab={true} link={"/rss.xml"}/>
</section>
