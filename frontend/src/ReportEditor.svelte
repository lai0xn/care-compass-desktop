<script>
    import Title from './Title.svelte';
    import { marked } from 'marked';
	import { select_page } from './stores';
    let report = `reepeorpr
# hello world
### this is a simple report
- using
- markdown

you **can** *make*

---

## interesting text
~easily~

![car](https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg);`
</script>
<main class="frosted-panel">
    <Title title="report editor" />
    <div id="editor">
        <textarea id="report" bind:value={report}></textarea>
        <hr>
        <div id="preview">{@html marked(report)}</div>
    </div>
    <button on:click={()=>select_page('Patient')}>submit</button>
</main>
<style>
    textarea{
        width: 100%;
        height: 300px;
        margin-top: 10px;
    }
    #preview{
        background-color: white;
        border-radius: 10px;
        padding: 1px 10px;
    }
    button{
        padding: 10px 15px;
        border-radius: 10px;
        border: none;
        background-color: #84e47c;
        cursor: pointer;
        width: fit-content;
        margin-left: auto;
        margin-top: 50px;
        display: block;
    }
</style>