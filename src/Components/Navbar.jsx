import { FiSearch, FiBell } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";
import {
  Menu,
  Search,
  Bell,
  MessageCircle,
  User,
  Settings,
  LogOut,
  ChevronRight,
  Mail,
} from "lucide-react";
import Person from "../assets/person1.webp";

// Dummy data for the Message Dropdown
const dummyMessages = [
  { id: 1, sender: "Alice Smith", preview: "Are we still on for the meeting?", time: "2 min ago" },
  { id: 2, sender: "Team Lead", preview: "Please review the Q4 report ASAP.", time: "1 hour ago" },
  { id: 3, sender: "System Bot", preview: "Your password will expire soon.", time: "Yesterday" },
];

const NotificationIcon = ({ IconComponent, count, color, onClick, isDropdownOpen }) => (
  // Added 'relative' wrapper to ensure badge positioning is correct inside the flex container
  <div
    className="relative p-2 cursor-pointer text-gray-700 hover:text-indigo-600 transition duration-150 ease-in-out"
    onClick={onClick}
    role="button"
    aria-expanded={isDropdownOpen}
    aria-controls="message-dropdown"
  >
    <IconComponent className="w-6 h-6" />
    {count > 0 && (
      <span
        className={`absolute top-0 right-0 inline-flex items-center justify-center h-5 w-5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 rounded-full ${color}`}
        style={{ fontSize: "0.65rem" }}
      >
        {count}
      </span>
    )}
  </div>
);

const Navbar = ({ toggleSidebar }) => { // Assuming toggleSidebar is passed from Layout
  const [searchTerm, setSearchTerm] = useState("");
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMessageMenuOpen, setIsMessageMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsMessageMenuOpen(false);
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleMessageMenu = () => {
    setIsProfileMenuOpen(false);
    setIsMessageMenuOpen(!isMessageMenuOpen);
  };

  const user = {
    name: "John Profile",
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <>
      <header className="w-full shadow-md bg-white border-b border-gray-100 sticky top-0 z-10 px-2 py-2 md:px-2 md:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 space-x-4">
            
            {/* 1. HAMBURGER BUTTON: Visible on all screens, uses Menu icon */}
            <button
              className="p-2 text-indigo-700 hover:bg-gray-100 rounded-full transition duration-150"
              aria-label="Toggle Menu"
              onClick={toggleSidebar} // Assuming this prop is still available
            >
              {/* Removed 'hidden' class to make it visible on mobile */}
              <Menu className="w-6 h-6 md:w-10 md:h-10 flex" />
            </button>
            
            {/* 2. SEARCH BAR: Hidden on mobile, flex on desktop */}
            <div className="flex-1 max-w-lg items-center shadow-lg rounded-xl hidden md:flex ">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 text-base text-gray-700 placeholder-gray-400 outline-none bg-white border border-r-0 border-gray-200 rounded-l-xl focus:ring-2 focus:ring-indigo-500 transition duration-150"
                style={{ paddingRight: "0" }}
              />
              <div className="">
                <button
                  onClick={handleSearch}
                  className="flex items-center justify-center p-3 h-[50px] w-[50px] text-white bg-orange-600 hover:bg-orange-700 rounded-r-xl transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  aria-label="Perform Search"
                  style={{ minWidth: "50px" }}
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* 3. ICONS AND PROFILE: This section is fine and moves to the right */}
            <div className="relative flex items-center space-x-2 sm:space-x-4 ml-auto">
              
              {/* Notification Icon */}
              <NotificationIcon
                IconComponent={Bell}
                count={2}
                color="bg-red-500 absolute top-2 right-3"
              />
              
              {/* Message Icon with Dropdown */}
              <div className="relative">
                <NotificationIcon
                  IconComponent={MessageCircle}
                  count={3}
                  color="bg-red-500 absolute top-2 right-3"
                  onClick={toggleMessageMenu}
                  isDropdownOpen={isMessageMenuOpen}
                />
                {isMessageMenuOpen && (
                  <div
                    id="message-dropdown"
                    // Adjusted width to be slightly smaller for mobile
                    className="absolute right-0 mt-3 w-64 sm:w-72 bg-white rounded-xl shadow-2xl transition-opacity duration-150 ease-out origin-top-right border border-gray-100 z-20 overflow-hidden"
                    style={{ top: "100%" }}
                  >
                    <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100 flex justify-between items-center">
                      <p className="font-semibold text-base">Messages ({dummyMessages.length})</p>
                      <a href="#" className="text-xs text-indigo-600 hover:text-indigo-800">
                        View All
                      </a>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {dummyMessages.map((message) => (
                        <a
                          key={message.id}
                          href="#"
                          className="flex items-start p-3 text-sm text-gray-800 hover:bg-indigo-50 transition duration-100 ease-in-out border-b border-gray-50 last:border-b-0"
                          onClick={() => setIsMessageMenuOpen(false)}
                        >
                          <Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-indigo-500" />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{message.sender}</p>
                            <p className="text-xs text-gray-500 truncate">{message.preview}</p>
                          </div>
                          <span className="ml-4 text-xs text-gray-400 flex-shrink-0">{message.time}</span>
                        </a>
                      ))}
                  </div>
                  </div>
                )}
              </div>
              
              {/* Profile Icon */}
              <div className="relative flex-shrink-0">
                <div
                  className="relative cursor-pointer"
                  onClick={toggleProfileMenu}
                >
                  <img
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-cyan-500 ring-offset-2 ring-offset-white"
                    src={Person}
                    alt={user.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/40x40/7C3AED/FFFFFF?text=JP";
                    }}
                  />
                </div>
                {isProfileMenuOpen && (
                  <div
                    className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-2xl py-2 transition-opacity duration-150 ease-out origin-top-right border border-gray-100 z-20"
                    style={{ top: "100%" }}
                  >
                    <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-500">View Account</p>
                    </div>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 transition duration-100 ease-in-out"
                    >
                      <User className="w-4 h-4 mr-3 text-indigo-500" />
                      Profile
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 transition duration-100 ease-in-out"
                    >
                      <Settings className="w-4 h-4 mr-3 text-indigo-500" />
                      Settings
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 border-t mt-1 transition duration-100 ease-in-out"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Sign Out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;