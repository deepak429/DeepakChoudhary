import React from 'react'
import { Button, Heading,ProjectCard} from "../../components"
import {p1,p2,p3,p4,p5,p6} from "../../Assets/projectIMG"
import { right } from '../../Assets/icon'

export default function Project() {
 const  projects =[
  {
    id:1,
    img:p1,
    pname:"Shoes store"
  },
  {
    id:2,
    img:p2,
    pname:"Choth Store"
  },
  {
    id:3,
    img:p3,
    pname:"Resturant"
  },
  {
    id:4,
    img:p4,
    pname:"Black Friday"
  },
  {
    id:5,
    img:p5,
    pname:"Music App"
  },
  {
    id:6,
    img:p6,
    pname:"Movies App"
  },
 ]


  return (
    <div className='px-6 sm:px-8 lg:px-20 h-full 2xl:py-10'>
      <div className='mt-14'>
        <Heading inner="Projects" outer="My Projects" />
      </div>
      <div className=' py-4'>
        <ul className='flex flex-row space-x-10 justify-center text-lg  cursor-pointer h-8 flex-wrap p-6 '>
          <li className='hover:border-b-2 hover:border-special'>All</li>
          <li className='hover:border-b-2 hover:border-special'>Image</li>
          <li className='hover:border-b-2 hover:border-special'>Music</li>
          <li className='hover:border-b-2 hover:border-special'>Video </li>
          <li className='hover:border-b-2 hover:border-special'>Content</li>
          <li className='hover:border-b-2 hover:border-special'>Website</li>
        </ul>
      </div>
      <div className='p-10 grid grid-col-1 grid-flow-row justify-center items-center gap-x-10 gap-y-4 lg:grid-rows-3 lg:grid-flow-col xl:grid-rows-2 xl:grid-col'>
        {projects.map(data=>(
      <ProjectCard key={data.id} img={data.img} pname={data.pname}/>

        ))}
      {/* <ProjectCard img={p2} pname="Choth Store"/>
      <ProjectCard img={p3} pname="Resturant"/>
      <ProjectCard img={p4} pname="Black Friday"/>
      <ProjectCard img={p5} pname="Music App"/>
      <ProjectCard img={p6} pname="Movies App"/> */}
      </div>
      <div className='flex  justify-center item-cenetr'>
      <div className='  bg-transparent rounded border-special border-2 hover:bg-special text-special  text-center outline-none cursor-pointer text-center w-[10rem] text-xl p-2 my-5   hover:text-white  transition ease-in-out duration-400'> All Project <span className=''> {">>"}</span></div>

      </div>

    </div>
  )
}
