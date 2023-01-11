const SearchBar = () => {
    return ( 
      <div>
      <input style={styledSearchBar} type="text" placeholder="Search" />
    </div>
     
     );
    
    };
const styledSearchBar ={
cursor: 'pointer',
width: '95%',
borderRadius: '5px',
border: '1px solid #333',
textAlign: 'center',
padding: '7px 0px',
margin: '3px 3px',
    }
    export default SearchBar;
      
  
