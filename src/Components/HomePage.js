import EmployeeList from './EmployeeList'
import Header from './Header'
import SearchBar from './SearchBar'

const HomePage = ({ employees, setEmployeeDetail }) => {
  return (
    <div style={StyledHomePage}>
      <div style={StyledHeaderContent}>
        <Header title="EMPLOYEES DIRECTORY" />
      </div>
      <SearchBar />
      <EmployeeList
        employees={employees}
        setEmployeeDetail={setEmployeeDetail}
      />
    </div>
  )
}

const StyledHomePage = {
  width: '50%',
  fontFamily: "strong",
}

const StyledHeaderContent = {
  width: '100%',
  marginLeft: '150px',
}
export default HomePage
