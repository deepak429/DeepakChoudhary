import React from 'react'

export default function Button({innerText}) {
  return (
   <div className={` border-special border-2 bg-special rounded text-white outline-none cursor-pointer text-center w-[10rem] text-xl p-2 my-5  shadow-md hover:shadow-white rounded transition duration-700 ease-in-out`}>{innerText}</div>
  )
}
