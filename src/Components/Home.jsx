import React from 'react'
import { Login } from './Login'
import { Register } from './Register'
import { useState } from 'react'

function Home(props) {
    const [currentForm, setCurrentForm] = useState('Login')

    const toggleForm = (formName) => {
        setCurrentForm(formName)
    }
    console.log(currentForm)
    return (
        <div style={{ margin: '0 auto' }}>
            <h1 style={{ textAlign: 'Center', padding: '10px' }}>
                Welcome to the Employees Home Page
            </h1>
            <p style={{ margin: '30px', }}>
                Types of employees:
                Full-Time Employees.
                Part-Time Employees.
                Seasonal Employees.
                Temporary Employees.
                someone who is paid to work for someone else:
                The number of employees in the company has trebled over the past decade.
                I discussed my complaint with an employee of the bank.
                have/recruit/train employees We have ten employees and a turnover of around £450,000.
                a government/company/council employee
                a full-time/part-time employee
                a former/new/prospective employee
                a senior/experienced employee
            </p>
            {currentForm === 'Login' ? (
                <Login setIsLoggedIn={props.setIsLoggedIn} toggleForm={toggleForm} />
            ) : (
                <Register toggleForm={toggleForm} />
            )}
        </div>
    )
}

export default Home