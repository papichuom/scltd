import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-transparent h-20 relative'>
      <MaxWidthWrapper>
        <div className='border-t border-gray-200'/>
        <div className='h-full flex flex-col md:flex-row md:justify-between justify-center bg-black items-center'>
          <div className='text-center md:text-left pb-2 md:pb-0'>
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} mfnyakundi
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <div className='flex space-x-8'>
            
              <Link href='#' className='text-sm text-muted-foreground hover:text-gray-600'>
                <Image src='/x-social-media-black-icon.svg' alt='X' width={16} height={16} />
              </Link>
              <Link href='#' className='text-sm text-muted-foreground hover:text-gray-600'>
                <Image src='/telegram-icon.svg' alt='Telegram' width={16} height={16} />
              </Link>
              <Link href='#' className='text-sm text-muted-foreground hover:text-gray-600'>
                <Image src='/tiktok-icon.svg' alt='TikTok' width={16} height={16} />
              </Link>
              <Link href='#' className='text-sm text-muted-foreground hover:text-gray-600'>Terms</Link>
              <Link href='#' className='text-sm text-muted-foreground hover:text-gray-600'>Privacy</Link>
              <Link href='#' className='text-sm text-muted-foreground hover:text-gray-600'>Cookie</Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
