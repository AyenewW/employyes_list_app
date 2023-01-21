import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material'

export const Register = (props) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('fullName', fullName)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
  }

  return (
    <div className="authformcontainer">
      <h2 style={{ textAlign: 'Center' }}>Register</h2>
      <form className="registerform" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          placeholder="Please Enter Your full name"
          id="fullName"
          name="fullName"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Your email"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder=" Enter Your password"
          id="password"
          name="password"
        />
        <Button type="submit" variant="contained" style={{ margin: '2rem' }}>
          Register
        </Button>
      </form>
      <button className="link-btn" onClick={() => props.toggleForm('Login')}>
        Already have an account? Login here.
      </button>
    </div>
  )
}