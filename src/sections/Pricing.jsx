import React from 'react'
import PriceCard from '../components/PriceCard'
import WhiteBg from '../assets/white-pattern-bg.jpg'

const Pricing = () => {
  return (
    <div>
      <div className='bg-sky-900 text-white font-Poppins py-28'>
        <div className='container relative'>
          <div className='text-center text-slate-200 uppercase text-xl lg:text-3xl'>
            Pricing
          </div>
          <h1 className='text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold my-5 sm:my-6 md:my-7 lg:my-9'>
            The right price for your website.
          </h1>
          <p className='text-center text-slate-200 text-xl md:text-xl mb-28'>
            These are the services I offer. It's negotiable! Feel free to
            communicate and discuss with me for further details.
          </p>
          <div className='absolute top-92 sm:top-80 md:top-72 lg:top-64 left-0 right-0 grid grid-cols-2 gap-5 md:gap-7 lg:gap-9'>
            <PriceCard
              price='100'
              label='basic'
              shortDesc='A basic static website that has 1 to 5 pages'
            />
            <PriceCard
              price='450'
              label='standard'
              shortDesc='A little advance website with complex functionality'
            />
          </div>
        </div>
      </div>
      <div
        className='pb-28  bg-pricing-image bg-center bg-cover'
        style={{ height: '700px' }}
      ></div>
    </div>
  )
}

export default Pricing
