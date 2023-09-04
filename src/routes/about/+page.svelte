<script>
	// @ts-nocheck

	import og from '$lib/images/main.png';
	let title = 'وعي - مصر :: احنا مين';
	let desc = `أهلًا بيكم في وعي - مصر إحنا هنا فى "وعي" بنقدم نفسنا إننا جزء من مشروع أكبر ألا وهو مشروع الوعي القومي المصري.`;

	import zeyad from '$lib/images/zeyad.png';
	import elmorshedy from '$lib/images/elmorshedy.png';

	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiLogoFacebookCircleFill from 'svelte-icons-pack/ri/RiLogoFacebookCircleFill';
	import RiLogoInstagramLine from 'svelte-icons-pack/ri/RiLogoInstagramLine';
	import RiLogoTwitterFill from 'svelte-icons-pack/ri/RiLogoTwitterFill';
	import RiLogoTelegramFill from 'svelte-icons-pack/ri/RiLogoTelegramFill';
	import H1 from '$lib/Components/Text/H1.svelte';

</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />

	<script type="application/ld+json">
		{
		  "@context": "https://schema.org",
		  "@type": "FAQPage",
		  "mainEntity": [{
			"@type": "Question",
			"name": "موقع وعي تطلعاتها وأهدافها قائمة علي إيه؟",
			"acceptedAnswer": {
			  "@type": "Answer",
			  "text": "إحنا فى وعي بنتبنى مبادئ الفكر القومي المصري وأهدافه وبنتبنى التوعية بيه في المجتمع المصري بما يتناسب مع رؤية الدولة و طموحنا لالجمهورية الجديدة."
			}
		  },{
			"@type": "Question",
			"name": "ليه إستخدمنا مصطلح وعي تحديدًا؟",
			"acceptedAnswer": {
			  "@type": "Answer",
			  "text": "فى ظل حالة تردي انحدار الفكر و الثقافة في المجتمع المصري بشكل عام اللي ناتج عن جهل نشأ نتيجة تقصير وإهمال متعاقب علي مدى عقود طويلة أدي لإفساد الوعي القومي الجمعي لقطاع كبير من المصريين و تشويه المفاهيم و انتشار المعلومات المغلوطة في كافة النواحي تاريخيًا و ثقافيًا و غيره مما أدى لانسلاخ كتير من المصريين عن هويتهم و تاريخهم و حضارتهم والدخول في دوامة إضطراب الهوية و التراجع الفكري و الثقافي."
			}
		  }
		  ,{
			"@type": "Question",
			"name": "ايه هي سياسة موقع وعي؟",
			"acceptedAnswer": {
			  "@type": "Answer",
			  "text": "نعمل علي نشر الوعي لدى المصريين في مختلف النواحي سواء تاريخيًا وسياسيًا وثقافيًا وإقتصاديًا وفنيًا ولغويًا.ترسيخ الهوية المصرية و الإنتماء للدولة المصرية و حضارتها وتراثها وتصحيح كافة المفاهيم المغلوطة مكافحة كافة الظواهر السلبية في المجتمع المصري والأفكار الأممية الهادمة للأوطان الغير مؤمنة بإستقلالية الأمة المصري وتاريخها الممتد و هويتها المستقلة."
			}
		  }
		  ,{
			"@type": "Question",
			"name": "تعريفنا بنفسنا كمسؤلين فى وعي؟",
			"acceptedAnswer": {
			  "@type": "Answer",
			  "text": "إحنا مجموعة شبابية مصرية من تخصصات مختلفة، ولكن جمعنا أهداف مشتركة وهي حبنا وإعتزازنا وفخرنا ببلدنا وهويتها وتاريخها وحضارتها، وده خلانا نتجمع لعرض وسرد رؤيتنا لبلدنا وشعبنا، وإننا نسعى للمساهمة في إن وطننا يتبوأ مكانته المستحقة وسط الأمم. شباب وعي لا يتبع أي حزب سياسي، وذو أيدولجية وطنية حصرًا تقوم أساس تقديم مصلحة الأمة المصرية فوق أي إعتبار، بالإضافة الى إقصاء كل الأفكار الأممية المعادية للدولة المصرية كالإسلام السياسي و التيار اليساري و غيرها."
			}
		  }
		]
		}
	</script>
</svelte:head>

