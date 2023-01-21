const SearchBar = () => {
  return (
    <div>
      <input
        style={StyledSearchBar}
        type="text"
        placeholder="Enter Employee Name"
      />
    </div>
  )
}

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
