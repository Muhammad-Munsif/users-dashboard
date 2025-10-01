import React, { useEffect, useState } from "react";

// --- SVG Icons (Used instead of react-icons/fa for environment compatibility) ---

// Eye Icon (View)
const EyeIcon = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

// Edit Icon
const EditIcon = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    />
  </svg>
);

// Trash/Delete Icon
const TrashIcon = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

// --- Components ---

// Pill component for status
const Pill = ({ children }) => {
  let statusColor = "";
  if (children === "Active") statusColor = "bg-emerald-500";
  else if (children === "Inactive") statusColor = "bg-red-500";
  else if (children === "Pending") statusColor = "bg-amber-500";

  return (
    <span
      className={`inline-flex items-center h-6 px-3 rounded-full text-white text-xs font-medium ${statusColor}`}
    >
      {children}
    </span>
  );
};

// Edit User Modal
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
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Edit User Admin
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
          {/* Full Name */}
          <input
            type="text"
            name="user"
            value={form.user}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-purple-500 focus:border-purple-500 transition"
            required
          />
          {/* Username */}
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-purple-500 focus:border-purple-500 transition"
            required
          />
          {/* Email */}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-purple-500 focus:border-purple-500 transition"
            required
          />
          {/* Role */}
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Role"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-purple-500 focus:border-purple-500 transition"
            required
          />
          {/* Status Select */}
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-purple-500 focus:border-purple-500 transition"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
          </select>
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Delete User Modal
const DeleteUserModal = ({ user, onClose, onDelete }) => (
  <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-2xl text-center">
      <TrashIcon className="size-8 text-red-500 mx-auto mb-4" />
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Confirm Deletion
      </h2>
      <p className="text-gray-600">
        Are you sure you want to delete user{" "}
        <span className="font-bold text-purple-600">{user.user}</span>? This
        action cannot be undone.
      </p>
      <div className="flex justify-center gap-3 mt-6">
        <button
          onClick={onClose}
          className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
        >
          Cancel
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="px-6 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
        >
          Yes, Delete
        </button>
      </div>
    </div>
  </div>
);

