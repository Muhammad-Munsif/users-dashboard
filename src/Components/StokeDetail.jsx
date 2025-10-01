import React, { useState } from "react";
import { MoreHorizontal, Plus } from "lucide-react";
import CardHeader from "./CardHeader";


const ProductImage = ({ icon, color }) => (
  <div
    className={`relative w-12 h-12 rounded-full ${color} flex items-center justify-center shadow-md`}
  >
    {/* Placeholder for product image - using generic colors and a small indicator */}
    <span className="text-white text-xs font-bold opacity-80">
      {icon.charAt(0)}
    </span>
    {/* <div className="absolute -bottom-0 -right-0.5 bg-pink-500 p-0.5 rounded-full border-2 border-white">
      <Plus size={10} className="text-white" />
    </div> */}
  </div>
);

const StokeDetail = () => {
  const stockData = [
    {
      id: 1,
      name: "Product 1",
      price: "$564",
      imageColor: "bg-gray-900",
      icon: "Watch",
    },
    {
      id: 2,
      name: "Product 1",
      price: "$564",
      imageColor: "bg-gray-300",
      icon: "Shoe",
    },
    {
      id: 3,
      name: "Product 1",
      price: "$564",
      imageColor: "bg-gray-500",
      icon: "Key",
    },
    {
      id: 4,
      name: "Product 1",
      price: "$564",
      imageColor: "bg-red-500",
      icon: "Car",
    },
    {
      id: 5,
      name: "Product 1",
      price: "$564",
      imageColor: "bg-gray-900",
      icon: "Shirt",
    },
    {
      id: 6,
      name: "Product 1",
      price: "$564",
      imageColor: "bg-gray-700",
      icon: "Pants",
    },
    {
      id: 7,
      name: "Product 1",
      price: "$564",
      imageColor: "bg-gray-400",
      icon: "Shoe",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg h-full overflow-hidden">
      <CardHeader title="Stoke Details" />
      <div className="p-5">
        <div className="grid grid-cols-2 text-sm font-medium text-gray-500 pb-3 border-b border-gray-100 mb-3">
          <span>Product Name</span>
          <span className="text-right">Market Price</span>
        </div>
        <div className="space-y-4 max-h-[400px] lg:max-h-[550px] overflow-y-auto pr-2">
          {stockData.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center hover:bg-indigo-50 p-2 rounded-lg transition duration-200"
            >
              <div className="flex items-center space-x-3">
                <ProductImage icon={item.icon} color={item.imageColor} />
                <span className="font-medium text-gray-700">{item.name}</span>
              </div>
              <span className="text-gray-500 font-medium">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StokeDetail;
