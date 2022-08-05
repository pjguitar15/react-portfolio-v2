import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/solid'
import BearIcon from './BearIcon'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  return (
    <div className='bg-sky-700 py-3 lg:py-7 font-Poppins sticky top-0 z-50'>
      <div className='container flex items-center text-white'>
        {/* Only shows up on mobile device */}
        <MobileNavbar mobileNavOpen={mobileNavOpen} />
        {/* left */}
        <div className='w-4/6 flex items-center'>
          <div className='flex items-center'>
            <BearIcon />
            <h1 className='sm:text-xl md:text-2xl font-bold mr-10 cursor-pointer hover:text-white duration-300 ml-3'>
              PHILCOB DEV.
            </h1>
          </div>
          <ul className='md:flex gap-8  hidden'>
            <li className='cursor-pointer text-sm lg:text-base font-medium text-white hover:text-white duration-300'>
              Home
            </li>
            <li className='cursor-pointer text-sm lg:text-base text-slate-300 hover:text-white duration-300'>
              More Projects
            </li>
          </ul>
        </div>

        {/* right */}
        <div className='w-2/6 justify-end gap-3 hidden md:flex items-center'>
          <button className='btn-sm btn-white flex items-center hover:bg-blue-100 font-semibold'>
            <UserIcon className='h-4 mr-1' />
            Contact
          </button>
          <button className='px-6 btn-none hover:text-white duration-300'>
            Dark Mode
          </button>
        </div>

        {/* mobile menu */}
        {mobileNavOpen ? (
          <XIcon
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className='duration-300 ml-auto transition ease-in-out h-7 text-blue-100 hover:text-white cursor-pointer md:hidden'
          />
        ) : (
          <MenuIcon
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className='duration-300 ml-auto transition ease-in-out h-7 text-blue-100 hover:text-white cursor-pointer md:hidden'
          />
        )}
      </div>
    </div>
  )
}

export default Navbar
