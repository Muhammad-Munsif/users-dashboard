// src/components/Sidebar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu, FiX, FiHome, FiUsers, FiSettings, FiFileText, FiShield,
  FiGrid, FiArchive, FiShoppingBag, FiImage, FiCpu, FiLayers,
  FiTable, FiSquare, FiChevronRight, FiUserCheck, FiUserPlus,
  FiSettings as FiSettingsOutline, FiLock,
} from "react-icons/fi";
import Logo from "../assets/logo.jpg";

// Helper Component: SideItem
const SideItem = ({ to, icon, label, onClick }) => (
  <li>
    <Link
      to={to}
      className="flex items-center justify-between p-2 rounded hover:bg-indigo-50"
      onClick={onClick}
    >
      <span className="inline-flex items-center gap-3">
        <span className="text-indigo-500">{icon}</span>
        <span>{label}</span>
      </span>
      <FiChevronRight className="text-gray-300" />
    </Link>
  </li>
);

// Helper Component: Section
const Section = ({ title, icon }) => (
  <li>
    <div className="flex items-center justify-between p-2 rounded hover:bg-indigo-50">
      <span className="inline-flex items-center gap-3">
        <span className="text-indigo-300">{icon}</span>
        <span className="text-gray-600">{title}</span>
      </span>
      <FiChevronRight className="text-gray-300" />
    </div>
  </li>
);


// Main Sidebar Component
const Sidebar = ({ isSidebarOpen }) => { // <--- RECEIVES isSidebarOpen prop
  
  // 'open' state is only for controlling the sidebar on small/mobile screens
  const [open, setOpen] = useState(false); 
  
  // Other internal states for dropdowns
  const [usersOpen, setUsersOpen] = useState(true);
  const [adminsOpen, setAdminsOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [rolesOpen, setRolesOpen] = useState(false);

  // Toggle for the MOBILE menu button (internal state)
  const handleMobileMenuClick = () => setOpen((prev) => !prev);
  
  // Wrapper for link/item click to close the mobile menu
  const handleItemClick = () => {
    // Check if on a mobile screen (Tailwind's 'md' breakpoint is 768px)
    if (window.innerWidth < 768) { 
      setOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden z-30"
          onClick={() => setOpen(false)}
        />
      )}
      
      {/* Mobile Menu Toggle Button (Optional, can be removed) */}
      <button
        className="md:hidden m-4 p-3 fixed top-4 left-4 bg-indigo-600 text-white rounded-lg z-50"
        onClick={handleMobileMenuClick}
      >
        {open ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Sidebar - Uses both 'open' (mobile) and 'isSidebarOpen' (desktop) states */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6 transition-all duration-300 z-40 
          ${
            // Mobile: uses internal 'open' state and translate-x
            open ? "translate-x-0" : "-translate-x-full"
          } 
          ${
            // Desktop: uses 'isSidebarOpen' prop for controlling the sidebar
            isSidebarOpen ? "md:translate-x-0" : "md:-translate-x-full"
          } 
          overflow-y-auto scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-pink-100`
        }
      >
        <div className="flex items-center gap-3 mb-6">
          <img
            className="w-12 h-12 bg-transparent opacity-75 rounded-full border-2 border-rose-600"
            src={Logo}
            alt="logo"
          />
          <h2 className="text-xl font-semibold">Mege Users</h2>
        </div>

        <ul className="space-y-1 text-sm">
          <SideItem
            to="/"
            icon={<FiHome />}
            label="Dashboard"
            onClick={handleItemClick} // <-- Use the common item click handler
          />
          <Section title="User Management" icon={<FiUsers />} />
          <Section title="Application" icon={<FiSettings />} />

          {/* Pages Section with sub-items */}
          <li>
            <button
              className="w-full flex items-center justify-between p-2 rounded hover:bg-indigo-50 text-left"
              onClick={() => setPagesOpen(!pagesOpen)}
            >
             {/* ... (Dropdown Title Content) ... */}
            </button>
            {pagesOpen && (
              <ul className="pl-9 py-1 space-y-1">
                <Link to="/signin" className="block p-2 rounded hover:bg-gray-100" onClick={handleItemClick}>Sign In Form</Link>
                <Link to="/signup" className="block p-2 rounded hover:bg-gray-100" onClick={handleItemClick}>Sign Up Form</Link>
                <Link to="/forgot" className="block p-2 rounded hover:bg-gray-100" onClick={handleItemClick}>Forgot Password</Link>
                <Link to="/404" className="block p-2 rounded hover:bg-gray-100" onClick={handleItemClick}>Error 404</Link>
              </ul>
            )}
          </li>

          {/* ... (Other sections follow the same pattern, using handleItemClick for links) ... */}
          
        </ul>
      </div>
    </>
  );
};

export default Sidebar;