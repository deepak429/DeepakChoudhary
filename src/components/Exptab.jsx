import React from 'react'
import CountUp from 'react-countup';
export default function Exptab({number,text}) {
  return (
   
       <div className='p-6 flex '>
          <div className='text-5xl font-Poppins text-special p-2 justify-center gap-5'>
            <CountUp duration={10} end={number} delay={1}/>+</div>
          <h1 className='text-3xl  p-1 font-medium'>{text}</h1>
        </div>
  
  )
}
