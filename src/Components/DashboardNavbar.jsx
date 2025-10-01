import React, { useState } from "react";
// Restoring all icons to lucide-react to ensure compilation success
import {
  Menu,
  Search,
  Bell,
  MessageCircle,
  User,
  Settings,
  LogOut,
  Edit,
  Trash2,
  TrendingUp,
  BarChart2,
  Briefcase,
  ChevronDown,
  ShoppingBag,
  BookOpen,
  DollarSign,
  Package,
  CheckSquare,
  MoreHorizontal,
} from "lucide-react";

// --- Reusable Component: Notification Icon (Used in DashboardNavbar) ---
const NotificationIcon = ({ IconComponent, count, color }) => (
  <div className="relative p-2 cursor-pointer text-gray-700 hover:text-indigo-600 transition duration-150 ease-in-out">
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

// --- Component: Dashboard Navbar ---
const DashboardNavbar = ({ toggleProfileMenu, isProfileMenuOpen, user }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    // Add search logic here
  };

  return (
    <header className="w-full shadow-md bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 space-x-4">
          {/* 1. Left Menu Icon (Purple) */}
          <button
            className="p-2 text-indigo-700 hover:bg-gray-100 rounded-full transition duration-150"
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* 2. Search Bar Group */}
          <div className="flex-1 max-w-lg flex items-center shadow-lg rounded-xl">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 text-base text-gray-700 placeholder-gray-400 bg-white border border-r-0 border-gray-200 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
              style={{ paddingRight: "0" }}
            />
            {/* Search Button (Orange) */}
            <button
              onClick={handleSearch}
              className="flex items-center justify-center p-3 h-[50px] w-[50px] text-white bg-orange-600 hover:bg-orange-700 rounded-r-xl transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              aria-label="Perform Search"
              style={{ minWidth: "50px" }}
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* 3. Right Icons and Avatar Group */}
          <div className="flex items-center space-x-4 ml-auto">
            <NotificationIcon
              IconComponent={Bell}
              count={2}
              color="bg-red-500"
            />
            <NotificationIcon
              IconComponent={MessageCircle}
              count={2}
              color="bg-red-500"
            />

            {/* Profile Avatar with Dropdown Menu */}
            <div className="relative flex-shrink-0">
              <div
                className="relative cursor-pointer"
                onClick={toggleProfileMenu}
              >
                <img
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-cyan-500 ring-offset-2 ring-offset-white"
                  src={user.avatarUrl}
                  alt={user.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/40x40/7C3AED/FFFFFF?text=JP";
                  }}
                />
              </div>

              {/* Profile Dropdown Menu */}
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
  );
};

