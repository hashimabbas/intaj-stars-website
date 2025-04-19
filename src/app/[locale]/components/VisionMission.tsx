"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useTranslations, useLocale } from 'next-intl'; // Import next-intl hooks

interface TabContentKeys { // Optional: Interface for keys if needed, but direct use is simpler here
  about: string;
  mission: string;
  vision: string;
}

export default function VisionMission() {
  const t = useTranslations('visionMission'); // Initialize translations with a namespace
  const locale = useLocale(); // Get the current locale

  const [activeTab, setActiveTab] = useState<'about' | 'mission' | 'vision'>('about');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // No need for the hardcoded tabContent object anymore
  // const tabContent: TabContent = { ... };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    return null; // Still useful for preventing hydration mismatch with useTheme
  }

  // Define the keys for the tab content directly
  const tabKeys: TabContentKeys = {
    about: 'aboutContent',
    mission: 'missionContent',
    vision: 'visionContent',
  };


  return (
    <section className="py-16 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Add dir attribute based on locale for proper RTL/LTR layout */}
        <div className="lg:flex lg:items-center lg:justify-between" dir={locale === 'ar' ? 'rtl' : 'ltr'}>

          {/* Image Section - No text changes needed here */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative aspect-w-16 aspect-h-9 h-full">
              <Image
                src="/logo-removebg-preview.png"
                alt="Company Logo" // Consider translating alt text if needed: t('logoAlt')
                className="rounded-2xl shadow-xl object-cover"
                height={400}
                width={600}
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Content Section */}
          {/* Adjust padding for RTL: lg:pl-8 becomes lg:pr-8 */}
          <div className={`w-full lg:w-1/2 ${locale === 'ar' ? 'lg:pr-8' : 'lg:pl-8'} mt-4 lg:mt-0`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                {t('heading')} {/* Translate heading */}
              </h2>
            </div>

            {/* Adjust margins for RTL: mr-4 becomes ml-4 */}
            <div className="flex flex-wrap items-center justify-start mb-6 border-b border-gray-200 dark:border-gray-700">
              <button
                className={`px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors duration-200 border-b-2 border-transparent ${activeTab === 'about' ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400' : ''
                  } ${locale === 'ar' ? 'ml-4' : 'mr-4'} mb-2`}
                onClick={() => setActiveTab('about')}
              >
                {t('tabAbout')} {/* Translate tab button */}
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors duration-200 border-b-2 border-transparent ${activeTab === 'mission' ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400' : ''
                  } ${locale === 'ar' ? 'ml-4' : 'mr-4'} mb-2`}
                onClick={() => setActiveTab('mission')}
              >
                {t('tabMission')} {/* Translate tab button */}
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors duration-200 border-b-2 border-transparent ${activeTab === 'vision' ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400' : ''
                  } mb-2`}
                onClick={() => setActiveTab('vision')}
              >
                {t('tabVision')} {/* Translate tab button */}
              </button>
            </div>

            <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-lg transition-colors duration-300">
              {/* Use the activeTab state directly as the key suffix */}
              {t(tabKeys[activeTab])}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}