import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext } from 'react'
import { EmployeesContext } from '../EmployeesContext'

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
`

const StyledInput = styled.input`
  border-color: ${(props) => props.color || 'blue'};
  cursor: pointer;
  text-align: center;
  width: 95%;
  border-radius: 5px;
  padding: 7px 10px;
  margin: 2px 9px;
  height:30px;
  font-size:15px;
  :hover {
  background: #C5CAE9;
    
  }
`
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const { employees, setEmployeeDetail, setEmployees } = useContext(
    EmployeesContext,
    )

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }
  
  const handleSearch = () => {
    const searchedValue = employees.filter((item) => {
      const searchName = item.name.toLowerCase()
      const searchLowerValue = searchValue.toLowerCase()
      return searchLowerValue === searchName
    })
    setEmployees(searchedValue)
    setEmployeeDetail(searchedValue[0])
  }
  return (
    <StyledSearch>
      <StyledInput
         
        type="text"
        placeholder="Search by name"
        onChange={handleChange}
      />
      <FontAwesomeIcon
        style={StyledSearchIcon}
        icon={faSearch}
        onClick={handleSearch}
      />
    </StyledSearch>
  )
}



const StyledSearchIcon = {
  cursor: 'pointer',
  backgroundColor: '#03e9f4',
  padding: '9px 10px',
  borderRadius: '50%',
  position: 'absolute',
  right: '53%',
                 
}

export default SearchBar