import { browser } from "$app/environment";
import { writable } from "svelte/store";

export function cachedwritable<type>(value: type, id: string) {
    if (browser && window.localStorage.getItem(id) != null) {
        switch (typeof value) {
            case "number":
                // @ts-ignore
                value = Number(window.localStorage.getItem(id)!)
                break;
            case "boolean":
                break;
            case "string":
                // @ts-ignore
                value = String(window.localStorage.getItem(id)!)
                break;
            default:
                value = JSON.parse(window.localStorage.getItem(id)!)
                break;
        }
    }
    const newStore = writable<type>(value)
    newStore.subscribe((value) => {
        browser && window.localStorage.setItem(id, JSON.stringify(value))
    })
    return newStore
}