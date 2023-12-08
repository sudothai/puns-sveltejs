<script lang="ts">
    import DarkMode from "$lib/components/DarkMode.svelte";
    import Question from "$lib/components/Question.svelte";
    // import Button from "$lib/components/Button.svelte";
    import { Button } from 'flowbite-svelte';
    import { Card } from 'flowbite-svelte';
    import type { PageData } from './$types'
    import Typewriter from 'svelte-typewriter';

    export let data: PageData
    $: ({ puns } = data)

    // export const question;

    let visible = false;

    function toggleVisible() {
        visible = !visible
    }
</script>

<div class="flex flex-col items-center justify-center h-screen">
    <DarkMode />
    <!-- <Question /> -->
    <!-- <Button /> -->

    <Typewriter>
        <h1 class="pt-1 text-3xl font-extrabold dark:text-white">{puns.question}</h1>
    </Typewriter>

    <Button on:click={toggleVisible} size="md" class="text-md mt-7" color="red">Reveal</Button>
    <!-- {#if visible}
        <Card class="mt-9">
            <h2 class="mb-3 text-xl dark:text-white">
                {puns.answer} 
            </h2>
            <Button class="flex justify-center items-center" color="red">
                Ready For More?
            </Button>
        </Card>
    {/if} -->
    {#if visible}
    <!-- {#each puns as pun} -->
        <Card class="mt-9">
            <h2 class="mb-3 text-xl dark:text-white">
                {puns.answer} 
            </h2>
            <Button class="flex justify-center items-center" color="red">
                Ready For More?
            </Button>
        </Card>
    <!-- {/each} -->
    {/if}
</div>
