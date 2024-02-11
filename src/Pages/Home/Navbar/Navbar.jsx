

import React from 'react'
import { Logo } from "../../../Assets/index"
import { hemburger, xmark } from "../../../Assets/icon"
export default function Navbar() {
    const menu = [
        { id: 1, name: "Home" },
        { id: 2, name: "Resume" },
        { id: 3, name: "Services" },
        { id: 4, name: "Project" },
        { id: 5, name: "Blog" },
        { id: 6, name: "Contact" },
    ]
    return (
        <div className='w-full flex flex-row justify-start px-6 py-6 text-white'>
            <div className='flex flex-row w-full text-2xl font-Protest_Riot lg:mt-4'>
                <img className="lg:h-10 lg:w-10" src={Logo} height={20} width={30} alt="logo" />
                Deepak Choudhary
            </div>
            <img className='cursor-pointer lg:hidden' height={20} width={30} src={hemburger} alt="menu" />
            <img className='hidden cursor-pointer lg:hidden' height={20} width={30} src={xmark} alt="menu" />

            <ul className='lg:flex w-auto items-center  h-14 ml-auto mr-4 text-xl  px-4 space-x-4 hidden xl:text-2xl xl:space-x-8 2xl:space-x-12'>

                {menu.map(menu => (
                    <li key={menu.id} className='hover:border-b-2 opacity-50 active:text-special hover:opacity-100 border-special'>{menu.name}</li>
                ))}
            </ul>
        </div>

    )
}
