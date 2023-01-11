 import React from "react";
const EmployeeDetail = ({EmployeeDetail}) => {
      return(
      <div style={styledEmployeeDetailpage}>
      <div style={styledEmployeeDetailItem}>
      <img 
       style={styledImage} 
       src={EmployeeDetail.image} 
       alt={EmployeeDetail.image} 
       />
       
      <div>
          <h4 style={{margin:"0"}}>{EmployeeDetail.name}</h4>
          <p style={{margin:0}}>{EmployeeDetail.occupation}</p>
           </div>
         </div>
      <div>
  <ul style={styledUI}>
    <li>
      <h3>Call Office</h3>
      <p>{EmployeeDetail.calloffice}</p>
    </li>
    </ul>

<ul style={styledUI}>
<li>
  <h3>Call Mobile</h3>
  <p>{EmployeeDetail.callMobile}</p>
</li>
</ul>

<ul style={styledUI}>
    <li>
      <h3>SMS</h3>
      <p>{EmployeeDetail.sms}</p>
    </li>
    </ul>

<ul style={styledUI}>
<li>
  <h3>Email</h3>
  <p>{EmployeeDetail.email}</p>
</li>
</ul>
</div>
</div>
      )
}
const styledImage ={
      width: "80px",
      height:"80px",
      borderRadius:"50%",
      margin:'5px'
      
      
  };

  const styledEmployeeDetailItem={
     
     display: 'flex',
     gap: '15px',
     borderBottom: '2px solid #f4f4f4',
     padding: '10px 0',
     alignItems: 'center',
      
    
  };

  const styledEmployeeDetailpage = {
display: 'flex',
flexDirection: 'column',
//gap: '10px',
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