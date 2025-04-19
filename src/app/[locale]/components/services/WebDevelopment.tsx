// pages/web-development.tsx
"use client"; // Required for hooks

import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl'; // Import hooks

const WebDevelopment = () => {
  const t = useTranslations('webDevelopment'); // Use namespace
  const locale = useLocale(); // Get current locale

  // Get list data from translations
  const customWebListItems = t.raw('customWebList') as string[];
  const webAppListItems = t.raw('webAppList') as string[];
  const approachSteps = t.raw('approachSteps') as { term: string; desc: string }[];

  return (
    // Add dir attribute for RTL support
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'} className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
            {t('heroTitle')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 lg:text-lg mb-8">
            {t('heroDescription')}
          </p>
        </section>

        {/* Custom Website Development */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          {/* Text Content */}
          <div className={`order-2 ${locale === 'ar' ? 'md:order-2' : 'md:order-1'}`}> {/* Adjust order for RTL */}
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              {t('customWebTitle')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('customWebDescription')}
            </p>
            <ul className={`list-disc ${locale === 'ar' ? 'pr-6' : 'pl-6'} text-gray-600 dark:text-gray-400`}> {/* Adjust padding for RTL */}
              {customWebListItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Image */}
          <div className={`order-1 ${locale === 'ar' ? 'md:order-1' : 'md:order-2'}`}> {/* Adjust order for RTL */}
            <Image
              src="/services/program-6944163_1280.jpg" // Keep your image source
              alt={t('customWebAltText')} // Use translated alt text
              width={800}
              height={600}
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Web Application Development */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          {/* Image */}
          <div className={`${locale === 'ar' ? 'order-1 md:order-2' : 'order-1 md:order-1'}`}> {/* Adjust order for RTL */}
            <Image
              src="/services/Web_Development.png" // Keep your image source
              alt={t('webAppAltText')} // Use translated alt text
              width={800}
              height={600}
              className="rounded-xl shadow-lg"
            />
          </div>
          {/* Text Content */}
          <div className={`${locale === 'ar' ? 'order-2 md:order-1' : 'order-2 md:order-2'}`}> {/* Adjust order for RTL */}
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              {t('webAppTitle')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('webAppDescription')}
            </p>
            <ul className={`list-disc ${locale === 'ar' ? 'pr-6' : 'pl-6'} text-gray-600 dark:text-gray-400`}> {/* Adjust padding for RTL */}
              {webAppListItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
            {t('techTitle')}
          </h2>
          {/* Tech names usually untranslated */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Technology Spans remain the same */}
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
            {t('approachTitle')}
          </h2>
          <ol className={`list-decimal ${locale === 'ar' ? 'pr-6' : 'pl-6'} text-gray-600 dark:text-gray-400 space-y-3`}> {/* Adjust padding for RTL */}
            {approachSteps.map((step, index) => (
              <li key={index}>
                <strong>{step.term}:</strong> {step.desc}
              </li>
            ))}
          </ol>
        </section>

      </div>
    </div>
  );
};

export default WebDevelopment;