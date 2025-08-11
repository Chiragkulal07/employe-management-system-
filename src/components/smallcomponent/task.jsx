import React from 'react'

const Task = () => {
  return (
    <>
       <div className='flex gap-2 px-4 mt-3'>
         <div className='h-35 bg-blue-500 w-[45%] p-3 text-white flex flex-col gap-6 rounded-xl'>
           <h1 className='text-4xl font-bold mt-3 '>0</h1>
           <h1 className='text-2xl font-semibold '>NEW TASK</h1>

         </div>
         <div className='h-35 bg-green-500 w-[45%] p-3 text-white flex flex-col gap-6 rounded-xl'>
           <h1 className='text-4xl font-bold mt-3 '>3</h1>
           <h1 className='text-2xl font-semibold '>COMPLETED</h1>

         </div>
         <div className='h-35 bg-yellow-500 w-[45%] p-3 text-white flex flex-col gap-6 rounded-xl'>
           <h1 className='text-4xl font-bold mt-3 '>0</h1>
           <h1 className='text-2xl font-semibold '>ACCEPTED</h1>

         </div>
         <div className='h-35 bg-orange-500 w-[45%] p-3 text-white flex flex-col gap-6 rounded-xl'>
           <h1 className='text-4xl font-bold mt-3 '>1</h1>
           <h1 className='text-2xl font-semibold '>FAILED</h1>

         </div>


       </div>
        
    
    
    </>
   
  )
}

export default Task