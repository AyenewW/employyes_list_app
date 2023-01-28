import {createContext,useState,useEffect} from "react";
export const EmployeesContext = createContext();
export function EmployeeProvider (props) {
    const [employees, setEmployees] = useState([]);//[0]
    const [employeeDetail, setEmployeeDetail] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDeletable,setIsDeletable] =useState('');
    const [isEditable,setIsEditable] =useState('');
   
    //console.log('isLoading', isLoading);
    useEffect(() => {
      fetch(`https://lit-dusk-21328.herokuapp.com/api/employees/allemployees`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setEmployees(data);
          setEmployeeDetail(data[0]);
          setIsLoading(false)
          setIsLoggedIn(true)
          setIsDeletable(data)
          setIsEditable(data)
        })
        .catch((err) => {
          setIsError(true)
        });
    }, []);
   
    return (
        <EmployeesContext.Provider 
        value={{
        employees,
        employeeDetail,
        setEmployeeDetail,
        isLoading,
        isError,
        isLoggedIn,
        isDeletable,
        isEditable,
        setIsLoggedIn,
        
        }}>
          {props.children}
        </EmployeesContext.Provider>
      );
}