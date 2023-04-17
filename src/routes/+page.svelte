<script lang="ts">
	import { cachedwritable } from "$lib";

    const testStore = cachedwritable<{
        bruh: string
    }>({
        bruh: "bruh"
    }, "testStore")

    setTimeout(()=>{
        testStore.set({
            bruh: "ok"
        })
    }, 1000)

    testStore.subscribe((value) => {
        console.log(value)
    })
</script>

<h1>{JSON.stringify($testStore)}</h1>