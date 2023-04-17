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
                // @ts-ignore
                value = Boolean(window.localStorage.getItem(id)!)
                break;
            case "string":
                // @ts-ignore
                value = String(window.localStorage.getItem(id)!)
                break;
            case "object":
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