<script>
    import Title from "./Title.svelte";
    import {select_page} from "./stores";

    let patient_id = "";
    $: enable =  patient_id.replace(/-|\s/g, '').length == 16
</script>

<main class="frosted-panel">
    <Title title="home"/>
    <div id="home">
        <div id="welcome">welcome back doctor issam agoudjil</div>
        <div id="input">
            <span>input patient id to view patient history</span>
            <input type="text" id="patient-id" placeholder="abcd-efgh-ijkl-mnop" bind:value={patient_id}>
            {#if enable == false}
                <button disabled>view</button>
            {:else}
                <button on:click={()=>{select_page('Patient')}}>view</button>
            {/if}
        </div>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }
    #home {
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 100%;
    }
    #welcome {
        border-radius: 10px;
        padding: 15px 30px;
        height: 100%;
        display: flex;
        align-items: flex-end;
        background-color: white;
        font-size: 2.4rem;
    } 
    #input {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    #input span {
        min-width: 300px;
        padding-left: 10px;
    }
    input {
        padding: 10px;
        border-radius: 10px;
        border: none;
        width: 100%;
        font-family: monospace;
    }
    input:focus {
        outline: none;
    }
    input::placeholder {
        color: grey;
    }
    button {
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        background-color: #c185d9;
        color: white;
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
    }
    button:hover {
        background-color: #a56cbf;
    }
    button:active {
        background-color: #8e5aa6;
    }
    button:disabled {
        background-color: #e0e0e0;
        color: #a0a0a0;
        cursor: not-allowed;
    }
</style>