import React from 'react'
import {Exptab} from '../../components'
export default function Exp() {
  const expdata = [
    {
      id:1,
      number:"12" ,
      text:"Years of Experience",

    },
    {
      id:2,
      number:"80" ,
      text:"Project Completed",

    },
    {
      id:3,
      number:"90" ,
      text:"Clients World Wide",

    }
  ]
  return (
<>
<div className='px-6 sm:px-8 lg:px-20 mt-10 h-full '>
  <div className='flex flex-col bg-card_bg  rounded  justify-center items-center border-b-4 border-special xl:flex-row 2xl:px-20'>

{expdata.map(expdata=>(
  <Exptab key={expdata.id}number={expdata.number} text={expdata.text}/>

))}


  </div>

</div>

</>
  )
}
