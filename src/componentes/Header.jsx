import { useEffect, useState } from 'react'
import '../styles/header.scss'
import { useNavigate } from 'react-router-dom'
import { CiLogout } from "react-icons/ci";

export default function Header() {
    const [user, setUser] = useState("")
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('user')
        navigate('/')
    }

    useEffect(() => {
        const existUser = localStorage.getItem('user')

        if (existUser === null) {
            localStorage.removeItem('user')
            navigate('/')
        }

        setUser(existUser)

    }, [])
    return (
        <header>
            {
                user !== "" ? <h1>Bem vindo, {user}!</h1> : <h1>Bem vindo!</h1>
            }

            <nav>
                <p>Global Solution 2023 - Engenharia de Software</p>
                {user !== "" && <CiLogout onClick={logout} />}
            </nav>
        </header>
    )
}