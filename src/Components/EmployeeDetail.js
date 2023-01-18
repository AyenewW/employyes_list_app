// import React from "react";
// import Skeleton from '@mui/material/Skeleton';
// import Stack from '@mui/material/Stack';
// //import styled from "styled-components";
// const EmployeeDetail = ({ employeeDetail,isLoading }) => {
//   if(isLoading){
//     return (
//     <Stack spacing={1}>
//     {/* For variant="text", adjust the height via font-size */}
//     <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
//     {/* For other variants, adjust the size with `width` and `height` */}
//     <Skeleton variant="circular" width={40} height={40} />
//     <Skeleton variant="rectangular" width={210} height={60} />
//     <Skeleton variant="rounded" width={210} height={60} />
//   </Stack>
//   )
//   }
//   return (
//     <div style={styledEmployeeDetailpage}>
//       <div style={styledEmployeeDetailItem}>
//         <img
//           style={styledImage}
//           src={employeeDetail.image}
//           alt={employeeDetail.image}
//         />

//         <div>

//           <h4 style={{ margin: "0" }}>{employeeDetail.name}</h4>
//           <p style={{ margin: 0 }}>{employeeDetail.occupation}</p>
//         </div>
//       </div>
//       <div>

//         <ul style={styledUI}>
//           <li>
//             <h3>Call Office</h3>
//             <p>{employeeDetail.callOffice} </p>
//             <div style={alignlift} > {">"} </div>
//           </li>
//         </ul>

//         <ul style={styledUI}>
//           <li>

//             <h3>Call Mobile</h3>
//             <p>{employeeDetail.callMobile}</p>
//             <div style={alignlift} > {">"} </div>
//           </li>
//         </ul>
//         <ul style={styledUI}>
//           <li>
//             <h3>SMS</h3>
//             <p>{employeeDetail.sms}</p>
//             <div style={alignlift} > {">"} </div>
//           </li>
//         </ul>
//         <ul style={styledUI}>
//           <li>
//             <h3>Email</h3>
//             <p>{employeeDetail.email}</p>
//             <div style={alignlift} > {">"} </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   )
// }
// const alignlift = {
//   padding: "3px 2px",
//   margin: "10px 10px",
//   marginLeft: "450px",
//   color: 'blue',
//  }
// const styledImage = {
//   width: "80px",
//   height: "80px",
//   borderRadius: "50%",
//   margin: '5px'


// };

// const styledEmployeeDetailItem = {

//   display: 'flex',
//   gap: '15px',
//   borderBottom: '2px solid #f4f4f4',
//   padding: '10px 0',
//   alignItems: 'center',


// };

// const styledEmployeeDetailpage = {
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '10px',
//   border: '2px solid #f4f4f4',
//   margin: '10px',
//   //borderRadius: '5px',

// }

// const styledUI = {
//   borderBottom: '2px solid #f4f4f4',
//   padding: '7px',
//   listStyle: 'none',
// }

// export default EmployeeDetail;
import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import styled from 'styled-components'

const EmployeeDetail = ({ employeeDetail, isLoading }) => {
  const StyledEmployeeDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: '10px',
  border: 2px solid #f4f4f4;
  margin: 10px;
  border-radius: 5px;
  `
  const Image = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
  `

  const StyledUl = styled.ul`
    border-bottom: 2px solid #f4f4f4;
    padding: 5px;
    list-style: none;
  `

  if (isLoading) {
    return (
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={80} height={80} />
        <Skeleton variant="rectangular" width={400} height={70} />
        <Skeleton variant="rectangular" width={400} height={70} />
        <Skeleton variant="rectangular" width={400} height={70} />
        <Skeleton variant="rectangular" width={400} height={70} />
      </Stack>
    )
  }
  return (
    <div>
      <StyledEmployeeDetail>
        <Image src={employeeDetail.image} alt={employeeDetail.image} />
        <div>
          <h3>{employeeDetail.name}</h3>
          <p>{employeeDetail.occupation}</p>
        </div>
      </StyledEmployeeDetail>
      <StyledUl>
        <li>
          <h3>Call Office</h3>
          <p>{employeeDetail.callOffice}</p>
        </li>
      </StyledUl>
      <StyledUl>
        <li>
          <h3>Call Mobile</h3>
          <p>{employeeDetail.callMobile}</p>
        </li>
      </StyledUl>
      <StyledUl>
        <li>
          <h3>SMS</h3>
          <p>{employeeDetail.sms}</p>
        </li>
      </StyledUl>
      <StyledUl>
        <li>
          <h3>Email</h3>
          <p>{employeeDetail.email}</p>
             
        </li>
      </StyledUl>
    </div>
  )
}

export default EmployeeDetail