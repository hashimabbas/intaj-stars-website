// Assuming this file is something like: src/app/[locale]/pos-solutions/page.tsx
"use client"; // Required for hooks

import POSService from '@/src/app/[locale]/components/services/POSService'; // Adjust path if necessary
import React from 'react';
import { useTranslations, useLocale } from 'next-intl'; // Import hooks

const POSPage = () => { // Renamed component from 'page' to 'POSPage' for clarity
  const t = useTranslations('posPage'); // Use the namespace for this page
  const locale = useLocale(); // Get current locale

  return (
    // Add dir attribute for RTL support
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'} className='mt-36'>
      <POSService
        // Pass the translated strings as props
        title={t('serviceTitle')}
        description={t('serviceDescription')}
      />
    </div>
  );
};

export default POSPage; // Export the renamed component