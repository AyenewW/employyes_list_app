import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import  styled  from 'styled-components';
import React from "react"; 

const StyledSearch = styled.div`
display:flex;
align-items:center;
`
const SearchBar = () => {
  return (
    <StyledSearch>
      <input
        style={StyledSearchBar}
        type="text"
        placeholder="Search by Name"
       />
      <FontAwesomeIcon  icon={ faSearch} 
     />
    </StyledSearch>
  );
};

const StyledSearchBar = {

  width: '97%',
  borderRadius: '5px',
  border: '1px solid #333',
  textAlign: 'center',
  padding: '7px 2px',
  margin: '2px 5px',
  cursor: 'pointer',
}

export default SearchBar
