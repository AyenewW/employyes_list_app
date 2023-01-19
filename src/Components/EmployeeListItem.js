import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
const EmployeeListItem = ({ image, name, isLoading, occupation, onClick }) => {
 if (isLoading) {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="rectangular" width={400} height={70} />
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="rectangular" width={400} height={70} />
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="rectangular" width={400} height={70} />
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="rectangular" width={400} height={70} />
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="rectangular" width={400} height={70} />
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="rectangular" width={400} height={70} />
    </Stack>
  )
}
 
  return (
    <div style={styledEmployeeListItem} onClick={onClick}>
      <img style={styledImage} src={image} alt={image} />
      <div>
        <h3 style={{ margin: "0" }}>{name}</h3>
        <p style={{ margin: "0" }}>{occupation}</p>
      </div>
    </div>
  );
};


const styledImage = {
  width: "60px",
  height: "60px",
  borderRadius: "50%",

};

const styledEmployeeListItem = {
  display: 'flex',
  gap: '10px',
  margin: '8px',
  padding: '5px',
  backgroundColor: '#f4f4f4',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
  alignItems: 'center',
  cursor: 'pointer',

};


export default EmployeeListItem;