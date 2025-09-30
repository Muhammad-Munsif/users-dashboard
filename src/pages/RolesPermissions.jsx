import React, { useState } from "react";
import {
  FaRegEye,
  FaRegEdit,
  FaTrashAlt,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const initialRoles = [
  { id: 1, role: "Super Admin", status: "active" },
  { id: 2, role: "Admin", status: "pending" },
  { id: 3, role: "Accountant", status: "pending" },
  { id: 4, role: "Operator", status: "inactive" },
];

const StatusDot = ({ status }) => {
  const color =
    status === "active"
      ? "bg-purple-600"
      : status === "pending"
      ? "bg-orange-500"
      : "bg-gray-300";
  return (
    <div className="flex items-center gap-3">
      <span className={`relative inline-flex items-center`}>
        <span className={`size-2.5 rounded-full ${color}`}></span>
        <span className="ml-2 w-9 h-4 rounded-full bg-gray-100" />
      </span>
    </div>
  );
};

const RolesPermissions = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ role: "", status: "active" });

  const handleEdit = (role) => {
    setEditId(role.id);
    setEditData({ role: role.role, status: role.status });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (id) => {
    setRoles((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, role: editData.role, status: editData.status } : r
      )
    );
    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      setRoles((prev) => prev.filter((r) => r.id !== id));
    }
  };

  const handleView = (role) => {
    alert(`Role: ${role.role}\nStatus: ${role.status}`);
  };

  return (
    <div className="p-4 md:p-6">
      <div className="mb-3 text-sm text-gray-400">Home / Analytic</div>
      <h1 className="text-lg font-semibold mb-4">Dashboard</h1>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between p-4 border-b border-gray-100">
          <h2 className="font-medium">Role & Permissions</h2>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="flex items-center h-9 flex-1 md:w-80 rounded-md border border-gray-200 overflow-hidden">
              <span className="px-3 text-gray-400">🔍</span>
              <input
                className="h-full flex-1 px-2 text-sm outline-none"
                placeholder="Search content here..."
              />
            </div>
            <button className="h-9 px-4 rounded-md bg-purple-600 text-white text-sm">
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
                  <th className="text-left font-medium py-2 px-3">
                    Admin Role
                  </th>
                  <th className="text-left font-medium py-2 px-3">Status</th>
                  <th className="text-left font-medium py-2 px-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((r) => (
                  <tr key={r.id} className="border-t border-gray-100">
                    <td className="py-3 px-3">{r.id}</td>
                    <td className="py-3 px-3 text-gray-500">
                      {editId === r.id ? (
                        <input
                          type="text"
                          name="role"
                          value={editData.role}
                          onChange={handleEditChange}
                          className="border px-2 py-1 rounded w-32"
                        />
                      ) : (
                        r.role
                      )}
                    </td>
                    <td className="py-3 px-3">
                      {editId === r.id ? (
                        <select
                          name="status"
                          value={editData.status}
                          onChange={handleEditChange}
                          className="border px-2 py-1 rounded"
                        >
                          <option value="active">Active</option>
                          <option value="pending">Pending</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      ) : (
                        <StatusDot status={r.status} />
                      )}
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-4 text-purple-600">
                        {editId === r.id ? (
                          <>
                            <button
                              title="update"
                              onClick={() => handleUpdate(r.id)}
                              className="text-green-600"
                            >
                              <FaCheck />
                            </button>
                            <button
                              title="cancel"
                              onClick={handleCancel}
                              className="text-gray-400"
                            >
                              <FaTimes />
                            </button>
                          </>
                        ) : (
                          <>
                            <button title="view" onClick={() => handleView(r)}>
                              <FaRegEye />
                            </button>
                            <button title="edit" onClick={() => handleEdit(r)}>
                              <FaRegEdit />
                            </button>
                            <button
                              title="delete"
                              onClick={() => handleDelete(r.id)}
                            >
                              <FaTrashAlt />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
            <div>
              Showing 1 to {roles.length} of {roles.length} entries
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
    </div>
  );
};

export default RolesPermissions;
