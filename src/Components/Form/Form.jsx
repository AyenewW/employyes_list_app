import { useState ,React} from 'react'
import{StyledForm,StyledInput,StyledButton} from './StyledComponets'
import styled from 'styled-components'

const StyledInputs = styled.input`
  border-color: ${(props) => props.color || 'blue'};
  // :hover {
  //   background: #9E9E9E;
  // }
`
const Form = () => {
  const [employeesData, setEmployeesData] = useState({
    name: '',
    occupation: '',
    callOffice: '',
    callMobile: '',
    sms: '',
    email: '',
    image: '',
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
      <form style={StyledForm} onSubmit={handleSubmit}>
        <StyledInputs
          style={StyledInput}
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          color="#76ff03"
        />
        
        <StyledInputs
          style={StyledInput}
          type="text"
          placeholder="Occupation"
          name="occupation"
          onChange={handleChange}
           color="red"
        />
        <StyledInputs
          style={StyledInput}
          type="text"
          placeholder="Call Office"
          name="callOffice"
          onChange={handleChange}
          color='#FFEB3B'
        />
        <StyledInputs
          style={StyledInput}
          type="text"
          placeholder="Call Mobile"
          name="callMobile"
          onChange={handleChange}
        />
        <StyledInputs
          style={StyledInput}
          type="text"
          placeholder="SMS"
          name="sms"
          onChange={handleChange}
          color='#FF9800'
        />
        <StyledInputs
          style={StyledInput}
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <StyledInputs
          style={StyledInput}
          type="text"
          placeholder="Image url"
          name="image"
          onChange={handleChange}
        />
        <button style={StyledButton} type="button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
 