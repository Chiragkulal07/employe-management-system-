import React, { useState } from 'react'

const Login = () => {
   
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted",email,password);
    setemail('');
    setpassword('');
  }

  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-[15px] border-2 border-green-500 rounded p-20"
      >
        <input 
         onChange={(e)=>{
          setemail(e.target.value)
         }}
          required 
          className="border-2 border-emerald-600 rounded-full px-10 py-5 text-white bg-transparent" 
          type="text" 
          placeholder="enter your email" 
          value={email}
        />
        <input 
          onChange={(e)=>{
            setpassword(e.target.value)
          }}
          required 
          className="border-2 border-emerald-600 rounded-full px-10 py-5 text-white bg-transparent" 
          type="password" 
          placeholder="enter your password" 
          value={password}
        />
        <button className="border-2 border-emerald-600 rounded-full py-3 px-5 text-white bg-red-500">
          LOGIN
        </button>
      </form>
    </div>
  )
}

export default Login
