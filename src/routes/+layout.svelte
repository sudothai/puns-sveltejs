<script>
    import "../app.css";
    import DarkMode from "$lib/components/DarkMode.svelte";
</script>

<main class="container mx-auto px-20">
  <DarkMode />
  <slot />

</main>