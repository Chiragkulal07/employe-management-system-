import React from 'react'
import Login from './components/auth/login'
import  { useState, useContext } from 'react';
import { UserContext } from "./context/auth.jsx";
import Admin from "./components/dashboard/admin.jsx";
import Employee from "./components/dashboard/employee.jsx";


const App = () => {
    const { user,setUser,role,setrole } = useContext(UserContext);
    if(!user){
      return (<Login />)  
    }else if(role === "admin"){
      return (<Admin/>)
    }else{
      return (<Employee/>)
    }

}


export default App