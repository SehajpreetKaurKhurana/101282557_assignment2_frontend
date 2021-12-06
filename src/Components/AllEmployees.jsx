
import React, { useEffect ,useState} from "react";
import { getEmployees } from '../Service/api';
import { TableHead,Table,TableRow,TableCell,TableBody ,Button} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {Link} from 'react-router-dom'
import { deleteEmployee } from '../Service/api';

const useStyle= makeStyles({
    table:{
        width:'90%',
        margin:'50px 0 0 50px'
    }
    ,
    thead:{
    '& > *':{
        background:'#507be6',
        }
    }

    })
    const textStyle = {
        color: "white",
        fontSize: "15px",
        fontFamily: "Arial"
      };
      const textStyleTwo = {
        color: "black",
        fontSize: "15px",
        fontFamily: "Arial"
      };
export default function AllEmployees() {
    const classes=useStyle();
    const[employees,setEmployees]=useState([]);

    useEffect(() => {
       getAllEmployees();
    }, [])
    
    const getAllEmployees= async ()=>{
      const response=  await getEmployees();
      console.log(response);
      setEmployees(response.data);
    }


   const deleteEmployeeData=async(id)=>{

    await deleteEmployee(id);
    getAllEmployees();
   }


    return (
       
        <Table className={classes.table}>
            <TableHead >
                <TableRow className={classes.thead} >
                    <TableCell style={textStyle} > Id</TableCell>
                    <TableCell style={textStyle}> First Name</TableCell>
                    <TableCell style={textStyle}> Last Name</TableCell>
                    <TableCell style={textStyle}> Email </TableCell>
                    <TableCell style={textStyle}>  </TableCell>
                    <TableCell style={textStyle}>  </TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    employees.map(employee=>(
                        <TableRow className={classes.row} >
                            <TableCell style={textStyleTwo}>{employee._id}</TableCell>
                            <TableCell style={textStyleTwo}>{employee.firstname}</TableCell>
                            <TableCell style={textStyleTwo}>{employee.lastname}</TableCell>
                            <TableCell style={textStyleTwo}>{employee.email}</TableCell>
                            <TableCell style={textStyleTwo}>
                            <Button variant="contained" color="primary" style={{marginRight:10}} component={Link} to={`/view-employee/${employee._id}`}  >View</Button>
                                <Button variant="contained" color="primary" style={{marginRight:10}} component={Link} to={`/edit-employee/${employee._id}`}  >Edit</Button>
                                <Button variant="contained" color="secondary"  onClick={()=>deleteEmployeeData(employee._id)}>Delete</Button>
                            </TableCell>
                            
                           
                             </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
