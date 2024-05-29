

import { buttonVariants } from '@/components/ui/button';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SheetDemo } from '../sheet/Sheet';
import MaxWidthWrapper from '../MaxWidthWrapper';


interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <MaxWidthWrapper>
    <div className="h-[14vh] bg-transparent shadow-md">
      <div className="w-[95%] flex items-center justify-between mx-auto h-[14vh]">
        <Link href="/" passHref>
          <div className="flex z-40 font-semibold cursor-pointer">
            <Image src="/logo1.svg" alt="Logo" width={250} height={150} />
          </div>
        </Link>

        <div className="h-[9vh]  bg-gradient-to-r  rounded-lg">
          <ul className="hidden lg:flex items-center my-5 pl-1 pr-1 space-x-10">
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
            <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
              <SheetDemo/>
            </li>
          </ul>
        </div>
        <Bars3BottomRightIcon
          onClick={openNav}
          className="w-[3.5rem] lg:hidden text-slate-100 cursor-pointer"
        />
      </div>
    </div>
    </MaxWidthWrapper>
  );
};

export default Nav;

