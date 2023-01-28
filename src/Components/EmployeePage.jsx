import Header from './Header'
import EmployeeDetail from './EmployeeDetail'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const EmployeePage = () => {
  return (
    <div style={StyledHomePage}>
      <Header title="EMPLOYEE" icon={faAngleLeft} />
      <EmployeeDetail/>
    </div>
  )
}

const StyledHomePage = {
  width: '50%',
  fontFamily: "strong",
}
export default EmployeePage