import React from "react";
import { useState } from "react";

const Form = () => {
  const [employeesData, setEmployeesData] = useState({
    name: "",
    occupation: "",
    callOffice: "",
    callMobile: "",
    sms: "",
    email: "",
    image: "",
  });
  function handleChange(event) {
    const updatedUserData = {
      ...employeesData,
      [event.target.name]: event.target.value,
    };
    setEmployeesData(updatedUserData);
  }
  function handleSubmit (event) {
    event.preventDefault()
      fetch("https://lit-dusk-21328.herokuapp.com/api/employees/allemployees",
       {
        method: "POST",
        body: JSON.stringify(employeesData),
        headers: {
          "Content-Type": "application/json",
        },
      });
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ADD EMPLOYEES</h1>
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
          onChange={handleChange}
          name="callMobile"
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
          placeholder="url"
          name="image"
          onChange={handleChange}
          />
        <button style={styledButton} type="button">
         Submit
        </button>
      </form>
    </div>
  );
};
const styledForm = {
  display: 'flex',
  flexDirection: 'column',
  padding: '3px 2px',
  margin: '20px auto',
  rowGap: '15px',
  justifyContent: 'center',
  width: '40%',
  
};
const styledInput = {
 
  padding: '0.25rem 1rem',
   borderRadius: "9px",
  fontSize: "large",
   
   textAlign: "center",
};
const styledButton = {
  border: 'none',
  borderRadius: '10px',
  color: '#fff',
  padding: '0.5rem 1rem',
  fontSize: '1.5rem',
  };

export default Form;
