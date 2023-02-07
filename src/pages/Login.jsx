import FormField from "../components/FormField";


function Login() {

    return (
        <div>
            <h1>LOGIN PAGE</h1>

            <FormField type="text" labelText="Email" />
            <FormField type="password" labelText="Password" />

            <button type="button">Login</button>


        </div>
    )
}

export default Login;