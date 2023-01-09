import EmployeeListItem from "./EmployeeListItem";

const EmployeeList = (props) => {

return props.Employee.map(({image,name,title},index) => {
  return (
    <EmployeeListItem
    key={index}
    image={image}
    name={name}
    title={title}
    onClick={()=>props.setEmployeeDetail(props.Employee[index])} />
  )
} )

};
export default EmployeeList;