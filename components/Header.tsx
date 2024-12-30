import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({children, className }: HeaderProps) => {
  return (
    <div className={cn('header border-b-2 border-slate-800 hover:opacity-75', className)}>
      <Link
        href='/'
        className='md:flex-1'
      >
        <Image 
            src = '/favicon.ico'
            alt="Logo with name"
            width={60}
            height={60}
            className='hidden md:block'
        />
        <Image 
            src = '/favicon.ico'
            alt="Logo"
            width={48}
            height={48}
            className='mr-2 md:hidden'
        />
      </Link>
      {children}
    </div>
  )
}
 
export default Header
