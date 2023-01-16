import React from 'react'
import { useState } from 'react'

function Login(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [employeesData, setEmployeesData] = useState({
        username: "",
        password: "",
    })
    const handleChange = (event) => {
        const updatedUserData = {
            ...employeesData, [event.target.name]: event.target.value,
        };
        setEmployeesData(updatedUserData);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div style={authformcontainer}>
            <h2>Login</h2>
            <form style={loginform} onSubmit={handleSubmit} >
                <label htmlFor='email'>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Youremail' name='email' />
                <label htmlFor='password'>Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='' id='name' name='password' />
                <button type='submit' >Log In</button>
            </form>
            <button className='link-btn'  onClick={()=> props.onFormSwitch ('register')} > Don't have an Account ? Register here.</button>
        </div>

    )
}
 
const authformcontainer = {
   textAlign: 'center',
   display: 'flex',
    border: " green solid 2px ",
    borderRadius: "3px",
     padding: "5px",
    flexDirection: 'column',
     
}
 

const loginform = {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
   flexDirection: 'column',
   padding:'10px',
}
 export default Login
