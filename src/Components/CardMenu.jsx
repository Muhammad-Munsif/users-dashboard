// src/components/CardMenu.jsx (New File)

import React from "react";
// Importing the specific icons shown in your menu image
import { Eye, Trash2, Edit, Printer, Download } from "lucide-react";

const menuItems = [
  { icon: Eye, label: "Action", action: () => console.log("Action clicked") },
  {
    icon: Trash2,
    label: "Delete",
    action: () => console.log("Delete clicked"),
    color: "text-red-500",
  },
  { icon: Edit, label: "Edit", action: () => console.log("Edit clicked") },
  { icon: Printer, label: "Print", action: () => console.log("Print clicked") },
  {
    icon: Download,
    label: "Download",
    action: () => console.log("Download clicked"),
  },
];

const CardMenu = ({ onActionClick, onClose }) => {
  // Simple component for a single menu item
  const MenuItem = ({ icon: Icon, label, action, color = "text-gray-700" }) => (
    <button
      onClick={() => {
        action();
        onActionClick(); // Close the menu after clicking an action
      }}
      className={`w-full flex items-center px-4 py-2 text-sm text-left hover:bg-gray-100 transition duration-100 ${color}`}
    >
      <Icon className={`w-4 h-4 mr-3 ${color}`} />
      {label}
    </button>
  );

  return (
    // Absolute positioning, high z-index, and styling for the menu card
    <div
      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-1 z-30 border border-gray-100"
      // You can add logic here to close the menu if the user clicks outside (optional, but good practice)
    >
      {menuItems.map((item) => (
        <MenuItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          action={item.action}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default CardMenu;
