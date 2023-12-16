'use client';
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <section>
                {/* Navbar */}
                <nav className="relative container bg-cosee-g mx-auto">
                    <div className="flex items-center justify-between p-5">

                        {/* Logo */}
                        <div className="pt-2 rounded-full">
                            <Image src='/cosee_logo.jpg' alt='Cosee Logo' width={100} height={50}></Image>
                        </div>

                        {/* Menu Items */}
                        <div className="hidden md:flex space-x-6">
                            <a href='#'>Über mich</a>
                            <a href='#'>Über Cosee</a>
                        </div>

                        {/* button */}
                        <a href="#" className="hidden md:block p-2 px-6 pt-2 text-white bg-cosee-y hover:bg-cosee-g rounded-full baseline">Lade einen Bild Hoch</a>

                        {/* Hamburger Icon */}
                        <button id='menu-btn'
                            className={`block hamburger md:hidden focus:outline-none ${isOpen ? 'open' : ''}`}
                            onClick= {toggleMenu}
                            >
                            <span className="hamburger-top"></span>
                            <span className="hamburger-middle"></span>
                            <span className="hamburger-bottom"></span>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <div id="menu" className={`absolute flex-col items-center py-3 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${isOpen ? 'open flex' : 'hidden'}`}>
                            <a href='#'>Über mich</a>
                            <a href='#'>Über Cosee</a>
                        </div>
                    </div>

                </nav>
            </section>
        </div>
    )
}

export default Navbar