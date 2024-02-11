import React from 'react'

export default function ProjectCard({img,pname="webDev"}) {
  return (

    <div className=' '>

    <img className='w-[25rem] h-[15rem] hover:opacity-10' src={img} alt="src"  />
    <div className='text-center font-Poppins p-5 text-xl'>{pname}</div>
  
  </div>
  )
}
