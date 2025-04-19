// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { useLocale, useTranslations } from 'next-intl';

const Footer = () => {
  const locale = useLocale();
  const t = useTranslations('footer'); // Initialize translations with 'footer' namespace

  return (
    // Add dir attribute for RTL support
    <footer
      className="bg-gray-900 text-gray-300 py-12"
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Section 1: Company Info & Socials */}
        {/* Adjust text alignment for RTL */}
        <div className={`mb-6 md:mb-0 text-center ${locale === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
          <h3 className="text-lg font-semibold mb-4">{t('companyName')}</h3> {/* Translate */}
          <p className="mb-4">
            {t('companyDescription')} {/* Translate */}
          </p>
          {/* Adjust flex alignment for RTL */}
          <div className={`flex justify-center space-x-4 ${locale === 'ar' ? 'md:justify-end' : 'md:justify-start'}`}>
            <a
              href="https://www.instagram.com/intajstarstech/?igsh=eGNwbnkzM2dqcGs4#"
              target='_blank'
              rel="noopener noreferrer" // Add rel for security
              className="hover:text-blue-400 transition-colors duration-200"
              aria-label={t('instagramAriaLabel')} // Translate and correct label
            >
              <FaInstagram size={28} />
            </a>
            {/* Add other social links here if needed */}
          </div>
        </div>

        {/* Section 2: Services */}
        {/* Adjust text alignment for RTL */}
        <div className={`mb-6 md:mb-0 text-center ${locale === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
          <h3 className="text-lg font-semibold mb-4">{t('servicesTitle')}</h3> {/* Translate */}
          <ul className="space-y-2">
            <li>
              <Link href={`/${locale}/pages/services/e-commerce`} className="hover:text-blue-400 transition-colors duration-200 block">{t('serviceEcommerce')}</Link> {/* Translate */}
            </li>
            <li>
              <Link href={`/${locale}/pages/services/web-development`} className="hover:text-blue-400 transition-colors duration-200 block">{t('serviceWebDev')}</Link> {/* Translate */}
            </li>
            <li>
              <Link href={`/${locale}/pages/services/mobile-app-development`} className="hover:text-blue-400 transition-colors duration-200 block">{t('serviceMobileApp')}</Link> {/* Translate */}
            </li>
            <li>
              <Link href={`/${locale}/pages/services/POS`} className="hover:text-blue-400 transition-colors duration-200 block">{t('servicePOS')}</Link> {/* Translate */}
            </li>
            <li>
              <Link href={`/${locale}/pages/services/RFID-solutions`} className="hover:text-blue-400 transition-colors duration-200 block">{t('serviceRFID')}</Link> {/* Translate */}
            </li>
            {/* Add other service links if needed */}
          </ul>
        </div>

        {/* Section 3: Quick Links */}
        {/* Adjust text alignment for RTL */}
        <div className={`mb-6 md:mb-0 text-center ${locale === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
          <h3 className="text-lg font-semibold mb-4">{t('quickLinksTitle')}</h3> {/* Translate */}
          <ul className="space-y-2">
            <li>
              <Link href={`/${locale}`} className="hover:text-blue-400 transition-colors duration-200 block">{t('linkHome')}</Link> {/* Translate & Fix Home Link */}
            </li>
            <li>
              <Link href={`/${locale}/pages/services`} className="hover:text-blue-400 transition-colors duration-200 block">{t('linkOurServices')}</Link> {/* Translate & Add Locale */}
            </li>
            <li>
              <Link href={`/${locale}/pages/contact-us`} className="hover:text-blue-400 transition-colors duration-200 block">{t('linkContactUs')}</Link> {/* Translate & Add Locale */}
            </li>
          </ul>
        </div>

        {/* Section 4: Contact Information */}
        {/* Adjust text alignment for RTL */}
        <div className={`text-center ${locale === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
          <h3 className="text-lg font-semibold mb-4">{t('contactTitle')}</h3> {/* Translate */}
          <div className="space-y-3">
            {/* Adjust flex alignment & icon margin for RTL */}
            <div className={`flex items-center ${locale === 'ar' ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
              {/* Conditionally apply margin based on locale */}
              <MdLocationOn className={`text-gray-500 text-xl ${locale === 'ar' ? 'ml-2' : 'mr-2'}`} />
              {/* Use dangerouslySetInnerHTML for address with <br> or use multiple t() calls */}
              <span dangerouslySetInnerHTML={{ __html: t('address') }} />
            </div>
            {/* Adjust flex alignment & icon margin for RTL */}
            <div className={`flex items-center ${locale === 'ar' ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
              <MdEmail className={`text-gray-500 text-xl ${locale === 'ar' ? 'ml-2' : 'mr-2'}`} />
              <a href="mailto:info@intajstarstech.com" className="hover:text-blue-400 transition-colors duration-200">info@intajstarstech.com</a>
            </div>
            {/* Adjust flex alignment & icon margin for RTL */}
            <div className={`flex items-center ${locale === 'ar' ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
              <MdPhone className={`text-gray-500 text-xl ${locale === 'ar' ? 'ml-2' : 'mr-2'}`} />
              {/* Use non-breaking space or span for better wrapping control if needed */}
              <a href="tel:+96893534933" className="hover:text-blue-400 transition-colors duration-200 whitespace-nowrap">+968 93534933</a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-4 border-t border-gray-700 text-center text-sm">
        {/* Translate Copyright */}
        <p>{t('copyright', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
};

export default Footer;