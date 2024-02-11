import React from 'react'

export default function Heading({inner,outer}) {
  return (
  
      <div className=''>
      <p className='text-3xl  font-Poppins mb-[-3.5rem] ml-3 font-semibold'>{outer}</p> 
      <h1 className='font-bungee text-7xl text-text_gray  opacity-25 '>{inner}</h1>
      
      </div>
      
    
  )
}
