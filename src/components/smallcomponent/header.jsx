import React from 'react'



const Header = () => {
  // const navigate = useNavigate();
  // const logout = () => {
  //   navigate("/");
  
  return (
    <>
      <div className='flex justify-between p-3 '>
        <h1 className='text-2xl font-bold'>HELLO <br /><span className='text-3xl'>CHIRAG👍</span> </h1>
        <button  className=' px-3 rounded-lg font-bold text-2xl bg-red-500 rounded-sm border-2 border-emerald-500 '>LOG OUT</button>
       
      </div>
    
    </>
  )
}

export default Header