import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FcDocument } from 'react-icons/fc'
import {AiFillGithub} from 'react-icons/ai'
const Header = () => {
  return (
    <header className='bg-gray-900 text-white shadow w-full'>
        <div className='container mx-auto flex flex-wrap  flex-col md:flex-row items-center'>
            <Link href='/'>
                <span className='flex md:w-1/5 font-bold items-center md:justify-start mb-4 md:mb-0 pt-5'>
                    <Image src='/images/logo.png' width={40} height={40} alt='logo' />
                    <span className='ml-3 text-3xl items-center'>DevBlog</span>
                </span>
            </Link>
            <Link href='https://evankagarise.com/'>
                    <span  className='mx-5 cursor-pointer pt-5  hover:text-indigo-300 flex items-center justify-center gap-1'>
                        <FcDocument />
                        Portfolio</span>
                </Link>
                <Link href='https://evankagarise.com/'>
                    <span  className='mx-5 cursor-pointer  hover:text-indigo-300 pt-5 flex items-center justify-center gap-1'>
                        <AiFillGithub />
                        Source</span>
                </Link>
           
            <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto '> 
                <Link href='/blog'>
                    <span className='font-bold text-xl  mx-5 cursor-pointer uppercase hover:text-indigo-300'>Blog</span>
                </Link>
                <Link href='/about'>
                    <span  className=' font-bold text-xl mx-5 cursor-pointer uppercase hover:text-indigo-300'>About</span>
                </Link>
                
            </nav>
        </div>
    </header>
  )
}

export default Header