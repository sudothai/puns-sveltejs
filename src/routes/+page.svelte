<div class="flex flex-col items-center justify-center h-screen">
    <h1 class="pb-9 text-5xl font-extrabold">What does a vegetarian zombie say?</h1>
    <Button on:click={toggleVisible} size="xl" class="text-xl">Reveal</Button>
</div>

<script>
    import { Alert } from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';

    let visible = true;

    function toggleVisible() {
        visible = !visible
        alert('GGGRRRRAAAIIINNNSSS');
    }
</script>
