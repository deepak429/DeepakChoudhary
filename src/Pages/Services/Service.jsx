import React from 'react'
import { Heading,ServiceCard } from "../../components"
import {data} from "./data"
export default function Service() {
  
  return (
    <div className='px-6 sm:px-8 lg:px-20 h-full'>
    <div className='mt-12'>
        <Heading inner="Service" outer="My Service"/>
    </div>
    <div className='grid grid-flow-row grid-col-1 gap-y-1 lg:grid-cols-2 lg:grid-flow-row lg:gap-x-5 xl:grid-cols-3 2xl:p-10'>
        {data.map(data => (
            <ServiceCard key={data.id} icon={data.icon} typeService={data.ts} details={data.det}/>
        ))}
    </div>
</div>

  )
}
