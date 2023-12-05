<div class="flex flex-col items-center justify-center h-screen">
    <Typewriter>
        <h1 class="pb-9 text-5xl font-extrabold">What does a vegetarian zombie say?</h1>
    </Typewriter>
    <Button on:click={toggleVisible} size="xl" class="text-xl" outline>Reveal</Button>
    {#if visible}
        <h1 class="pt-9 text-3xl">
           GGGRRRRAAAIIINNNNSSS 
        </h1>
    {/if}
</div>

<script>
    import { Button } from 'flowbite-svelte';
    import Typewriter from 'svelte-typewriter';

    let visible = false;

    function toggleVisible() {
        visible = !visible
    }
</script>

