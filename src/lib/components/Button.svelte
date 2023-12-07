<script>
    import { Button } from 'flowbite-svelte';
    import { ThumbsUpSolid, ThumbsDownSolid, ArrowRightSolid } from 'flowbite-svelte-icons';


    let visible = false;

    function toggleVisible() {
        visible = !visible
    }
</script>

<Button on:click={toggleVisible} size="md" class="text-lg mt-9" color="red">Reveal</Button>
{#if visible}
    <h1 class="pt-9 pb-9 text-xl dark:text-white">
        GGGRRRRAAAIIINNNNSSS 
    </h1>
{/if}