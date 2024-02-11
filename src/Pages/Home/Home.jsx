import React from 'react'
import Navbar from './Navbar/Navbar'
import hero from "../../Assets/hero.png"
import hero2 from "../../Assets/hero2.png"
import Button from "../../components/Button"
import FollowMe from "../../components/FollowMe"
import Type from "./Type"
import { mouse } from '../../Assets/icon'


export default function Home() {
  return (
    <>
    
      <div className='w-full h-screen bg-home-bg  text-white '>
        <Navbar />
        <FollowMe/>
        <div className='flex flex-col  px-6 lg:px-20 bg-hero2 bg-cover bg-no-repeat xl:bg-none  xl:flex-row'>
          <div className='left flex flex-col w-1/2 h-screen '>
            <div className="grid grid-col text-4xl   mt-10   w-[20rem] sm:w-[40rem] xl:mt-20 ">
              <h2 className='text-2xl sm:text-4xl xl:text-5xl'> Hi There!</h2>
              <h2 className='font-extrabold text-4xl sm:text-5xl  xl:text-6xl font-Poppins'>I am <span className='text-special'> {<Type/>}</span> </h2>
              <h2 className='text-2xl sm:text-4xl xl:text-5xl' >I make the complex simple.</h2>
              <div>
                <Button innerText="Contact-me" />
              </div>
            </div>
            <div className='left-bootom flex flex-col justify-start xl:flex-row xl:mt-40 xl:justify-between'>
              <div className=' border-l-2 p-2 my-4 '>
                <div className=' text-xl font-bold sm:text-2xl xl:text-xl '>Email</div>
                <p className='text-text_gray sm:text-xl xl:text-base'>depakch429@gmail.com</p>
              </div>

               <div className=' border-l-2 p-2 my-4'>
                <div className=' text-xl font-bold sm:text-2xl xl:text-xl'>Phone</div>
                <p className='text-text_gray sm:text-xl  xl:text-base' >91+ 7678524254</p>
              </div>

                <div className=' border-l-2 p-2 my-4'>
                <div className='text-xl font-bold sm:text-2xl xl:text-xl'>Location</div>
                <p className='text-text_gray sm:text-xl  xl:text-base'>New Delhi INDIA</p>
              </div>
            </div>
          </div>
          
          <div className=" hidden flex right w-1/2 justify-start items-start h-[89.5vh] xl:block xl:h-[86vh]">
            <img className="h-full" src={hero} alt="hero" />
          </div>
          <div className='relative h-14 w-11 '>
          <img  className=" hidden absolute animate-bounce mt-[35rem] right-[0] sticky 2xl:block" src={mouse} alt=""  />
          </div>
         
         
        </div>
      </div>
  
    </>
  )
}
