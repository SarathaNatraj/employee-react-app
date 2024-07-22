import axios from 'axios';


const API_URL ="http://localhost:9092/api";

const getEmployees = async () =>{
    const response = await axios.get(API_URL+'/all');
    return response.data;
}

const addEmployee = async (employee) =>{
    const response = await axios.post(API_URL+'/save', employee);
    return response.data;
}


const updateEmployee = async (employee) =>{
    const response = await axios.put(API_URL+'/update', employee);
    return response.data;
}


export default {
    getEmployees,
    addEmployee,
    updateEmployee
}