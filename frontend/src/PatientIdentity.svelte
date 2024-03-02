<main>
    <div id="profile">
        <div>
            Jhon Doe, 25 male<br>
            1234-5678-9101-1121<br>
            blood type: O+<br>
            alergies:
            <ul>
                <li>peanuts</li>
                <li>hoes</li>
            </ul>
            diagnosed with:
            <ul>
                <li>cancer</li>
                <li>diabetes</li>
            </ul>
            current medication:
            <ul>
                <li>chemotherapy</li>
                <li>insulin</li>
                <li>aspirin</li>
            </ul>
        </div>
        <div>
            <img id="picture" src="https://www.w3schools.com/howto/img_avatar.png" alt="profile">
        </div>
    </div>
</main>

<style>
    main{
        background-color: white;
        padding: 10px;
        border-radius: 10px;
    }
    #profile{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 10px;
    }
    img {
        border-radius: 15px;
        max-width: 100%;
        max-height: 100%;
        margin-left: auto;
        display: block;
    }
    ul{
        margin: 0;
    }
</style>