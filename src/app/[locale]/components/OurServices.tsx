"use client"
// components/OurServices.tsx
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl'; // Import next-intl hooks

interface ServiceProps {
  _id: string;
  imageSrc: string;
  title: string;        // English title
  ar_title: string;     // Arabic title
  description: string;  // English description
  ar_description: string; // Arabic description
  link: string;
}

// Reverted ServiceCard styling, kept translations
const ServiceCard: React.FC<ServiceProps> = ({
  imageSrc,
  title,
  ar_title,
  description,
  ar_description,
  link,
  _id
}) => {
  const locale = useLocale(); // Get current locale
  const t = useTranslations('ourServices'); // Get translations for the button

  // Determine which title and description to display based on locale
  const displayTitle = locale === 'ar' ? ar_title : title;
  const displayDescription = locale === 'ar' ? ar_description : description;

  return (
    // Reverted styling closer to original
    <div className="bg-white mt-24 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <Image
        src={imageSrc}
        alt={displayTitle} // Use locale-specific title for alt text
        width={600} // Using original width/height props
        height={400}
        className="object-cover w-full h-48" // Using original className
      />
      <div className="p-6"> {/* Removed flex styling */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{displayTitle}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{displayDescription}</p> {/* Removed flex-grow */}

        {/* Conditional "More" Link/Button */}
        {link && link !== '#' ? ( // Check if link is valid and not just '#'
          <Link
            href={`/${locale}${link.startsWith('/') ? link : '/' + link}`} // Ensure leading slash and add locale
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200" // Removed mt-auto, text-center
          >
            {t('moreButton')} {/* Translate button text */}
          </Link>
        ) : (
          // If no link, render nothing or potentially a disabled button from original
          "" // Render nothing as per original commented-out section
          // <button disabled className="inline-block bg-gray-400 text-white font-bold py-2 px-4 rounded cursor-not-allowed">
          //   {t('moreButton')}
          // </button>
        )}
      </div>
    </div>
  );
};

export function OurServices() {
  const t = useTranslations('ourServices'); // Initialize translations
  const locale = useLocale(); // Get current locale
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [services, setServices] = useState<ServiceProps[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState<string | null>(null); // Add error state

  useEffect(() => {
    setMounted(true);

    const fetchServices = async () => {
      setLoading(true); // Start loading
      setError(null); // Reset error
      try {
        const response = await fetch('/api/services'); // Ensure API route is correct
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!data.services || !Array.isArray(data.services)) {
          console.error("API response is missing 'services' array:", data);
          throw new Error("Invalid data format from API");
        }
        setServices(data.services);
      } catch (error: any) {
        console.error("Failed to fetch services:", error);
        setError(error.message || "Failed to load services."); // Set error message
      } finally {
        setLoading(false); // Stop loading regardless of outcome
      }
    };

    fetchServices();
  }, []); // Run only on mount

  if (!mounted) {
    // Avoid rendering potentially incorrect server-side state before hydration
    return null;
  }

  return (
    // Add dir for RTL support
    <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-8">
          {t('heading')} {/* Translate section heading */}
        </h2>

        {loading && ( // Display loading indicator
          <div className="text-center text-gray-600 dark:text-gray-400">
            {t('loading')}...
          </div>
        )}

        {error && ( // Display error message
          <div className="text-center text-red-600 dark:text-red-400">
            {t('fetchError')}: {error}
          </div>
        )}

        {!loading && !error && ( // Display services grid only when loaded and no error
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              // Pass all service props down, including _id and both language fields
              <ServiceCard key={service._id} {...service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}