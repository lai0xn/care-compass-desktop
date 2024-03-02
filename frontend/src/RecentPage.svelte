<script>
    import Title from "./Title.svelte";
    import RecentPatient from "./RecentPatient.svelte";
</script>

<main class="frosted-panel">
    <Title title="recent patients for Issam agoudjil"/>
    <RecentPatient />
    <RecentPatient />
    <RecentPatient />
    <RecentPatient />
</main>

<style>
    main{
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }
</style>