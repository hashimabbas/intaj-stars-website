// app/services/[id]/page.tsx
"use client";

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

interface ServiceProps {
  _id: string;
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

interface Props {
  params: { id: string };
}

const ServiceDetailPage = ({ params }: Props) => {
  const { id } = params;
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [service, setService] = useState<ServiceProps | null>(null);

  useEffect(() => {
    setMounted(true);

    const fetchService = async () => {
      try {
        const response = await fetch(`/api/services/${id}`);
        if (!response.ok) {
          if (response.status === 404) {
            notFound(); // Trigger Next.js notFound
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setService(data.service);
      } catch (error) {
        console.error("Failed to fetch service:", error);
      }
    };

    fetchService();
  }, [id]);

  if (!mounted) {
    return null;
  }

  if (!service) {
    return <div>Loading...</div>; // Or a more informative loading state
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <Image
            src={service.imageSrc}
            alt={service.title}
            width={1200}
            height={800}
            className="object-cover w-full h-96"
          />
          <div className="p-8">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">{service.title}</h1>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{service.description}</p>
            <a href={service.link} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailPage;