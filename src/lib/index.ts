import { browser } from "$app/environment";
import { writable } from "svelte/store";

export function cachedwritable<type>(value: type, id: string) {
    if (browser && window.localStorage.getItem(id) != null) {
        value = JSON.parse(window.localStorage.getItem(id)!)
    }
    const newStore = writable<type>(value)
    newStore.subscribe((value) => {
        browser && window.localStorage.setItem(id, JSON.stringify(value))
    })
    return newStore
}