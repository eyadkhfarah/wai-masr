<!-- <script>
	import { browser } from "$app/environment";

    let precent = "0"
    
    if (browser) {
        const reading = () => {
            const {scrollTop, scrollHeight} = document.documentElement
    
            precent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`
            console.log(precent)
        }
        document.addEventListener("scroll", reading)
    }
</script>

<div class={`fixed top-[48rem] md:top-12 z-10 bg-red w-[${precent}] transition-all ease-in-out h-2`} />
-->
<slot /> 