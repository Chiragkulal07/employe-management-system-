import React from 'react'
import Panel from '../smallcomponent/panel'
import Input from '../smallcomponent/input'
import Scroll from '../smallcomponent/scroll'

const Admin = ({ value }) => {
  return (
    <>
      <div className='h-screen bg-black text-white flex flex-col items-center w-full gap-2'>
        <Panel value={value} />
        <Input />
        <Scroll />
      </div>
    
    
    </>
  )
}

export default Admin