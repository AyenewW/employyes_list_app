import EmployeeList from './EmployeeList'
import Header from './Header'
import SearchBar from './SearchBar'
import styled from 'styled-components'

const StyledHomePage = styled.div`
  width: 50%;
`

const HomePage = () => {
  return (
    <StyledHomePage>
      <div style={StyledHeader}>
        <Header title="Employee Directory" color="green" />
      </div>
      <SearchBar />
      <EmployeeList />
    </StyledHomePage>
  )
}

const StyledHeader = {
  width: '100%',
  marginLeft: '80px',
}
export default HomePage