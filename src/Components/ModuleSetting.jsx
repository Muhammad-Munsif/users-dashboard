import React, { useState } from 'react';

// NOTE: This component assumes you have Tailwind CSS configured in your project.
// The icons (fa-database, etc.) rely on Font Awesome being linked in your index.html or imported.

const initialData = [
  { id: 1, moduleName: 'Backup & Export', controllerName: 'Export', icon: 'fa-database', operations: 'access' },
  { id: 2, moduleName: 'Backup & Export', controllerName: 'Export', icon: 'fa-database', operations: 'access' },
  { id: 3, moduleName: 'Backup & Export', controllerName: 'Export', icon: 'fa-language', operations: 'access' },
  { id: 4, moduleName: 'Backup & Export', controllerName: 'Export', icon: 'fa-external-link-square', operations: 'access' },
  { id: 5, moduleName: 'Backup & Export', controllerName: 'Export', icon: 'fa-eye', operations: 'access' },
  { id: 6, moduleName: 'Backup & Export', controllerName: 'Export', icon: 'fa-line-chart', operations: 'access' },
];

const ModuleSetting = () => {
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search functionality
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Handle edit and delete functionality
  const handleEdit = (id) => {
    // Placeholder for actual edit logic (e.g., opening a modal)
    console.log(`Editing item with ID: ${id}`);
    alert(`Editing item with ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
      console.log(`Deleted item with ID: ${id}`);
    }
  };

  // Tailwind CSS classes are applied directly to the elements below
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md">
        
        {/* Header and Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          <h2 className="text-2xl font-semibold text-gray-700">Module Setting</h2>
          
          <div className="flex w-full md:w-auto space-x-2">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search content here..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150"
              />
              <svg className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {/* Search Icon (SVG alternative to fa-search) */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button className="px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-150 shrink-0">
              Search
            </button>
          </div>
        </div>

        {/* Table Container (Responsive Scroll) */}
        <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Module Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Controller Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Icon</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operations</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.length > 0 ? (
                filteredData.map(item => (
                  <tr key={item.id} className="hover:bg-gray-50 transition duration-150">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.moduleName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.controllerName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <i className={`fa ${item.icon} text-lg`}></i>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.operations}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <div className="flex justify-center space-x-2">
                        {/* Edit Button */}
                        <button
                          className="text-purple-600 hover:text-purple-900 p-1.5 rounded-full hover:bg-purple-100 transition duration-150"
                          onClick={() => handleEdit(item.id)}
                          aria-label={`Edit module ${item.id}`}
                        >
                          <i className="fa fa-pencil-square-o text-lg"></i>
                        </button>
                        {/* Delete Button */}
                        <button
                          className="text-purple-600 hover:text-purple-900 p-1.5 rounded-full hover:bg-purple-100 transition duration-150"
                          onClick={() => handleDelete(item.id)}
                          aria-label={`Delete module ${item.id}`}
                        >
                          <i className="fa fa-trash text-lg"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">No entries found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer and Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm">
          <span className="text-gray-600 mb-2 sm:mb-0">
            Showing 1 to {filteredData.length} of {initialData.length} entries
          </span>
          <div className="flex items-center space-x-1">
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-100 transition duration-150">&larr;</button>
            <span className="px-3 py-1 bg-purple-600 text-white rounded-lg">1</span>
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-100 transition duration-150">&rarr;</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ModuleSetting;