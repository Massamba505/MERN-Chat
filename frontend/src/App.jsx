import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/login/Login'
import { Signup } from './pages/sigup/Signup'
import Home from './pages/home/Home'
import {Toaster} from "react-hot-toast";
import {useAuthContext} from "./context/AuthContext.jsx";

function App() {
  const {authUser} = useAuthContext();
  return (
    <div className='App'>
      <Routes>
        <Route path = "/" element = {authUser? <Home/> : <Navigate to = {"/login"}/>  }/>
        <Route path = "/login" element = {authUser?  <Navigate to= '/'/> : <Login /> }/>
        <Route path = "/signup" element = {authUser? <Navigate to= '/'/> : <Signup /> }/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
