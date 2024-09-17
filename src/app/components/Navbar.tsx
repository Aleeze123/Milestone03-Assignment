'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="w-full bg-gradient-to-r from-blue-50 via-indigo-100 to-blue-50 flex items-center justify-between px-6 py-4 shadow-md border-b border-white fixed top-0 left-0 z-50">
            <div className="text-black text-4xl font-bold tracking-wide">
             BLOGS
            </div>

            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-black text-3xl">
                    {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </div>

            <div
                className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`}
            >
                <nav
                    className={`fixed inset-0 bg-white p-6 space-y-6 flex flex-col justify-center items-center transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <button onClick={toggleMenu} className="absolute top-6 right-6 text-black text-3xl">
                        <AiOutlineClose />
                    </button>
                    <Link href="/" className="text-black text-3xl font-medium" onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link href="/about" className="text-black text-3xl font-medium" onClick={toggleMenu}>
                        About
                    </Link>
                    <Link href="/blog" className="text-black text-3xl font-medium" onClick={toggleMenu}>
                        Posts
                    </Link>
                </nav>
            </div>

            <nav className="hidden md:flex space-x-12 text-black text-xl font-medium">
                <Link href="/" className="relative group">
                    <span className="hover:text-blue-900 transition-colors duration-300">Home</span>
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link href="/about" className="relative group">
                    <span className="hover:text-blue-900 transition-colors duration-300">About</span>
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link href="/blog" className="relative group">
                    <span className="hover:text-blue-900 transition-colors duration-300">Posts</span>
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
