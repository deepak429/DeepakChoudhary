import React from 'react'

export default function BlogCard({img,heading,details}) {
  return (
    <div>
      <div className="relative flex  flex-col rounded-xl bg-card_bg bg-clip-border text-gray-700 shadow-md shadow-md hover:shadow-special rounded transition duration-700 ease-in-out cursor-pointer">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none ">
          <img className='rounded sm:w-full '
            src={img}
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-white antialiased">
        {heading}
          </h4>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-400 antialiased">
        {details}
          </p>
        </div>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center -space-x-3">
            <img
              alt="natali craig"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
              className="relative inline-block h-9 w-9 rounded-full border-4 border-special object-cover object-center hover:z-10"
              data-tooltip-target="author-1"
            />
           

          </div>
          <p className="block font-sans text-base text-special font-normal leading-relaxed text-inherit antialiased">
            January 10
          </p>
        </div>
      </div>
     

    </div>
  )
}
