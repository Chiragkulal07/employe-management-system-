import React from 'react'

const Input = () => {
  return (
   
   
   
      <form action="">
        <div className='border-2 border-emarald-500 h-[490px] text-white flex flex-col gap-1 w-[360px] p-3 mb-2'>
            <div className='flex'>
                <div className=""></div>
                <h1 className="text-white text-4xl font-bold">create task</h1>
            </div>
            <h1 className='text-xl'>Task Title</h1>
            <input className="p-1 border-2 rounded" type="text" placeholder="make a ui design" />
            <h1 className="font-semibold">describtion</h1>
            <textarea className=" border-2 rounded h-[40px]" placeholder="description"></textarea>
            <h1>date</h1>
            <input className="p-2 border-2 rounded" type="date" />
            <h1>Assign to</h1>
            <input className='p-1 border-2 rounded' type="text" />
            <h1>category</h1>
            <input className='p-1 border-2 rounded' type="text" /><br />
            <button className='bg-grey-500 rounded text-white bg-emerald-500 py-2'>create task</button>

        </div>

      </form>
      
    
  )
}


   
   
   
  


export default Input