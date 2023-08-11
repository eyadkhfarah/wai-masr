import { writable } from "svelte/store"

// @ts-ignore
export const createSearch = (data) => {
    const {subscribe, set, update}= writable({
        data: data,
        filtered: data,
        search: ""
    })

    return {
        subscribe,
        set,
        update
    }
}