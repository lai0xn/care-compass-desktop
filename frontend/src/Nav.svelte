<script>
// @ts-nocheck

    import Title from './Title.svelte';
    import home from './assets/images/home.png';
    import settings from './assets/images/settings.png';
    import recent from './assets/images/recent.png';

    import { selected_page } from './stores.js';
    let select_page = (page) => {
        selected_page.set(page)
    }

</script>

<main class="frosted-panel">
    <Title title="user" />
    <div id="profile">
        <img id="picture" src="https://www.w3schools.com/howto/img_avatar.png" alt="pfp">
        <div id="name">issam agoudjil</div>
        <div id="field">generalist</div>
    </div>
    <Title title="navigation" />
    <div id="links">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="link {$selected_page=="Home"?"on":""}" id="home" on:click={()=>select_page("Home")}>
            <img src={home} alt="1">
            home
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="link {$selected_page=="Recent"?"on":""}" id="patience" on:click={()=>select_page("Recent")}>
            <img src={recent} alt="2">
            recent
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="link  {$selected_page=="Settings"?"on":""}" id="settings" on:click={()=>select_page("Settings")}>
            <img src={settings} alt="3">
            settings
        </div>
    </div>
    <div id="bottom">
        <Title title="version 1.0.0 mar23" />
        <div id="actions">
            <div id="logout">Logout</div>
            <div id="exit">Exit</div>
        </div>
    </div>
</main>

<style>
    *{
        box-sizing: border-box;
    }
    main{
        display: flex;
        flex-direction: column;
    }
    #profile{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: 1fr 1fr;
        height: 80px;
        margin-top: 20px;
        margin-bottom: 19vh;
        column-gap: 5px;
        background-color: #f8f8f8;
        border-radius: 10px;
    }
    #picture{
        max-width: 100%;
        max-height: 100%;
        grid-area: 1 / 1 / 3 / 1;
        padding: 5px;
        border-radius: 10px;
    }
    #name{
        font-size: 1.4rem;
        display: flex;
        align-items: flex-end;
    }
    #field{
        font-size: 1rem;
        color: #222;
        padding-left: 5px;
    }
    #links{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: auto;
        margin-top: 20px;
    }
    .link{
        cursor: pointer;
        height: 50px;
        display: flex;
        align-items: center;
        background-color: white;
        border-radius: 10px;
        padding-left: 20px;
        letter-spacing: 1px;
        gap: 10px;
    }
    .on{
        filter: invert(1);
        background-color: rgb(79, 158, 68);
    }
    .link:hover{
        filter: invert(1);
        background-color: #3e7a26;
    }
    .link img{
        height:26px;
    }
    #bottom{
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-top: auto;
    }
    #actions{
        display: flex; 
        flex-wrap: wrap;
        gap: 10px;
        color: rgb(235, 45, 108);
        text-decoration: underline;
        font-family: monospace;
        font-size: 0.9em;
    }
    #actions div{
        width: fit-content;
        cursor: pointer;
    }
</style>