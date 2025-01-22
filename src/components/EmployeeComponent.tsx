import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createEmployee } from '../services/EmployeeService'
import '../App.css'

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    // Handle form submission
    const saveEmployee = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission behavior

        const employee = {
            id: 0, // Assuming 0 or any default value for new employee
            firstName,
            lastName,
            email
        }

        createEmployee(employee).then(() => {
            navigate('/employees') // Redirect after successful creation
        }).catch((error) => {
            console.error("Error creating employee:", error)
        })
    }

    return (
        <div className="container mt-2">
            <div className="row">
                <div className="card">
                    <h3 className="text-center">Add Employee</h3>
                    <div className="card-body">
                        <form onSubmit={saveEmployee} className='card'>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={firstName}
                                    id="firstName"
                                    placeholder="Enter First Name"
                                    onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={lastName}
                                    id="lastName"
                                    placeholder="Enter Last Name"
                                    onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    id="email"
                                    placeholder="Enter Email"
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent
