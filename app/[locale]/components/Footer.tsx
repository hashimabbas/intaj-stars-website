// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // React Icons
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Section 1: Company Info & Socials */}
        <div className="mb-6 md:mb-0 text-center md:text-left"> {/* Center on mobile, left on larger screens */}
          <h3 className="text-lg font-semibold mb-4">Intaj Stars</h3>
          <p className="mb-4">
            Innovative technology solutions for healthcare, e-commerce, accounting, and beyond.
          </p>
          <div className="flex justify-center space-x-4 md:justify-start"> {/* Center on mobile, left on larger screens */}
            <a href="#" className="hover:text-blue-400 transition-colors duration-200" aria-label="Facebook">
              <FaFacebook size={28} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200" aria-label="Twitter">
              <FaTwitter size={28} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200" aria-label="LinkedIn">
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>

        {/* Section 2: Services */}
        <div className="mb-6 md:mb-0 text-center md:text-left"> {/* Center on mobile, left on larger screens */}
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/medical-systems" className="hover:text-blue-400 transition-colors duration-200 block">Medical Systems</Link>
            </li>
            <li>
              <Link href="/e-commerce" className="hover:text-blue-400 transition-colors duration-200 block">E-commerce Solutions</Link>
            </li>
            <li>
              <Link href="/accounting" className="hover:text-blue-400 transition-colors duration-200 block">Accounting Systems</Link>
            </li>
            <li>
              <Link href="/web-development" className="hover:text-blue-400 transition-colors duration-200 block">Web Development</Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Quick Links */}
        <div className="mb-6 md:mb-0 text-center md:text-left"> {/* Center on mobile, left on larger screens */}
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors duration-200 block">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition-colors duration-200 block">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition-colors duration-200 block">Contact Us</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors duration-200 block">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-blue-400 transition-colors duration-200 block">Terms of Service</Link>
            </li>
          </ul>
        </div>

        {/* Section 4: Contact Information */}
        <div className="text-center md:text-left"> {/* Center on mobile, left on larger screens */}
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="space-y-3">
            <p className="flex items-center justify-center md:justify-start"> {/* Center on mobile, left on larger screens */}
              <MdLocationOn className="mr-2 text-gray-500 text-xl" />
              <span>123 Main Street<br />
                Halban, J25G+8H، حلبان<br />
                Oman</span>
            </p>
            <p className="flex items-center justify-center md:justify-start"> {/* Center on mobile, left on larger screens */}
              <MdEmail className="mr-2 text-gray-500 text-xl" />
              <a href="mailto:Intaj.StarsTechnology@outlook.com" className="hover:text-blue-400 transition-colors duration-200">Intaj.StarsTechnology@outlook.com</a>
            </p>
            <p className="flex items-center justify-center md:justify-start"> {/* Center on mobile, left on larger screens */}
              <MdPhone className="mr-2 text-gray-500 text-xl" />
              <a href="tel:+96892201203" className="hover:text-blue-400 transition-colors duration-200">+968 92201203</a>
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-4 border-t border-gray-700 text-center text-sm">
        <p>© {new Date().getFullYear()} Intaj Stars. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;