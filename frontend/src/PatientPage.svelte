<script>
    import Title from "./Title.svelte";
    import Report from "./Report.svelte";
    import PatientIdentity from "./PatientIdentity.svelte";
	import { select_page } from "./stores";
</script>

<main class="frosted-panel">
    <Title title="patient identity"/>
    <PatientIdentity />
    <button on:click={()=>select_page("ReportEditor")}>new report</button>
    <Title title="patient history"/>
    <Report />
    <Report />
    <Report />
</main>

<style>
    main{
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }
    button{
        padding: 10px 15px;
        border-radius: 10px;
        border: none;
        background-color: #84e47c;
        cursor: pointer;
        width: fit-content;
        margin-left: auto;
    }
</style>