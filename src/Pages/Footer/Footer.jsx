import React from 'react'
import {copyright} from "../../Assets/icon/contact"
export default function Footer() {
  return (
    <div className='bg-black text-white text-center p-5'>
      <div className="flex justify-center gap-5">
      <img className='h-5 w-5' src={copyright} alt="copyright logo"  />
      <h1>Copyright. All Rights Reserved</h1>

      </div>
    </div>
  )
}
