<div class="flex flex-col items-center justify-center h-screen">
    <Typewriter>
        <h1 class="pb-9 text-5xl font-extrabold">What does a vegetarian zombie say?</h1>
    </Typewriter>
    <Button on:click={toggleVisible} size="xl" class="text-xl" outline>Reveal</Button>
    {#if visible}
        <h1 class="pt-9 pb-9 text-3xl">
           GGGRRRRAAAIIINNNNSSS 
        </h1>
        <Button outline={true} class="!p-2 pt-9" size="lg">
            <ThumbsUpSolid class="w-6 h-6 text-primary-700" />
        </Button>
        <Button outline={true} class="!p-2 pt-9" size="lg">
            <ThumbsDownSolid class="w-6 h-6 text-primary-700" />
        </Button>
        <iframe src="https://giphy.com/embed/WOCEirCJycoVzDOiZ2" width="480" height="480" frameBorder="0" class="giphy-embed pt-4" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/plantsvszombies-pvz-pvzbfn-battle-for-neighborville-WOCEirCJycoVzDOiZ2"></a></p>
    {/if}
</div>

<script>
    import { Button } from 'flowbite-svelte';
    import Typewriter from 'svelte-typewriter';
    import { ThumbsUpSolid, ThumbsDownSolid } from 'flowbite-svelte-icons';


    let visible = false;

    function toggleVisible() {
        visible = !visible
    }
</script>

