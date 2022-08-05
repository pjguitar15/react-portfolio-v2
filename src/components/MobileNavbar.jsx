import React from 'react'

const MobileNavbar = ({ mobileNavOpen }) => {
  return (
    <div
      className={`${
        mobileNavOpen ? 'opacity-100' : 'hidden opacity-0'
      } duration-300 transition ease-in-out md:hidden text-left shadow-md px-8 py-5 absolute top-14 left-0 w-full bg-white text-blue-900 font-semibold z-10`}
    >
      <div className='cursor-pointer hover:bg-purple-100 hover:pl-4 duration-300 py-4'>
        Home
      </div>
      <div className='border'></div>
      <div className='cursor-pointer hover:bg-purple-100 hover:pl-4 duration-300 py-4'>
        About
      </div>
      <div className='border'></div>
      <div className='cursor-pointer hover:bg-purple-100 hover:pl-4 duration-300 py-4'>
        Login
      </div>
      <div className='border'></div>
      <div className='cursor-pointer hover:bg-purple-100 hover:pl-4 duration-300 py-4'>
        Register
      </div>
    </div>
  )
}

export default MobileNavbar
