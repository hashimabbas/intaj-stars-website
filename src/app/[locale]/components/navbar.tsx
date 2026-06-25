//src/app/[locale]/components/navbar.tsx
'use client';
import { Link } from '@/src/i18n/navigation'; // Adjust path if needed
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
// Removed unused logo imports if not dynamically switching based on theme
// import logoLight from '../../../public/logo.jpeg';
// import logoDark from '../../../public/logo.jpeg';
import { useRouter, usePathname } from 'next/navigation'; // Import usePathname
import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcher from './locale-switcher';
import AuthButton from './AuthButton';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('navbar');
  const router = useRouter(); // Keep router if needed for other actions, but Link handles navigation
  const locale = useLocale();
  const pathname = usePathname(); // Get the current path *without* the locale prefix

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Close menu when a link is clicked (optional, good for mobile UX)
    // You might want to add onClick={closeMenu} to your Links if implementing this
  };

  const closeMenu = () => setIsOpen(false);


  const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-900';
  const textColor = theme === 'light' ? 'text-gray-800' : 'text-gray-200';
  const hoverBgColor = theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-700';
  const shadowColor = theme === 'light' ? 'shadow-md' : 'shadow-lg shadow-blue-500/10'; // Add subtle shadow

  if (!mounted) {
    return null;
  }

  if (!locale) {
    return null; // Locale might not be ready on initial render
  }

  // Determine the locale to switch to
  const targetLocale = locale === 'en' ? 'ar' : 'en';

  return (
    // Added shadow and slight padding adjustment
    <nav className={`fixed top-0 w-full z-20 ${bgColor} ${shadowColor} transition-colors duration-300`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20"> {/* Adjusted padding & height */}
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}> {/* Close menu on logo click */}
          <Image
            src={"/logo-removebg-preview.png"} // Consistent logo source
            alt={t('intajStarsLogo')}
            width={70}   // Slightly smaller logo
            height={70}  // Slightly smaller logo
            className="rounded-full"
            priority
          />
          <span className={`font-bold text-sm ${textColor} hidden md:block`}>{t('intajStarsTechnology')}</span> {/* Hide text on small screens */}
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="sm:hidden"> {/* Wrapper for spacing */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md inline-flex items-center justify-center"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={t('toggleMenu')}
          >
            <span className="sr-only">{t('toggleMenu')}</span>
            {isOpen ? (
              <FaTimes className={`block h-6 w-6 ${textColor}`} aria-hidden="true" />
            ) : (
              <FaBars className={`block h-6 w-6 ${textColor}`} aria-hidden="true" />
            )}
          </button>
        </div>


        {/* Menu Links and Theme/Language Toggle - Desktop */}
        <div className="hidden sm:flex sm:items-center sm:space-x-4 md:space-x-6">
          <Link href="/" onClick={closeMenu} className={`font-semibold ${textColor} ${hoverBgColor} px-3 py-2 rounded-md text-sm transition-colors duration-200`}>
            {t('home')}
          </Link>
          {/* Updated Services Link using pathname */}
          <Link href={`/pages/services`} onClick={closeMenu} className={`font-semibold ${textColor} ${hoverBgColor} px-3 py-2 rounded-md text-sm transition-colors duration-200`}>
            {t('services')}
          </Link>
          {/* Updated Contact Us Link using pathname */}
          <Link href={`/pages/contact-us`} onClick={closeMenu} className={`font-semibold ${textColor} ${hoverBgColor} px-3 py-2 rounded-md text-sm transition-colors duration-200`}>
            {t('contactUs')}
          </Link>



          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={t('toggleDarkMode')} // Assuming translation exists
            className={`p-2 rounded-full ${hoverBgColor} transition-colors duration-200`}
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m.386-6.364l1.591 1.591M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            )}
          </button>
          <LocaleSwitcher />
          <AuthButton />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden absolute top-full left-0 w-full ${bgColor} ${shadowColor} p-5`} id="mobile-menu">
        <div className="flex flex-col space-y-4 items-center"> {/* Center items vertically */}
          <Link href="/" onClick={closeMenu} className={`block font-semibold ${textColor} ${hoverBgColor} px-3 py-2 rounded-md text-base transition-colors duration-200 w-full text-center`}>
            {t('home')}
          </Link>
          <Link href={`/pages/services`} onClick={closeMenu} className={`block font-semibold ${textColor} ${hoverBgColor} px-3 py-2 rounded-md text-base transition-colors duration-200 w-full text-center`}>
            {t('services')}
          </Link>
          <Link href={`/pages/contact-us`} onClick={closeMenu} className={`block font-semibold ${textColor} ${hoverBgColor} px-3 py-2 rounded-md text-base transition-colors duration-200 w-full text-center`}>
            {t('contactUs')}
          </Link>

          {/* Theme Toggle Button - Mobile */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md inline-flex items-center justify-center"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={t('toggleMenu')} // <--- Likely Line 81 or near it
          >
            <span className="sr-only">{t('toggleMenu')}</span> {/* <--- OR this one */}
            {isOpen ? (
              <FaTimes className={`block h-6 w-6 ${textColor}`} aria-hidden="true" />
            ) : (
              <FaBars className={`block h-6 w-6 ${textColor}`} aria-hidden="true" />
            )}
          </button>
          <LocaleSwitcher />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;