<script>
    import { Button } from 'flowbite-svelte';
    import { Card } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
    import Typewriter from 'svelte-typewriter';

    let visible = false;

    function toggleVisible() {
        visible = !visible
    }
</script>

<Button on:click={toggleVisible} size="md" class="text-md mt-7" color="red">Reveal</Button>
{#if visible}
    <Card class="mt-9">
        <Typewriter>
            <h2 class="mb-3 text-xl dark:text-white">
                GGGRRRRAAAIIINNNNSSS 
            </h2>
        </Typewriter>
        <Button class="flex justify-center items-center" color="red">
            Ready For More?
        </Button>
    </Card>
{/if}