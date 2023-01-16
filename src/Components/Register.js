import React from 'react'
import {useState} from "react";

function Register (props) {
    const [email,setEmail] =useState('');
    const [pass,setPass] =useState('');
    const [name,setName]  = useState();
    const [employeesData, setEmployeesData] = useState ({
    })
      const handleChange = (event) => {
        const updatedUserData = {
          ...employeesData, [event.target.name]: event.target.value,
        };
        setEmployeesData(updatedUserData);
      }
      function handleSubmit (event) {
        event.preventDefault();
        fetch("https://lit-dusk-21328.herokuapp.com/api/employees/addemployees", {
          method: JSON.stringify(employeesData),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    
    return (
        <div style={authformcontainer}>
            <h2>Register</h2>
        <form style={loginform} onSubmit={handleSubmit} >
            <label htmlFor='name'>Full name</label>
            <input value={name}name='name' id='name'placeholder='full Name' onChange = {handleChange}/>
            <label htmlfor='email'>Email</label>
            <input value={email}onChange={(e)=>setEmail(e.target.value)} type='email'placeholder='Youremail'name='email'/>
            <label htmlfor='password'>Password</label>
            <input value={pass}onChange={(e)=>setPass(e.target.value)} type='password'placeholder='' id='name'name='password'/>
            <button type='submit' >Log In</button>
            </form>
            <button className='link-btn' onClick={()=> props.onFormSwitch ('login')}> Already have an Account ? Login here.</button>
            </div>
    )
  };

const authformcontainer={
    textAlign: 'center',
   display: 'flex',
    border: " green solid 2px ",
    borderRadius: "3px",
     padding: "10px",
       alignItems: 'center',
     flexDirection: 'column',
}

const loginform={
    
        textAlign: 'center',
        display: 'flex',
         
        justifyContent: 'center',
       flexDirection: 'column',
    }
export default Register
