import axios from "axios";
import { Employee } from "../components/ListEmployeeComponent";

const apiUrl = "http://localhost:8080/api/employees";

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await axios.get<Employee[]>(apiUrl);
  return response.data;  // Directly return the employee data
};


export const createEmployee = async (employee: Employee): Promise<void> => {
  await axios.post(apiUrl, employee);
};

export const updateEmployee = async (employee: Employee): Promise<void> => {
  await axios.put(`${apiUrl}/${employee.id}`, employee);
};

export const deleteEmployee = async (id: number): Promise<void> => {
  await axios.delete(`${apiUrl}/${id}`);
};
