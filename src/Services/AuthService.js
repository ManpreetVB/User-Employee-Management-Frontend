import { baseUrl } from "../Utility/Constant";
import axios from "axios";

export const LoginService = async(data) => {
    const url = `${baseUrl}/Auth/Login`; 
    const response = await axios.post(url, data);
    return response; // full response
}

export const Registration = async(data) => {
    const url = `${baseUrl}/Auth/Registration`; 
    const response = await axios.post(url, data);
    return response; // full response
}

export const UpdateUserService = async(userDetails) => {
    
    const url = `${baseUrl}/User`; 
    const response = await axios.put(url, userDetails);
    return response; // full response
}

export const GetAllUsersService = async() => {
    const url = `${baseUrl}/User`; 
    const response = await axios.get(url);
    return response; // full response
}