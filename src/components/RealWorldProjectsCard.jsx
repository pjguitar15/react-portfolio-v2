import React from 'react'
import {
  PhoneIcon,
  ArrowRightIcon,
  DesktopComputerIcon,
} from '@heroicons/react/outline'

const RealWorldProjectsCard = ({ title, description, link }) => {
  return (
    <div className='group cursor-pointer bg-white rounded-lg shadow-md border relative flex flex-col justify-between'>
      <div className='px-4 lg:px-9 pt-7 pb-5 lg:pt-14 lg:pb-8'>
        <div className='group-hover:animate-bounce bg-sky-500 p-2 lg:p-4 absolute -top-6 rounded-lg left-8 text-white font-semibold'>
          <DesktopComputerIcon className='h-5 lg:h-7' />
        </div>

        {/* content */}
        <h1 className='text-base sm:text-xl lg:text-2xl font-bold'>{title}</h1>
        <p className='group-hover:animate-pulse text-base sm:text-lg lg:text-xl mt-2 lg:mt-4 text-slate-500'>
          {description}
        </p>
      </div>

      {/* footer */}
      <a
        href={link}
        target={'_blank'}
        className='bg-sky-100 group px-5 lg:px-9 py-3 flex items-center cursor-pointer w-full'
      >
        <h1 className='text-sm md:text-base lg:text-lg text-sky-900 font-medium mr-2 group-hover:ml-5 duration-300'>
          View project
        </h1>
        <ArrowRightIcon className='h-4 text-sky-900' />
      </a>
    </div>
  )
}

export default RealWorldProjectsCard
