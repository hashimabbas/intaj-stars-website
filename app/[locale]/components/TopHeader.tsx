// src/app/components/TopHeader.tsx
import { FaTwitter, FaFacebook, FaAndroid, FaApple, FaInstagram } from 'react-icons/fa';

export default function TopHeader() {
  return (
    <div className="fixed top-0 xbg-zinc-800 text-white py-2 text-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="tel:+249912329449" className="hover:text-gray-300">
            +96892201203
          </a>
          <a href="mailto:info@tutiasd.com" className="hover:text-gray-300">
            intaj.star@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaAndroid />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaApple />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}