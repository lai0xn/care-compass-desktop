<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">

<script>
    import Nav from "./Nav.svelte";
    import HomePage from "./HomePage.svelte";
    import PatientPage from "./PatientPage.svelte";
    // import Extra from "./Extra.svelte";
    import ColorBackground from "./ColorBackground.svelte";
    import RecentPage from "./RecentPage.svelte";
    import SettingsPage from "./SettingsPage.svelte";
    import ReportEditor from "./ReportEditor.svelte";
    import LoginPage from "./LoginPage.svelte";
    import SignupPage from "./SignupPage.svelte";

    import { selected_page } from "./stores.js";
    $: do_nav = !['Login', 'SignUp'].includes($selected_page);
</script>

<ColorBackground />
<main style={do_nav?'':'grid-template-columns: 1fr'}>
    {#if do_nav}
        <Nav />
        <hr>
    {/if}
    {#if $selected_page == 'Patient'}
        <PatientPage />
    {:else if $selected_page == 'Home'}
        <HomePage />
    {:else if $selected_page == 'Recent'}
        <RecentPage />
    {:else if $selected_page == 'Settings'}
        <SettingsPage />
    {:else if $selected_page == 'ReportEditor'}
        <ReportEditor />
    {:else if $selected_page == 'Login'}
        <LoginPage />
    {:else if $selected_page == 'SignUp'}
        <SignupPage />
    {:else}
        404 PAGE NOT FOUND
    {/if}
    <!--
        <hr>
        <Extra />
    -->
</main>

<style>
    main{
        display: grid;
        height: 100vh;
        grid-template-columns: 2fr 6px 5fr /*5px 4fr*/;
        padding: 10px;
        gap: 4px;
    }
    hr{
        margin: 0;
        border: none;
        background-color: #FFFC;
        height: 30px;
        margin: auto 0px;
        border-radius: 5px;
    }
</style>
