import React from 'react'
import { Carousel } from "@material-tailwind/react";
import {Heading,BlogCard} from '../../components'
import {b1,b2,b3} from "../../Assets/Blogimg"
export default function Blogs() {
const blogData = [
  {
    id:1,
    img:b1,
    heading:"SoloLearn" ,
    details:"SoloLearn is the fastest-growing online community dedicated to coding and has over 22 million learners worldwide learning how to code using their website.SoloLearn is the fastest ..."
  },
  {
    id:2,
    img:b2,
    heading:"Web Designer Depot" ,
    details:"If you are interested in web creation and web design, then you should  deem this blog a must-read. The Web Designer Depot encompasses subjects ranging from server-side backend coding ..."
  },
  {
    id:3,
    img:b3,
    heading:"Coding Horror" ,
    details:"This blog is heartily enjoyed by a lot of readers. This blog is included in this list since it’s a frank, humorous blog that discusses the challenges and ironies of software creation ..."
  }
 ,
 
  
]

  return (
    <div className='px-6 sm:px-8 lg:px-20 h-full '>
      <div className='mt-16'>
      <Heading inner="Blogs" outer="My Blog" />

      </div>
     
    
      <div className='grid grid-cols-1 grid-flow-flow lg:grid-cols-2 gap-10 justify-center mt-10 2xl:grid-cols-3 2xl:justify-center 2xl:p-10'>
        {blogData.map(data=>(
      <BlogCard key={data.id} img={data.img} heading={data.heading} details={data.details}/>

        ))}
        </div>
    

    
     
      <div className='flex justify-center pt-5'>
      <div className='  bg-transparent rounded border-special border-2 hover:bg-special text-special  text-center outline-none cursor-pointer text-center w-[10rem] text-xl p-2 my-5   hover:text-white  transition ease-in-out duration-400'> More Blogs <span className=''> {">>"}</span></div>

      </div>
    </div>
  )
}
