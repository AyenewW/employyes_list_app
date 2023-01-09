import Header from "./Header";
import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";
const HomePage = ({Employee,setEmployeeDetail}) => {
    return ( 
      <div style={styledHomePage}>
        <div style={styledHedercontentes}>
      <h3> <Header title="Employee Directory"/></h3>
        </div>
        <SearchBar />
       <EmployeeList Employee={Employee}
        setEmployeeDetail={setEmployeeDetail}/>
			</div> 
	
     );
    
    };
   const styledHomePage ={
    //border: "1px solid #E91E63",
    width:"50%",
   // backgroundColor:"#BBDEFB",
    fontFamily:"strong",
   // padding:'2px',
    //borderRadius: '5px',
    }
    const styledHedercontentes={
      width: '100%',
  marginLeft: '35%',
 // marginRight: '50px'
    }
    export default HomePage;