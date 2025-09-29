import React from 'react'
import { FiSearch, FiBell, } from 'react-icons/fi';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="h-16 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="" />
          <button>
          <GiHamburgerMenu className="size-8 rounded-lg text-gray-600 w-10 h-10" />
          </button>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden md:flex items-center h-9 w-64 rounded-lg bg-gray-100 px-3 text-sm">
            <FiSearch className="text-gray-500 mr-2" />
            <input className="bg-transparent outline-none flex-1" placeholder="Search" />
          </div>
          <button className="size-9 rounded-lg bg-gray-100 grid place-items-center">
            <FiBell className="text-gray-600 p-3" />
          </button>
          <div className="size-9 rounded-full bg-indigo-200" />
        </div>
      </div>
    </header>
  )
}

export default Navbar
