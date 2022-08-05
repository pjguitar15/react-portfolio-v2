import React from 'react'
import PriceCardCheck from './PriceCardCheck'

const PriceCard = ({ price, label, shortDesc }) => {
  const basicFeatures = ['5 pages', 'Mobile Responsive', '2 to 3 days delivery']
  const standardFeatures = [
    'Manage your contents',
    'Minimum of 10 pages',
    'Maximum of 15 pages',
    'Mobile Responsive',
    '15 to 30 days delivery',
    'Hosting Included',
    'Custom Design',
  ]
  return (
    <div className='p-5 md:p-8 lg:p-10 bg-white shadow-lg rounded-md border font-Poppins'>
      {/* badge */}
      <span className='rounded-full bg-sky-200 text-sky-900 text-xs px-5 py-2 uppercase'>
        {label}
      </span>
      {/* Price */}
      <div className='flex mt-5 items-end'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold'>
          ${price}
        </h1>
        <span className='font-bold text-slate-400 mb-1'>/project</span>
      </div>

      {/* description */}
      <p className='text-lg text-slate-400 my-5 md:my-7 lg:my-9'>{shortDesc}</p>

      {/* Check bullets */}
      {label === 'basic'
        ? basicFeatures.map((item, index) => (
            <PriceCardCheck key={index} feature={item} />
          ))
        : ''}

      {label === 'standard'
        ? standardFeatures.map((item, index) => (
            <PriceCardCheck key={index} feature={item} />
          ))
        : ''}

      <button className='btn btn-sky w-full mt-5 hover:bg-sky-600'>Book</button>
    </div>
  )
}

export default PriceCard
