'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import logoLight from '../../../public/logo.jpeg';
import logoDark from '../../../public/logo.jpeg';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-900';
  const textColor = theme === 'light' ? 'text-gray-800' : 'text-gray-200';
  const hoverBgColor = theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-700';

  if (!mounted) {
    return null;
  }

  return (
    <nav className={`fixed top-0 w-full z-20 p-5 sm:p-0 ${bgColor} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between sm:relative">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={"/logo-removebg-preview.png"}
            alt="Intaj Stars Logo"
            width={100}   // Adjust as needed
            height={100}  // Adjust as needed
            className="rounded-full"  // Optional: Make the logo rounded
            priority
          />
          <span className={`font-bold text-sm ${textColor}`}>Intaj Stars Technology</span>
        </Link>

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="sm:hidden p-2 rounded-md"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <FaTimes className={`w-6 h-6 ${textColor}`} />
          ) : (
            <FaBars className={`w-6 h-6 ${textColor}`} />
          )}
        </button>

        {/* Menu Links and Theme Toggle */}
        <div className={`sm:flex gap-x-4 md:gap-x-8 items-center ${isOpen ? 'flex flex-col absolute top-full left-0 w-full p-5 ' + bgColor + ' ' + textColor : 'hidden'} sm:static`}>
          <Link href="/" className={`font-bold text-lg ${hoverBgColor} p-2 rounded transition-colors duration-200`}>
            Home
          </Link>
          <Link href="/pages/services" className={`font-bold text-lg ${hoverBgColor} p-2 rounded transition-colors duration-200`}>
            Services
          </Link>
          <Link href="/pages/contact-us" className={`font-bold text-lg ${hoverBgColor} p-2 rounded transition-colors duration-200`}>
            Contact Us
          </Link>
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className={`p-2 rounded-full ${hoverBgColor} transition-colors duration-200`}
          >
            {theme === 'light' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-6 h-6 `}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-6 h-6 `}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m.386-6.364l1.591 1.591M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;