<script>
    import { Button } from 'flowbite-svelte';
    import { ThumbsUpSolid, ThumbsDownSolid, ArrowRightSolid } from 'flowbite-svelte-icons';


    let visible = false;

    function toggleVisible() {
        visible = !visible
    }
</script>

<Button on:click={toggleVisible} size="xl" class="text-xl mt-9" outline>Reveal</Button>
{#if visible}
    <h1 class="pt-9 pb-9 text-3xl">
        GGGRRRRAAAIIINNNNSSS 
    </h1>
    <div class="flex flex-row">
        <Button outline={true} class="!p-2 pt-9" size="lg">
            <ThumbsUpSolid class="w-6 h-6 text-primary-700" />
        </Button>
        <Button outline={true} class="!p-2 pt-9 hover:text-white" size="lg">
            <ThumbsDownSolid class="w-6 h-6 text-primary-700" />
        </Button>
        <Button class="!p-2">
            <ArrowRightSolid class="w-6 h-6" />
        </Button>
    </div>
    <iframe src="https://giphy.com/embed/WOCEirCJycoVzDOiZ2" width="480" height="480" frameBorder="0" class="giphy-embed pt-4" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/plantsvszombies-pvz-pvzbfn-battle-for-neighborville-WOCEirCJycoVzDOiZ2"></a></p>
{/if}