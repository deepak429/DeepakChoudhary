import React from 'react'

export default function ServiceCard({icon,typeService,details}) {
  return (
    <div className='mt-10 w-12/12  p-4 bg-card_bg shadow-md hover:shadow-special rounded transition duration-700 ease-in-out focus:shadow-special cursor-pointer '>
    <img className="" src={icon} height={40} width={60} alt="icon" />
    <h1 className='text-xl my-2 sm:2xl'>{typeService}</h1>
    <p className=' opacity-60 sm:text-xl'>{details}</p>
    </div>
  )
}
