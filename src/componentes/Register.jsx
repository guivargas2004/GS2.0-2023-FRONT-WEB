import { Link } from "react-router-dom";
import smartIMG from '../assets/smartMed.png';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function Register() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { data } = await axios.get('http://localhost:5000/users')

        const newId = data.length + 1

        const newUser = {
            id: newId,
            name,
            email,
            password
        }

        await axios.post('http://localhost:5000/users', newUser)
        navigate('/')
    }


    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login"></div>
                <form onSubmit={(e => handleSubmit(e))} className="login-form">
                    <span className="login-form-title">Criar Conta</span>

                    <span className="login-form-title">
                        <img src={smartIMG} alt="SmartMed"></img>
                    </span>

                    <div className='wrap-input'>
                        <input
                            className={name !== "" ? 'has-val input' : 'input'}
                            type='name'
                            value={name}
                            onChange={e => setName(e.target.value)}>
                        </input>
                        <span className='focus-input' data-placeholder='Nome'></span>
                    </div>

                    <div className='wrap-input'>
                        <input
                            className={email !== "" ? 'has-val input' : 'input'}
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}>
                        </input>
                        <span className='focus-input' data-placeholder='Email'></span>
                    </div>

                    <div className='wrap-input'>
                        <input
                            className={password !== "" ? 'has-val input' : 'input'}
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}>

                        </input>
                        <span className='focus-input' data-placeholder='Password'></span>
                    </div>

                    <div className='container-login-form-btn'>
                        <button type="submit" className='login-form-btn'>Login</button>
                    </div>

                    <div className='text-center'>
                        <span className='txt1'>Já possui conta?</span>
                        <Link className='txt2' to='/'>Acessar com Email e Senha. </Link>
                    </div>

                </form>
            </div>
        </div>

    )
}