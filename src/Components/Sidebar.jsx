import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button (Mobile Only) */}
      <button
        className="md:hidden p-3 fixed top-4 left-4 bg-indigo-600 text-white rounded-lg z-50"
        onClick={() => setOpen(!open)}
      >
        {open ? '✕' : '☰'}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 z-40 
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-6 text-indigo-600">Magicians</h2>

        <ul className="space-y-4">
          <li className="text-xs uppercase tracking-wide text-gray-400">Module Setting</li>
          <li>
            <Link
              to="/"
              className="block p-2 rounded hover:bg-indigo-50 transition"
              onClick={() => setOpen(false)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/roles"
              className="block p-2 rounded hover:bg-indigo-50 transition"
              onClick={() => setOpen(false)}
            >
              Role & Permissions
            </Link>
          </li>
          <li>
            <Link
              to="/signin"
              className="block p-2 rounded hover:bg-indigo-50 transition"
              onClick={() => setOpen(false)}
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="block p-2 rounded hover:bg-indigo-50 transition"
              onClick={() => setOpen(false)}
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              to="/forgot"
              className="block p-2 rounded hover:bg-indigo-50 transition"
              onClick={() => setOpen(false)}
            >
              Forgot Password
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