<section>
	<article>
		<H1>احنا مين؟</H1>

		<p class="text-lg">{desc}</p>

		<h2>موقع "وعي" تطلعاتها وأهدافها قائمة علي إيه؟</h2>
		<p>
			إحنا فى "وعي" بنتبنى مبادئ الفكر القومي المصري وأهدافه وبنتبنى التوعية بيه في المجتمع المصري
			بما يتناسب مع رؤية الدولة و طموحنا للجمهورية الجديدة.
		</p>

		<h2>ليه إستخدمنا مصطلح "وعي" تحديدًا؟</h2>

		<p>
			صفحة وعي مصر تقرر إنشائها لغرض رئيسي وهو توعية المجتمع المصري وتصحيح المفاهيم في ظل تردي الفكر
			والثقافة التردي ده كان نتيجة للجهل اللي انتشر بسبب التقصير والإهمال على مدار عقود طويلة في
			تصحيح المفاهيم وإهمال الجانب الثقافي بشكل كبير، وده أدى لفساد الوعي الجمعي بدرجة كبيرة عند
			قطاع واسع من المصريين واتشوهت المفاهيم وانتشرت المعلومات وأفكار مغلوطة ومزيفة في جوانب مختلفة
			زي التاريخ والهوية والحضارة والثقافة وغيرهم، وده كان سبب في انسلاخ كتيير من المصريين عن هويتهم
			وتاريخهم وحضارتهم واحتقارهم لماضيهم، ودخولهم في دوامة إضطراب الهوية. منصة وعي - مصر بتعمل على
			توعية المجتمع وإعادة بناء الوعي القومي، وتصحيح المفاهيم المغلوطة، وتعزيز الانتماء للهوية
			المصرية وتاريخها العريق وحضارتها العظيمة.
		</p>

		<p>
			ولأن إعادة ضبط المفاهيم و تصحيح الأفكار المغلوطة يستوجب عملية إعادة تشكيل وعي "الإنسان المصري"
			فكان إختيار الاسم "وعي - مصر".
		</p>

		<h2>ايه هي سياسة منصة "وعي"؟</h2>
		<ul class="my-8">
			<li class="mb-3">
				نعمل علي نشر الوعي لدى المصريين في مختلف النواحي سواء تاريخيًا وسياسيًا وثقافيًا وإقتصاديًا
				وفنيًا ولغويًا.
			</li>
			<li class="mb-3">
				ترسيخ الهوية المصرية و الإنتماء للدولة المصرية و حضارتها وتراثها وتصحيح كافة المفاهيم
				المغلوطة.
			</li>
			<li class="mb-3">
				مكافحة كافة الظواهر السلبية في المجتمع المصري والأفكار الأممية الهادمة للأوطان الغير مؤمنة
				بإستقلالية الأمة المصري وتاريخها الممتد و هويتها المستقلة.
			</li>
		</ul>

		<h2>تعريفنا بنفسنا كمسؤلين فى "وعي"؟</h2>

		<div class="md:flex grid justify-center gap-8 py-8">
			<div class="grid place-items-center gap-4">
				<div
					class="rounded-full group bg-amber-200 hover:bg-red transition-all ease-in-out duration-300 overflow-hidden h-52 w-52"
				>
					<img
						src={elmorshedy}
						class="object-bottom saturate-0 group-hover:saturate-100 transition-all ease-in-out duration-300"
						alt="عبد الرحمن المرشدي"
					/>
				</div>
				<h3 class="border-b-red border-b-2 p-3 m-0 w-fit">عبد الرحمن المرشدي</h3>
				<div class="grid gap-2">
					<p class="italic m-0">مؤسس المنصة</p>
					
				</div>
			</div>
			<div class="grid place-items-center gap-4">
				<div
					class="rounded-full group bg-amber-200 hover:bg-red transition-all ease-in-out duration-300 overflow-hidden h-52 w-52"
				>
					<img
						src={zeyad}
						class="saturate-0 group-hover:saturate-100 transition-all ease-in-out duration-300"
						alt="زياد زين"
					/>
				</div>
				<h3 class="border-b-red border-b-2 p-3 m-0 w-fit">زياد زين</h3>
				<div class="grid gap-2">
					<p class="italic m-0">مؤسس المنصة</p>
					
				</div>
			</div>
		</div>

		<p>
			إحنا مجموعة شباب مصريين من تخصصات مختلفة، ولكن جمعنا أهداف مشتركة وهي حبنا وإعتزازنا وفخرنا
			ببلدنا وهويتها وتاريخها وحضارتها، وده خلانا نتجمع لعرض وسرد رؤيتنا لبلدنا وشعبنا، وإننا نسعى
			للمساهمة في إن وطننا يتبوأ مكانته المستحقة وسط الأمم.
		</p>

		<p>
			شباب "وعي" لايتبع أي حزب سياسي، وذو أيدولجية وطنية قومية حصرًا تقوم أساس تقديم مصلحة الأمة
			المصرية فوق أي إعتبار، بالإضافة الى إقصاء كل الأفكار الأممية المعادية للدولة المصرية وكيان
			الوطن.
		</p>

		<h3>وعي - مصر نبض التيار القومي المصري، من داخل مصر وبأفكار شباب مصر القوميين</h3>
		<p>شارك، إطرح، ناقش، محتواك القومي <a href="https://linktr.ee/w3i.eg">كل لينكاتنا</a>.</p>

		<h3>تابع حسابتنا على وسائل التواصل الإجتماعي المختلفة:</h3>

		<div class="flex items-center gap-5 text-3xl my-5">
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

		<p>تقدر تشاركنا و تشوف كل أخبارنا و مقالاتنا علي الهاشتاجات الخاصة بينا</p>

		<ul class="">
			<li>#وعي_مصر</li>
			<li>#القومية_المصرية</li>
			<li>#الهوية_المصرية</li>
		</ul>

		<p>
			كمان تقدر تحمل ملف رسالة القومية المصرية ورؤيتها <a
				href="/Q&A.pdf"
				download="القومية-المصرية-سؤال-و-جواب">من هنا</a
			>
		</p>
	</article>
</section>
