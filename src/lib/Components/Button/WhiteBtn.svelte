<script>
// @ts-nocheck

	/**
	 * @type {any}
	 */
	export let label;
	/**
	 * @type {any}
	 */
	export let link;

	import Icon from 'svelte-icons-pack/Icon.svelte';

	import RiSystemArrowLeftLine from 'svelte-icons-pack/ri/RiSystemArrowLeftLine';
</script>

<a
	class="Whitebtn flex w-full items-center gap-6 border-b-red"
	data-sveltekit-prefetch
	aria-label={label}
	href={link}
	rel="noopener noreferrer"
>
	{label}<span><Icon color="red" src={RiSystemArrowLeftLine} /></span>
</a>
