import React from 'react'

const FooterGrids = ({ title }) => {
  const projectsArr = [
    'Freelance',
    'Personal',
    'Graphics',
    'Experience',
    'Mobile',
  ]
  const socialsArr = ['Facebook', 'Instagram', 'Twitter', 'Youtube', 'Github']
  const experiencesArr = [
    'Nepal Summit 2018',
    'Cambodia Summit 2019',
    'ILC2022',
  ]
  const legalArr = ['Claims', 'Privacy', 'Terms', 'Policies', 'Conditions']
  return (
    <div className='font-Poppins text-white'>
      <h6 className='uppercase font-semibold'>{title}</h6>
      <ul className='pl-4 text-sm text-slate-400'>
        {title === 'Projects'
          ? projectsArr.map((item, index) => (
              <li key={index} className='my-2 cursor-pointer hover:text-white'>
                {item}
              </li>
            ))
          : ''}

        {title === 'Socials'
          ? socialsArr.map((item, index) => (
              <li key={index} className='my-2 cursor-pointer hover:text-white'>
                {item}
              </li>
            ))
          : ''}

        {title === 'Experiences'
          ? experiencesArr.map((item, index) => (
              <li key={index} className='my-2 cursor-pointer hover:text-white'>
                {item}
              </li>
            ))
          : ''}

        {title === 'Legal'
          ? legalArr.map((item, index) => (
              <li key={index} className='my-2 cursor-pointer hover:text-white'>
                {item}
              </li>
            ))
          : ''}
      </ul>
    </div>
  )
}

export default FooterGrids
