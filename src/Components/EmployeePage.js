import EmployeeDetail from "./EmployeeDetail";
import Header from "./Header";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const EmployeePage = ( props) => {
  return (
    <div style={styledEmployeePage}>
      <Header title="Employee" icon={faAngleLeft} />
      <EmployeeDetail
      employees={props.employees}
       employeeDetail={props.employeeDetail}
       isLoading={props.isLoading}
       isError={props.isError}
       />
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