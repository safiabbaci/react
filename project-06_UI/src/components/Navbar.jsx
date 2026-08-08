import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 py-4'>
        <h4 className='text-white bg-black px-6 py-2 uppercase rounded-full'>Target Audience</h4>
        <button className='bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar