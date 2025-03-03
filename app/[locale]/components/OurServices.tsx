"use client"
// components/OurServices.tsx
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link

interface ServiceProps {
  _id: string; // Include _id from MongoDB
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ imageSrc, title, description, link, _id }) => {
  return (
    <div className="bg-white mt-24 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <Image
        src={imageSrc}
        alt={title}
        width={600} // Adjust as needed
        height={400} // Adjust as needed
        className="object-cover w-full h-48" // Adjust height as needed
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{description}</p>

        {/* Conditional "More" Link/Button */}
        {link !== '#' ? (
          <Link href={link} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
            More
          </Link>
        ) : (
          ""
          // <button disabled className="inline-block bg-gray-400 text-white font-bold py-2 px-4 rounded cursor-not-allowed">
          //   More
          // </button>
        )}
      </div>
    </div>
  );
};

export function OurServices() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [services, setServices] = useState<ServiceProps[]>([]); // State to store services

  useEffect(() => {
    setMounted(true);

    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setServices(data.services); // Access the services array from the response
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };

    fetchServices();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service._id} {...service} _id={service._id} /> // Use _id as key
          ))}
        </div>
      </div>
    </section>
  );
}