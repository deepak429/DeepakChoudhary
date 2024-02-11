
import React from 'react'
import { location, message, user, phone } from "../../Assets/icon/contact";

import { Heading, Button } from "../../components"

export default function Contact() {

  const contact = [
    {
      id: 1,
      icon: user,
      user: "Name",
      details: "Deepak",
    },
    {
      id: 1,
      icon: location,
      user: "Location",
      details: "Delhi,INDIA",
    },
    {
      id: 3,
      icon: phone,
      user: "Call-Me",
      details: "91+ 76785425xx",
    },
    {
      id: 4,
      icon: message,
      user: "Email Me",
      details: "kuber0225@gmail.com",
    }
  ]
  return (
    <div className='px-6 sm:px-8 lg:px-20 h-full pb-14'>
      <div className=" mt-14">
        <Heading inner="Contact" outer="Get in Touch" />
      </div>

      <div className="flex flex-col pt-20 sm:pt-10 xl:flex-row xl:gap-x-10 2xl:px-10 ">
        <div className=" flex flex-col boreder gap-4 ">
          <h1 className='m-5 text-2xl text-special underline'>Message Me</h1>
          <div className='flex gap-x-5 '>
            <input className='bg-gray-700 outline-none rounded w-1/2 h-10 p-2 outline-none focus:outline-special' type="text" placeholder='Name' />
            <input className='bg-gray-700 outline-none rounded w-1/2 h-10 p-2 focus:outline-special' type="text" placeholder='Email' name="" id="" />
          </div>
          <div className="">
            <input className='bg-gray-700 outline-none rounded w-full h-10 p-2 focus:outline-special' placeholder='Subject' type="text" name="" id="" />
          </div>
          <div>
            <textarea className='bg-gray-700 rounded w-full p-2 focus:outline-special' name="" id="" placeholder='Message' cols="100" rows="5"></textarea>
          </div>
          <div className='text-center flex justify-center pb-5 '>
            <Button innerText="Send Message" />
          </div>
        </div>




        <div className=" ">
          <div className="">
            <h1 className='text-2xl sm:text-3xl'>Contact info</h1>
            <p className='sm:text-xl'>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
          </div>
          <div className="flex justify-start mt-8">
            <div className='flex flex-col gap-y-11 mt-1'>
              {contact.map(info => (
                <img key={info.id} className="h-5 w-5 sm:h-8 sm:w-8" src={info.icon} alt="user" />
              ))}
              {/*     
    <img className="h-5 w-5 sm:h-10 sm:w-10" src={user} alt="user" />
    <img className="h-5 w-5" src={location} alt="user" />
    <img className="h-5 w-5" src={phone} alt="user" />
    <img className="h-5 w-5" src={message} alt="user" /> */}
            </div>
            <div className='flex flex-col border mx-5 h-[15rem] sm:h-[18rem] border-special'></div>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col'>
                <h1 className='sm:text-2xl '>Name</h1>
                <p className='opacity-60  sm:text-xl'>Deepak Choudhary</p>
              </div>
              <div className='flex flex-col'>
                <h1 className='sm:text-2xl'>Location</h1>
                <p className='opacity-60 sm:text-xl' >Delhi india</p>
              </div>
              <div className='flex flex-col'>
                <h1 className='sm:text-2xl'>Phone</h1>
                <p className='opacity-60 sm:text-xl'>91+ 546585xxx</p>
              </div>
              <div className='flex flex-col'>
                <h1 className='sm:text-2xl'>Email</h1>
                <p className='opacity-60 sm:text-xl'>kuber0225@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

