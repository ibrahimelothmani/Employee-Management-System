import React, { useEffect, useState } from 'react'
import { getEmployees } from '../services/EmployeeService'
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
        getEmployees().then((response) => {
            setEmployees(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }, [])

    const addNewEmployee = () => {
        navigate('/add-employee')
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
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>  
    </div>
  )
}

export default ListEmployeeComponent
