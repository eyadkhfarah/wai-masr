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

	export let newTab = false

	import { Icon } from 'svelte-icons-pack';

	import {RiArrowsArrowLeftLine} from 'svelte-icons-pack/ri';
</script>

<a class="Blackbtn" target={`${newTab === false ? '_self' : '_blank'}`} href={link} aria-label={label} rel="noopener noreferrer">
	{@html label}<span><Icon color="red" src={RiArrowsArrowLeftLine} size={20}/></span>
</a>
