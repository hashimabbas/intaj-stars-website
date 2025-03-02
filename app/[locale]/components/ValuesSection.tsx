// components/ValuesSection.tsx
"use client";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { TextAnimate } from "@/components/magicui/text-animate";
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

interface ValueProps {
  icon: string;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 text-center">
      <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-blue-800 dark:to-purple-800"></div>
      </div>
      <div className="relative">
        <div className="mx-auto h-20 w-20 mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
          <Image
            src={icon}
            alt={`${title} Icon`}
            width={60}
            height={60}
            className="mx-auto"
            style={{ objectFit: 'contain' }} // Ensure icons fit within the circle
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

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

export function ValuesSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const values = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/3106/3106859.png', // Innovation Icon
      title: 'Innovation',
      description:
        'We embrace a culture of continuous innovation, pushing boundaries to develop groundbreaking solutions.',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/3177/3177363.png', // Integrity Icon
      title: 'Integrity',
      description:
        'We operate with unwavering integrity, building trust through transparency and ethical practices.',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/936/936451.png', // Collaboration Icon
      title: 'Collaboration',
      description:
        'We foster a collaborative spirit, working together to achieve shared goals and create exceptional value.',
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 transition-colors duration-300">
      <div className="container mx-auto text-center">
        <TextAnimate animation="blurInUp" by="character" once className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">
          Our Core Values
        </TextAnimate>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
          <div className="relative w-full md:w-1/2 max-w-lg items-center justify-center overflow-hidden rounded-xl mx-auto mt-4">
            <IconCloud images={images} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 w-full md:w-1/2">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}