<script>
    import {marked} from 'marked';
    import Title from "./Title.svelte";
    export let date = "00 jan 1999";
    export let text = `
markdown

# markdown
## markdown
### markdown
---
markdown
`
    export let doctor = 'issam agoudjil'
</script>
<main>
    <Title title={date + ', '  + doctor} />
    {@html marked(text)}
</main>
<style>
    main{
        background-color: white;
        padding: 10px;
        border-radius: 15px;
    }
</style>