import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/gigboosterICON.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false); // State to handle mobile menu

    const toggleMenu = () => {
        setNav(!nav); // Toggle menu visibility
    };

    const navItems = [
        { id: 1, text: 'Home' , link: '/' },
        { id: 2, text: 'Benefits' , link: '#benefits'},
        { id: 3, text: 'Why Us' , link: '#why-us'},
        { id: 4, text: 'How it works' , link: '#how-it-works'},
        { id: 5, text: 'Get Started' , link: '/login'},
    ];

    return (
        <nav className="z-[60] fixed top-0 bg-transparent backdrop-blur-md w-full py-3">
            <div className="container mx-auto px-4 flex justify-between items-center h-16 text-white">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <Image src={logo} width={60} alt='logo' />
                    <span className="self-center text-2xl font-semibold">GigBooster AI</span>
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-6">
                    {navItems.slice(0, 4).map(item => (
                        <li key={item.id} className="text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 cursor-pointer">
                            <a href={item.link}>{item.text}</a>
                        </li>
                    ))}
                    <li>
                        <button className="bg-purple text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                            <a href='/login'>Get Started</a>
                        </button>
                    </li>
                </ul>

                {/* Mobile Navigation Toggle */}
                <div onClick={toggleMenu} className="block md:hidden cursor-pointer">
                    {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={`${
                    !nav ? "hidden" : "flex-col"
                    } p-6 bg-bgdark absolute top-20 right-0 mx-4 my-2 min-w-[290px] rounded-xl sidebar`}
            >
                {navItems.slice(0, 4).map(item => (
                    <li key={item.id} className="p-4 border-b border-gray-600 cursor-pointer hover:text-purple transition duration-300">
                        <a href={item.link}>{item.text}</a>
                    </li>
                ))}
                <li className="pt-6">
                    {/* Change the button to an anchor tag for proper navigation */}
                    <a href='/login' className="bg-purple text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                        Get Started
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
