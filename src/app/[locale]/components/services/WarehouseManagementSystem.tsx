// pages/warehouse-management-system.tsx (or your preferred location)
"use client"; // Required for hooks

import React from 'react';
import { useTranslations, useLocale } from 'next-intl'; // Import hooks
import {
  FaWarehouse,        // WMS (Overall)
  FaTruckLoading,     // Receiving
  FaDollyFlatbed,     // Putaway
  FaBoxes,            // Inventory Management
  FaShippingFast,     // Issuing & Dispatch
  FaLink,             // Integration
  FaChartBar          // Reports & Analytics
} from 'react-icons/fa';

const WarehouseManagementSystem = () => {
  const t = useTranslations('warehouseManagementSystem'); // Use namespace
  const locale = useLocale(); // Get current locale

  // Updated structure to use translation keys
  const wmsModules = [
    { nameKey: "moduleWMS", descriptionKey: "descriptionWMS", icon: FaWarehouse },
    { nameKey: "moduleReceiving", descriptionKey: "descriptionReceiving", icon: FaTruckLoading },
    { nameKey: "modulePutaway", descriptionKey: "descriptionPutaway", icon: FaDollyFlatbed },
    { nameKey: "moduleInventory", descriptionKey: "descriptionInventory", icon: FaBoxes },
    { nameKey: "moduleDispatch", descriptionKey: "descriptionDispatch", icon: FaShippingFast },
    { nameKey: "moduleIntegration", descriptionKey: "descriptionIntegration", icon: FaLink },
    { nameKey: "moduleReports", descriptionKey: "descriptionReports", icon: FaChartBar }
  ];

  return (
    // Add dir attribute for RTL support
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'} className="bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-slate-800 min-h-screen py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 pb-2">
            {t('heroTitle')} {/* Translated */}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 lg:text-xl mb-8 max-w-3xl mx-auto">
            {t('heroDescription')} {/* Translated */}
          </p>
        </section>

        {/* Core WMS Modules Section */}
        <section className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-12 text-center">
            {t('modulesTitle')} {/* Translated */}
          </h2>
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wmsModules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-cyan-700/30 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out border-t-4 border-cyan-500 dark:border-cyan-400 flex flex-col items-center text-center p-8"
                >
                  <IconComponent className="text-5xl mb-5 text-cyan-600 dark:text-cyan-400" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2"> {/* Added margin bottom */}
                    {t(module.nameKey)} {/* Translated Module Name */}
                  </h3>
                  {/* Uncomment and use translated description if needed */}

                  <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm px-2"> {/* Added slight padding */}
                    {t(module.descriptionKey)} {/* Translated Description */}
                  </p>

                </div>
              );
            })}
          </div>
        </section>

        {/* Placeholder for potential future sections */}
        {/*
        <section className="mt-24 mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
            // Example: t('benefitsTitle')
          </h2>
          // Benefits list or grid could go here
        </section>
        */}

      </div>
    </div>
  );
};

export default WarehouseManagementSystem;