import EmployeeListItem from "./EmployeeListItem";

const EmployeeList = (props) => {

return props.employees.map(({image,name,occupation},index) => {
  return (
    <EmployeeListItem
    key={index}
    image={image}
    name={name}
    title={occupation}
    onClick={()=>props.setEmployeeDetail(props.employees[index])} />
  )
} )

};
export default EmployeeList;