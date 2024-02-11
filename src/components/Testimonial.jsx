import React from 'react'
import {u1} from "../Assets/"
import {quote} from "../Assets/icon"
export default function Testimonials() {
  return (
    <div className='bg-card_bg   h-full p-5 hover:border-b-2 hover:border-special '>
      <div className='flex flex-row  p-2 justify-between mb-4'>
        <div className='flex'>
          <img className="border-special border-2 rounded-full" height={50} width={50} src={u1} alt="" srcset="" />
          <div className='ml-4 '>
          <h1 className='text-xl opacity-80 '>Deepak Choudhary</h1>
          <p className='opacity-50'>Web Developer</p>
          </div>
          
        </div>
        <div className=''>
          <img src={quote} height={45} width={45}alt="" srcset="" />
        </div>

      </div>
<p className='opacity-70 sm:text-xl'>"Embarking on web development has transformed me. Mastering coding languages sparked a creative passion. Crafting responsive websites is rewarding, and the evolving field excites me. Empowered to bring ideas to life online, I eagerly contribute to the digital landscape."</p>

    </div>
  )
}
