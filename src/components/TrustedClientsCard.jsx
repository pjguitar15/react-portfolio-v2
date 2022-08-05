import React from 'react'

const TrustedClientsCard = ({ title, subtitle }) => {
  return (
    <div className='group shadow-md hover:shadow-xl cursor-pointer px-5 pt-5 pb-4 md:pt-8 md:pb-6 rounded-md border font-Poppins'>
      <h1 className='group-hover:text-6xl duration-300 text-3xl md:text-5xl font-bold text-sky-500'>
        {title}
      </h1>
      <p className='text-slate-500 mt-2'>{subtitle}</p>
    </div>
  )
}

export default TrustedClientsCard
