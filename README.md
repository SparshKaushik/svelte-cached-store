# svelte-cached-store

svelte-cached-store is an npm library for Svelte which you can use to automatically cache Stores to localstorage as they update. This makes it easy to persist store values across sessions, and decrease loading time.

# Installation

```bash
npm install svelte-cached-store
```

# Usage

Once you have installed the Library you can start using right away.
The Usage is very similar to Svelte original writable Stores

```html
<script lang="ts">
    // Import it BRUH
    import { cachedwritable } from "svelte-cached-store";

    // Format
    const storeName = cachedwritable<type>(value, id)

    // Example
    const testStore = cachedwritable<string>("bruh", "my.testStore")

    // Setting Value
    testStore.set("ok")

    // Subscribing to Store
    testStore.subscribe((value) => {
        console.log(value)
    })
    // OR the Svelte Way
    $: console.log($testStore)
</script>
```

## Explanation

- `type`: Type of the data you will store in the Store.

- `value`: The Default value of the Store when the cached value is 
not found.

- `id`: A unique identifier for the writable store. This will be used as the key to store and retrieve the value from the browser's local storage.

# Done
Yes, It is this Easy. It is just like Svelte Stores but you give store id also with it

# Contributions and Issues
If you encounter any issues or bugs with CachedSvelteStores, please feel free to create a GitHub issue in the project repository. Additionally, contributions in the form of pull requests are always welcome and appreciated.