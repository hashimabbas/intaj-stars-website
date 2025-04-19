// pages/rfid-solutions.tsx
"use client"; // Required for hooks

import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl'; // Import hooks

const RfidSolutions = () => {
  const t = useTranslations('rfidSolutions'); // Use namespace
  const locale = useLocale(); // Get current locale

  // Get list data from translations
  const inventoryListItems = t.raw('inventoryList') as string[];
  const accessControlListItems = t.raw('accessControlList') as string[];
  const processSteps = t.raw('processSteps') as { term: string; desc: string }[];

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

        {/* RFID for Inventory & Asset Tracking */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          {/* Text Content */}
          <div className={`order-2 ${locale === 'ar' ? 'md:order-2' : 'md:order-1'}`}> {/* Adjust order for RTL */}
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              {t('inventoryTitle')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('inventoryDescription')}
            </p>
            <ul className={`list-disc ${locale === 'ar' ? 'pr-6' : 'pl-6'} text-gray-600 dark:text-gray-400`}> {/* Adjust padding for RTL */}
              {inventoryListItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Image */}
          <div className={`order-1 ${locale === 'ar' ? 'md:order-1' : 'md:order-2'}`}> {/* Adjust order for RTL */}
            <Image
              src="/services/rfid-inventory-tracking.jpeg" // Keep your image source
              alt={t('inventoryAltText')} // Use translated alt text
              width={800}
              height={600}
              className="rounded-xl shadow-lg object-cover h-80 md:h-auto"
            />
          </div>
        </section>

        {/* RFID for Access Control & Security */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          {/* Image */}
          <div className={`${locale === 'ar' ? 'order-1 md:order-2' : 'order-1 md:order-1'}`}> {/* Adjust order for RTL */}
            <Image
              src="/services/rfid-access-control.jpeg" // Keep your image source
              alt={t('accessControlAltText')} // Use translated alt text
              width={800}
              height={600}
              className="rounded-xl shadow-lg object-cover h-80 md:h-auto"
            />
          </div>
          {/* Text Content */}
          <div className={`${locale === 'ar' ? 'order-2 md:order-1' : 'order-2 md:order-2'}`}> {/* Adjust order for RTL */}
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              {t('accessControlTitle')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('accessControlDescription')}
            </p>
            <ul className={`list-disc ${locale === 'ar' ? 'pr-6' : 'pl-6'} text-gray-600 dark:text-gray-400`}> {/* Adjust padding for RTL */}
              {accessControlListItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Key Components of Our RFID Solutions */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
            {t('componentsTitle')}
          </h2>
          {/* Component names remain untranslated */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {/* Spans with component names are kept static */}
            <span className="bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-indigo-200 dark:hover:bg-indigo-700 transition-colors duration-200">
              RFID Tags (Passive/Active)
            </span>
            <span className="bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-teal-200 dark:hover:bg-teal-700 transition-colors duration-200">
              RFID Readers (Fixed/Handheld)
            </span>
            <span className="bg-cyan-100 dark:bg-cyan-800 text-cyan-800 dark:text-cyan-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-cyan-200 dark:hover:bg-cyan-700 transition-colors duration-200">
              Antennas & Portals
            </span>
            <span className="bg-rose-100 dark:bg-rose-800 text-rose-800 dark:text-rose-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-rose-200 dark:hover:bg-rose-700 transition-colors duration-200">
              Middleware Software
            </span>
            <span className="bg-amber-100 dark:bg-amber-800 text-amber-800 dark:text-amber-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-amber-200 dark:hover:bg-amber-700 transition-colors duration-200">
              Database Integration
            </span>
            <span className="bg-lime-100 dark:bg-lime-800 text-lime-800 dark:text-lime-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-lime-200 dark:hover:bg-lime-700 transition-colors duration-200">
              Cloud Platforms (AWS/Azure/GCP)
            </span>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 py-2 px-4 rounded-full font-semibold text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
              API Integration
            </span>
          </div>
        </section>

        {/* Our Implementation Process */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
            {t('processTitle')}
          </h2>
          <ol className={`list-decimal ${locale === 'ar' ? 'pr-6' : 'pl-6'} text-gray-600 dark:text-gray-400 space-y-3 max-w-3xl mx-auto`}> {/* Adjust padding for RTL */}
            {processSteps.map((step, index) => (
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

export default RfidSolutions;