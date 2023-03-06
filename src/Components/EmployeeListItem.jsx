// import { useContext,useState } from "react";
// import { Paper } from "@mui/material";
// import styled from "styled-components";
// import { EmployeesContext } from "../EmployeesContext";
// import Skeleton from "@mui/material/Skeleton";
// import Stack from "@mui/material/Stack";
import { useContext, useState } from "react";
import { EmployeesContext } from "../EmployeesContext";
import { Paper } from "@mui/material";
import styled from "styled-components";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";

const StyledCard = styled(Paper)`
  padding: 0.5rem 0.25rem;
  margin: 0.5rem;
`;
const EmployeeListItem = () => {
  const { employees, setEmployeeDetail, deleteEmployee, updateEmployee } =
    useContext(EmployeesContext);
  const { isLoading } = useContext(EmployeesContext);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState({
    id: "",
    name: "",
    image: "",
    occupation: "",
  });

  const handleEditOpen = (employee) => {
    setEditedEmployee(employee);
    setIsEditOpen(true);
  };

  const handleEditClose = () => {
    setIsEditOpen(false);
  };

  const handleEditChange = (e) => {
    setEditedEmployee({
      ...editedEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditSubmit = () => {
    updateEmployee(editedEmployee);
    setIsEditOpen(false);
  };

  const handleDelete = (employee) => {
    deleteEmployee(employee);
  };
  if (isLoading) {
    return (
      <Stack spacing={2}>
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton variant="circular" width={60} height={60} />
      </Stack>
    );
  }
  return (
    employees &&
    employees?.map(( employee, index) => {
      const handleEmployeeDetail = () => {
        setEmployeeDetail(employees[index]);
      };
      return (
        <StyledCard elevation={3}>
          <div
            key={index}
            style={StyledEmployeeListItem}
            onClick={handleEmployeeDetail}
          >
            <img style={StyledImage} src={employee.image} alt={employee.image} />
            <div>
              <h3 style={{ margin: "0" }}>{employee.name}</h3>
              <p style={{ margin: "0" }}>{employee.occupation}</p>
            </div>
            <IconButton aria-label="edit" onClick={() => handleEditOpen(employee)}>
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(employee)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </StyledCard>
);

      })
      
   ) }
      
   
const StyledImage = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
};

const StyledEmployeeListItem = {
  display: "flex",
  gap: "10px",
  margin: "5px",
  cursor: "pointer",
};

export default EmployeeListItem;

