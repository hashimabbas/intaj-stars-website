// pages/ecommerce.tsx
import React from 'react';

const ECommerce = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
            E-Commerce Solutions by Intaj Stars
          </h1>
          <p className="text-gray-600 dark:text-gray-400 lg:text-lg mb-8">
            Unlock your online potential with our tailored e-commerce website packages.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            Contact Us
          </button>
        </section>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Bronze Package */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Bronze Package
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Starting from <span className="font-bold">250 OMR - </span>
              </p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Dynamic website (including CMS for content management)</li>
                <li>Modern and attractive design</li>
                <li>Home page with image slider, company intro, and featured products</li>
                <li>About Us page</li>
                <li>Contact Us page with form</li>
                <li>Responsive design for all devices</li>
                <li>Payment gateway integration (e.g., from Amana.net)</li>
                <li>Bilingual (Arabic and English)</li>
                <li>Modern section design</li>
                <li>Domain name registration (.com, .net, .org)</li>
                <li>Hosting plan (official email) on US servers</li>
                <li>SSL certificate</li>
                <li>Android web application</li>
                <li>Email notification system for customer and merchant</li>
                <li>Improved main section design</li>
                <li>SEO optimization</li>
                <li>WhatsApp notification feature for admin</li>
                <li>3 months of technical support</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Website design within 1 month from receiving complete data.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Annual renewal (hosting and domain): 55 OMR (responsibility of the store owner)
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 text-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                Choose Bronze
              </button>
            </div>
          </div>

          {/* Silver Package */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Silver Package
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Starting from <span className="font-bold">350 OMR -</span>
              </p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Dynamic website (including CMS for content management)</li>
                <li>Modern and attractive design</li>
                <li>Home page with image slider, company intro, and featured products</li>
                <li>About Us page</li>
                <li>Contact Us page with form</li>
                <li>Responsive design for all devices</li>
                <li>Payment gateway integration (e.g., from Amana.net)</li>
                <li>Bilingual (Arabic and English)</li>
                <li>Modern section design</li>
                <li>Domain name registration (.com, .net, .org)</li>
                <li>Hosting plan (official email) on US servers</li>
                <li>SSL certificate</li>
                <li>Android web application</li>
                <li>Email notification system for customer and merchant</li>
                <li>Improved main section design</li>
                <li>SEO optimization</li>
                <li>WhatsApp notification feature for admin</li>
                <li>6 months of technical support</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Website design within 1 month from receiving complete data.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Annual renewal (hosting and domain): 65 OMR (responsibility of the store owner)
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 text-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                Choose Silver
              </button>
            </div>
          </div>

          {/* Gold Package */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Gold Package
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Starting from <span className="font-bold">400 OMR -</span>
              </p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Dynamic website (including CMS for content management)</li>
                <li>Modern and attractive design</li>
                <li>Home page with image slider, company intro, and featured products</li>
                <li>About Us page</li>
                <li>Contact Us page with form</li>
                <li>Responsive design for all devices</li>
                <li>Payment gateway integration (e.g., from Amana.net)</li>
                <li>Bilingual (Arabic and English)</li>
                <li>Modern section design</li>
                <li>Domain name registration (.com, .net, .org)</li>
                <li>Hosting plan (official email) on US servers</li>
                <li>SSL certificate</li>
                <li>Android web application</li>
                <li>Email notification system for customer and merchant</li>
                <li>WhatsApp integration (programming & activation fees only)</li>
                <li>Aramex integration</li>
                <li>International shipping</li>
                <li>Currency conversion</li>
                <li>1 year of technical support</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Website design within 1 month from receiving complete data.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Annual renewal (hosting and domain): 65 OMR (responsibility of the store owner)
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 text-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                Choose Gold
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ECommerce;