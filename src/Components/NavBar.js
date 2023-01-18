import React from 'react';
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div style={styledNavBar}>
      <h3>EMPLOYEES</h3>
      <ul style={styledUl}>
        <li style={{ cursor: 'pointer' }}>
          <Link style={{textDecoration:"none",color:'white'}} to="/employyes_list_app">HOME</Link>
        </li>
        <li style={{ cursor: 'pointer' }}>
          <Link style={{textDecoration:"none",color:'white'}} to="/Add-employees">ADD-EMPOLYEES</Link>
        </li>
        <li style={{ cursor: 'pointer' }}>
          <Link style={{textDecoration:"none",color:'white'}} to="/Employees-list">EMPLOYEES-LIST</Link>
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
  margin:'10px',
  fontFamily:'georgia'

}
const styledUl = {
  display: 'flex',
  gap: '15px',
  justifyContent: 'flex-end',
  listStyle: 'none',
  margin:'10px',
  padding:'10px',
  fontFamily:'georgia'

}
export default NavBar;






