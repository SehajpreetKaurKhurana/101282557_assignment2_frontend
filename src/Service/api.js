import axios from 'axios'

const url='http://localhost:9090/api/v1/employees/';
//http://localhost:9090/api/v1/employees

export const getEmployees= async ()=>{
    return  await axios.get(url);
}

export const addEmployee=async (employee)=>{
  return await axios.post(url,employee);
}

export const getOneEmployee=async(id)=>{
   return  await axios.get(`${url}/${id}`);
}

export const editEmployee=async(id,employee)=>{
    return await axios.put(`${url}/${id}`,employee)
}

export const deleteEmployee=async(id)=>{
    return await axios.delete(`${url}/${id}`)
}