import React from 'react'
import WhyHireMeCard from '../components/WhyHireMeCard'

const WhyHireMe = () => {
  return (
    <div className='font-Poppins'>
      <div className='container mt-72 pb-28'>
        <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold'>
          Why hire me?
        </h1>
        <p className='text-slate-500 text-md md:text-lg lg:text-xl my-4 md:my-5 lg:my-8 text-center'>
          I have been developing websites for 5 years now. I am a self taught
          developer and I gained all the skills I have from my curiosity and
          eagerness.
        </p>
        <div className='group grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <WhyHireMeCard
            title='Writes clean code'
            description='Someone can always open my github repository and read my code so I make things clean and make sure my code is readable.'
          />
          <WhyHireMeCard
            title='Fast Development'
            description='Because of my vast experience, it taught me a lot of ways to speed up my coding process. One of that is using the right frameworks.'
          />
          <WhyHireMeCard
            title='Content Backend'
            description='I can build a backend for your website so that you can easily add, edit, and delete contents with just a simple procedure.'
          />
          <WhyHireMeCard
            title='Fast Website'
            description='I use a framework called ReactJS and it is known for its fast performance. I can implement this feature on your website!'
          />
          <WhyHireMeCard
            title='Communicator'
            description='One of the things I do not like is not being able to do exactly what is requested by the client. I make sure I do things right.'
          />
          <WhyHireMeCard
            title='Great Design'
            description='I also do graphics design and one of my skill is to get a good looking and modernized graphical user interface.'
          />
          <WhyHireMeCard
            title='Free from bugs'
            description='Bugs while development cannot be avoided but can be fixed. I am going to make sure that your website is free from bugs.'
          />
          <WhyHireMeCard
            title='Value'
            description='I make sure that you get the value of what you have paid for. If you get any issues, just contact me and I am here to help you.'
          />
        </div>
      </div>
    </div>
  )
}

export default WhyHireMe
