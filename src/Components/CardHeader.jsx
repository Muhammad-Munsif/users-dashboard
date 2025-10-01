import React from "react";
import { MoreHorizontal } from "lucide-react";

const CardHeader = ({ title }) => {
  return (
    <div className="flex justify-between items-center p-5 border-b border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <button className="text-gray-400 hover:text-indigo-500 p-1 rounded-full transition duration-150">
        <MoreHorizontal size={24} />
      </button>
    </div>
  );
};

export default CardHeader;
