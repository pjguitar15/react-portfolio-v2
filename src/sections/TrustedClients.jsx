import React from 'react'
import TrustedClientsCard from '../components/TrustedClientsCard'

const TrustedClients = () => {
  return (
    <div className='py-24 lg:py-28 font-Poppins'>
      <div className='container text-center'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>
          Trusted by clients across the world
        </h1>
        <p className='text-slate-400 text-md sm:text-xl mt-4 mb-10'>
          In order to get a great-looking website, I listen to my clients and
          give them feedbacks and suggestions from a developer perspective as
          well.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <TrustedClientsCard title='100%' subtitle='Safety' />
          <TrustedClientsCard title='24/7' subtitle='Service' />
          <TrustedClientsCard title='20+' subtitle='Satisfied Clients' />
        </div>
      </div>
    </div>
  )
}

export default TrustedClients
