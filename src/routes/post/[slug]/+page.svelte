<script>
	import image from '../../../lib/images/no-image.png';

    import { example } from "../../../utils/articles";
</script>

<section class="grid md:grid-cols-3 gap-10">
	<article class="col-span-2">
		<div class="grid gap-4">
			<div class="flex gap-3 h-fit">
				<div class="w-2 bg-red rounded-3xl" />
				التصنيف
			</div>
			<h1>عنوان المقالة الطويل الجدا التابع لمنصة وعي مصر التابعة للقومية المصرية</h1>
		</div>

		<div class="flex gap-5 mb-8">
			<p>الكتاب | إياد خالد</p>
			<span>—</span>
			<p>تاريخ | 20 ابيب 6264</p>
		</div>
		<img src={image} alt="وعي مصر" class="w-full" />
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
