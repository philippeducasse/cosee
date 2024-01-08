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
            <section className='w-screen p-6 mx-auto bg-gradient-to-r from-cosee-y to-cosee-g'>
                {/* Navbar */}
                <nav className="relative ">
                    {/* Flex Container */}
                    <div className="flex px-8">
                        {/* Logo */}
                            <Image src='/cosee_logo.jpg' alt='Cosee Logo' width={150} height={10} className='rounded-2xl'></Image>
                        {/* Menu Items */}
                        <div className="nav-list hidden md:flex justify-evenly w-full space-x-6">
                            <Link href='/' className='nav-item my-auto'>Gallerie</Link>
                            <Link href='/about' className='nav-item my-auto'>Über mich</Link>
                            <Link href='/cosee' className='nav-item my-auto'>Über Cosee</Link>

                        </div>
                        {/* button */}
                        <Link href="/upload"
                         className="cta hidden md:block p-2 px-6 pt-2 bg-cosee-y duration-300 rounded-full w-100 text-center"
                         >
                            Bild hochladen
                         </Link>

                        {/* Hamburger Icon */}
                        <div onClick={toggleMenu} className='flex'>
                            <button id='menu-btn'
                                className={`hamburger md:hidden focus:outline-none ${isOpen ? 'open' : ''}`}>
                                <span className="hamburger-top"></span>
                                <span className="hamburger-middle"></span>
                                <span className="hamburger-bottom"></span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <div id="menu" className={`absolute flex-col items-center font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${isOpen ? 'open flex' : 'hidden'}`}>
                            <a href='/' className="hover:text-gray-400">Gallery</a>
                            <a href='/about' className="hover:text-gray-400">Über mich</a>
                            <a href='/cosee'className="hover:text-gray-400">Über Cosee</a>
                        </div>
                    </div>

                </nav>
            </section>
        </div>
    )
}

export default Navbar