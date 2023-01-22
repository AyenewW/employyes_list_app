import React from 'react'
import { useState } from 'react'
import {styledForm,styledButton,styledInput} from './styledcomponents'
const Form = () => {
  const [employeesData, setEmployeesData] = useState({
    name: '',
    image: '',
    occupation: '',
    callOffice: '',
    callMobile: '',
    sms: '',
    email: '',
  })

  function handleChange(event) {
    const updatedUserData = {
      ...employeesData,
      [event.target.name]: event.target.value,
    }
    setEmployeesData(updatedUserData)
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch(`https://lit-dusk-21328.herokuapp.com/api/employees/allemployees`, {
      method: 'POST',
      body: JSON.stringify(employeesData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>ADD EMPLOYEE</h1>
      <form style={styledForm} onSubmit={handleSubmit}>
        <input
          style={styledInput}
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />

        <input
          style={styledInput}
          type="text"
          placeholder="Occupation"
          name="occupation"
          onChange={handleChange}
        />
        <input
          style={styledInput}
          type="text"
          placeholder="Call Office"
          name="callOffice"
          onChange={handleChange}
        />
        <input
          style={styledInput}
          type="text"
          placeholder="Call Mobile"
          name="callMobile"
          onChange={handleChange}
        />
        <input
          style={styledInput}
          type="text"
          placeholder="SMS"
          name="sms"
          onChange={handleChange}
        />
        <input
          style={styledInput}
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          style={styledInput}
          type="text"
          placeholder="Image url"
          name="image"
          onChange={handleChange}
        />
        <button style={styledButton} type="button">
          Submit
        </button>
      </form>
    </div>
  )
}


export default Form