// View User Modal
const ViewUserModal = ({ user, onClose }) => (
  <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-2xl">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">
        User Details
      </h2>
      <div className="space-y-3 text-gray-700">
        <div className="flex justify-between">
          <b className="font-medium text-gray-500">Full Name:</b>
          <span>{user.user}</span>
        </div>
        <div className="flex justify-between">
          <b className="font-medium text-gray-500">Username:</b>
          <span>{user.username}</span>
        </div>
        <div className="flex justify-between">
          <b className="font-medium text-gray-500">Email:</b>
          <span>{user.email}</span>
        </div>
        <div className="flex justify-between">
          <b className="font-medium text-gray-500">Role:</b>
          <span className="text-purple-600 font-medium">{user.role}</span>
        </div>
        <div className="flex justify-between items-center">
          <b className="font-medium text-gray-500">Status:</b>
          <Pill>{user.status}</Pill>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button
          onClick={onClose}
          className="px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

// --- Main Component ---

const seed = Array.from({ length: 7 }).map((_, i) => ({
  id: i + 1,
  user: `Hayden ${i + 1}`,
  username: `hayden_${i + 1}`,
  email: `user_${i + 1}@example.com`,
  role: i % 2 === 0 ? "Admin" : "Editor",
  status: i % 3 === 0 ? "Inactive" : i % 3 === 1 ? "Active" : "Pending",
}));

const AdminList = () => {
  const [users, setUsers] = useState(seed);
  const [editUser, setEditUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);
  const [viewUser, setViewUser] = useState(null);

  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Adding extra seed data for a richer example table
    const tempUsers = [
      ...seed,
      {
        id: 8,
        user: "Jane Doe",
        username: "jane_d",
        email: "jane@test.com",
        role: "Manager",
        status: "Active",
      },
      {
        id: 9,
        user: "Mike Smith",
        username: "mikes",
        email: "mike@test.com",
        role: "Viewer",
        status: "Pending",
      },
      {
        id: 10,
        user: "Alice Johnson",
        username: "alice_j",
        email: "alice@company.net",
        role: "Admin",
        status: "Active",
      },
    ];
    setUsers(tempUsers);
  }, []);

  // Filtered Users Logic (Calculated whenever 'users' or 'searchTerm' changes)
  const filteredUsers = users.filter((u) => {
    const term = searchTerm.toLowerCase();

    // Check if the search term matches ID, User, Username, Email, Role, or Status
    return (
      String(u.id).includes(term) ||
      u.user.toLowerCase().includes(term) ||
      u.username.toLowerCase().includes(term) ||
      u.email.toLowerCase().includes(term) ||
      u.role.toLowerCase().includes(term) ||
      u.status.toLowerCase().includes(term)
    );
  });

  // Save edited user
  const handleSave = (updatedUser) => {
    const updatedUsers = users.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    );
    setUsers(updatedUsers);
    setEditUser(null);
  };

  // Delete user
  const handleDelete = (id) => {
    const updatedUsers = users.filter((u) => u.id !== id);
    setUsers(updatedUsers);
    setDeleteUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <div className="mb-3 text-sm text-gray-400">Home / Analytic</div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h1>

      <div className="bg-white rounded-xl border border-gray-100 shadow-xl overflow-hidden">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">User List</h2>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="flex items-center h-9 flex-1 md:w-80 rounded-lg border border-gray-300 overflow-hidden shadow-sm">
              <span className="px-3 text-gray-400">🔍</span>
              <input
                className="h-full flex-1 px-2 text-sm outline-none"
                placeholder="Search by name, role, email, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Search button is kept but filtering is done on input change */}
            <button
              className="h-9 px-4 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition"
              onClick={() => console.log("Search performed for:", searchTerm)}
            >
              Search
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-gray-500 bg-gray-50 border-b">
                  <th className="text-left font-semibold py-3 px-3 rounded-tl-lg">
                    Id
                  </th>
                  <th className="text-left font-semibold py-3 px-3">User</th>
                  <th className="text-left font-semibold py-3 px-3">
                    Username
                  </th>
                  <th className="text-left font-semibold py-3 px-3">
                    Email Address
                  </th>
                  <th className="text-left font-semibold py-3 px-3">Role</th>
                  <th className="text-left font-semibold py-3 px-3">Status</th>
                  <th className="text-left font-semibold py-3 px-3 rounded-tr-lg">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-6 text-gray-500">
                      No users found matching "{searchTerm}".
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((u) => (
                    <tr
                      key={u.id}
                      className="border-t border-gray-100 hover:bg-gray-50 transition"
                    >
                      <td className="py-3 px-3 font-medium text-gray-800">
                        {u.id}
                      </td>
                      <td className="py-3 px-3 text-gray-600">{u.user}</td>
                      <td className="py-3 px-3 text-gray-600">{u.username}</td>
                      <td className="py-3 px-3 text-gray-600">{u.email}</td>
                      <td className="py-3 px-3 font-medium text-purple-600">
                        {u.role}
                      </td>
                      <td className="py-3 px-3">
                        <Pill>{u.status}</Pill>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-4 text-purple-600">
                          {/* View Button */}
                          <button
                            title="View Details"
                            onClick={() => setViewUser(u)}
                            className="hover:text-purple-800 transition size-4"
                          >
                            <EyeIcon />
                          </button>
                          {/* Edit Button */}
                          <button
                            title="Edit User"
                            onClick={() => setEditUser(u)}
                            className="hover:text-purple-800 transition size-4"
                          >
                            <EditIcon />
                          </button>
                          {/* Delete Button */}
                          <button
                            title="Delete User"
                            onClick={() => setDeleteUser(u)}
                            className="hover:text-red-600 transition size-4"
                          >
                            <TrashIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-4 text-xs text-gray-500 border-t pt-4">
            <div>
              Showing {filteredUsers.length > 0 ? 1 : 0} to{" "}
              {filteredUsers.length} of {users.length} total entries
            </div>
            {/* Pagination controls (Non-functional, visual only) */}
            <div className="flex items-center gap-2">
              <button className="size-8 grid place-items-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
                &larr;
              </button>
              <button className="size-8 grid place-items-center rounded-lg bg-purple-600 text-white font-medium shadow-md">
                1
              </button>
              <button className="size-8 grid place-items-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
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

export default AdminList;
