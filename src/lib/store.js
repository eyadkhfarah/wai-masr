import { navigating } from "$app/stores";
import { derived } from "svelte/store";

/**
 * @type {string | number | NodeJS.Timeout | null | undefined}
 */
let time = null;

export const Delayed = derived(navigating, (newValue, set) => {
	if (time) {
		clearTimeout(time);
	}
    if (newValue) {
        time = setTimeout(() => set(true), 500)
    }
    set(false)
});
