import React from "react";
import ListEmployees from "./listemployees";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import EmployeeForm from './employeeform';


const Employee = () =>{
    return (
        <Router>
           <div>
            <nav>
              <a href="/">Employee</a> <br/>
              <a href="/add-employee">Add employee</a> <br/>
              <a href="/edit-employee">Edit Employee</a> <br/>
             
            </nav>
          </div>
          <Routes>
             <Route path="/" element={<ListEmployees/>} />
             <Route path="/add-employee" element={<EmployeeForm/>} />
             
          </Routes>
       
        </Router>
      );
}

export default Employee;