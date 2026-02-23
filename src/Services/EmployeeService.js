import axios from "axios";
import { baseUrl } from "../Utility/Constant";


export const GetAllEmployeeService = async() => {
    const url = `${baseUrl}/Employee`; 
    const response = await axios.get(url);
    return response; // full response
}

export const UpdateEmployeeService = async(employeeDetails) => {
    
    const url = `${baseUrl}/Employee`; 
    const response = await axios.put(url, employeeDetails);
    return response; // full response
}


export const DeleteEmployeeService = async (employeeId) => {
    const url = `${baseUrl}/Employee?EmployeeId=${employeeId}`;
    return await axios.delete(url);
  };
  
  export const AddEmployeeService = async(data) => {
    const url = `${baseUrl}/Employee`; 
    const response = await axios.post(url, data);
    return response; // full response
};
