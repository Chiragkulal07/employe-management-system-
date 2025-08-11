import React from 'react'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-[15px] border-2 border-green-500 rounded p-20"
      >
        <input 
          required 
          className="border-2 border-emerald-600 rounded-full px-10 py-5 text-white bg-transparent" 
          type="text" 
          placeholder="enter your email" 
        />
        <input 
          required 
          className="border-2 border-emerald-600 rounded-full px-10 py-5 text-white bg-transparent" 
          type="password" 
          placeholder="enter your password" 
        />
        <button className="border-2 border-emerald-600 rounded-full py-3 px-5 text-white bg-red-500">
          LOGIN
        </button>
      </form>
    </div>
  )
}

export default Login
