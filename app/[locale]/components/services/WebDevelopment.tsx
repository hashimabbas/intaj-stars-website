// pages/web-development.tsx
import React from 'react';
import Image from 'next/image';

const WebDevelopment = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
            Elevate Your Business with Intaj Stars Web Development
          </h1>
          <p className="text-gray-600 dark:text-gray-400 lg:text-lg mb-8">
            Crafting digital experiences that drive results, leveraging the latest technologies and creative design.
          </p>
        </section>

        {/* Custom Website Development */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Custom Website Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Bespoke websites tailored to your business needs, reflecting your brand identity. Responsive, performant, and SEO-friendly.
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
              <li>Responsive & Aesthetic Design</li>
              <li>SEO optimization & Analytics</li>
              <li>Real-Time Updates with WebSockets</li>
              <li>Fast loading speeds</li>
              <li>Efficient Data & Content Management</li>
              <li>Enhanced Security & Data Protection</li>
              <li>Intuitive User Experience (UX)</li>
              <li>API Integration & Automation</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/services/program-6944163_1280.jpg"
              alt="Custom Website Development"
              width={800}
              height={600}
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Web Application Development */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <Image
              src="/services/Web_Development.png"
              alt="Web Application Development"
              width={800}
              height={600}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Web Application Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Robust and scalable web applications for diverse business needs. Custom CRM, project management, and data analysis tools.
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
              <li>Customized features and functionality</li>
              <li>Scalable & Secure Architecture</li>
              <li>Intuitive and User-Friendly Design</li>
              <li>API Integration for Enhanced Functionality</li>
            </ul>
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors duration-200">
              React
            </span>
            <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-green-200 dark:hover:bg-green-700 transition-colors duration-200">
              Node.js
            </span>
            <span className="bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-yellow-200 dark:hover:bg-yellow-700 transition-colors duration-200">
              JavaScript
            </span>
            <span className="bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-red-200 dark:hover:bg-red-700 transition-colors duration-200">
              TypeScript
            </span>
            <span className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors duration-200">
              Tailwind CSS
            </span>
            <span className="bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-orange-200 dark:hover:bg-orange-700 transition-colors duration-200">
              Laravel
            </span>
            <span className="bg-orange-100 dark:bg-orange-500 text-yellow-500 dark:text-orange-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-orange-200 dark:hover:bg-orange-700 transition-colors duration-200">
              ASP.net
            </span>
          </div>
        </section>

        {/* Our Approach */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
            Our Collaborative Approach
          </h2>
          <ol className="list-decimal pl-6 text-gray-600 dark:text-gray-400 space-y-3">
            <li>
              <strong>Discovery:</strong> Deep dive into your business, goals, and target audience.
            </li>
            <li>
              <strong>Planning:</strong> Meticulous project scoping, feature definition, and timeline creation.
            </li>
            <li>
              <strong>Design:</strong> User-centric design, visually appealing, and aligned with your brand.
            </li>
            <li>
              <strong>Development:</strong> Agile development, leveraging the right technologies for performance.
            </li>
            <li>
              <strong>Testing:</strong> Rigorous testing across devices to ensure a seamless experience.
            </li>
            <li>
              <strong>Deployment:</strong> Smooth launch and integration with your existing systems.
            </li>
            <li>
              <strong>Maintenance:</strong> Ongoing support, updates, and optimization for long-term success.
            </li>
          </ol>
        </section>

      </div>
    </div>
  );
};

export default WebDevelopment;