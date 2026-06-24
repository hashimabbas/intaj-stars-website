"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations, useLocale } from 'next-intl';


interface Customer {
  id: number;
  name: string;
  imageSrc: string;
  category: 'Medical' | 'E-commerce' | 'POS';
  countryCode: string;
}

const customersData: Customer[] = [
  { id: 1, name: 'Atwar Pro', imageSrc: '/customers/E-commerce/atwar_store.png', category: 'E-commerce', countryCode: 'om' },
  { id: 2, name: 'Blushia Beauty', imageSrc: '/customers/E-commerce/blushia_beauty.png', category: 'E-commerce', countryCode: 'om' },
  { id: 3, name: 'boatyk-t7', imageSrc: '/customers/E-commerce/boatyk-t7.png', category: 'E-commerce', countryCode: 'om' },
  { id: 4, name: 'Crave Beauty', imageSrc: '/customers/E-commerce/crave_beauty.png', category: 'E-commerce', countryCode: 'om' },
  { id: 5, name: 'de logo', imageSrc: '/customers/E-commerce/de_logo.jpg', category: 'E-commerce', countryCode: 'om' },
  { id: 6, name: 'Funkey Store', imageSrc: '/customers/E-commerce/funkey_store.png', category: 'E-commerce', countryCode: 'om' },
  { id: 7, name: 'Glow Line', imageSrc: '/customers/E-commerce/glow-line.png', category: 'E-commerce', countryCode: 'om' },
  { id: 8, name: 'Ladies', imageSrc: '/customers/E-commerce/ladies.png', category: 'E-commerce', countryCode: 'om' },
  { id: 9, name: 'Melyar', imageSrc: '/customers/E-commerce/melyar.png', category: 'E-commerce', countryCode: 'om' },
  { id: 10, name: 'Moroccan Store', imageSrc: '/customers/E-commerce/moroccan store.jpg', category: 'E-commerce', countryCode: 'om' },
  { id: 11, name: 'My Shoes', imageSrc: '/customers/E-commerce/my_shoes.png', category: 'E-commerce', countryCode: 'om' },
  { id: 12, name: 'Noon Perfume', imageSrc: '/customers/E-commerce/noon_perfume.png', category: 'E-commerce', countryCode: 'om' },
  { id: 13, name: 'Organic Store', imageSrc: '/customers/E-commerce/Organic_Store.jpg', category: 'E-commerce', countryCode: 'om' },
  { id: 14, name: 'Panoor', imageSrc: '/customers/E-commerce/panoor.png', category: 'E-commerce', countryCode: 'om' },
  { id: 15, name: 'Presteeg', imageSrc: '/customers/E-commerce/presteeg.png', category: 'E-commerce', countryCode: 'om' },
  { id: 16, name: 'Shams', imageSrc: '/customers/E-commerce/shams.png', category: 'E-commerce', countryCode: 'om' },
  { id: 17, name: 'Smoooer Skincare', imageSrc: '/customers/E-commerce/smoooer-skincare.png', category: 'E-commerce', countryCode: 'om' },
  { id: 18, name: 'Sts5irt', imageSrc: '/customers/E-commerce/Sts5irt.png', category: 'E-commerce', countryCode: 'om' },
  { id: 19, name: 'Talqi', imageSrc: '/customers/E-commerce/Talqi.png', category: 'E-commerce', countryCode: 'om' },
  { id: 20, name: 'bohome', imageSrc: '/customers/POS/bohome.jpeg', category: 'POS', countryCode: 'om' },
  { id: 21, name: 'for-you', imageSrc: '/customers/POS/for-you.jpeg', category: 'POS', countryCode: 'om' },
  { id: 22, name: 'Cotton&Velvet', imageSrc: '/customers/POS/cotton_velvet.jpeg', category: 'POS', countryCode: 'om' },
  { id: 23, name: 'Al-Awafi Medical Center', imageSrc: '/customers/medical/Screenshot 2025-03-02 144017.png', category: 'Medical', countryCode: 'OM' },
  { id: 24, name: 'Tawakl Medical Center', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'OM' },
  { id: 25, name: 'Al-Roumi Medical Center', imageSrc: '/customers/medical/alroomy.jpg', category: 'Medical', countryCode: 'SD' },
  { id: 26, name: 'Al-Tihami Medical Center', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 27, name: 'German Medical Center', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 28, name: "Al-Jami'a Neighborhood Center", imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 29, name: 'Al-Mahdawi Diagnostic Center', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 30, name: 'Al-Shadwan Medical Center', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 31, name: 'Markaz Al-Tihami Al-Iskan', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 32, name: 'Muzaynah Medical Complex', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 33, name: 'Alpha Lab Care Laboratory', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 34, name: 'Jadan Medical Complex', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 35, name: 'Abu Al-Ola Hospital Laboratory', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 36, name: "Abu Najla' Center", imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 37, name: 'Al-Wessam Medical Complex', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 38, name: 'Al-Rimah Medical Complex', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 39, name: 'Dorra Clinics Complex', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 40, name: "Dr. Abdullah's Laboratory", imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 41, name: 'Royal Lab (Nyala) Laboratory', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 42, name: 'Al-Risala Medical Center', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 43, name: 'Al-Araki Hospital', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 44, name: 'Al-Mumayaz Lab', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 45, name: 'Al-Rawan Medical Lab', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 46, name: 'Al-Ghazali Medical Complex', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 47, name: 'Tariq Aziz Center 1', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 48, name: 'Tariq Aziz Center 2', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 49, name: 'Tariq Aziz Center 3', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 50, name: 'Sheikh Khaled Complex', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 51, name: 'Aaliyah Complex 1', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 52, name: 'Aaliyah Complex 2', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
  { id: 53, name: 'ROLAKO Center', imageSrc: '/customers/medical/doctor-6029079_1280.png', category: 'Medical', countryCode: 'SD' },
];

const tabsData = [
  { key: 'Medical' as const, labelKey: 'tabMedical' },
  { key: 'E-commerce' as const, labelKey: 'tabEcommerce' },
  { key: 'POS' as const, labelKey: 'tabPOS' },
];

type TabKey = (typeof tabsData)[number]['key'];

const CustomerCard = ({ customer, t }: { customer: Customer; t: (key: string, params?: any) => string }) => (
  <div className="group flex-shrink-0 w-[130px] md:w-[150px]">
    <div className="flex flex-col items-center gap-2 p-3 bg-white dark:bg-gray-800/60 rounded-xl border border-gray-200/60 dark:border-gray-700/50 shadow-sm hover:shadow-lg hover:border-blue-200/50 dark:hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
      <div className="w-full h-[65px] flex items-center justify-center">
        <Image
          src={customer.imageSrc}
          alt={t('customerLogoAlt', { customerName: customer.name })}
          width={100}
          height={55}
          className="object-contain w-full h-full transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400 text-center leading-tight truncate w-full group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
        {customer.name}
      </span>
    </div>
  </div>
);

const OurCustomers = () => {
  const t = useTranslations('ourCustomers');
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState<TabKey>('Medical');
  const [mounted, setMounted] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => { setMounted(true); }, []);

  const filteredCustomers = customersData.filter((c) => c.category === activeTab);
  const counts = {
    Medical: customersData.filter((c) => c.category === 'Medical').length,
    'E-commerce': customersData.filter((c) => c.category === 'E-commerce').length,
    POS: customersData.filter((c) => c.category === 'POS').length,
  };

  if (!mounted) return null;

  return (
    <motion.section
      className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      ref={ref}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
            {t('heading')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-5 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            {locale === 'ar'
              ? 'نفخر بثقة أكثر من ٥٠ عميلاً في مختلف المجالات'
              : 'Trusted by 50+ leading businesses across diverse industries'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-8 md:gap-12 mb-8"
        >
          {tabsData.map((tab) => (
            <div key={tab.key} className="text-center">
              <span className="block text-2xl md:text-3xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {counts[tab.key]}+
              </span>
              <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
                {t(tab.labelKey)}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex gap-1 p-1.5 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
            {tabsData.map((tab) => (
              <button
                key={tab.key}
                className={`relative px-5 py-2.5 text-sm font-medium rounded-xl transition-colors duration-300 ${
                  activeTab === tab.key
                    ? 'text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg shadow-blue-500/25"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t(tab.labelKey)}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-5"
          >
            <div dir="ltr" className="group flex overflow-hidden [--gap:1.25rem] [--duration:50s] [gap:var(--gap)] [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
              {Array(4).fill(0).map((_, i) => (
                <div
                  key={i}
                  className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]"
                >
                  {filteredCustomers.map((customer) => (
                    <CustomerCard key={customer.id} customer={customer} t={t} />
                  ))}
                </div>
              ))}
            </div>

            <div dir="ltr" className="group flex overflow-hidden [--gap:1.25rem] [--duration:55s] [gap:var(--gap)] [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
              {Array(4).fill(0).map((_, i) => (
                <div
                  key={i}
                  className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] [animation-direction:reverse]"
                >
                  {filteredCustomers.map((customer) => (
                    <CustomerCard key={customer.id} customer={customer} t={t} />
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default OurCustomers;
