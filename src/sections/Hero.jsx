import React, { useState } from 'react'
import HeroImg from '../assets/hero.png'
import MyFace from '../assets/my-face.png'

const Hero = () => {
  const [isJump, setIsJump] = useState(false)

  const jump = () => {
    setIsJump(true)
    setTimeout(() => {
      setIsJump(false)
    }, 1490)
  }
  return (
    <div className='bg-neutral-50 font-Poppins'>
      <div className='container flex md:flex-row flex-col-reverse items-center gap-12 py-28 relative'>
        {/* left content */}
        <div className='flex-1 text-center md:text-left'>
          <h1 className='text-4xl font-bold '>Hi, I am </h1>
          <div className='text-sky-600 inline-block animate-pulse cursor-pointer text-5xl md:text-5xl lg:text-7xl font-black uppercase'>
            PHILCOB
          </div>
          <p className='text-gray-500 my-6 leading-8'>
            I am a{' '}
            <span className='text-sky-600 font-semibold'>
              full-stack web developer
            </span>{' '}
            based in Cavite, Philippines. Programming and design is what I love
            doing. I do freelancing on Fiverr and I take any projects from you
            guys. Let us build the best website for your business!
          </p>
          <button className='btn btn-sky hover:bg-sky-600'>Who am I</button>
          <button className='btn btn-white ml-4' onClick={jump}>
            Spin Me
          </button>
        </div>

        {/* right content */}
        <div className='flex-1 relative'>
          <div
            className={`w-3/4 sm:w-2/3 md:w-full mx-auto ${
              isJump ? 'animate-spin' : ''
            } transition ease-in-out delay-500 duration-300 cursor-pointer`}
          >
            <img className='w-full' src={MyFace} alt='' />
            <div className='h-2 bg-sky-500 rounded-full'></div>
            <div className='h-2 w-5/6 mx-auto bg-sky-600 rounded-full mt-2'></div>
          </div>
          <div
            className={`h-full w-full absolute right-0 bottom-0 ${
              isJump ? 'shadow-md' : ''
            } duration-300 rounded-full`}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
