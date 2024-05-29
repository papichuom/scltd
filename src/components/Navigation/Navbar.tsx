
import { XMarkIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'

import { buttonVariants } from '@/components/ui/button';
import { SheetDemo } from '../sheet/Sheet';


interface Props{
  nav: boolean;
  closeNav:()=>void
}

const MobileNav = ({nav,closeNav}:Props) => {
  const navOpenStyle = nav?"translate-x-0":"translate-x-[-100%]"
  return (
    <div className={`transform transition-all ${navOpenStyle} duration-500 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-gradient-to-r from-green-200 to-blue-300`}>
      <XMarkIcon onClick={closeNav} className='w-[3rem] h-[3rem] absolute top-[2rem] text-black z-[202] right-[2rem]'/>
      <ul className='relative z-[201] space-y-10 flex flex-col justify-center h-[100%] items-center'>
      <li className="text-[17px] cursor-pointer font-bold text-Blue-800">
            <Link
                  href='/'
                  className={buttonVariants({
                    variant: 'outline',
                    size: 'sm',
                  })}>
                  Home
                </Link>
                </li>
            <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
              <Link href="/skills"
              className={buttonVariants({
                variant: 'outline',
                size: 'sm',
              })}
              >Services</Link>
            </li>
            <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
              <Link href="/projects"
              className={buttonVariants({
                variant: 'outline',
                size: 'sm',
              })}
              >Projects
              </Link>
            </li>
            <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
              <Link href="/team"
              className={buttonVariants({
                variant: 'outline',
                size: 'sm',
              })}
              >Our Team</Link>
            </li>
            <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
              <Link href="/about"
              className={buttonVariants({
                variant: 'outline',
                size: 'sm',
              })}
              >About Us</Link>
            </li>
            
            
        </ul>
    </div>
  )
}

export default MobileNav