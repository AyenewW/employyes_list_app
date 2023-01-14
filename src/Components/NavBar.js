import React from 'react';
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div style={styledNavBar}>
      <h3>Employees</h3>
      <ul style={styledUl}>
        <li style={{ cursor: 'pointer' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ cursor: 'pointer' }}>
          <Link to="/Add-employees">Add Employees</Link>
        </li>
        <li style={{ cursor: 'pointer' }}>
          <Link to="/Employees-list">Employees List</Link>
        </li>
      </ul>
    </div>
  )
}

const styledNavBar = {
  with: '100%',
  gap: '10px',
  display: 'flex',
  alignItems: 'center',
  height: '10vh',
  justifyContent: 'space-between',
  backgroundColor: '#00BCD4',
  color: '#fff',
  padding: '0 30px',

}
const styledUl = {
  display: 'flex',
  gap: '5px',
  justifyContent: 'flex-end',
  listStyle: 'none',

}
export default NavBar;