// --- Component: User Card (Used in New Users Panel) ---
const UserCard = ({ name, role }) => {
  const avatarText = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  const avatarUrl = `https://placehold.co/50x50/${
    role === "Admin" ? "7C3AED" : "EC4899"
  }/FFFFFF?text=${avatarText}`;

  return (
    <div className="flex items-center justify-between p-3 mb-2 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-200 ease-in-out">
      <div className="flex items-center space-x-3">
        <img
          className="h-9 w-9 rounded-full object-cover"
          src={avatarUrl}
          alt={name}
        />
        <div>
          <p className="font-semibold text-gray-800 text-sm leading-tight">
            {name}
          </p>
          <p
            className={`text-xs ${
              role === "Admin" ? "text-indigo-600 font-medium" : "text-gray-500"
            }`}
          >
            {role}
          </p>
        </div>
      </div>
      <div className="flex space-x-2 text-gray-400">
        <button className="p-1 hover:text-indigo-500 transition">
          <Edit className="w-4 h-4" />
        </button>
        <button className="p-1 hover:text-red-500 transition">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// --- Component: Sales Details Card (Used in Sales Details Panel) ---
const DetailCard = ({ icon: Icon, title, value, color, iconBg }) => (
  <div className="flex items-center py-3">
    <div className={`p-3 rounded-xl mr-4 ${iconBg} text-white`}>
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-xl font-bold text-gray-800">{value}</p>
      <p className="text-xs text-gray-500">{title}</p>
    </div>
  </div>
);

// --- Component: Dashboard (Main Container, formerly App) ---
const Dashboard = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  const user = {
    avatarUrl: "https://placehold.co/50x50/374151/FFFFFF?text=JP",
    name: "John Profile",
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* 1. Navbar (Top) - Renamed from Navbar to DashboardNavbar */}
      <DashboardNavbar
        toggleProfileMenu={toggleProfileMenu}
        isProfileMenuOpen={isProfileMenuOpen}
        user={user}
      />

      {/* 2. Main Dashboard Layout (3 Columns) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Responsive Grid System: Stacks on small screens (grid-cols-1), becomes 3 columns on large screens (lg:grid-cols-3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: New Users / User Management */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">New Users</h2>
              <button className="p-1 text-gray-400 hover:text-gray-700 transition">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <div className="flex justify-center items-center mb-6 border border-gray-200 rounded-full w-40 mx-auto">
              {/* Replicating the small search bar structure inside the panel */}
              <input
                type="text"
                placeholder="Search"
                className="text-xs w-full py-1 px-3 rounded-l-full focus:outline-none"
              />
              <button className="bg-orange-600 text-white p-2 rounded-r-full hover:bg-orange-700">
                <Search className="w-3 h-3" />
              </button>
            </div>

            <button className="flex items-center justify-center w-full py-2 mb-4 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
              Show By All <ChevronDown className="w-4 h-4 ml-1" />
            </button>

            <div className="space-y-3">
              {/* Mock User List */}
              <UserCard name="Jhon Smith" role="Customer" />
              <UserCard name="Jhon Smith" role="Admin" />
              <UserCard name="Jhon Smith" role="Customer" />
              <UserCard name="Jhon Smith" role="Customer" />
              <UserCard name="Jhon Smith" role="Customer" />
            </div>
          </div>

          {/* Center Column: Sales Summary / Stats */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Sales of the last week
              </h2>
              <button className="p-1 text-gray-400 hover:text-gray-700 transition">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Circle (74%) */}
            <div className="flex flex-col items-center justify-center my-6">
              {/* Placeholder for the large progress ring design */}
              <div className="relative w-36 h-36">
                <div className="absolute w-full h-full rounded-full border-8 border-gray-100"></div>
                {/* Purple progress ring */}
                <div
                  className="absolute w-full h-full rounded-full border-8 border-indigo-500"
                  style={{
                    transform: "rotate(248deg)",
                    borderColor: "#7C3AED",
                    background: "conic-gradient(#7C3AED 74%, #E0E7FF 0%)",
                  }}
                >
                  {/* Inner circle mask to make it look like a ring */}
                  <div className="absolute inset-2 bg-white rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-extrabold text-indigo-700">
                      74%
                    </p>
                    <p className="text-xs text-gray-500">Progress</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5 mt-8">
              {/* Most Sales */}
              <div className="flex items-start">
                <BarChart2 className="w-5 h-5 mr-3 text-gray-500" />
                <div>
                  <p className="font-semibold text-gray-800">Most Sales</p>
                  <p className="text-sm text-gray-500">
                    Authors with the best sales
                  </p>
                </div>
              </div>

              {/* Total Sales Lead */}
              <div className="flex items-start">
                <TrendingUp className="w-5 h-5 mr-3 text-gray-500" />
                <div>
                  <p className="font-semibold text-gray-800">
                    Total sales lead
                  </p>
                  <p className="text-sm text-gray-500">
                    40% increased on week-to-week reports
                  </p>
                </div>
              </div>

              {/* Average Bestseller */}
              <div className="flex items-start">
                <Briefcase className="w-5 h-5 mr-3 text-gray-500" />
                <div>
                  <p className="font-semibold text-gray-800">
                    Average Bestseller
                  </p>
                  <p className="text-sm text-gray-500">
                    Pitstop Email Marketing
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sales Details / Graph */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Sales Details</h2>
              <button className="p-1 text-gray-400 hover:text-gray-700 transition">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Top Detail Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <DetailCard
                icon={ShoppingBag}
                title="Sales"
                value="$2,034"
                color="text-indigo-600"
                iconBg="bg-indigo-100"
              />
              <DetailCard
                icon={BookOpen}
                title="Commision"
                value="$706"
                color="text-pink-600"
                iconBg="bg-pink-100"
              />
              <DetailCard
                icon={Package}
                title="Average Bid"
                value="$49"
                color="text-teal-600"
                iconBg="bg-teal-100"
              />
              <DetailCard
                icon={CheckSquare}
                title="All Time Sales"
                value="$5.8M"
                color="text-green-600"
                iconBg="bg-green-100"
              />
            </div>

            {/* Placeholder Graph */}
            <div className="h-56">
              <svg viewBox="0 0 300 150" className="w-full h-full">
                {/* Purple Fill Area */}
                <linearGradient
                  id="purpleGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{
                      stopColor: "rgba(124, 69, 240, 0.4)",
                      stopOpacity: 1,
                    }}
                  />
                  <stop
                    offset="100%"
                    style={{
                      stopColor: "rgba(124, 69, 240, 0.0)",
                      stopOpacity: 0,
                    }}
                  />
                </linearGradient>
                <path
                  d="M 0 140 L 50 100 L 100 130 L 150 70 L 200 110 L 250 50 L 300 80 V 150 H 0 Z"
                  fill="url(#purpleGradient)"
                />
                {/* Purple Line */}
                <path
                  d="M 0 140 L 50 100 L 100 130 L 150 70 L 200 110 L 250 50 L 300 80"
                  stroke="#7C3AED"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Export the main Dashboard component
export default Dashboard;
