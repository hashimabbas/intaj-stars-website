// pages/mobile-app-development.tsx
import React from 'react';
import Image from 'next/image';

const MobileAppDevelopment = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
            Mobile App Development by Intaj Stars
          </h1>
          <p className="text-gray-600 dark:text-gray-400 lg:text-lg mb-8">
            Transforming ideas into intuitive and powerful mobile experiences for iOS and Android.
          </p>
        </section>

        {/* Inquiry Applications */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Inquiry Applications
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Engage your audience with informative and interactive inquiry-based apps. Ideal for lead generation,
              market research, and educational purposes.
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
              <li>Interactive Questionnaires & Surveys</li>
              <li>Data Collection & Analytics</li>
              <li>User-Friendly Interface</li>
              <li>Multi-Platform Support (iOS & Android)</li>
              <li>Push Notifications for Engagement</li>
              <li>Real-time Feedback & Reporting</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/services/mobile-app.jpg" // Replace with your inquiry app image
              alt="Inquiry Applications"
              width={800}
              height={600}
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Functional Applications */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <Image
              src="/services/Mobile-App.png" // Replace with your functional app image
              alt="Functional Applications"
              width={800}
              height={600}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Functional Applications
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Empower your users with feature-rich functional apps designed to solve specific problems and
              enhance productivity. Custom solutions for business, e-commerce, utilities, and more.
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
              <li>Customized Features & Workflows</li>
              <li>Secure Data Handling & Authentication</li>
              <li>API Integration for Enhanced Functionality</li>
              <li>Offline Access & Data Synchronization</li>
              <li>Push Notifications & Real-time Updates</li>
              <li>Scalable & Maintainable Architecture</li>
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
              React Native
            </span>
            <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-green-200 dark:hover:bg-green-700 transition-colors duration-200">
              Swift (iOS)
            </span>
            <span className="bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-yellow-200 dark:hover:bg-yellow-700 transition-colors duration-200">
              Kotlin (Android)
            </span>
            <span className="bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-red-200 dark:hover:bg-red-700 transition-colors duration-200">
              Flutter
            </span>
            <span className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors duration-200">
              Firebase
            </span>
            <span className="bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-orange-200 dark:hover:bg-orange-700 transition-colors duration-200">
              Node.js (Backend)
            </span>
          </div>
        </section>

        {/* Our Approach */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
            Our Mobile App Development Approach
          </h2>
          <ol className="list-decimal pl-6 text-gray-600 dark:text-gray-400 space-y-3">
            <li>
              <strong>Discovery:</strong> Define your app concept, target audience, and business objectives.
            </li>
            <li>
              <strong>Planning:</strong> Detailed feature specifications, UI/UX design, and technology selection.
            </li>
            <li>
              <strong>Design:</strong> Wireframing, prototyping, and visual design to create an engaging user experience.
            </li>
            <li>
              <strong>Development:</strong> Agile development process with continuous integration and testing.
            </li>
            <li>
              <strong>Testing:</strong> Rigorous testing on multiple devices and operating systems.
            </li>
            <li>
              <strong>Deployment:</strong> App store submission and launch support.
            </li>
            <li>
              <strong>Maintenance:</strong> Ongoing support, updates, and performance optimization.
            </li>
          </ol>
        </section>

      </div>
    </div>
  );
};

export default MobileAppDevelopment;