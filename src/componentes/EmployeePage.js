import EmployeeDetail from "./EmployeeDetail";
import Header from "./Header";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
const EmployeePage =(props)=>{

return ( 
<div style={styledEmployeePage}>
<h3><Header title="Employee"  icon={faAngleLeft}/></h3>
<EmployeeDetail
 employees={props.employees}
  EmployeeDetail={props.EmployeeDetail}/>
</div>
);

};
const styledEmployeePage ={
//border: "2px solid #8BC34A",
width:"50%",
//backgroundColor:"#B2EBF2",
fontFamily:"strong",
cursor: 'pointer',
//borderRadius: '5px',
//padding:'7px',

}
export default EmployeePage;