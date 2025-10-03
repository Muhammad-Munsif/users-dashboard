import React from "react";

const ProductImage = ({ icon, color}) => (
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

export default ProductImage;