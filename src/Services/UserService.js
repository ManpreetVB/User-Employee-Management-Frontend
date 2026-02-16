import axios from "axios";
import { baseUrl } from "../Utility/Constant";


export const GetAllUsersService = async() => {
    const url = `${baseUrl}/User`; 
    const response = await axios.get(url);
    return response; // full response
}

export const UpdateUserService = async(userDetails) => {
    
    const url = `${baseUrl}/User`; 
    const response = await axios.put(url, userDetails);
    return response; // full response
}


export const DeleteUserService = async (userId) => {
    const url = `${baseUrl}/User?UserId=${userId}`;
    return await axios.delete(url);
  };
  
  export const AddUserService = async(data) => {
    const url = `${baseUrl}/User`; 
    const response = await axios.post(url, data);
    return response; // full response
}
