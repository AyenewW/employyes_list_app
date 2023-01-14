import Header from "./Header";
import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";
const HomePage = ({employees,setEmployeeDetail}) => {
return ( 
<div style={styledHomePage}>
<div style={styedHeaderLeft}>
<Header title="Employee Directory" />
</div>
<SearchBar />
<EmployeeList
employees={employees} 
setEmployeeDetail={setEmployeeDetail}/>
</div> 
);
};
const styledHomePage = {
  //border: "1px solid #E91E63",
  width: "50%",
  // backgroundColor:"#BBDEFB",
  fontFamily: "strong",
  // padding:'2px',
  //borderRadius: '5px',
};
const styedHeaderLeft = {
  width: "100%",
  marginLeft: "35%",
  // marginRight: '50px'
};
export default HomePage;
