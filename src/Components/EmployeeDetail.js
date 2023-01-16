import React from "react";
const EmployeeDetail = ({ employeeDetail }) => {
  return (
    <div style={styledEmployeeDetailpage}>
      <div style={styledEmployeeDetailItem}>
        <img
          style={styledImage}
          src={employeeDetail.image}
          alt={employeeDetail.image}
        />

        <div>

          <h4 style={{ margin: "0" }}>{employeeDetail.name}</h4>
          <p style={{ margin: 0 }}>{employeeDetail.occupation}</p>
        </div>
      </div>
      <div>

        <ul style={styledUI}>
          <li>
            <h3>Call Office</h3>
            <p>{employeeDetail.callOffice} </p>
            <div style={alignlift} > {">"} </div>
          </li>
        </ul>

        <ul style={styledUI}>
          <li>

            <h3>Call Mobile</h3>
            <p>{employeeDetail.callMobile}</p>
            <div style={alignlift} > {">"} </div>
          </li>
        </ul>
        <ul style={styledUI}>
          <li>
            <h3>SMS</h3>
            <p>{employeeDetail.sms}</p>
            <div style={alignlift} > {">"} </div>
          </li>
        </ul>
        <ul style={styledUI}>
          <li>
            <h3>Email</h3>
            <p>{employeeDetail.email}</p>
            <div style={alignlift} > {">"} </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
const alignlift = {
  padding: "3px 2px",
  margin: "10px 10px",
  marginLeft: "450px",
  color: 'blue',
}
const styledImage = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  margin: '5px'


};

const styledEmployeeDetailItem = {

  display: 'flex',
  gap: '15px',
  borderBottom: '2px solid #f4f4f4',
  padding: '10px 0',
  alignItems: 'center',


};

const styledEmployeeDetailpage = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  border: '2px solid #f4f4f4',
  margin: '10px',
  //borderRadius: '5px',

}

const styledUI = {
  borderBottom: '2px solid #f4f4f4',
  padding: '7px',
  listStyle: 'none',
}

export default EmployeeDetail;