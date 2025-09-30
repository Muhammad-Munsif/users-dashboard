import React, { useState } from 'react';
import './ModuleSetting.css'; // Assuming you have a CSS file for styling

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
    // Implement edit logic here, e.g., open a modal or navigate to an edit page
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

  return (
    <div className="module-setting-container">
      <div className="header">
        <h2>Module Setting</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search content here..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="search-button">Search</button>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Module Name</th>
              <th>Controller Name</th>
              <th>Icon</th>
              <th>Operations</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.moduleName}</td>
                  <td>{item.controllerName}</td>
                  <td><i className={`fa ${item.icon}`}></i></td>
                  <td>{item.operations}</td>
                  <td className="actions">
                    <button className="edit-button" onClick={() => handleEdit(item.id)}>
                      <i className="fa fa-pencil-square-o"></i>
                    </button>
                    <button className="delete-button" onClick={() => handleDelete(item.id)}>
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No entries found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="footer">
        <span className="entries-info">
          Showing 1 to {filteredData.length} of {filteredData.length} entries
        </span>
        <div className="pagination">
          <button>&larr;</button>
          <span className="page-number">1</span>
          <button>&rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default ModuleSetting;