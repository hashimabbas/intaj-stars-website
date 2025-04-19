// pages/specialized-medical-software.tsx
"use client"; // Add this for client-side hooks like useLocale and useTranslations

import React from 'react';
import { useTranslations, useLocale } from 'next-intl'; // Import next-intl hooks
import {
  FaHospitalAlt,      // HIS
  FaNotesMedical,     // EMR/EHR
  FaClinicMedical,    // Outpatient Clinics
  FaFlask,            // LIS
  FaLaptopMedical,    // Medical Devices Integration
  FaXRay,             // RIS
  FaCapsules,         // Pharmacy
  FaBrain             // AI Module
} from 'react-icons/fa';

const SpecializedMedicalSoftware = () => {
  const t = useTranslations('specializedMedicalSoftware'); // Initialize translations for this namespace
  const locale = useLocale(); // Get current locale

  // Updated structure to include translation keys and icons
  const softwareAreas = [
    { nameKey: "areaHIS", descriptionKey: "descriptionHIS", icon: FaHospitalAlt },
    { nameKey: "areaEMR", descriptionKey: "descriptionEMR", icon: FaNotesMedical },
    { nameKey: "areaOutpatient", descriptionKey: "descriptionOutpatient", icon: FaClinicMedical },
    { nameKey: "areaLIS", descriptionKey: "descriptionLIS", icon: FaFlask },
    { nameKey: "areaIntegration", descriptionKey: "descriptionIntegration", icon: FaLaptopMedical },
    { nameKey: "areaRIS", descriptionKey: "descriptionRIS", icon: FaXRay },
    { nameKey: "areaPharmacy", descriptionKey: "descriptionPharmacy", icon: FaCapsules },
    { nameKey: "areaAI", descriptionKey: "descriptionAI", icon: FaBrain }
  ];

  return (
    // Add dir attribute for RTL support based on locale
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'} className="bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-slate-800 min-h-screen py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 pb-2">
            {t('heroTitle')} {/* Use translated title */}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 lg:text-xl mb-8 max-w-3xl mx-auto">
            {t('heroDescription')} {/* Use translated description */}
          </p>
        </section>

        {/* Core Software Areas Section */}
        <section className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-12 text-center">
            {t('expertiseTitle')} {/* Use translated section title */}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {softwareAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-cyan-700/30 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out border-t-4 border-cyan-500 dark:border-cyan-400 flex flex-col items-center text-center p-8"
                >
                  <IconComponent className="text-5xl mb-5 text-cyan-600 dark:text-cyan-400" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2"> {/* Added margin bottom */}
                    {t(area.nameKey)} {/* Use translated area name */}
                  </h3>
                  {/* Uncomment and use translated description */}

                  <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm px-2"> {/* Added small padding for better text flow */}
                    {t(area.descriptionKey)} {/* Use translated area description */}
                  </p>

                </div>
              );
            })}
          </div>
        </section>

        {/* Other sections can be added and translated similarly */}

      </div>
    </div>
  );
};

export default SpecializedMedicalSoftware;