<script>
	import image from '../../../lib/images/no-image.png';

	import { example } from '../../../utils/articles';

	let copied = false;
	let copiedClass = false;

	const toggleCopy = () => {
		copiedClass = !copiedClass
	}

	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiBusinessLinksLine from 'svelte-icons-pack/ri/RiBusinessLinksLine';
	import RiLogoFacebookCircleFill from 'svelte-icons-pack/ri/RiLogoFacebookCircleFill';
	import RiLogoInstagramLine from 'svelte-icons-pack/ri/RiLogoInstagramLine';
	import RiLogoTwitterFill from 'svelte-icons-pack/ri/RiLogoTwitterFill';

	import RiSystemCheckLine from 'svelte-icons-pack/ri/RiSystemCheckLine';
</script>

<section class="grid md:grid-cols-3 gap-10">
	<article class="col-span-2 grid h-fit gap-9">
		<div class="grid gap-4">
			<div class="flex gap-3 h-fit">
				<div class="w-2 bg-red rounded-3xl" />
				التصنيف
			</div>
			<h1 class="m-0">عنوان المقالة الطويل الجدا التابع لمنصة وعي مصر التابعة للقومية المصرية</h1>
		</div>

		<div class="flex justify-between">
			<div class="flex gap-5">
				<p>الكتاب | <span class="font-black text-blue-600">إياد خالد</span></p>
				<span>—</span>
				<p>تاريخ | 20 ابيب 6264</p>
			</div>
			<div class="flex gap-5 text-xl font-black relative">
				<span class="text-sm">شارك المقالة</span>
				<a href="https://www.facebook.com/" class="border-none" aria-label="صفحة الفيسبوك"
					><Icon src={RiLogoFacebookCircleFill} /></a
				>
				<a href="https://www.instagram.com/" class="border-none" aria-label="صفحة الانستجرام"
					><Icon src={RiLogoInstagramLine} /></a
				>
				<a href="https://www.twitter.com/" class="border-none" aria-label="صفحة الاكس"
					><Icon src={RiLogoTwitterFill} /></a
				>
				<span class="cursor-pointer">
					<Icon src={RiBusinessLinksLine} />
				</span>

				{#if copied}
					<button
						class:copied={copiedClass}
						class="text-base bg-red text-white p-2 absolute left-0 bottom-9 flex gap-2 items-center"
						>تم النسخ<span><Icon src={RiSystemCheckLine} color="white" /></span></button
					>
				{/if}
			</div>
		</div>
		<img src={image} alt="وعي مصر" class="w-full" />

		<div>المحتوي الخاص بالموقع الجامد ده</div>
	</article>
	<aside>
		<div class="flex gap-3 h-fit mb-5">
			<div class="w-2 bg-red rounded-3xl" />
			<h3 class="m-0">مقالات ممكن تعجبك</h3>
		</div>

		<div class="grid col-span-1">
			{#each example as card (card.id)}
				<div class="card border-b-gray-500 flex gap-8">
					<div class="grid gap-5 h-fit">
						<h2 class="text-2xl">{card.title}</h2>
						<p class="text-slate-500 text-base">{card.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</aside>
</section>
