<script>
	import { browser } from '$app/environment';
	import Icon from 'svelte-icons-pack/Icon.svelte';

	import RiSystemArrowLeftLine from 'svelte-icons-pack/ri/RiSystemArrowLeftLine';

    let hidden = false

    
    if (browser) {
        const Cookies = localStorage.getItem("Cookies")
        if( Cookies !== null) {
            hidden = JSON.parse(Cookies)
        }
        window.localStorage.setItem("Cookies", JSON.stringify(hidden))
    }
</script>

<div class={`fixed ${hidden ? "md:flex" : "hidden"} gap-12 bottom-0 p-6 left-0 w-full bg-black`}>
	<p class="text-white">
		احنا في وعي - مصر هدفنا اننا نحسن من جودة محتوانا ونعمل اللي نقدر عليه علشان نحقق هدفنا في الوعي
		المصري وعلشان كده هناخد ملفات تعريف الارتباط علشان نعرف نتابع جمهورنا اكتر وتقدر تعرف التفاصيل
		من <a href="/trems">الشروط والاحكام</a> و<a href="/privacy-policy">سياسة الخصوصية</a>.
	</p>

	<button
		class="Whitebtn w-1/3 flex items-center gap-6 border-b-red"
		aria-label="موافق"
        on:click={() => hidden = !hidden}
	>
		موافق<span><Icon color="red" src={RiSystemArrowLeftLine} /></span>
	</button>
</div>
