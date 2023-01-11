import React from 'react'
import { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('')
  const [occupation, setOccupation] = useState('')
  const [image, setImage] = useState('')
  const [callOffice, setCallOffice] = useState('')
  const [callMobile, setCallMobile] = useState('')
  const [sms, setSms] = useState('')
  const [email, setEmail] = useState('')

  

  const handleName = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  const handleOccupation = (event) => {
    console.log(event.target.value)
    setOccupation(event.target.value)
  }
  const handleImage = (event) => {
    console.log(event.target.value)
    setImage(event.target.value)
  }

  const handleCallOffice = (event) => {
    console.log(event.target.value)
    setCallOffice(event.target.value)
  }

  const handleCallMobile = (event) => {
    console.log(event.target.value)
    setCallMobile(event.target.value)
  }

  const handleSms = (event) => {
    console.log(event.target.value)
    setSms(event.target.value)
  }

  const handleEmail = (event) => {
    console.log(event.target.value)
    setEmail(event.target.value)
  }

  return (
    <div>
      <form className="form">
        <h3 className="StyledaddEmployees">
          <p>ADD EMPLOYEES</p>
        </h3>
        
        <input
          type="text"
          placeholder="Name"
          onChange={handleName}
          value={name}
        />
        <input
          type="text"
          placeholder="Occupation"
          onChange={handleOccupation}
          value={occupation}
        />
        <input
          type="text"
          placeholder="url"
          onChange={handleImage}
          value={image}
        />
        <input
          type="text"
          placeholder="Call Office"
          onChange={handleCallOffice}
          value={callOffice}
        />
        <input
          type="text"
          placeholder="Call Mobile"
          onChange={handleCallMobile}
          value={callMobile}
        />
        <input type="text"
         placeholder="SMS" 
         onChange={handleSms}
          value={sms} 
          />
        <input
          type="text"
          placeholder="Email"
          onChange={handleEmail}
          value={email}
        />
        <button type="button" class="btn btn-blue">
                   Submit
        </button>
      </form>
    </div>
  )
}
export default Form