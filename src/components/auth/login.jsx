import React, { useState, useContext } from 'react';
import { UserContext } from "../../context/auth.jsx";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user,setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setUser({
      email,
      password
    });
    // console.log("User logged in:", user);
    // console.log("User role:", password);  
  }

  return (
    <div className="h-screen bg-black flex flex-col flex-start gap-10 items-center">
      <h1 className='text-white text-4xl font-bold mt-[35px] mb-[70px]'>Login Page</h1>
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-[15px] border-2 border-green-500 rounded p-20"
      >
        <input 
          onChange={(e) => setEmail(e.target.value)}
          required 
          className="border-2 font-bold border-emerald-600 rounded-full px-10 py-5 text-white bg-transparent" 
          type="text" 
          placeholder="Enter your email" 
          value={email}
        />
        <input 
          onChange={(e) => setPassword(e.target.value)}
          required 
          className="border-2 font-bold border-emerald-600 rounded-full px-10 py-5 text-white bg-transparent" 
          type="password" 
          placeholder="Enter your password" 
          value={password}
        />
        <button className="border-2 bg-green border-emerald-600 rounded-md py-3 px-10 text-white bg-red-500">
          LOGIN
        </button>
      </form>
    </div>
  )
}

export default Login;
