// components/POSService.tsx
"use client"; // Required for hooks

import Image from 'next/image';
import React from 'react';
import { useTranslations, useLocale } from 'next-intl'; // Import hooks

interface POSServiceProps {
  // These props are expected to be already translated by the parent component
  title: string;
  description: string;
}

const POSService: React.FC<POSServiceProps> = ({ title, description }) => {
  // Hooks for translating internal strings (alt texts)
  const t = useTranslations('posServiceComponent');
  const locale = useLocale();

  return (
    // Add dir for potential independent styling needs, though likely inherited
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'} className="rounded-xl shadow-xl overflow-hidden m-8 transition-shadow duration-300 hover:shadow-2xl">
      <div className="p-8">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 text-center">
          {/* Title is passed as a prop (already translated by parent) */}
          {title}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
          {/* Description is passed as a prop (already translated by parent) */}
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="flex justify-center items-center rounded-xl overflow-hidden">
            <Image
              src="/services/pos/image-1.jpeg"
              alt={t('altFeature1')} // Use translated alt text
              width={500}
              height={333}
              style={{ objectFit: "scale-down" }}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex justify-center items-center rounded-xl overflow-hidden">
            <Image
              src="/services/pos/image-2.jpeg"
              alt={t('altFeature2')} // Use translated alt text
              width={500}
              height={333}
              style={{ objectFit: "scale-down" }}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex justify-center items-center rounded-xl overflow-hidden lg:col-span-1 md:col-span-2">
            <Image
              src="/services/pos/image-3.jpeg"
              alt={t('altFeature3')} // Use translated alt text
              width={500}
              height={333}
              style={{ objectFit: "scale-down" }}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSService;