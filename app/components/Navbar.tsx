'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <section className='w-screen p-6 mx-auto bg-gradient-to-r from-cosee-t to-cosee-b'>
                {/* Navbar */}
                <nav className="relative ">
                    {/* Flex Container */}
                    <div className="flex px-8">
                        {/* Logo */}
                            <Image src='/logo.png' alt='Ai-gram Logo' width={300} height={10} className='rounded-3xl'></Image>
                        {/* Menu Items */}
                        <div className="nav-list hidden md:flex justify-evenly w-full space-x-6">
                            <Link href='/how' className='nav-item my-auto'>How it works</Link>
                            <Link href='/' className='nav-item my-auto'>Gallery</Link>
                            <Link href='/about' className='nav-item my-auto'>About me</Link>

                        </div>
                        {/* button */}
                        <Link href="/upload"
                         className="cta hidden md:block p-2 px-6 pt-2 duration-300 rounded-full w-100 text-center"
                         >
                            Generate image
                         </Link>

                        {/* Hamburger Icon */}
                        <div onClick={toggleMenu} className=''>
                            <button id='menu-btn'
                                className={`hamburger md:hidden flex focus:outline-none ${isOpen ? 'open' : ''}`}>
                                <span className="hamburger-top"></span>
                                <span className="hamburger-middle"></span>
                                <span className="hamburger-bottom"></span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <div id="menu" className={`absolute flex-col m-2 items-center bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${isOpen ? 'open flex' : 'hidden'}`}>
                            <Link href='/' className='nav-item py-1'>Gallery</Link>
                            <Link href='/how' className='nav-item py-1'>How it works</Link>
                            <Link href='/about' className='nav-item py-1'>About Me</Link>
                            <Link href="/upload" className="nav-item py-1">Generate image</Link>
                        </div>
                    </div>

                </nav>
            </section>
        </div>
    )
}

export default Navbar