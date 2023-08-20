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

<a class="Blackbtn" href={link} aria-label={label} rel="noopener noreferrer">
	{@html label}<span><Icon color="red" src={RiSystemArrowLeftLine} /></span>
</a>
