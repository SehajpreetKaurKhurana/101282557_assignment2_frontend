import React from 'react'
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@mui/styles';



const useStyle= makeStyles({
tabs:{
    color:'#FFFF',
    textDecoration:'none',
    marginRight:20,
    fontSize:20
},
navi:{
    background:'#507be6'
}

})
export default function NavBar() {
    const classes=useStyle();
    return (
      <AppBar position="static">
          <Toolbar className={classes.navi}>
  <NavLink className={classes.tabs} to="./" exact>Employee Management App</NavLink>
  <NavLink className={classes.tabs} to="all-employee" exact>All Users</NavLink>
  <NavLink className={classes.tabs} to="add-employee" exact>Add User</NavLink>
          </Toolbar>
      </AppBar>
    )
}
