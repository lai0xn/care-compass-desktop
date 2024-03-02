<script>
    import { select_page } from "./stores";
    import Title from "./Title.svelte";    

    /*
    	    name: string;
	    lastName: string;
	    password: string;
	    email: string;
	    phoneNumber: string;
	    isDoctor: boolean;
	    isActive: boolean;
	    sex: boolean;
    */
    let new_user = {
        name: '',
        lastName: '',
        password: '',
        email: '',
        phoneNumber: '',
        isDoctor: true,
        isActive: true,
        sex: 'male',
    }

    let submit = (event) => {
        console.table(new_user);
    }
        
</script>
<main class="frosted-panel">
    <Title title="signup"/>
    <form class="signup-form">
        <h1>Signup</h1>
        <input type="text" placeholder="First Name" required bind:value={new_user.name} />
        <input type="text" placeholder="Last Name" required bind:value={new_user.lastName} />
        <input type="text" placeholder="Email" required bind:value={new_user.email} />
        <input type="text" placeholder="Phone Number" required bind:value={new_user.phoneNumber} />
        <div class='input'>gender:
            <input type="radio" name="gender" value="male" bind:group={new_user.sex}> male
            <input type="radio" name="gender" value="female" bind:group={new_user.sex}> female
        </div>
        <input type="password" placeholder="Password" required bind:value={new_user.password} />
        <!-- <input type="password" placeholder="Confirm Password" /> -->

        <button type="submit" on:click={submit}>Signup</button>
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