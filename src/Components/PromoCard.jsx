// src/components/PromoCard.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const PromoCard = () => {
  return (
    // Background gradient and padding
    <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-2xl shadow-lg text-white h-full flex flex-col justify-between relative overflow-hidden">
      {/* Abstract Background Elements (optional, for visual flair) */}
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-500 opacity-20 rounded-full mix-blend-multiply filter blur-xl"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500 opacity-20 rounded-full mix-blend-multiply filter blur-xl"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Dollar Icon (or similar) */}
        <div className="mb-6">
          <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white bg-opacity-20 text-white text-lg font-bold">
            $
          </span>
        </div>

        {/* Title and Description */}
        <h3 className="text-3xl font-bold mb-2   leading-tight">
          Create CRM Reports
        </h3>
        <p className="text-gray-200 text-lg mb-6 flex-grow">
          Outlines keep you and honest indulging honest.
        </p>

        {/* Read More Link */}
        <a 
          href="#" 
          className="flex items-center text-white font-semibold hover:text-indigo-200 transition-colors duration-200"
        >
          Read More
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default PromoCard;