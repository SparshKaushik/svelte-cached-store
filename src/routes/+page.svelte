<script lang="ts">
	import { cachedwritable } from "$lib";

    const testStore = cachedwritable<number>(99, "testStore")

    setTimeout(()=>{
        testStore.set($testStore + 1)
    }, 1000)

    testStore.subscribe((value) => {
        console.log(value)
    })
</script>

<h1>{JSON.stringify($testStore)}</h1>