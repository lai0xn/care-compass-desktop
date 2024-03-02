<main>
    <div id="one"></div>
    <div id="two"></div>
    <div id="three"></div>
    <div id="four"></div>
</main>

<style>
    main{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: white;
        z-index: -1;
        filter: saturate(.8);
    }
    div{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    #one{
        background: radial-gradient(
            circle at 10% 15%,
            rgba(231, 38, 189, 0.5) 10%,
            rgba(255, 255, 255, 0) 120%
        );
    }
    #two{
        background: radial-gradient(
            circle at 85% 70%,
            rgba(19, 226, 226, 0.5) 0%,
            rgba(255, 255, 255, 0) 120%
        );
    }
    #three{
        background: radial-gradient(
            circle at 60% -5%,
            rgba(156, 231, 58, 0.5) 0%,
            rgba(255, 255, 255, 0) 130%
        );
    }
    #four{
        background: radial-gradient(
            circle at 40% 90%,
            rgba(252, 205, 76, 0.3) 10%,
            rgba(255, 255, 255, 0) 100%
        );
    }
</style>