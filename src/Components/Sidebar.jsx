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
  FiArchive,
  FiShoppingBag,
  FiImage,
  FiCpu,
  FiLayers,
  FiTable,
  FiSquare,
  FiChevronRight,
} from "react-icons/fi";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [usersOpen, setUsersOpen] = useState(true);

  return (
    <>
      {/* Toggle Button (Mobile Only) */}
      <button
        className="md:hidden p-3 fixed top-4 left-4 bg-indigo-600 text-white rounded-lg z-50"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 z-40 
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="size-8 rounded-lg bg-indigo-600" />
          <h2 className="text-xl font-semibold">Mege Users</h2>
        </div>

        <ul className="space-y-1 text-sm">
          <SideItem to="/" icon={<FiHome />} label="Dashboard" onClick={() => setOpen(false)} />
          <Section title="User Management" icon={<FiUsers />} />
          <Section title="Application" icon={<FiSettings />} />
          <Section title="Pages" icon={<FiFileText />} />
          <Section title="Admins" icon={<FiShield />} />
          <SideItem to="/roles" icon={<FiShield />} label="Role & Permissions" onClick={() => setOpen(false)} />
          <Section title="Navs" icon={<FiGrid />} />

          <li>
            <button
              className="w-full flex items-center justify-between p-2 rounded hover:bg-indigo-50 text-left"
              onClick={() => setUsersOpen(!usersOpen)}
            >
              <span className="inline-flex items-center gap-3">
                <FiUsers className="text-indigo-500" />
                <span>Users</span>
              </span>
              <FiChevronRight className={`transition-transform ${usersOpen ? 'rotate-90' : ''}`} />
            </button>
            {usersOpen && (
              <ul className="pl-9 py-1 space-y-1">
                <li>
                  <Link to="/users" className="block p-2 rounded hover:bg-indigo-50" onClick={() => setOpen(false)}>Users List</Link>
                </li>
                <li>
                  <Link to="/users/new" className="block p-2 rounded hover:bg-indigo-50" onClick={() => setOpen(false)}>Add New User</Link>
                </li>
              </ul>
            )}
          </li>

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

          <SideItem to="/signin" icon={<FiSquare />} label="Sign In" onClick={() => setOpen(false)} />
          <SideItem to="/signup" icon={<FiSquare />} label="Sign Up" onClick={() => setOpen(false)} />
          <SideItem to="/forgot" icon={<FiSquare />} label="Forgot Password" onClick={() => setOpen(false)} />
        </ul>
      </div>
    </>
  );
};

const SideItem = ({ to, icon, label, onClick }) => (
  <li>
    <Link to={to} className="flex items-center justify-between p-2 rounded hover:bg-indigo-50" onClick={onClick}>
      <span className="inline-flex items-center gap-3">
        <span className="text-indigo-500">{icon}</span>
        <span>{label}</span>
      </span>
      <FiChevronRight className="text-gray-300" />
    </Link>
  </li>
)

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
)

export default Sidebar;

