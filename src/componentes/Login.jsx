import { useState } from 'react';
import smartIMG from '../assets/smartMed.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

import '../styles/login.scss'
import axios from 'axios';


export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { data } = await axios.get('http://localhost:5000/users')

        const userExists = data.find(item => item.email === email)

        if (userExists === undefined) {
            setErr("Usuário não encontrado")

        }

        if (userExists.password !== password) {
            setErr("Usuário ou senha inválido")
        }
        else {
            localStorage.setItem("user", userExists.name)
            navigate('/home')
        }

    }

    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form onSubmit={(e) => handleSubmit(e)} className="login-form">
                        <span className="login-form-title">Bem Vindo!</span>
                        <span className="login-form-title">
                            <img src={smartIMG} alt=""></img>
                        </span>

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
                            <button type='submit' className='login-form-btn'>Login</button>
                        </div>

                        {err !== "" && <p className='error-message'>{err}</p>}

                        <div className='text-center'>
                            <span className='txt1'>Não possui conta?</span>
                            <Link className='txt2' to='/register'>Criar conta.
                            </Link>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}