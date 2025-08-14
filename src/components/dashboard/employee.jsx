import React from 'react'
import Header from "../smallcomponent/header"
import Task from "../smallcomponent/task"
import Swipe from "../smallcomponent/swipe"
import {setlocalstorage} from '../../utils/local';

const Employee = () => {
  return (
    <>
       <div className='bg-[#1C1C1C] h-screen text-white p-5 flex flex-col justify-between'>
           <Header/>
           <Task/>
           <Swipe/>

       </div>
     
    
    </>
  )
}

export default Employee