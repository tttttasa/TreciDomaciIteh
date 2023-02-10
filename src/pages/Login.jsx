import FormField from "../components/FormField";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    let zaposleni = [
        { id: 1, email: 'zap1@gmail.com', password: 1 },
        { id: 2, email: 'zap2@gmail.com', password: 2 },
        { id: 3, email: 'zap3@gmail.com', password: 3 }
    ]


    function emailHandle(email) {
        setEmail(email)
    }

    function passwordHandle(password) {
        setPassword(password)
    }


    function login() {
        for (let i = 0; i < zaposleni.length; i++) {
            if (zaposleni[i].email == email && zaposleni[i].password == password) {
                navigate('/taskovi')
            }
        }
    }


    return (
        <div>
            <h1 className="mt-4">LOGIN PAGE</h1>

            <FormField type="text" labelText="Email" funkcija={emailHandle} />
            <FormField type="password" labelText="Password" funkcija={passwordHandle} />
            <br />
            <button onClick={login} className="btn btn-dark" type="button">Login</button>


        </div>
    )
}

export default Login;