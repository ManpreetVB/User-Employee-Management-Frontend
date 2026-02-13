import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtecedRoute = ({children}) => {
  
    // const res = api response;
    //localStorage.setItem('loggedUser') = res.user;

  const isLoggedIn = localStorage.getItem('loggedUser');

  return isLoggedIn ? children : <Navigate to="/login" />
}

export default ProtecedRoute