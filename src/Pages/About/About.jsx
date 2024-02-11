import React from 'react'
import hero1 from "../../Assets/hero1.png"
import Button from "../../components/Button"
export default function About() {
  return (
    <div className='flex flex-col px-6 sm:px-8 lg:px-20 h-full pb-8 xl:flex-row xl:py-10  xl:h-screen'>
      <div className='left mt-20 lg:flex justify-center  xl:w-1/2 xl:p-10 xl:mt-0 sm:flex  '>
        <img className='rounded-full sm:w-[20rem] xl:w-[25rem] 2xl:rounded-none' src={hero1} alt="hero" />
      </div>
      <div className='right w-auto mt-5 xl:w-1/2  2xl:p-5 '>
        <div className=' '>
          <div className='text-special font-bold tracking-wide text-2xl mb-2 sm:text-3xl'>Who am i ? </div>
          <h1 className='font-Poppins text-white text-3xl  leading-relaxed tracking-wide sm:text-3xl sm:my-5 xl:text-3xl 2xl:text-4xl '>I’m Deepak Choudhary, a visual UX/UI Designer and Web Developer</h1>
          <p className=' tracking-wide text-text_gray leading-loose sm:text-xl'>Enthusiastic BCA 2nd year student, Deepak Choudhary, with a fervor for front-end development. Proficient in HTML, CSS, JavaScript, and React.js, showcasing practical skills through hands-on projects available on GitHub. Actively expanding expertise in backend development using JavaScript, particularly focusing on MERN stack. Eager to contribute creativity and technical skills to dynamic development teams, with a commitment to continuous learning and staying at the forefront of evolving technologies.</p>
        </div>

        <div className='border  mt-6 border-2  tetx-center  border-text_gray '></div>
        <div className=' pt-5 xl:grid xl:grid-rows-2 xl:grid-flow-col gap-3'>
          <div className='font-poppins text-xl font-bold '>Name : <span className='opacity-50 text-base '> Deepak Kumar Choudhary </span></div>
          <div className='font-poppins text-xl font-bold' >Age : <span className='opacity-50 text-base '> 19 </span></div>
          <div className='font-poppins text-xl font-bold' >From : <span className='opacity-50 text-base '>New Delhi </span></div>
          <div className='font-poppins text-xl font-bold' >Email : <span className='opacity-50 text-base '> deepak.ch429@gmail.com </span></div>
        </div>
        <div className='rounded-lg'>
          <Button innerText="Download CV" />
        </div>


      </div>
    </div>
  )
}


