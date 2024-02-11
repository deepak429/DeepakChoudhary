import React from 'react'
import { Heading, Skill } from "../../components"
import {data} from "./data"
export default function Skills() {

  return (
    <div className='px-6 sm:px-8 lg:px-20 h-full my-10 '>
      <Heading inner="Skills" outer="My skills" />

      <div className='grid grid-col-1 grid-flow-row gap-4 mt-10 lg:grid-cols-2 2xl:p-10'>
        {data.map(data => (
          <Skill key={data.id} skill={data.skill} value={data.value} />

        ))}


      </div>

    </div>
  )
}
