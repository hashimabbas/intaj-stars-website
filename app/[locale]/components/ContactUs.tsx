"use client"
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const ContactUs = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-4xl text-center p-10 lg:text-5xl font-extrabold  text-gray-900  dark:text-gray-100 mb-4">
        Contact Us
      </h1>
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-12">
          {/* Left Side (Contact Form - Placeholder) */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
                Send us a message
              </h2>
              {/* Placeholder for contact form - Replace with your actual form */}
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side (Contact Information) */}
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
                Contact Information
              </h2>
              <div className="space-y-4">
                <p className="flex items-center justify-center md:justify-start">
                  <MdLocationOn className="mr-2 text-blue-500 text-2xl" />
                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-center md:text-left">
                    123 Main Street<br />
                    Halban, J25G+8H، حلبان<br />
                    Oman
                  </span>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <MdEmail className="mr-2 text-blue-500 text-2xl" />
                  <a
                    href="mailto:Intaj.StarsTechnology@outlook.com"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    Intaj.StarsTechnology@outlook.com
                  </a>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <MdPhone className="mr-2 text-blue-500 text-2xl" />
                  <a
                    href="tel:+96892201203"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    +968 92201203
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;