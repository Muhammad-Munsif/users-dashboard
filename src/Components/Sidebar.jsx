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
  FiUserCheck,
  FiUserPlus,
} from "react-icons/fi";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [usersOpen, setUsersOpen] = useState(true);
  const [adminsOpen, setAdminsOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [showError, setShowError] = useState(false);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden z-30"
          onClick={() => setOpen(false)}
        />
      )}
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
          <SideItem
            to="/"
            icon={<FiHome />}
            label="Dashboard"
            onClick={() => setOpen(false)}
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
                className={`transition-transform ${pagesOpen ? "rotate-90" : ""}`}
              />
            </button>
            {pagesOpen && (
              <ul className="pl-9 py-1 space-y-1">
                <li>
                  <Link
                    to="/signin"
                    className="block p-2 rounded hover:bg-gray-100"
                    onClick={() => {
                      setOpen(false);
                      setShowSignin(true);
                      setShowSignup(false);
                      setShowForgot(false);
                      setShowError(false);
                    }}
                  >
                    Sign In Form
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="block p-2 rounded hover:bg-gray-100"
                    onClick={() => {
                      setOpen(false);
                      setShowSignin(false);
                      setShowSignup(true);
                      setShowForgot(false);
                      setShowError(false);
                    }}
                  >
                    Sign Up Form
                  </Link>
                </li>
                <li>
                  <Link
                    to="/forgot"
                    className="block p-2 rounded hover:bg-gray-100"
                    onClick={() => {
                      setOpen(false);
                      setShowSignin(false);
                      setShowSignup(false);
                      setShowForgot(true);
                      setShowError(false);
                    }}
                  >
                    Forgot Password
                  </Link>
                </li>
                <li>
                  <Link
                    to="/404"
                    className="block p-2 rounded hover:bg-gray-100"
                    onClick={() => {
                      setOpen(false);
                      setShowSignin(false);
                      setShowSignup(false);
                      setShowForgot(false);
                      setShowError(true);
                    }}
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
                className={`transition-transform ${adminsOpen ? "rotate-90" : ""}`}
              />
            </button>
            {adminsOpen && (
              <ul className="pl-9 py-1 space-y-1">
                <li>
                  <Link
                    to="/admins"
                    className="block p-2 rounded hover:bg-indigo-50"
                    onClick={() => setOpen(false)}
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
                    onClick={() => setOpen(false)}
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

          <SideItem
            to="/roles"
            icon={<FiShield />}
            label="Role & Permissions"
            onClick={() => setOpen(false)}
          />
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
                className={`transition-transform ${usersOpen ? "rotate-90" : ""}`}
              />
            </button>
            {usersOpen && (
              <ul className="pl-9 py-1 space-y-1">
                <li>
                  <Link
                    to="/users"
                    className="block p-2 rounded hover:bg-indigo-50"
                    onClick={() => setOpen(false)}
                  >
                    Users List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/users/new"
                    className="block p-2 rounded hover:bg-indigo-50"
                    onClick={() => setOpen(false)}
                  >
                    Add New User
                  </Link>
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

          <SideItem
            to="/signin"
            icon={<FiSquare />}
            label="Sign In"
            onClick={() => setOpen(false)}
          />
          <SideItem
            to="/signup"
            icon={<FiSquare />}
            label="Sign Up"
            onClick={() => setOpen(false)}
          />
          <SideItem
            to="/forgot"
            icon={<FiSquare />}
            label="Forgot Password"
            onClick={() => setOpen(false)}
          />
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