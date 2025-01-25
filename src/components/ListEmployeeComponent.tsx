import { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import '../App.css'
import { useNavigate, Link } from 'react-router-dom'
import { Employee } from '../Entities/Employee'


const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState<Employee[]>([])
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate();

    useEffect(() => {
        listEmployees();
    }, []);

    function listEmployees() {
        setLoading(true);
        EmployeeService.getEmployees()
            .then((data) => {
                console.log("Fetched employees:", data); // Log the fetched data
                setEmployees(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching employees:", error);
                setLoading(false);
            });
    }

    const addNewEmployee = () => {
        navigate('/add-employee')
    }


    const deleteEmp = (employeeId: number) => {
        EmployeeService.deleteEmployee(employeeId).then(() => {
            listEmployees();
        }).catch((error) => {
            console.error('Error deleting employee:', error);
        });
    }

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                    <button 
                        onClick={addNewEmployee} 
                        className="btn btn-primary"
                    >
                        Add New Employee
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid p-4">
            <div className="card shadow-sm">
                <div className="card-header bg-primary bg-gradient d-flex justify-content-between align-items-center py-3">
                    <h4 className="text-white text-center mb-0">Employees List</h4>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped mb-0">
                            <thead className="bg-light">
                                <tr>
                                    <th className="px-4">ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.length > 0 ? (
                                    employees.map(employee => (
                                        <tr key={employee.id}>
                                            <td className="px-4">{employee.id}</td>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email}</td>
                                            <td>
                                                <div className="d-flex justify-content-center gap-2">
                                                    <Link 
                                                        to={`/edit-employee/${employee.id}`}
                                                        className="btn btn-outline-primary btn-sm"
                                                    >
                                                        <i className="bi bi-pencil-square"></i>UPDATE
                                                    </Link>
                                                    <button
                                                        onClick={() => deleteEmp(employee.id)}
                                                        className="btn btn-outline-danger btn-sm"
                                                    >DELETE
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="text-center py-4">
                                            <div className="text-muted">
                                                <i className="bi bi-inbox-fill fs-4 d-block mb-2"></i>
                                                No employees found
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListEmployeeComponent
