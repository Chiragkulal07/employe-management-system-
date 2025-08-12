import React from 'react'
import Panel from '../smallcomponent/panel'
import Input from '../smallcomponent/input'
import Scroll from '../smallcomponent/scroll'

const Admin = () => {
  return (
    <>
      <div className='h-screen bg-black text-white flex flex-col items-center w-full gap-4'>
        <Panel/>
        <Input/>
        <Scroll/>
      </div>
    
    
    </>
  )
}

export default Admin