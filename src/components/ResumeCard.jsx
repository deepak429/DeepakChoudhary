import React from 'react'
import right from "../Assets/icon/right_arrow.svg"
 function ResumeCard({school,bord,details}) {
  return (
    <div className='shadow-md  hover:shadow-special border-l-4 cursor-pointer bg-[#1E1E1E] mb-1 rounded border-special'>
    <img className=" h-14 pt-5 ml-[-0.25rem]" src={right}  alt="arrow" />
    <div className='px-10 py-4 mt-[-1rem]  '>
     <h1 className=' mt-[-1.7rem] font-Poppins text-ls sm:text-2xl 2xl:text-xl'>{school}</h1>
     <h2 className='my-2  opacity-50 sm:text-xl'>{bord}</h2>
     <p className=' opacity-50 text-base sm:text-xl'>{details}</p>
     </div>
    </div>
  )
}
export default ResumeCard
