"use client";
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl'; // Import next-intl hooks
import { cn } from '@/lib/utils'; // Import cn for conditional classes

const ContactUs = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const t = useTranslations('contactUsPage');
  const locale = useLocale();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Failed to send message");
      setName("");
      setEmail("");
      setMessage("");
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <section dir={locale === 'ar' ? 'rtl' : 'ltr'} className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-4xl text-center p-10 lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
        {t('mainTitle')}
      </h1>
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-12">

          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
                {t('formTitle')}
              </h2>
              {success && (
                <div className="mb-4 p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-md text-center">
                  Message sent successfully!
                </div>
              )}
              {error && (
                <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md text-center">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    {t('labelName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    placeholder={t('placeholderName')}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    {t('labelEmail')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    placeholder={t('placeholderEmail')}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    {t('labelMessage')}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    placeholder={t('placeholderMessage')}
                    required
                  ></textarea>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200 disabled:opacity-50"
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? "Sending..." : t('buttonSend')}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side (Contact Information) */}
          <div className="lg:w-1/2" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8" dir={locale === 'ar' ? 'rtl' : 'ltr'}> {/* Enhanced shadow */}
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
                {t('infoTitle')} {/* Translated */}
              </h2>
              <div className="space-y-6" dir={locale === 'ar' ? 'rtl' : 'ltr'}> {/* Increased spacing */}
                {/* Address */}
                <div className={cn(
                  "flex items-center justify-center md:justify-start",
                )}>
                  <MdLocationOn className={cn(
                    "text-blue-500 text-2xl flex-shrink-0",
                  )} />
                  <span className={cn(
                    "text-gray-700 dark:text-gray-300 leading-relaxed",
                  )}>
                    {t('addressLine1')}<br />
                    {t('addressLine2')}<br />
                    {t('addressLine3')}
                  </span>
                </div>
                {/* Email */}
                <div className={cn(
                  "flex items-center justify-center md:justify-start",
                )}>
                  <MdEmail className={cn(
                    "text-blue-500 text-2xl flex-shrink-0",

                  )} />
                  <a
                    href="mailto:Intaj.StarsTechnology@outlook.com"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 break-all"
                    aria-label={t('emailLabel')}
                  >
                    Intaj.StarsTechnology@outlook.com
                  </a>
                </div>
                {/* Phone */}
                <div className={cn(
                  "flex items-center justify-center md:justify-start",
                )}>
                  <MdPhone className={cn(
                    "text-blue-500 text-2xl flex-shrink-0",
                    // RTL margin
                  )} />
                  {/* Add dir="ltr" to ensure phone number displays correctly */}
                  <a
                    href="tel:+96892201203"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                    aria-label={t('phoneLabel')}
                    dir={locale === 'ar' ? 'rtl' : 'ltr'}
                  >
                    +968 92201203
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;