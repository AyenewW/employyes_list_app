import { createContext, useEffect, useState } from 'react'

export const EmployeesContext = createContext()

export function EmployeeProvider(props) {
  const [employees, setEmployees] = useState([0])
  const [employeeDetail, setEmployeeDetail] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // console.log('is authenticated',isAuthenticated)
  useEffect(() =>{
    const token = localStorage.getItem("token");
    if(token) {
      // const decodedToken = jwt_decode(token)
      setIsAuthenticated(true)
    }else{
      setIsAuthenticated(false)
    }
  }, []);
  // console.log('is authicated',isAuthenticated)

  useEffect(() => {
    fetch("https://lit-dusk-21328.herokuapp.com/api/employees/allemployees")
      .then((res) => res.json())  
      .then((data) => {
        //console.log(data)
        setEmployees(data)  
        setEmployeeDetail(data[0])
        setIsLoading(false)
        // setIsLoggedIn(true)
      })
      .catch((err) => {
        setIsError(true)
      })
  }, [])

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        employeeDetail,
        setEmployees,
        setEmployeeDetail,
        isLoading,
        isError,
        // isLoggedIn,
        isAuthenticated,
      }}
    >
      {props.children}
    </EmployeesContext.Provider>
  )
}