import React, { useState } from "react";

const StokeDetails = () => {
  // Define the master list of all users (renamed to allUsers for clarity)
  const allUsers = [
    { name: "Jhon Smith", role: "Customer" },
    { name: "Jhon Smith", role: "Admin" },
    { name: "Michael Johnson", role: "Customer" },
    { name: "Sara Connor", role: "Customer" },
    { name: "Alex Vandal", role: "Manager" },
    { name: "Emily White", role: "Customer" },
    { name: "Jhon Smith", role: "Admin" },
    { name: "Jane Foster", role: "Customer" },
    { name: "Bruce Wayne", role: "Customer" },
    { name: "Clark Kent", role: "Customer" },
    { name: "Diana Prince", role: "Customer" },
    { name: "Peter Parker", role: "Admin" },
    { name: "Tony Stark", role: "Customer" },
    { name: "Steve Rogers", role: "Customer" },
    { name: "Thor Odinson", role: "Customer" },
    // Additional users for scroll visibility and better search testing
    { name: "Jane Doe", role: "Customer" },
    { name: "Peter Pan", role: "Admin" },
    { name: "Mary Jane", role: "Customer" },
    { name: "Mike Ross", role: "Lawyer" },
    { name: "Harvey Specter", role: "Lawyer" },
    { name: "Rachel Zane", role: "Paralegal" },
    { name: "Donna Paulsen", role: "Admin" },
  ];

  // State to hold the current value of the search input
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the users based on the search term
  const filteredUsers = allUsers.filter((user) => {
    const lowerCaseSearch = searchTerm.toLowerCase();

    // Check if the search term is included in the user's name or role (case-insensitive)
    return (
      user.name.toLowerCase().includes(lowerCaseSearch) ||
      user.role.toLowerCase().includes(lowerCaseSearch)
    );
  });

  // User Card Component function
  const userCard = (user, index) => (
    <div
      key={index}
      // Card Styling: standard rounded corners
      className="flex items-center justify-between p-3 my-2 bg-gray-100 rounded-xl shadow-sm dark:bg-gray-800"
    >
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 mr-3">
          {/* Placeholder for the user image */}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            {user.name}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {user.role}
          </p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button className="p-1 rounded-full text-gray-500 hover:text-purple-600 hover:bg-gray-200 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
        <button className="p-1 rounded-full text-gray-500 hover:text-red-600 hover:bg-gray-200 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    // UPDATED: Added max-w-4xl to limit width and mx-auto to center it
    <div className="p-4 bg-white rounded-lg shadow-lg dark:bg-gray-900 overflow-hidden max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
          Stoke Details
        </h2>
        <div className="relative w-full md:w-auto flex items-center">
          <input
            type="text"
            placeholder="Search..."
            // Bind the input value to the searchTerm state
            value={searchTerm}
            // Update the state on every change
            onChange={handleSearchChange}
            className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <button className="absolute right-0 top-0 h-full w-10 flex items-center justify-center bg-purple-600 text-white rounded-r-full hover:bg-purple-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Container for the User Cards (now using filteredUsers) */}
      {/* UPDATED: Reduced fixed height from h-[400px] to h-[300px] */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto h-[300px] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200">
        {/* Render a message if no results are found */}
        {filteredUsers.length === 0 && (
          <div className="md:col-span-2 lg:col-span-3 text-center py-8 text-gray-500">
            No users found matching "{searchTerm}".
          </div>
        )}

        {/* Map over the filtered list */}
        {filteredUsers.map((user, index) => userCard(user, index))}
      </div>
    </div>
  );
};

export default StokeDetails;
