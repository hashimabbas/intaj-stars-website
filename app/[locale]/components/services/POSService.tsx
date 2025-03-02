// components/POSService.tsx
import Image from 'next/image';
import React from 'react';

interface POSServiceProps {
  title: string;
  description: string;
}

const POSService: React.FC<POSServiceProps> = ({ title, description }) => {
  return (
    <div className="rounded-xl shadow-xl overflow-hidden m-8 transition-shadow duration-300 hover:shadow-2xl">
      {/* Rounded corners, improved shadow, and transition */}
      <div className="p-8">
        {/* Increased padding for more spacing */}
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 text-center">
          {title}
        </h2>
        {/* Larger, bolder title */}
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
          {description}
        </p>
        {/* Larger, more readable description */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Increased gap and margin */}
          <div className="flex justify-center items-center rounded-xl overflow-hidden"> {/* Centering and Rounded Corners */}
            <Image
              src="/services/pos/image-1.jpeg"
              alt="POS Service Feature 1"
              width={500}  // Adjust these values based on your images' actual widths
              height={333} // Adjust these values based on your images' actual heights
              style={{ objectFit: "scale-down" }}
              className="transition-transform duration-300 hover:scale-105" // Subtle hover effect
            />
          </div>
          <div className="flex justify-center items-center rounded-xl overflow-hidden">
            <Image
              src="/services/pos/image-2.jpeg"
              alt="POS Service Feature 2"
              width={500}  // Adjust these values based on your images' actual widths
              height={333} // Adjust these values based on your images' actual heights
              style={{ objectFit: "scale-down" }}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex justify-center items-center rounded-xl overflow-hidden lg:col-span-1 md:col-span-2">
            {/* Fix for smaller screens */}
            <Image
              src="/services/pos/image-3.jpeg"
              alt="POS Service Feature 3"
              width={500}  // Adjust these values based on your images' actual widths
              height={333} // Adjust these values based on your images' actual heights
              style={{ objectFit: "scale-down" }}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSService;