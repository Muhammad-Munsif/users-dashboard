// src/components/StatCard.jsx
import React from "react";
import { MoreHorizontal } from "lucide-react"; // Icon for the three dots

const StatCard = ({ icon: Icon, value, label, description, color }) => {
  // Determine gradient colors based on the main color prop
  const iconBgColor =
    {
      red: "bg-red-100 text-red-500", // for pink-like color
      cyan: "bg-cyan-100 text-cyan-500",
      purple: "bg-purple-100 text-purple-500",
      indigo: "bg-indigo-100 text-indigo-500", // for light purple
    }[color] || "bg-gray-100 text-gray-500"; // Default if color not matched

  return (
    <div className="bg-white p-3 rounded-2xl shadow-lg flex flex-col justify-between h-full">
      {/* Top section: Icon and More options */}
      <div className="flex items-start">
        {/* Icon */}
        <div
          className={`p-3 rounded-xl flex justify-between w-full ${iconBgColor} `}
        >
          <Icon className="w-6 h-6" />
          {/* More options button */}
          <button className="text-gray-400 hover:text-gray-600">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Value */}
      <p className="text-2xl font-bold text-gray-900 mb-1 leading-tight">
        {value}
      </p>

      {/* Label and Description */}
      <p className="text-lg font-medium text-gray-700">{label}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default StatCard;
