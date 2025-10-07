import { FiSearch, FiBell } from "react-icons/fi";

import { RxHamburgerMenu } from "react-icons/rx";

import React, { useState } from "react";

// Restoring all icons to lucide-react (Menu, Search, Bell, MessageCircle, User, Settings, LogOut) to resolve compilation errors

import {
  Menu,
  Search,
  Bell,
  MessageCircle,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import Person from "../assets/person1.webp";

// Custom component for a standard notification icon with a badge

const NotificationIcon = (
  { IconComponent, count, color } // The icon is passed as IconComponent
) => (
  <div className="relative p-2 cursor-pointer text-gray-700 hover:text-indigo-600 transition duration-150 ease-in-out">
     {/* Using standard w-6 h-6 for lucide-react icons */}
     <IconComponent className="w-6 h-6" /> {" "}
    {count > 0 && (
      <span
        className={`absolute top-0 right-0 inline-flex items-center justify-center h-5 w-5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 rounded-full ${color}`}
        style={{ fontSize: "0.65rem" }} // Smaller font size for the count
      >
      {count}{" "}
      </span>
    )}
    {" "}
  </div>
);

// The main Navbar component matching the user's design

const Navbar = () => {
  // State for the search term

  const [searchTerm, setSearchTerm] = useState(""); // New state to control the visibility of the profile menu

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // Handler to toggle the profile menu state

  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen); // Mock user data for the avatar

  const user = {
    name: "John Profile",
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm); // Add search logic here
  };

  return (
    <>
           {" "}
      <header className="w-full shadow-md bg-white border-b border-gray-100 sticky top-0 z-10 px-2 py-2 md:px-2 md:py-5">
               {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                   {" "}
          <div className="flex justify-between items-center h-16 space-x-4">
                        {/* 1. Left Menu Icon (Purple) */}           {" "}
            <button
              className="p-2 text-indigo-700 hover:bg-gray-100 rounded-full transition duration-150"
              aria-label="Toggle Menu"
            >
                            {/* Using Menu from lucide-react */}
                            <Menu className="w-10 h-10 hidden md:flex" />       
                 {" "}
            </button>
                        {/* 2. Search Bar Group */}           {" "}
            <div className="flex-1 max-w-lg items-center shadow-lg rounded-xl hidden md:flex">
                            {/* Search Input */}
                           {" "}
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 text-base text-gray-700 placeholder-gray-400 outline-none bg-white border border-r-0 border-gray-200 rounded-l-xl focus:ring-2 focus:ring-indigo-500 transition duration-150"
                style={{ paddingRight: "0" }}
              />
                            {/* Search Button (Orange) */}             {" "}
              <div className="">
                             {" "}
                <button
                  onClick={handleSearch}
                  className="flex items-center justify-center p-3 h-[50px] w-[50px] text-white bg-orange-600 hover:bg-orange-700 rounded-r-xl transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  aria-label="Perform Search"
                  style={{ minWidth: "50px" }} // Ensure button doesn't shrink
                >
                                  {/* Using Search from lucide-react */}
                                  <Search className="w-5 h-5" />             {" "}
                </button>
                             {" "}
              </div>
                         {" "}
            </div>
                        {/* 3. Right Icons and Avatar Group */}           {" "}
            <div className="relative flex items-center space-x-4 ml-auto">
                            {/* Bell Icon with Red Badge */}
                           {" "}
              <NotificationIcon
                IconComponent={Bell} // Using Bell
                count={2}
                color="bg-red-500 absolute top-2 right-3"
              />
                            {/* Message Icon with Red Badge */}
                           {" "}
              <NotificationIcon
                IconComponent={MessageCircle} // Using MessageCircle
                count={2}
                color="bg-red-500 absolute top-2 right-3"
              />
                            {/* Profile Avatar with Dropdown Menu */}           
               {" "}
              <div className="relative flex-shrink-0">
                               {" "}
                <div
                  className="relative cursor-pointer"
                  onClick={toggleProfileMenu}
                >
                                   {" "}
                  <img
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-cyan-500 ring-offset-2 ring-offset-white"
                    src={Person}
                    alt={user.name} // Fallback for image loading errors
                    onError={(e) => {
                      e.target.onerror = null;

                      e.target.src =
                        "https://placehold.co/40x40/7C3AED/FFFFFF?text=JP";
                    }}
                  />
                                 {" "}
                </div>
                                {/* Profile Dropdown Menu */}               {" "}
                {isProfileMenuOpen && (
                  <div
                    className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-2xl py-2 transition-opacity duration-150 ease-out origin-top-right border border-gray-100 z-20" // Positioned just below the navbar
                    style={{ top: "100%" }}
                  >
                                        {/* User Info Header */}               
                       {" "}
                    <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                                           {" "}
                      <p className="font-semibold">{user.name}</p>             
                             {" "}
                      <p className="text-xs text-gray-500">View Account</p>     
                                   {" "}
                    </div>
                                        {/* Menu Items */}                   {" "}
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 transition duration-100 ease-in-out"
                    >
                                           {" "}
                      <User className="w-4 h-4 mr-3 text-indigo-500" />         
                                  Profile                    {" "}
                    </a>
                                       {" "}
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 transition duration-100 ease-in-out"
                    >
                                           {" "}
                      <Settings className="w-4 h-4 mr-3 text-indigo-500" />     
                                      Settings                    {" "}
                    </a>
                                       {" "}
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 border-t mt-1 transition duration-100 ease-in-out"
                    >
                                            <LogOut className="w-4 h-4 mr-3" /> 
                                          Sign Out                    {" "}
                    </a>
                                     {" "}
                  </div>
                )}
                             {" "}
              </div>
                         {" "}
            </div>
                     {" "}
          </div>
                 {" "}
        </div>
             {" "}
      </header>
         {" "}
    </>
  );
};

export default Navbar;
