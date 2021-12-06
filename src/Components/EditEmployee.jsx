
import React, { useEffect ,useState} from "react";
import { FormGroup,FormControl,InputLabel,Input ,Button, Typography} from '@mui/material';
import { useNavigate ,useParams} from 'react-router-dom';
import { getOneEmployee } from '../Service/api';

import { editEmployee } from "../Service/api";

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
        email:" "
    
}




export default function EditEmployee() {
    const [employee,setEmployee]=useState(initialValue);
    const{firstname,lastname,email}=employee;
    const{id}=useParams();
    const classes=useStyle();
    const navigate = useNavigate();

    useEffect( ()=>{
    loadEmployeeData();

    },[]);
    
    const loadEmployeeData= async ()=>{
     const response = await getOneEmployee(id);
    
     setEmployee(response.data);

    }

    const onValueChange = (e) => {
       setEmployee({...employee,[e.target.name]:e.target.value })
       console.log(employee)
    }


const editEmployeeDetails=async()=>{
  
 await editEmployee(id,employee);
 navigate('/all-employee');
 
}



    return (
     <FormGroup className={classes.container} >

         <Typography variant="h4">Edit Employee </Typography>
         <FormControl style={{marginTop: 20}}>
             <InputLabel>First Name</InputLabel>
             <Input onChange={(e)=>onValueChange(e)} name='firstname' value={firstname}/>
         </FormControl>
         <FormControl style={{marginTop: 20}}>
             <InputLabel>Last Name</InputLabel>
             <Input onChange={(e)=>onValueChange(e)} name='lastname' value={lastname}/>
         </FormControl>
         <FormControl style={{marginTop: 20}}>
             <InputLabel > Email </InputLabel>
             <Input onChange={(e)=>onValueChange(e)} name='email' value={email}/>
         </FormControl>
         <Button variant="contained"  onClick={()=>editEmployeeDetails()}  style={{marginTop: 20}} >Edit Employee</Button>
     </FormGroup>
    )
}
