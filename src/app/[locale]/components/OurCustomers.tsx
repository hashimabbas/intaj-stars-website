// components/OurCustomers.tsx
"use client";
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useTranslations, useLocale } from 'next-intl'; // Import next-intl hooks

interface Customer {
  id: number;
  name: string; // Keep customer names as they are (proper nouns)
  imageSrc: string;
  category: 'Medical' | 'E-commerce' | 'POS';
  countryCode: string;
}

// Static customer data - Names usually remain untranslated
const customersData: Customer[] = [
  {
    id: 1,
    name: 'Atwar Pro',
    imageSrc: '/customers/E-commerce/atwar_store.png',
    category: 'E-commerce',
    countryCode: 'om', // Example Saudi Arabia
  },
  {
    id: 2,
    name: 'Blushia Beauty',
    imageSrc: '/customers/E-commerce/blushia_beauty.png',
    category: 'E-commerce',
    countryCode: 'om', // Example: United States
  },
  {
    id: 3,
    name: 'boatyk-t7',
    imageSrc: '/customers/E-commerce/boatyk-t7.png',
    category: 'E-commerce',
    countryCode: 'om', // Example: United Kingdom
  },
  {
    id: 4,
    name: 'Crave Beauty',
    imageSrc: '/customers/E-commerce/crave_beauty.png',
    category: 'E-commerce',
    countryCode: 'om', // Example: Canada
  },
  {
    id: 5,
    name: 'de logo',
    imageSrc: '/customers/E-commerce/de_logo.jpg',
    category: 'E-commerce',
    countryCode: 'om', // Example: Germany
  },
  {
    id: 6,
    name: 'Funkey Store',
    imageSrc: '/customers/E-commerce/funkey_store.png',
    category: 'E-commerce',
    countryCode: 'om', // Example: France
  },

  {
    id: 7,
    name: 'Glow Line',
    imageSrc: '/customers/E-commerce/glow-line.png',
    category: 'E-commerce',
    countryCode: 'om', // Example: Australia
  },
  {
    id: 8,
    name: 'Ladies',
    imageSrc: '/customers/E-commerce/ladies.png',
    category: 'E-commerce',
    countryCode: 'om', // Example: Italy
  },
  {
    id: 9,
    name: 'Melyar',
    imageSrc: '/customers/E-commerce/melyar.png',
    category: 'E-commerce',
    countryCode: 'om', // Example: Spain
  },
  {
    id: 10,
    name: 'Moroccan Store',
    imageSrc: '/customers/E-commerce/moroccan store.jpg',
    category: 'E-commerce',
    countryCode: 'om', // Example: Morocco
  },
  {
    id: 11,
    name: 'My Shoes',
    imageSrc: '/customers/E-commerce/my_shoes.png',
    category: 'E-commerce',
    countryCode: 'om', // Example: Japan
  },
  {
    id: 12,
    name: 'Noon Perfume',
    imageSrc: '/customers/E-commerce/noon_perfume.png',
    category: 'E-commerce',
    countryCode: 'om', // Example: United Arab Emirates
  },
  {
    id: 13,
    name: 'Organic Store',
    imageSrc: '/customers/E-commerce/Organic_Store.jpg',
    category: 'E-commerce',
    countryCode: 'om', // Example: Brazil
  },
  {
    id: 14,
    name: 'Panoor',
    imageSrc: '/customers/E-commerce/panoor.png',
    category: 'E-commerce',
    countryCode: 'om', // Example: Turkey
  },
  {
    id: 15,
    name: 'Presteeg',
    imageSrc: '/customers/E-commerce/presteeg.png',
    category: 'E-commerce',
    countryCode: 'om', // Example: India
  },

  {
    id: 16,
    name: 'Shams',
    imageSrc: '/customers/E-commerce/shams.png',
    category: 'E-commerce',
    countryCode: 'om', // Example: Nigeria
  },
  {
    id: 17,
    name: 'Smoooer Skincare',
    imageSrc: '/customers/E-commerce/smoooer-skincare.png',
    category: 'E-commerce',
    countryCode: 'om', // Example: South Africa
  },
  {
    id: 18,
    name: 'Sts5irt',
    imageSrc: '/customers/E-commerce/Sts5irt.png',
    category: 'E-commerce',
    countryCode: 'om', // Example: Mexico
  },
  {
    id: 19,
    name: 'Talqi',
    imageSrc: '/customers/E-commerce/Talqi.png',
    category: 'E-commerce',
    countryCode: 'om',
  },
  {
    id: 20,
    name: 'bohome',
    imageSrc: '/customers/POS/bohome.jpeg',
    category: 'POS',
    countryCode: 'om',
  },
  {
    id: 21,
    name: 'for-you',
    imageSrc: '/customers/POS/for-you.jpeg',
    category: 'POS',
    countryCode: 'om',
  },
  {
    id: 22,
    name: 'Cotton&Velvet',
    imageSrc: '/customers/POS/cotton_velvet.jpeg',
    category: 'POS',
    countryCode: 'om',
  },
  {
    id: 23,
    name: 'Al-Awafi Medical Center',
    imageSrc: '/customers/medical/Screenshot 2025-03-02 144017.png',
    category: 'Medical',
    countryCode: 'OM',
  },
  {
    id: 24,
    name: 'Tawakl Medical Center',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'OM',
  },
  {
    id: 25,
    name: 'Al-Roumi Medical Center',
    imageSrc: '/customers/medical/alroomy.jpg',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 26,
    name: 'Al-Tihami Medical Center',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },

  {
    id: 27,
    name: 'German Medical Center',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 28,
    name: "Al-Jami'a Neighborhood Center",
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 29,
    name: 'Al-Mahdawi Diagnostic Center',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 30,
    name: 'Al-Shadwan Medical Center',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 31,
    name: 'Markaz Al-Tihami Al-Iskan',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 32,
    name: 'Muzaynah Medical Complex',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 33,
    name: 'Alpha Lab Care Laboratory',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 34,
    name: 'Jadan Medical Complex',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 35,
    name: 'Abu Al-Ola Hospital Laboratory',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 36,
    name: "Abu Najla' Center",
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 37,
    name: 'Al-Wessam Medical Complex',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 38,
    name: 'Al-Rimah Medical Complex',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 39,
    name: 'Dorra Clinics Complex',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 40,
    name: "Dr. Abdullah's Laboratory",
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 41,
    name: 'Royal Lab (Nyala) Laboratory',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 42,
    name: 'Al-Risala Medical Center',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 43,
    name: ' Al-Araki Hospital',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 44,
    name: ' Al-Mumayaz Lab',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 45,
    name: 'Al-Rawan Medical Lab',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 46,
    name: 'Al-Ghazali Medical Complex',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 47,
    name: 'Tariq Aziz Center 1',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 48,
    name: 'Tariq Aziz Center 2',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 49,
    name: 'Tariq Aziz Center 2',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 50,
    name: 'Tariq Aziz Center 3',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 51,
    name: 'Sheikh Khaled Complex',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 52,
    name: 'Aaliyah Complex 1',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 53,
    name: 'Aaliyah Complex 2',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  {
    id: 54,
    name: 'ROLAKO Center',
    imageSrc: '/customers/medical/doctor-6029079_1280.png',
    category: 'Medical',
    countryCode: 'SD',
  },
  // Add more customers as needed
];

// Define tab structure for easier translation and management
const tabsData = [
  { key: 'Medical', labelKey: 'tabMedical' },
  { key: 'E-commerce', labelKey: 'tabEcommerce' },
  { key: 'POS', labelKey: 'tabPOS' },
] as const; // Use 'as const' for stricter typing

type TabKey = typeof tabsData[number]['key']; // 'Medical' | 'E-commerce' | 'POS'

const OurCustomers = () => {
  const t = useTranslations('ourCustomers'); // Initialize translations
  const locale = useLocale(); // Get current locale

  const [activeTab, setActiveTab] = useState<TabKey>('Medical');
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredCustomers = customersData.filter((customer) => customer.category === activeTab);

  // Adjust scroll direction based on locale
  const scrollPrevious = () => {
    if (containerRef.current) {
      const scrollAmount = locale === 'ar' ? 300 : -300; // Right for RTL, Left for LTR
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (containerRef.current) {
      const scrollAmount = locale === 'ar' ? -300 : 300; // Left for RTL, Right for LTR
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };


  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  // Determine arrow icons based on locale for logical direction
  const PreviousIcon = locale === 'ar' ? IoIosArrowForward : IoIosArrowBack;
  const NextIcon = locale === 'ar' ? IoIosArrowBack : IoIosArrowForward;

  return (
    <motion.section
      className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      dir={locale === 'ar' ? 'rtl' : 'ltr'} // Set text direction
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-8">
          {t('heading')} {/* Translate heading */}
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          {tabsData.map((tabInfo) => (
            <motion.button
              key={tabInfo.key}
              className={`px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-full mb-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500
                ${locale === 'ar' ? 'ml-2' : 'mr-2'} {/* Adjust margin for RTL */}
                ${activeTab === tabInfo.key ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
              onClick={() => setActiveTab(tabInfo.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t(tabInfo.labelKey)} {/* Translate tab label */}
            </motion.button>
          ))}
        </div>

        {/* Customer Cards */}
        <div className="relative">
          {/* Previous Button */}
          <button
            aria-label={t('scrollPreviousLabel')} // Accessibility label
            className={`absolute ${locale === 'ar' ? 'right-0' : 'left-0'} top-1/2 z-10 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-700 dark:bg-gray-800 dark:bg-opacity-75 dark:hover:bg-opacity-100 dark:text-gray-300 p-2 rounded-full shadow focus:outline-none`}
            onClick={scrollPrevious}
          >
            <PreviousIcon size={24} />
          </button>
          {/* Next Button */}
          <button
            aria-label={t('scrollNextLabel')} // Accessibility label
            className={`absolute ${locale === 'ar' ? 'left-0' : 'right-0'} top-1/2 z-10 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-700 dark:bg-gray-800 dark:bg-opacity-75 dark:hover:bg-opacity-100 dark:text-gray-300 p-2 rounded-full shadow focus:outline-none`}
            onClick={scrollNext}
          >
            <NextIcon size={24} />
          </button>

          <div
            className="flex overflow-x-auto space-x-6 snap-x snap-mandatory scroll-smooth py-4 scrollbar-hide" // Added scrollbar-hide (install tailwind-scrollbar-hide if needed)
            ref={containerRef}
            style={{ direction: 'ltr' }} // Keep visual scroll direction LTR even in RTL for consistency
          >
            <AnimatePresence initial={false}> {/* Set initial={false} for better exit/enter animation on tab change */}
              {filteredCustomers.map((customer, index) => (
                <motion.div
                  key={`${activeTab}-${customer.id}`} // Ensure key changes when tab changes for re-animation
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden snap-center shrink-0 w-64 sm:w-72 md:w-80"
                  layout // Animate layout changes
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, type: 'spring', stiffness: 150, damping: 20 }}
                >
                  <Image
                    src={customer.imageSrc}
                    // Translate alt text using customer name
                    alt={t('customerLogoAlt', { customerName: customer.name })}
                    width={600}
                    height={400}
                    className="object-cover w-full h-48"
                    style={{ objectFit: 'cover' }} // Ensure consistency
                    priority={index < 3} // Prioritize loading first few images
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {customer.name}
                      <Image
                        src={`/flags/${customer.countryCode.toLowerCase()}.svg`}
                        // Translate flag alt text
                        alt={t('countryFlagAlt', { countryCode: customer.countryCode.toUpperCase() })}
                        width={24}
                        height={16}
                        style={{
                          display: 'inline-block',
                          verticalAlign: 'middle',
                          // Adjust margin for RTL
                          marginInlineStart: '8px', // Use logical property for margin
                          objectFit: 'contain',
                        }}
                      />
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurCustomers;