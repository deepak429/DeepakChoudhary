import React from 'react'
import { Heading, Testimonial } from '../../components'
import { Carousel } from "@material-tailwind/react";
export default function Testimonials() {
  return (
    <div className='px-6 sm:px-8 lg:px-20 h-full ' >

      <div className='my-14'>
        <Heading inner="TESTIMONIAL" outer="Testimonials" />
      </div>

      <div className=' gap-x-16 2xl 2xl:p-10'>
        <Carousel transition={{ duration: 2 }} className="rounded-xl">
       
        <div className=' grid grid-cols-1 grid-flow-row gap-y-10 2xl:grid-cols-2 2xl:grid-flow-row 2xl:gap-10'>
            <Testimonial />
            <Testimonial />
            </div>    
        <div className=' grid grid-cols-1 grid-flow-row gap-y-10 2xl:grid-cols-2 2xl:grid-flow-row 2xl:gap-10'>
            <Testimonial />
            <Testimonial />
            </div>    
        <div className=' grid grid-cols-1 grid-flow-row gap-y-10 2xl:grid-cols-2 2xl:grid-flow-row 2xl:gap-10'>
            <Testimonial />
            <Testimonial />
            </div>    
</Carousel>
          
       
      </div>



    </div>
  )
}
