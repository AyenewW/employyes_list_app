import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function NavBar() {
  const navItems = [
    { item: 'Home', to: '/employyes_list_app' },
    { item: 'Add-Employees', to: '/add-employees' },
    { item: 'EmployeesList', to: '/employees-list' },
  ]
  return (
    <div>
      <AppBar sx={{ height: '8%', backgroundColor: '#2196F3' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
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
            {navItems.map((item) => (
              <Link to={item.to} style={{ textDecoration: 'none' }}>
                <Button key={item} sx={{ color: '#fff' }}>
                  {item.item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar




