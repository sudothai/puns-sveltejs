<script lang="ts">
    import Typewriter from 'svelte-typewriter';
    // import type { PageData } from "./$types"

    // export let data: PageData
    // $: ({ puns } = data) 
    import type { PageData } from "./$types"

    export let data: PageData
    $: ({ puns } = data) 
</script>

<Typewriter>
    <h1 class="pt-1 text-3xl font-extrabold dark:text-white">{puns.question}</h1>
    <!-- <h1 class="pt-1 text-3xl font-extrabold dark:text-white">What do vegetarian zombies say?</h1> -->
</Typewriter>