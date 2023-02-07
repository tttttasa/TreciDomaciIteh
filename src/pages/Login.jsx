import FormField from "../components/FormField";
import { useState } from 'react'


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function emailHandle(email) {
        setEmail(email)
    }

    function passwordHandle(password) {
        setPassword(password)
    }


    return (
        <div>
            <h1>LOGIN PAGE</h1>

            <FormField type="text" labelText="Email" funkcija={emailHandle} />
            <FormField type="password" labelText="Password" funkcija={passwordHandle} />

            <button type="button">Login</button>


        </div>
    )
}

export default Login;