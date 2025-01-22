import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createEmployee } from '../services/EmployeeService'
import '../App.css'
const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate();
    
    // Handle input change
    // const handleFirstNameChange = (e: { target: { value: SetStateAction<string> } }) => setFirstName(e.target.value)
    // const handleLastNameChange = (e: { target: { value: SetStateAction<string> } }) => setLastName(e.target.value)
    // const handleEmailChange = (e: { target: { value: SetStateAction<string> } }) => setEmail(e.target.value)
    
    // Handle form submission
    interface Employee {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
    }

    const saveEmployee = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const employee: Employee = {
            id: 0, // or any default value
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        console.log(employee)

        createEmployee(employee).then(() => {
            navigate('/employees')
        }).catch((error) => {
            console.error(error)
        })
    }

    return (
        <div className="container mt-2">
            <div className="row">
                <div className="card">
                    <h3 className="text-center">Add Employee</h3>
                    <div className="card-body">
                        <form className='card'>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" className="form-control"
                                    value={firstName} id="firstName"
                                    placeholder="Enter First Name"
                                    onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    id="lastName"
                                    placeholder="Enter Last Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    placeholder="Enter Email" />
                            </div>
                            <button type="submit" className="btn btn-primary mt-4" onClick={saveEmployee}>Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent
