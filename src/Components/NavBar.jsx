
// import { Link } from 'react-router-dom'
// import AppBar from '@mui/material/AppBar'
// import Box from '@mui/material/Box'
// import IconButton from '@mui/material/IconButton'
// import MenuIcon from '@mui/icons-material/Menu'
// import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'
// import Button from '@mui/material/Button'
// import { EmployeesContext } from '../EmployeesContext'
// import { useContext,React } from 'react'
// import { useState } from 'react';
 
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Article from './Article'

// function NavBar() {
//   const {isAuthenticated} =useContext(EmployeesContext)
//   console.log('is auth',isAuthenticated)
//   const navItems = [
//     // { item: 'Home', to: '/employyes_list_app' },
//     { item: 'Add-Employees', to: '/add-employees' },
//     { item: 'EmployeesList', to: '/employees-list' },
//     {item:"Article", to:"/article"},
//   ];
//   const { isLoggedIn } = useContext(EmployeesContext);

//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }
//     setIsDrawerOpen(open);
//   };

//   return (
//     <div>
//       <AppBar sx={{ height: '8%', backgroundColor: '##BBDEFB' }}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             sx={{ mr: 2, display: { sm: 'none' } }}
//             onClick={toggleDrawer(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             EMPLOYEES
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             <Link to='/employyes_list_app'>
//             <Button sx={{ color: '#fff' }}>
//                     Home
//                     </Button>
//                     </Link>
          
//             {!isLoggedIn ? (
//               <Link to="/employyes_list_app">
//                 <Button sx={{ color: '#fff' }}>Home</Button>
//               </Link>
//             ) : (
//               navItems.map((item) => (
//                 <Link to={item.to} style={{ textDecoration: 'none' }}>
//                   <Button key={item} sx={{ color: '#fff' }}>
//                     {item.item}
//                   </Button>
//                 </Link>
//               ))
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
//         <List>
//           {!isLoggedIn ? (
//             <ListItem  key="Home">
//               <Link to="/employyes_list_app" onClick={toggleDrawer(false)}>
//                 <ListItemText primary="Home" />
//               </Link>
//             </ListItem>
//           ) : (
//             isAuthenticated && navItems.map((item) => (
//               <ListItem
                
//                 key={item.item}
//                 onClick={toggleDrawer(false)}
//               >
//                 <Link to={item.to} style={{ textDecoration: 'none' }}>
//                   <ListItemText primary={item.item} />
//                 </Link>
//               </ListItem>
//             ))
//           )}
//         </List>
//       </Drawer>
//     </div>
//   );
// }

// export default NavBar;

import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { EmployeesContext } from '../EmployeesContext';
import { useContext, React } from 'react';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import Article from './Article';

function NavBar() {
  const { isAuthenticated } = useContext(EmployeesContext);
  const navItems = [
    { item: 'Add-Employees', to: '/add-employees' },
    { item: 'EmployeesList', to: '/employees-list' },
    { item: 'Article', to: '/article' },
  ];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <div>
      <AppBar sx={{ height: '8%', backgroundColor: '##BBDEFB' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            EMPLOYEES
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link to="/employyes_list_app">
              <Button sx={{ color: '#fff' }}>Home</Button>
            </Link>

            {isAuthenticated &&
              navItems.map((item) => (
                <Link to={item.to} style={{ textDecoration: 'none' }}>
                  <Button key={item} sx={{ color: '#fff' }}>
                    {item.item}
                  </Button>
                </Link>
              ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem key="Home">
            <Link to="/employyes_list_app" onClick={toggleDrawer(false)}>
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
          {isAuthenticated &&
            navItems.map((item) => (
              <ListItem key={item.item} onClick={toggleDrawer(false)}>
                <Link to={item.to} style={{ textDecoration: 'none' }}>
                  <ListItemText primary={item.item} />
                </Link>
              </ListItem>
            ))}
        </List>
      </Drawer>
    </div>
  );
}

export default NavBar;