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