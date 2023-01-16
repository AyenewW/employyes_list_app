import './App.css'
import { useState, useEffect } from 'react'
import Form from './Components/Form'
import Home from './Components/Home'
import Employees from './Components/Employees'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Register from './Components/Register';
import Login from './Components/Login';
function App() {
   const [currentFORM, SetCurrentForm] = useState('login')
   const toggleForm =(formName)=>{
    SetCurrentForm(formName);
   }
  const [employees, setEmployees] = useState([0])
  useEffect(() => {
    fetch(`https://lit-dusk-21328.herokuapp.com/api/employees/allemployees`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setEmployees(data)
      })
  }, [])
  currentFORM === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
  const [employeeDetail, setEmployeeDetail] = useState({
    id: 1,
    image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: 'John Doe',
    occupation: 'Front end dev',
    callOffice: '1234567',
    callMobile: '235690',
    sms: '222333444',
    email: 'solo@test.com',
  })
  // console.log('employeeDetail', employeeDetail)
  return (
    <BrowserRouter>
      <NavBar />
      {/* {
          currentFORM === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
        } */}
      <div className="container">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-Employees" element={<Form />} />
          <Route
            path="/employees-list"
            element={
              <Employees
                setEmployeeDetail={setEmployeeDetail}
                employeeDetail={employeeDetail}
                employees={employees} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;