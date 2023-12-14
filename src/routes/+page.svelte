<script lang="ts">
    import DarkMode from "$lib/components/DarkMode.svelte";
    import Question from "$lib/components/Question.svelte";
    import Button from "$lib/components/Button.svelte";

    import type { PageData } from "./$types"

    export let data: PageData
    $: ({ puns } = data) 
</script>

<div class="flex flex-col items-center justify-center h-screen">
    <DarkMode />
    <Question />
    <Button />

    <h1>This is {puns.question}</h1>   
    <h1>That is {puns.answer}</h1>   
</div>

<div>
    <form action="?/createPun" method="POST">
        <label for="question">Question</label>
        <input type="text" id="question" name="question" />
        <label for="answer">Answer</label>
        <textarea name="answer" id="answer" rows={5} />
        <button type="submit">Add pun</button>
    </form>
</div>
