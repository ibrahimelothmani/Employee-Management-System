import axios from "axios";
import { Employee } from "../Entities/Employee";

const apiUrl = "http://localhost:8088/api/employees";

const EmployeeService = {
  
  getEmployees: async (): Promise<Employee[]> => {
    const response = await axios.get<Employee[]>(apiUrl);
    return response.data;  // Directly return the employee data
  },

  createEmployee: async (employee: Employee): Promise<void> => {
    await axios.post(apiUrl, employee);
  },

  updateEmployee: async (employee: Employee): Promise<void> => {
    await axios.put(`${apiUrl}/${employee.id}`, employee);
  },

  deleteEmployee: async (id: number): Promise<void> => {
    await axios.delete(`${apiUrl}/${id}`);
  },

  getEmployeeById: async (id: number): Promise<Employee> => {
    const response = await axios.get<Employee>(`${apiUrl}/${id}`);
    return response.data;
  },

  updateEmployeeById: async (id: number, employeeData: Employee): Promise<void> => {
    await axios.put(`${apiUrl}/${id}`, employeeData);
  }
};

export default EmployeeService;