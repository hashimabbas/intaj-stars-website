// components/ValuesSection.tsx
"use client";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { TextAnimate } from "@/components/magicui/text-animate";
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl'; // Import next-intl hooks

// ValueCard Props: Now includes altText
interface ValueProps {
  icon: string;
  title: string;
  description: string;
  altText: string; // Added for translated alt text
}

// ValueCard Component: Receives translated props
const ValueCard: React.FC<ValueProps> = ({ icon, title, description, altText }) => {
  return (
    <div className="group relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 text-center">
      <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-blue-800 dark:to-purple-800"></div>
      </div>
      <div className="relative">
        <div className="mx-auto h-20 w-20 mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
          <Image
            src={icon}
            alt={altText} // Use the translated altText prop
            width={60}
            height={60}
            className="mx-auto"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

// IconCloud images - these usually don't need translation unless alt text is crucial
const images = [
  "/about.jpg",
  "/business-management.png",
  "/services/AI-Software-Development.jpg",
  "/services/Analytics-Platform.jpg",
  "/services/Medical-Device-Integration.jpg",
  "/services/Chatbot.png",
  "/services/Customer-Support-Software.png",
  "/services/Cyber-Security.jpg",
  "/services/E-commerce-Store.png"
];

// Structure defining keys for translation lookup
const valuesData = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/3106/3106859.png', // Innovation Icon
    titleKey: 'value1Title',
    descriptionKey: 'value1Description',
    altKey: 'value1Alt',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/3177/3177363.png', // Integrity Icon
    titleKey: 'value2Title',
    descriptionKey: 'value2Description',
    altKey: 'value2Alt',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/936/936451.png', // Collaboration Icon
    titleKey: 'value3Title',
    descriptionKey: 'value3Description',
    altKey: 'value3Alt',
  },
];

export function ValuesSection() {
  const t = useTranslations('valuesSection'); // Initialize translations with namespace
  const locale = useLocale(); // Get current locale
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Map over the data structure to get translated values
  const translatedValues = valuesData.map(value => ({
    icon: value.icon,
    title: t(value.titleKey),
    description: t(value.descriptionKey),
    altText: t(value.altKey) // Translate alt text
  }));

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    // Add dir attribute for RTL support
    <section
      className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 transition-colors duration-300"
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto text-center">
        {/* Use translated heading */}
        {locale == "ar" ? <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">{t('heading')}</h2> :
          <TextAnimate animation="blurInUp" by="character" once className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">
            {t('heading')}
          </TextAnimate>}


        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
          {/* Icon Cloud Section - Remains mostly unchanged */}
          <div className="relative w-full md:w-1/2 max-w-lg items-center justify-center overflow-hidden rounded-xl mx-auto mt-4">
            <IconCloud images={images} />
          </div>

          {/* Value Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 w-full md:w-1/2">
            {/* Map over the translated values */}
            {translatedValues.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}