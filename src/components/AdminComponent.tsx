import { SetStateAction, useEffect, useState } from 'react'
import '../App.css'
import { Admin } from '../Entities/Admin'
import AdminService from '../services/AdminService'


const AdminComponent = () => {

    const [admins, setAdmins] = useState<Admin[]>([])

    useEffect(() => {
        listAdmins();
    }, []);

    function listAdmins() {
        AdminService.getAdmins()
            .then((data: SetStateAction<Admin[]>) => {
                console.log("Fetched Admins:", data); // Log the fetched data
                setAdmins(data);
            })
            .catch((error) => {
                console.error("Error fetching Admins:", error);
            });
    }


    return (
        <div className="container-fluid p-4">
            <div className="card shadow-sm">
                <div className="card-header bg-primary bg-gradient d-flex justify-content-between align-items-center py-3">
                    <h4 className="text-white text-center mb-0">Admins List</h4>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped mb-0">
                            <thead className="bg-light">
                                <tr>
                                    <th className="px-4">ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>PASSWORD</th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                {admins.length > 0 ? (
                                    admins.map(admin => (
                                        <tr key={admin.id}>
                                            <td>{admin.id}</td>
                                            <td>{admin.name}</td>
                                            <td>{admin.email}</td>
                                            <td>{admin.password}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="text-center py-4">
                                            <div className="text-muted">
                                                <i className="bi bi-inbox-fill fs-4 d-block mb-2"></i>
                                                No ADMIN found
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

export default AdminComponent
