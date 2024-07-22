import React, { useEffect, useState } from "react";

import api from '../service/api';

const ListEmployees = () => {
    const[employees,setEmployees] = useState([]);

    useEffect(() =>{
        fetchEmployees();
    },[]);

    const fetchEmployees = async () => {
        try{
            const data = await api.getEmployees();
            setEmployees(data);
        }catch(error){
            console.error('Error in fetching employees');
        }
    }


    return(
        <div>
            <h1>Employee List</h1>
            <table>
                <thead>
                    <tr>
                        <th>EmpID</th>
                        <th>Name</th>
                        <th>Email</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee =>(
                        <tr key={employee.empId}>
                            <td> {employee.empId}</td>
                            <td> {employee.name}</td>
                            <td> {employee.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default ListEmployees;