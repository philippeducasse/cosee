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
                    <div className="flex justify-evenly text-center">
                        {/* Logo */}
                        <div className="">
                            <Image src='/cosee_logo.jpg' alt='Cosee Logo' width={100} height={50} className='rounded-2xl'></Image>
                        </div>
                        {/* Menu Items */}
                        <div className="nav-list hidden md:flex space-x-6 ">
                            <Link href='/' className='nav-item'>Gallery</Link>
                            <Link href='/about' className='nav-item'>Über mich</Link>
                            <Link href='/cosee' className='nav-item'>Über Cosee</Link>
                        </div>

                        {/* button */}
                        <Link href="/upload" className="cta hidden md:block p-2 px-6 pt-2 bg-cosee-y duration-300 rounded-full">Lade einen Bild Hoch</Link>

                        {/* Hamburger Icon */}
                        <div onClick={toggleMenu}>
                            <button id='menu-btn'
                                className={`block hamburger md:hidden focus:outline-none ${isOpen ? 'open' : ''}`}>
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