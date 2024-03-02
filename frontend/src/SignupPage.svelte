<script>
    import { select_page } from "./stores";
    import Title from "./Title.svelte";    
</script>
<main class="frosted-panel">
    <Title title="signup"/>
    <form class="signup-form">
        <h1>Signup</h1>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="field" />
        <div class='input'>gender:
            <input type="radio" name="gender" value="male"> male
            <input type="radio" name="gender" value="female"> female
        </div>
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button type="submit">Signup</button>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <p>Already have an account? <span on:click={()=>select_page('Login')}>Login</span></p>
    </form>
    <style>
        .frosted-glass {
            display: grid;
            place-items: center;
            height: 100vh;
            background-color: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(5px);
        }
        .signup-form {
            display: grid;
            gap: 10px;
            padding: 20px;
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(5px);
            margin-top: 10px;
        }
        input, .input {
            padding: 10px;
            border-radius: 5px;
            border: none;
            background-color: white;
        }
        .input{
            color: #999;
            font-size: 0.9em;
            font-weight: 300;
        }
        button {
            padding: 10px;
            border-radius: 5px;
            border: none;
            background-color: #007bff;
            color: white;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        span{
            text-decoration: underline;
            cursor: pointer;
            color: blue;
        }
    </style>
</main>