
import React, { useEffect ,useState} from "react";
import { getOneEmployee } from '../Service/api';
import { useNavigate ,useParams} from 'react-router-dom';
import { TableHead,Table,TableRow,TableCell,TableBody ,Button} from '@mui/material';

import { makeStyles } from '@mui/styles';
import {Link} from 'react-router-dom'


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
export default function ViewEmployee() {
    const{id}=useParams();
    const classes=useStyle();
    const[employee,setEmployee]=useState([]);

    useEffect(() => {
       getOneEmployees(id);
    }, [])
    
    const getOneEmployees= async (id)=>{
      const response=  await getOneEmployee(id);
      console.log(response);
      setEmployee(response.data);
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
                    employee.map(employee=>(
                        <TableRow className={classes.row} >
                            <TableCell style={textStyleTwo}>{employee._id}</TableCell>
                            <TableCell style={textStyleTwo}>{employee.firstname}</TableCell>
                            <TableCell style={textStyleTwo}>{employee.lastname}</TableCell>
                            <TableCell style={textStyleTwo}>{employee.email}</TableCell>
                            <TableCell style={textStyleTwo}>
                            <Button variant="contained" color="primary" style={{marginRight:10}} component={Link} to={`/view-employee/${employee._id}`}  >View</Button>
                                
                            </TableCell>
                            
                           
                             </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
