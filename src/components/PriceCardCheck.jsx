import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'

const PriceCardCheck = ({ feature }) => {
  return (
    <div className='flex my-3 md:my-5 lg:my-6 items-center'>
      <div className='w-1/8'>
        <CheckIcon className='h-5 md:h-6 lg:h-8 mr-3 text-green-600' />
      </div>
      <div className='w-7/8 text-md md:text-xl lg:text-2xl text-slate-800'>
        {feature}
      </div>
    </div>
  )
}

export default PriceCardCheck
