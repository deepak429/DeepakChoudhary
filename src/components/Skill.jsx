import React from 'react'

export default function skills({value=80,skill="js"}) {

  return (
    <div>
    <div className="flex justify-between">
    <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-white font-semibold opacity-80">{skill}</label>
    <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-white font-Poppins opacity-60 ">{value}%</label>
    </div>
    <input type="range" value={`${value}`} readOnly
     className="w-full h-4  rounded-nonecursor-pointer  rounded-xl appearance-none"
     style={{
      background: 'linear-gradient(to right, #E8404A, #E8404A), #c5b9b965',
      backgroundSize: `${value}%, 100%`,
      backgroundRepeat: 'no-repeat'
      /* Add other custom styles here */
    }}
  />


    {/* <input id="default-range" type="range" value="${value}" class="w-full h-2 cursor-pointer bg-red-500" /> */}

    </div>

  )
}
