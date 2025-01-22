import React, { useEffect, useState } from 'react'
import { getEmployees, updateEmployee, deleteEmployee } from '../services/EmployeeService'
import '../App.css'
import { useNavigate } from 'react-router-dom'

export interface Employee {
    id: number,
    firstName: string,
    lastName: string,
    email: string
}

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState<Employee[]>([])

    const navigate = useNavigate();

    useEffect(() => {
        getEmployees().then((data) => {
            console.log("Fetched employees:", data); // Log the fetched data
            setEmployees(data);
        }).catch((error) => {
            console.error("Error fetching employees:", error);
        })
    }, [])



    const addNewEmployee = () => {
        navigate('/add-employee')
    }

    const update = (employee: Employee) => {
        updateEmployee(employee).then(() => {
            setEmployees((prevState) =>
                prevState.map((emp) =>
                    emp.id === employee.id ? { ...emp, ...employee } : emp
                )
            );
        }).catch((error) => {
            console.error(error);
        });
    }

    const deleteEmp = (employeeId: number) => {
        deleteEmployee(employeeId).then(() => {
            setEmployees((prevState) =>
                prevState.filter((employee) => employee.id !== employeeId)
            );
        }).catch((error) => {
            console.error(error);
        });
    }


    return (
        <div className='container'>
            <div className='row'>
                <h1 className="text-center text-primary">Employee Management System</h1>
                <div className='col-md-12'>
                    <div className='float-right'>
                        <button type="button" className="btn btn-primary mb-3" onClick={addNewEmployee} >ADD EMPLOYEE</button>
                    </div>
                </div>
                <table className='table table-bordered border-success'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center">
                                    No employees found
                                </td>
                            </tr>
                        ) : (
                            employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td className='btn bg-warning' onClick={() => update(employee)}>Update</td>
                                    <td className='btn bg-danger' onClick={() => deleteEmp(employee.id)}>Delete</td>
                                </tr>
                            ))
                        )}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ListEmployeeComponent
