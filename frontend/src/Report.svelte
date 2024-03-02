<script>
    import {marked} from 'marked';
    import Title from "./Title.svelte";
    export let date = "1st january 2021";
    export let text = `
# mild fever and cough
on january 1st 2021, the patient reported mild fever and cough for 3 days this started on december 29th 2020 and has been consistent since then. and no other symptoms were reported. the patient is 23 years old and has no signs of a virus. the patient is healthy and should be fine
- patient is 23 years old
- no signs of a virus
## prescription
- rest
- drink water
- eat healthy
---
the patient is healthy and should be fine
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