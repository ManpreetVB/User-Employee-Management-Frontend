import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const loggedUser = localStorage.getItem('loggedUser');
    const logout = () => {
         localStorage.removeItem('loggedUser');
         navigate("/login");
    } 
  return (
    <nav className='navbar navbar-dark bg-dark px-3'>
        <span className='navbar-brand'>Router Demo</span>
        {
            loggedUser && (
                <>
                    <span>
                        Welcome {loggedUser.name}
                    </span>
                    <Link to="/dashboard" className='btn btn-outline-light me-2'> Dashboard </Link>
                    
                    <button onClick={logout} >Logout</button>
                </>
            )
        }
        {
            !loggedUser && <Link to="/" className='btn btn-outline-light me-2'> Login </Link> }

    </nav>
  )
}

export default Navbar