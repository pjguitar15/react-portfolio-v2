import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'

const WhyHireMeCard = ({ title, description }) => {
  return (
    <div className='hover:shadow-sm border border-slate-100 hover:border-slate-300 py-5 px-3 rounded-md cursor-pointer flex my-5'>
      <div className='1/4'>
        <CheckIcon className='h-6 hover:animate-bounce text-green-600 mr-4' />
      </div>
      <div className='3/4'>
        <h3 className='text-xl font-semibold'>{title}</h3>
        <p className='text-md text-slate-500 mt-2'>{description}</p>
      </div>
    </div>
  )
}

export default WhyHireMeCard
