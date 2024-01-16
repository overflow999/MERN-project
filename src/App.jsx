import React from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import About from './pages/About'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Logout from './pages/Logout'


const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>   
    <Route path="/Login" element={<Login/>}/>   
    <Route path="/SignUp" element={<SignUp/>}/>   
    <Route path="/About" element={<About/>}/>   
    <Route path="/Profile" element={<Profile/>}/>   
    <Route path="/Logout" element={<Logout/>}/>   

  </Routes> 
 </BrowserRouter>
}

export default App