import './App.css'

import { ToastContainer } from 'react-toastify'

import Register from './components/Register'
import Navbar from './Common/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './Routes/ProctectedRoute'
import Dashboard from './Pages/Dashboard'

import Login from "./components/Login";

function App() {

  return (
    <>
    
      <Navbar />      
        <Routes>
           <Route path='/' element={            
            <Login/>
          }>
          </Route>

          <Route path='/register' element={            
            <Register/>
          }>
          </Route>
          
          
          
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }>
          </Route>
          
        </Routes>

    </>
  )
}

export default App
