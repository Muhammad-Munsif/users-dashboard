// src/components/Sidebar.jsx (Updated)

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUsers,
  FiSettings,
  FiFileText,
  FiShield,
  FiGrid,
  FiChevronRight,
  FiUserCheck,
  FiUserPlus,
  FiSettings as FiSettingsOutline,
  FiLock,
  FiArchive,
  FiShoppingBag,
  FiImage,
  FiCpu,
  FiLayers,
  FiTable,
  FiSquare,
} from "react-icons/fi";
import Logo from "../assets/logo.jpg";

// Accept isSidebarOpen (for desktop) and toggleSidebar (for link clicks)
const Sidebar = ({ isSidebarOpen }) => {
  // We keep the internal 'open' state for MOBILE only
  const [open, setOpen] = useState(false);
  const [usersOpen, setUsersOpen] = useState(true);
  const [adminsOpen, setAdminsOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [rolesOpen, setRolesOpen] = useState(false);

  // Toggle for the MOBILE menu button (internal state)
  const handleMobileMenuClick = () => setOpen((prev) => !prev);

  // Wrapper for link/item click to close the mobile menu
  const handleItemClick = () => {
    if (window.innerWidth < 768) {
      // Only close on mobile (Tailwind's 'md' breakpoint)
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

      {/* Mobile Menu Toggle Button (You can remove this if the Navbar handles it) */}
      {/* NOTE: I recommend keeping this visible only on mobile if you want a dedicated mobile menu button */}
      <button
        className="md:hidden m-4 p-3 fixed top-4 left-4 bg-indigo-600 text-white rounded-lg z-50"
        onClick={handleMobileMenuClick} // <--- Uses internal mobile state
      >
        {open ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6 transition-all duration-300 z-40 
          ${
            // Mobile: uses 'open' state and translate-x
            open ? "translate-x-0" : "-translate-x-full"
          } 
          ${
            // Desktop: uses 'isSidebarOpen' prop and translate-x or no translate
            isSidebarOpen ? "md:translate-x-0" : "md:-translate-x-full"
          } 
          overflow-y-auto scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-pink-100`}
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
          {/* Use handleItemClick for closing the mobile menu after navigation */}
          <SideItem
            to="/"
            icon={<FiHome />}
            label="Dashboard"
            onClick={handleItemClick}
          />
          <Section title="User Management" icon={<FiUsers />} />
          <Section title="Application" icon={<FiSettings />} />

          {/* Pages Section with sub-items */}
          <li>
            <button
              className="w-full flex items-center justify-between p-2 rounded hover:bg-indigo-50 text-left"
              onClick={() => setPagesOpen(!pagesOpen)}
            >
              <span className="inline-flex items-center gap-3">
                <FiFileText className="text-indigo-500" />
                <span>Pages</span>
              </span>
              <FiChevronRight
                className={`transition-transform ${
                  pagesOpen ? "rotate-90" : ""
                }`}
              />
            </button>
            {pagesOpen && (
              <ul className="pl-9 py-1 space-y-1">
                <li>
                  <Link
                    to="/signin"
                    className="block p-2 rounded hover:bg-gray-100"
                    onClick={handleItemClick} // <--- Added handleItemClick
                  >
                    Sign In Form
                  </Link>
                </li>
                {/* ... other pages links ... */}
                <li>
                  <Link
                    to="/signup"
                    className="block p-2 rounded hover:bg-gray-100"
                    onClick={handleItemClick}
                  >
                    Sign Up Form
                  </Link>
                </li>
                <li>
                  <Link
                    to="/forgot"
                    className="block p-2 rounded hover:bg-gray-100"
                    onClick={handleItemClick}
                  >
                    Forgot Password
                  </Link>
                </li>
                <li>
                  <Link
                    to="/404"
                    className="block p-2 rounded hover:bg-gray-100"
                    onClick={handleItemClick}
                  >
                    Error 404
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Admins Section */}
          <li>
            <button
              className="w-full flex items-center justify-between p-2 rounded hover:bg-indigo-50 text-left"
              onClick={() => setAdminsOpen(!adminsOpen)}
            >
              <span className="inline-flex items-center gap-3">
                <FiShield className="text-indigo-500" />
                <span>Admins</span>
              </span>
              <FiChevronRight
                className={`transition-transform ${
                  adminsOpen ? "rotate-90" : ""
                }`}
              />
            </button>
            {adminsOpen && (
              <ul className="pl-9 py-1 space-y-1">
                <li>
                  <Link
                    to="/admins"
                    className="block p-2 rounded hover:bg-indigo-50"
                    onClick={handleItemClick} // <--- Added handleItemClick
                  >
                    <span className="inline-flex items-center gap-2">
                      <FiUserCheck />
                      Admin List
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admins/new"
                    className="block p-2 rounded hover:bg-indigo-50"
                    onClick={handleItemClick} // <--- Added handleItemClick
                  >
                    <span className="inline-flex items-center gap-2">
                      <FiUserPlus />
                      Add New Admin
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Role & Permission Section with sub-items */}
          <li>
            <button
              className="w-full flex items-center justify-between p-2 rounded hover:bg-indigo-50 text-left"
              onClick={() => setRolesOpen(!rolesOpen)}
            >
              <span className="inline-flex items-center gap-3">
                <FiShield className="text-indigo-500" />
                <span>Role & Permission</span>
              </span>
              <FiChevronRight
                className={`transition-transform ${
                  rolesOpen ? "rotate-90" : ""
                }`}
              />
            </button>
            {rolesOpen && (
              <ul className="pl-9 py-1 space-y-1">
                <li>
                  <Link
                    to="/module-setting"
                    className="block p-2 rounded hover:bg-indigo-50"
                    onClick={handleItemClick} // <--- Added handleItemClick
                  >
                    <span className="inline-flex items-center gap-2">
                      <FiSettingsOutline />
                      Module Setting
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/roles"
                    className="block p-2 rounded hover:bg-indigo-50"
                    onClick={handleItemClick} // <--- Added handleItemClick
                  >
                    <span className="inline-flex items-center gap-2">
                      <FiLock />
                      Role & Permission
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <Section title="Navs" icon={<FiGrid />} />

          {/* Users Section */}
          <li>
            <button
              className="w-full flex items-center justify-between p-2 rounded hover:bg-indigo-50 text-left"
              onClick={() => setUsersOpen(!usersOpen)}
            >
              <span className="inline-flex items-center gap-3">
                <FiUsers className="text-indigo-500" />
                <span>Users</span>
              </span>
              <FiChevronRight
                className={`transition-transform ${
                  usersOpen ? "rotate-90" : ""
                }`}
              />
            </button>
            {usersOpen && (
              <ul className="pl-9 py-1 space-y-1">
                <li>
                  <Link
                    to="/users"
                    className="block p-2 rounded hover:bg-indigo-50"
                    onClick={handleItemClick} // <--- Added handleItemClick
                  >
                    Users List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/users/new"
                    className="block p-2 rounded hover:bg-indigo-50"
                    onClick={handleItemClick} // <--- Added handleItemClick
                  >
                    Add New User
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* ... all other SideItems/Sections ... */}
          <Section title="Builder" icon={<FiLayers />} />
          <Section title="Invoice" icon={<FiFileText />} />
          <Section title="forms" icon={<FiSquare />} />
          <Section title="Board" icon={<FiGrid />} />
          <Section title="Calander" icon={<FiTable />} />
          <Section title="Themes" icon={<FiCpu />} />
          <Section title="General" icon={<FiSettings />} />
          <Section title="Products" icon={<FiShoppingBag />} />
          <Section title="Icons" icon={<FiImage />} />
          <Section title="Animations" icon={<FiArchive />} />
          <Section title="Components" icon={<FiLayers />} />
          <Section title="Table" icon={<FiTable />} />
          <Section title="Cards" icon={<FiSquare />} />
        </ul>
      </div>
    </>
  );
};

const SideItem = ({ to, icon, label, onClick }) => (
  <li>
    <Link
      to={to}
      className="flex items-center justify-between p-2 rounded hover:bg-indigo-50"
      onClick={onClick} // Propagate the click handler
    >
      <span className="inline-flex items-center gap-3">
        <span className="text-indigo-500">{icon}</span>
        <span>{label}</span>
      </span>
      <FiChevronRight className="text-gray-300" />
    </Link>
  </li>
);

// Section component remains the same as it doesn't need to close the menu
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

export default Sidebar;
