import Header from './Header'
import EmployeeDetail from './EmployeeDetail'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const EmployeePage = (props) => {
  return (
    <div style={StyledHomePage}>
      <Header title="EMPLOYEE" icon={faAngleLeft} />
      <EmployeeDetail
        employees={props.employees}
        employeeDetail={props.employeeDetail}
        isLoading={props.isLoading}
        isError={props.isError}
      />
    </div>
  )
}

const StyledHomePage = {
  width: '50%',
  fontFamily: "strong",
}
export default EmployeePage