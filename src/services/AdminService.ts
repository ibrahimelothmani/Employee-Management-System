import axios from "axios";
import { Admin } from "../Entities/Admin";

const apiUrl = "http://localhost:8088/api/auth";

const AdminService = {
  
  getAdmins: async (): Promise<Admin[]> => {
    const response = await axios.get<Admin[]>(apiUrl);
    return response.data;  // Directly return the Admin data
  },

//   createAdmin: async (Admin: Admin): Promise<void> => {
//     await axios.post(apiUrl, Admin);
//   },

//   updateAdmin: async (Admin: Admin): Promise<void> => {
//     await axios.put(`${apiUrl}/${Admin.id}`, Admin);
//   },

//   deleteAdmin: async (id: number): Promise<void> => {
//     await axios.delete(`${apiUrl}/${id}`);
//   },

//   getAdminById: async (id: number): Promise<Admin> => {
//     const response = await axios.get<Admin>(`${apiUrl}/${id}`);
//     return response.data;
//   },

//   updateAdminById: async (id: number, AdminData: Admin): Promise<void> => {
//     await axios.put(`${apiUrl}/${id}`, AdminData);
//   }
};

export default AdminService;