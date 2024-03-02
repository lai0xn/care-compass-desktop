<script>
	import { select_page } from "./stores";
    import { user_id } from "./stores";
    import Title from "./Title.svelte";
    import {Login} from "../wailsjs/go/main/App.js"
    
    let new_user = {
        email: '',
        password: ''
    }

    let submit = (event) => {
        event.preventDefault()
        Login(new_user).then((res)=>{
            console.log(res)
            if(res.status !== 200) alert('login error')
            else{
                user_id.set({token: res.token})
                select_page('Home')
            }
        })
    }
</script>
<main class="frosted-panel">
    <Title title="login"/>
    <form class="login-form">
        <h1>Login</h1>
        <input type="text" placeholder="Email" required bind:value={new_user.email} />
        <input type="password" placeholder="Password" required bind:value={new_user.password} />
        <button type="button" on:click={submit}>Login</button>
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