
import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
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
            <h2>Login</h2>
            <form className="loginform" onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder=" Enter Youremail"
                    id="email"
                    name="email"
                />
                <label for="password">Password</label>
                <input
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="Enter Your password"
                    id="password"
                    name="password"
                />
{/* <button className='link-btn'  onClick={()=> props.onFormSwitch ('register')} > Don't have an Account ? Register here.</button> */}

                <Button  className='link-btn' type="submit" variant="contained" style={{ margin: '2rem' }}>
                    Login
                </Button>
            </form>
            <button className="link-btn" onClick={() => props.toggleForm('register')}>
                Don't have an account Register here.
            </button>
        </div>
    )

}
export default Login;