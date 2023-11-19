<script>
	import H2 from './Text/H2.svelte';
	import alanNews from '$lib/images/news/alan-news.png';
	import almasryalyoum from '$lib/images/news/almasryalyoum.png';
	import rt from '$lib/images/news/rt.png';
	import alhurra from '$lib/images/news/alhurra.png';
</script>

<H2>مواقع اتكلمت عننا</H2>
<div class="lg:flex grid place-items-center my-20 justify-evenly items-center gap-16">
	<a
		href="https://www.almasryalyoum.com/news/details/2824181"
		target="_blank"
		aria-label="المصري اليوم"
	>
		<img src={almasryalyoum} alt="almasryalyoum" width="176" height="auto" class="w-48 h-auto" />
	</a>
	<a
		href="https://al-ain.com/article/afrocentric-civilization-ancient-egypt"
		target="_blank"
		aria-label="العين الاخبارية"
	>
		<img src={alanNews} alt="alan-news" width="96" height="auto" class="w-24 h-auto" />
	</a>
	<a
		href="https://arabic.rt.com/society/1416288-%D9%87%D8%AC%D9%88%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D9%85%D9%85%D8%AB%D9%84-%D8%A7%D9%84%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D9%8A-%D9%83%D9%8A%D9%81%D9%8A%D9%86-%D9%87%D8%A7%D8%B1%D8%AA-%D8%A8%D8%B3%D8%A8%D8%A8-%D8%AD%D8%AF%D9%8A%D8%AB%D9%87-%D8%B9%D9%86-%D9%85%D9%84%D9%88%D9%83-%D9%85%D8%B5%D8%B1/"
		target="_blank"
		aria-label="ار تي العربية"
	>
		<img src={rt} alt="rt" width="112" height="auto" class="w-28 h-auto" />
	</a>
	<a
		href="https://www.alhurra.com/arabic-and-international/2023/02/21/%D9%85%D8%A7-%D9%88%D8%B1%D8%A7%D8%A1-%D8%A5%D9%84%D8%BA%D8%A7%D8%A1-%D8%AD%D9%81%D9%84-%D9%83%D9%8A%D9%81%D9%86-%D9%87%D8%A7%D8%B1%D8%AA-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1-%D8%A7%D9%84%D8%A3%D9%81%D8%A7%D8%B1%D9%82%D8%A9-%D9%85%D9%84%D9%88%D9%83-%D9%85%D8%B5%D8%B1-%D8%A7%D9%84%D8%AD%D9%82%D9%8A%D9%82%D9%8A%D9%88%D9%86%D8%9F"
		target="_blank"
		aria-label="الحرة"
	>
		<img src={alhurra} alt="alhurra" width="176" height="auto" class="w-44 h-auto" />
	</a>
</div>
