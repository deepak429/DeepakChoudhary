import React from 'react'
import { Heading, ResumeCard } from "../../components"
import { education, exp } from "./data"

export default function Resume() {
  return (
    <>
      <div className='px-6 h-full pb-8  sm:px-8 lg:px-20 2xl:py-10'>
        <Heading inner="Resume" outer="My Resume" />
        <div className='flex  flex-col lg:flex-row lg:gap-x-10 2xl:p-10'>
          <div className='mt-8 '>
            <h1 className='text-3xl p-2 font-semibold sm:text-3xl 2xl:mb-3'>Education</h1>
            {education.map(edu => (
              <ResumeCard key={edu.id} school={edu.school} bord={edu.bord} details={edu.details} />
            ))}

          </div>
          <div className='mt-8 '>
            <h1 className='text-3xl p-2 font-semibold sm:text-3xl 2xl:mb-3'>Experience</h1>
            {exp.map(exp => (
              <ResumeCard key={exp.id} school={exp.school} bord={exp.bord} details={exp.details} />
            ))}
          </div>
        </div>

      </div>








    </>
  )
}
