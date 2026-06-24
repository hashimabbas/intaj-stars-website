"use client"
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

interface HighlightProps {
  _id: string;
  imageSrc: string;
  title: string;
  ar_title: string;
  description: string;
  ar_description: string;
  link: string;
  order: number;
}

const HighlightCard: React.FC<HighlightProps> = ({
  imageSrc,
  title,
  ar_title,
  description,
  ar_description,
  link,
  _id,
}) => {
  const locale = useLocale();
  const t = useTranslations('morphoSCTHighlights');

  const displayTitle = locale === 'ar' ? ar_title : title;
  const displayDescription = locale === 'ar' ? ar_description : description;

  return (
    <div className="bg-white mt-24 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <Image
        src={imageSrc}
        alt={displayTitle}
        width={600}
        height={400}
        className="object-cover w-full h-48"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{displayTitle}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{displayDescription}</p>

        {link && link !== '#' ? (
          <Link
            href={`/${locale}${link.startsWith('/') ? link : '/' + link}`}
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            {t('moreButton')}
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export function MorphoSCTHighlights() {
  const t = useTranslations('morphoSCTHighlights');
  const locale = useLocale();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [highlights, setHighlights] = useState<HighlightProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);

    const fetchHighlights = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/morpho-sct-highlights');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!data.highlights || !Array.isArray(data.highlights)) {
          console.error("API response is missing 'highlights' array:", data);
          throw new Error("Invalid data format from API");
        }
        setHighlights(data.highlights);
      } catch (error: any) {
        console.error("Failed to fetch highlights:", error);
        setError(error.message || "Failed to load highlights.");
      } finally {
        setLoading(false);
      }
    };

    fetchHighlights();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-8">
          {t('heading')}
        </h2>

        {loading && (
          <div className="text-center text-gray-600 dark:text-gray-400">
            {t('loading')}...
          </div>
        )}

        {error && (
          <div className="text-center text-red-600 dark:text-red-400">
            {t('fetchError')}: {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight) => (
              <HighlightCard key={highlight._id} {...highlight} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
