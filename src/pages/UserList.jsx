import React, { useEffect, useState } from "react";
import { FaRegEye, FaRegEdit, FaTrashAlt } from "react-icons/fa";

// Pill component for status (unchanged)
const Pill = ({ children, color = "bg-emerald-500" }) => (
  <span
    className={`inline-flex items-center h-6 px-3 rounded-full text-white text-xs ${color}`}
  >
    {children}
  </span>
);

// Edit User Modal (unchanged)
const EditUserModal = ({ user, onClose, onSave }) => {
  const [form, setForm] = useState({ ...user });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Edit User</h2>
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
          <input
            type="text"
            name="user"
            value={form.user}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Role"
            className="w-full border rounded px-3 py-2"
            required
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
          </select>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-purple-600 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Delete User Modal (unchanged)
const DeleteUserModal = ({ user, onClose, onDelete }) => (
  <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Delete User</h2>
      <p>
        Are you sure you want to delete{" "}
        <span className="font-bold">{user.user}</span>?
      </p>
      <div className="flex justify-end gap-2 mt-6">
        <button onClick={onClose} className="px-4 py-2 rounded bg-gray-200">
          Cancel
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="px-4 py-2 rounded bg-red-600 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

// View User Modal (unchanged)
const ViewUserModal = ({ user, onClose }) => (
  <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg">
      <h2 className="text-lg font-semibold mb-4">User Details</h2>
      <div className="space-y-2">
        <div>
          <b>Name:</b> {user.user}
        </div>
        <div>
          <b>Username:</b> {user.username}
        </div>
        <div>
          <b>Email:</b> {user.email}
        </div>
        <div>
          <b>Role:</b> {user.role}
        </div>
        <div>
          <b>Status:</b> {user.status}
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded bg-purple-600 text-white"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

const seed = Array.from({ length: 7 }).map((_, i) => ({
  id: i + 1,
  user: `Hayden ${i}`,
  username: `Hayden_${i}`,
  email: `work${i}@gmail.com`,
  role: i % 2 === 0 ? "Admin" : "User",
  status: i % 3 === 0 ? "Inactive" : "Active",
}));

const UserList = () => {
  const [users, setUsers] = useState(seed);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(seed); // New state for filtered data

  const [editUser, setEditUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);
  const [viewUser, setViewUser] = useState(null);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("users") || "[]");
    if (local.length) {
      setUsers(local);
      setFilteredUsers(local); // Initialize filtered list
    }
  }, []);

  // Sync users and filteredUsers when users changes (e.g., after edit/delete)
  useEffect(() => {
    // Re-run the filter logic whenever the source `users` list changes
    handleSearch(searchTerm, users);
  }, [users]);

  // Search logic function
  const handleSearch = (term, sourceUsers = users) => {
    const lowerCaseTerm = term.toLowerCase();

    const results = sourceUsers.filter((user) => {
      // Check multiple fields for the search term
      return (
        user.user.toLowerCase().includes(lowerCaseTerm) ||
        user.username.toLowerCase().includes(lowerCaseTerm) ||
        user.email.toLowerCase().includes(lowerCaseTerm) ||
        user.role.toLowerCase().includes(lowerCaseTerm) ||
        user.status.toLowerCase().includes(lowerCaseTerm)
      );
    });

    setFilteredUsers(results);
  };

  const handleInputChange = (e) => {
    const newTerm = e.target.value;
    setSearchTerm(newTerm);
    // Live search: filter as the user types
    handleSearch(newTerm);
  };

  const handleSearchButtonClick = () => {
    // You can keep this for a more traditional search if you remove the 'live search' above
    handleSearch(searchTerm);
  };

  // Save edited user
  const handleSave = (updatedUser) => {
    const updatedUsers = users.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setEditUser(null);
  };

  // Delete user
  const handleDelete = (id) => {
    const updatedUsers = users.filter((u) => u.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setDeleteUser(null);
  };

  return (
    <div className="p-4 md:p-6">
      <div className="mb-3 text-sm text-gray-400">Home / Analytic</div>
      <h1 className="text-lg font-semibold mb-4">Dashboard</h1>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between p-4 border-b border-gray-100">
          <h2 className="font-medium">User List</h2>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="flex items-center h-9 flex-1 md:w-80 rounded-md border border-gray-200 overflow-hidden">
              <span className="px-3 text-gray-400">🔍</span>
              <input
                className="h-full flex-1 px-2 text-sm outline-none"
                placeholder="Search content here..."
                value={searchTerm} // Bind to state
                onChange={handleInputChange} // Add change handler
              />
            </div>
            <button
              className="h-9 px-4 rounded-md bg-purple-600 text-white text-sm"
              onClick={handleSearchButtonClick} // Optional: Keep for explicit button search
            >
              Search
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-gray-400">
                  <th className="text-left font-medium py-2 px-3">Id</th>
                  <th className="text-left font-medium py-2 px-3">User</th>
                  <th className="text-left font-medium py-2 px-3">Username</th>
                  <th className="text-left font-medium py-2 px-3">
                    Email Address
                  </th>
                  <th className="text-left font-medium py-2 px-3">Role</th>
                  <th className="text-left font-medium py-2 px-3">Status</th>
                  <th className="text-left font-medium py-2 px-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* RENDER THE FILTERED USERS */}
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((u, idx) => (
                    <tr key={u.id} className="border-t border-gray-100">
                      <td className="py-3 px-3">{u.id}</td>
                      <td className="py-3 px-3 text-gray-600">{u.user}</td>
                      <td className="py-3 px-3 text-gray-600">{u.username}</td>
                      <td className="py-3 px-3 text-gray-600">{u.email}</td>
                      <td className="py-3 px-3 text-purple-600">{u.role}</td>
                      <td className="py-3 px-3">
                        <Pill
                          color={
                            u.status === "Active"
                              ? "bg-emerald-500"
                              : u.status === "Inactive"
                              ? "bg-red-500"
                              : "bg-yellow-500"
                          }
                        >
                          {u.status}
                        </Pill>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-4 text-purple-600">
                          <button title="view" onClick={() => setViewUser(u)}>
                            <FaRegEye />
                          </button>
                          <button title="edit" onClick={() => setEditUser(u)}>
                            <FaRegEdit />
                          </button>
                          <button
                            title="delete"
                            onClick={() => setDeleteUser(u)}
                          >
                            <FaTrashAlt />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="py-8 text-center text-gray-500">
                      No users found matching "{searchTerm}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
            <div>
              Showing 1 to {filteredUsers.length} of {filteredUsers.length}{" "}
              entries (Total: {users.length})
            </div>
            <div className="flex items-center gap-2">
              <button className="size-7 grid place-items-center rounded-md bg-gray-100">
                ←
              </button>
              <button className="size-7 grid place-items-center rounded-md bg-purple-600 text-white">
                1
              </button>
              <button className="size-7 grid place-items-center rounded-md bg-gray-100">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals (unchanged) */}
      {editUser && (
        <EditUserModal
          user={editUser}
          onClose={() => setEditUser(null)}
          onSave={handleSave}
        />
      )}
      {deleteUser && (
        <DeleteUserModal
          user={deleteUser}
          onClose={() => setDeleteUser(null)}
          onDelete={handleDelete}
        />
      )}
      {viewUser && (
        <ViewUserModal user={viewUser} onClose={() => setViewUser(null)} />
      )}
    </div>
  );
};

export default UserList;
