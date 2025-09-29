import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="h-16 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-indigo-600" />
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <input className="hidden md:block h-9 w-64 rounded-lg bg-gray-100 px-3 text-sm outline-none" placeholder="Search" />
          <button className="size-9 rounded-lg bg-gray-100" />
          <button className="size-9 rounded-lg bg-gray-100" />
          <div className="size-9 rounded-full bg-indigo-200" />
        </div>
      </div>
    </header>
  )
}

export default Navbar
