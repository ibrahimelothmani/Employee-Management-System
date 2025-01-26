import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { Employee } from '../Entities/Employee';

const EditEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState<Employee>({
        id: 0,
        firstName: '',
        lastName: '',
        email: ''
    });
    const [loading, setLoading] = useState(true);  // Loading state
    const [error, setError] = useState<string | null>(null);  // Error state

    useEffect(() => {
        if (id) {
            EmployeeService.getEmployeeById(Number(id)).then(response => {
                setEmployee(response);
                setLoading(false);
            }).catch(error => {
                console.error('Failed to fetch employee:', error);
                setError('Failed to load employee data');
                setLoading(false);
            });
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEmployee((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!employee.firstName || !employee.lastName || !employee.email) {
            setError('All fields are required');
            return;
        }
        if (employee.id) {
            EmployeeService.updateEmployee(employee).then(() => {
                navigate('/employees');
            }).catch(error => {
                console.error('Failed to update employee:', error);
                setError('Failed to update employee');
            });
        }
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2>Edit Employee</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={employee.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={employee.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={employee.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default EditEmployee;
