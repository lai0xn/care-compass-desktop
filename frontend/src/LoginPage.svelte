<script>
	import { select_page } from "./stores";
    import Title from "./Title.svelte";
    let user = {
        username: '',
        password: ''
    }
    let submit = (event) => {
        console.table(user);
    }
</script>
<main class="frosted-panel">
    <Title title="login"/>
    <form class="login-form">
        <h1>Login</h1>
        <input type="text" placeholder="Email" required bind:value={user.username} />
        <input type="password" placeholder="Password" required bind:value={user.password} />
        <button type="submit" on:click={submit}>Login</button>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <p>Don't have an account? <span on:click={()=>select_page('SignUp')}>Signup</span></p>
    </form>
    <style>
        .login-form {
            display: grid;
            gap: 10px;
            padding: 20px;
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(5px);
            margin-top: 10px;            
        }
        input {
            padding: 10px;
            border-radius: 5px;
            border: none;
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