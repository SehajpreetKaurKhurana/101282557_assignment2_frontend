
import React, { useEffect ,useState} from "react";
import { FormGroup,FormControl,InputLabel,Input ,Button, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';


import { addEmployee } from "../Service/api";

import { makeStyles } from '@mui/styles';

const useStyle= makeStyles({
   container:{
       width:'50%',
       margin:'5% 0 0 25%',
       
   }

    })

const initialValue={
    
        firstname:"",
        lastname:"",
        email:""
    
}




export default function AddEmployee() {
    const [employee,setEmployee]=useState(initialValue);
    const{firstname,lastname,email}=employee;
    const classes=useStyle();
    const navigate = useNavigate();
    

    const onValueChange = (e) => {
       setEmployee({...employee,[e.target.name]:e.target.value })
       console.log(employee)
    }


const addEmployeeDetails=async()=>{
 await addEmployee(employee);
 
 navigate('/all-employee');
}



    return (
     <FormGroup className={classes.container} >

         <Typography variant="h4">Add Employee </Typography>
         <FormControl style={{marginTop: 20}}>
             <InputLabel>First Name</InputLabel>
             <Input onChange={(e)=>onValueChange(e)} name='firstname' value={firstname}/>
         </FormControl>
         <FormControl style={{marginTop: 20}}>
             <InputLabel>Last Name</InputLabel>
             <Input onChange={(e)=>onValueChange(e)} name='lastname' value={lastname}/>
         </FormControl>
         <FormControl style={{marginTop: 20}}>
             <InputLabel >Email</InputLabel>
             <Input onChange={(e)=>onValueChange(e)} name='email' value={email}/>
         </FormControl>
         <Button variant="contained"  onClick={()=>addEmployeeDetails()}  style={{marginTop: 20}} >Add Employee</Button>
     </FormGroup>
    )
}
