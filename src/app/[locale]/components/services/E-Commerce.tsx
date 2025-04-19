// pages/ecommerce.tsx
"use client"; // Required for hooks

import React from 'react';
import { useTranslations, useLocale } from 'next-intl'; // Import hooks

const ECommerce = () => {
  const t = useTranslations('ecommerce'); // Use namespace
  const locale = useLocale(); // Get current locale

  // Helper function to render a package card
  const renderPackage = (packageKey: 'bronzePackage' | 'silverPackage' | 'goldPackage') => {
    const features = t.raw(`${packageKey}.features`) as string[];
    const price = t(`${packageKey}.price`);
    const currency = t(`${packageKey}.currency`);
    const renewalPrice = t(`${packageKey}.renewalPrice`);

    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            {t(`${packageKey}.title`)}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {t(`${packageKey}.pricePrefix`)} <span className="font-bold">{price} {currency} - </span>
          </p>
          <ul className={`list-disc ${locale === 'ar' ? 'pr-5' : 'pl-5'} text-gray-600 dark:text-gray-400 space-y-2`}> {/* Adjust padding */}
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            {t(`${packageKey}.deliveryTime`)}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {t(`${packageKey}.renewalInfo`)} {renewalPrice} {currency} {t(`${packageKey}.renewalResponsibility`)}
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 text-center">
          {/* Keep WhatsApp link as is, translate button text */}
          <a href='https://wa.me/96893534933' target='_blank' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
            {t(`${packageKey}.chooseButton`)}
          </a>
        </div>
      </div>
    );
  };

  return (
    // Add dir attribute
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
          {/* Keep WhatsApp link as is, translate button text */}
          <a href='https://wa.me/96893534933' target='_blank' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            {t('heroContactButton')}
          </a>
        </section>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderPackage('bronzePackage')}
          {renderPackage('silverPackage')}
          {renderPackage('goldPackage')}
        </div>

      </div>
    </div>
  );
};

export default ECommerce;