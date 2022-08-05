import React from 'react'
import FooterGrids from './FooterGrids'

const Footer = () => {
  return (
    <div className='bg-black text-white font-Poppins'>
      <div className='container'>
        <div className='py-12 lg:flex'>
          <div className='w-full md:w-5/8 flex'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:w-5/8 gap-20'>
              <FooterGrids title='Projects' />
              <FooterGrids title='Socials' />
              <FooterGrids title='Experiences' />
              <FooterGrids title='Legal' />
            </div>
          </div>
          <div className='w-full md:w-3/8 lg:px-12 mt-7 lg:mt-0'>
            <div className='uppercase font-semibold'>
              Subscribe to our Newsletter
            </div>
            <div className='text-slate-300 font-light text-sm my-4'>
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </div>
            <div className='flex gap-3 flex-wrap'>
              <input
                type='email'
                placeholder='Enter email...'
                className='rounded-md text-black'
              />
              <button className='btn btn-purple'>Subscribe</button>
            </div>
          </div>
        </div>
        <hr className='border border-slate-100' />
        <div className='flex justify-between py-8'>
          <div className='font-light text-slate-400'>
            2022 Philcob Suzuki Josol, All rights reserved
          </div>
          <div>LOGOS</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
