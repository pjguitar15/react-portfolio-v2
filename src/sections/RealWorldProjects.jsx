import React from 'react'
import RealWorldProjectsCard from '../components/RealWorldProjectsCard'
import ReactIcon from '../assets/react.svg'

const RealWorldProjects = () => {
  return (
    <div className='py-16 lg:py-28 bg-fixed bg-support-image bg-center'>
      <div className='container relative'>
        <div className='w-24 mx-auto animate-spin'>
          <img className='w-full h-auto' src={ReactIcon} alt='' />
        </div>
        <h1 className='text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold my-5 sm:my-6 md:my-7 lg:my-9'>
          Some of my real-world projects
        </h1>
        <p className='text-center text-slate-200 text-xl md:text-2xl lg:text-2xl mb-28'>
          These are websites from that I build for my clients on Fiverr.
        </p>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-9 absolute left-0'>
          <RealWorldProjectsCard
            link='https://www.iltp.org/'
            title='Volunteer Organization Website'
            description={`This website introduces their ILTP organization on who they are and what they do. It also includes an online shop.`}
          />
          <RealWorldProjectsCard
            link='http://www.bullishbeastsa.com/'
            title='Bullish Beast Forex Tracker Website'
            description={`I worked on this for a month and ended up being ran away by my client. Lesson learned on this. This is website is for sale.`}
          />
          <div className='hidden lg:block'>
            <RealWorldProjectsCard
              link='https://ai-powered.io/'
              title='Ai-Powered AI-Verification Website'
              description='A website that scans ID and verifies a persons identity. This also includes NowPayments Crypto Integration.'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RealWorldProjects
