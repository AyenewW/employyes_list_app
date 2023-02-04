import { useState,React } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const userEmail = localStorage.getItem('email')
        const userPassword = localStorage.getItem('password')

        if (email === userEmail && pass === userPassword) {
            props.setIsLoggedIn(true)
            navigate('/add-employees')
        } else {
            alert('Login-failed')
            props.setIsLoggedIn(false)
        }
    }

    return (
        <div className="authformcontainer">
            <h2 style={{ textAlign: 'Center' }}>Login</h2>
            <form className="loginform" onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input
                 className="user-input"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter Your email"
                    id="email"
                    name="email"
                />
                <label for="password">Password</label>
                <input
                 className="user-input"
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                    name="password"
                />
                <Button type="submit" variant="" style={{ margin: '2rem',background:'#B9F6CA'}}>
                    Login
                </Button>
            </form>
            <button className="link-btn" onClick={() => props.toggleForm('register')}>
                Don't have an account? Register here.
            </button>
        </div>
    )
}