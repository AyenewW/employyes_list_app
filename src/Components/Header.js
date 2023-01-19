import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header =(props)=> {
return (
<div style={styledHeader}>
< FontAwesomeIcon icon={props.icon} color='#03A9F4'/>
{props.title}
</div>
)

};

const styledHeader={
textAlign:"center",
backgroundColor:"#fff",
width:"50%",
padding:"0 1px",
margin:"2px 2px",
cursor: 'pointer',
borderRadius: '5px',
justifyContent: 'space-between',
display:'flex',
}

export default Header;