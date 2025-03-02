"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface TabContent {
  about: string;
  mission: string;
  vision: string;
}

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState<'about' | 'mission' | 'vision'>('about');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tabContent: TabContent = {
    about: `We are a leading technology company based in Oman, dedicated to providing innovative solutions for our clients. We leverage cutting-edge technologies to empower businesses and drive growth in the region.`,
    mission: `Our mission is to empower businesses in Oman with transformative technology solutions. We strive to deliver exceptional value, build lasting partnerships, and contribute to the technological advancement of the region.`,
    vision: `To be the leading technology partner in Oman, recognized for our innovation, excellence, and commitment to client success. We aim to shape the future of technology in the region.`,
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-16 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative aspect-w-16 aspect-h-9 h-full">
              <Image
                src="/logo-removebg-preview.png"
                alt="Laptop and Notebook"
                className="rounded-2xl shadow-xl object-cover"
                height={400} // Increased height
                width={600} // Increased width
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white transition-colors duration-300">About Our Company</h2>

            </div>

            <div className="flex flex-wrap items-center justify-start mb-6 border-b border-gray-200 dark:border-gray-700">
              <button
                className={`px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors duration-200 border-b-2 border-transparent ${activeTab === 'about' ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400' : ''
                  } mr-4 mb-2`}
                onClick={() => setActiveTab('about')}
              >
                About
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors duration-200 border-b-2 border-transparent ${activeTab === 'mission' ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400' : ''
                  } mr-4 mb-2`}
                onClick={() => setActiveTab('mission')}
              >
                Mission
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors duration-200 border-b-2 border-transparent ${activeTab === 'vision' ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400' : ''
                  } mb-2`}
                onClick={() => setActiveTab('vision')}
              >
                Vision
              </button>
            </div>

            <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-lg transition-colors duration-300">
              {activeTab === 'about' ? tabContent.about : activeTab === 'mission' ? tabContent.mission : tabContent.vision}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}