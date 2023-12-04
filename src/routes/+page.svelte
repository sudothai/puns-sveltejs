<div class="flex flex-col items-center justify-center h-screen">
    <h1 class="pb-7 text-2xl font-bold">What does a vegetarian zombie say?</h1>
    <Button on:click={toggleVisible} size="lg">Reveal</Button>
</div>

<div class="p-8">
    <Alert>
      <span class="font-medium">Info alert!</span>
      Change a few things up and try submitting again.
    </Alert>
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
