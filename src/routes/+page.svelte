<script lang="ts">
	import { cachedwritable } from "$lib";

    const testStore = cachedwritable<string>("bruh", "testStore")

    setTimeout(()=>{
        testStore.set("ok")
    }, 1000)

    testStore.subscribe((value) => {
        console.log(value)
    })
</script>

<h1>{$testStore}</h1>