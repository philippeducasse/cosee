'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { SearchBarProps } from '../Types';
import { usePathname } from 'next/navigation';

const Navbar = ({setSearchInput}: SearchBarProps) => {
    const pathname = usePathname(); 
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='navbar flex items-center'>
            <section className='flex justify-evenly w-screen p-5 mx-auto bg-gradient-to-r from-cosee-t to-cosee-b'>
                <nav className="relative h-full">
                    <div className="nav-container flex px-8 items-center h-full">
                            <Link href="/">
                                <Image src='/logo.png' alt='Ai-gram Logo' width={400} height={30} className='logo rounded-3xl'></Image>
                            </Link>
                            {pathname === '/' ? <SearchBar setSearchInput={setSearchInput}/> : null}
                        <div className="nav-list hidden lg:flex justify-evenly w-full">
                            <Link href='/how' className='nav-item my-auto'>How it works</Link>
                            <Link href='/' className='nav-item my-auto'>Gallery</Link>
                        </div>
                        <Link href="/upload"
                         className="cta hidden lg:flex px-6 duration-300 rounded-full w-100 text-center"
                         >
                            Generate image
                         </Link>

                        {/* Hamburger Icon */}
                        <div onClick={toggleMenu} className=''>
                            <button id='menu-btn'
                                className={`hamburger lg:hidden flex focus:outline-none ${isOpen ? 'open' : ''}`}>
                                <span className="hamburger-top"></span>
                                <span className="hamburger-middle"></span>
                                <span className="hamburger-bottom"></span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <div id="menu" className={`absolute flex-col m-6 items-center bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${isOpen ? 'open flex z-100' : 'hidden'}`}>
                            <Link href='/' className='nav-item py-1'>Gallery</Link>
                            <Link href='/how' className='nav-item py-1'>How it works</Link>
                            <Link href="/upload" className="nav-item py-1">Generate image</Link>
                        </div>
                    </div>

                </nav>
            </section>
        </div>
    )
}

export default Navbar