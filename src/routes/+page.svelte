<script lang="ts">
	import { cachedwritable } from "$lib";

    const testStore = cachedwritable<boolean>(false, "testStore")

    setTimeout(()=>{
        testStore.set(false)
    }, 1000)

    testStore.subscribe((value) => {
        // console.log(value)
    })
</script>

<h1>{JSON.stringify($testStore)}</h1>