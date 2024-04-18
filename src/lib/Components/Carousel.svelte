<script>
	// @ts-nocheck

	export let events;

	let parseText = function (text, limit) {
		if (text.length > limit) {
			for (let i = limit; i > 0; i--) {
				if (
					text.charAt(i) === ' ' &&
					(text.charAt(i - 1) != ',' || text.charAt(i - 1) != '.' || text.charAt(i - 1) != ';')
				) {
					return text.substring(0, i) + '...';
				}
			}
			return text.substring(0, limit) + '...';
		} else return text;
	};

	import {Icon} from 'svelte-icons-pack';
	import {RiArrowsArrowRightLine, RiArrowsArrowLeftLine} from 'svelte-icons-pack/ri';
	import WhiteBtn from './Button/WhiteBtn.svelte';

	import { slide } from 'svelte/transition';

	let select = 0;

	const left = () => {
		if (select > 0) {
			setect--;
		} else {
			select = events.length - 1;
		}
	};

	const right = () => {
		if (select < events.length - 1) {
			select++;
		} else {
			select = 0;
		}
	};
</script>

<div class="w-full overflow-hidden lg:h-[500px] h-full lg:flex grid justify-between">
	<div class="w-full h-full relative">
		<div class="absolute w-full bottom-0">
			<div class="grid gap-3 p-9 place-content-between bg-gradient-to-t from-black">
				<div class="flex items-center gap-5">
					<button class="bg-white rounded-full p-3" on:click={right}>
						<Icon src={RiArrowsArrowRightLine} color="black" />
					</button>

					<span class="text-white">{select + 1}</span>
					<span class="text-white"> | </span>
					<span class="text-white">{events.length}</span>

					<button class="bg-white rounded-full p-3" on:click={left}>
						<Icon src={RiArrowsArrowLeftLine} color="black" />
					</button>
				</div>
				<div class="slider">
					<h2 class="text-white block">{events[select].fields.name}</h2>
				</div>
			</div>
		</div>
		<img
			src={`https:${events[select].fields.image.fields.file.url}`}
			class="object-cover lg:w-full lg:h-full h-80 transition-all ease-in-out duration-300"
			alt=""
		/>
	</div>

	<div class="bg-gray-800 flex z-10 lg:w-96 w-full h-full flex-col justify-between p-12">
		<p transition:slide={{ delay: 250, duration: 300, axis: 'x' }} class="m-0 text-white">
			{parseText(events[select].fields.description, 270)}
		</p>
		<WhiteBtn label={'شوف أكتر'} link={`/events/${events[select].fields.slug}`} />
	</div>
</div>
