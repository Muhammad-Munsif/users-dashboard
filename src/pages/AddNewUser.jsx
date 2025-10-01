import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initial = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  password: "",
  role: "Admin",
};

const AddNewUser = () => {
  const [form, setForm] = useState(initial);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("users") || "[]");
    const newUser = {
      id: existing.length + 1,
      user: form.firstName || form.username,
      username: form.username,
      email: form.email,
      role: form.role,
      status: "Active",
    };
    localStorage.setItem("users", JSON.stringify([...existing, newUser]));
    navigate("/users");
  };

  return (
    <div className="p-4 md:p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl border border-gray-100 shadow-sm p-10"
      >
        <h2 className="text-lg text-gray-800 font-semibold mb-4">
          Add New User
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            className="h-11 rounded-md border border-gray-200 px-4 text-sm outline-none"
          />
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="h-11 rounded-md border border-gray-200 px-4 text-sm outline-none"
          />
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="h-11 rounded-md border border-gray-200 px-4 text-sm outline-none"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            type="email"
            className="h-11 rounded-md border border-gray-200 px-4 text-sm outline-none"
          />
          <input
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="Mobile No"
            className="h-11 rounded-md border border-gray-200 px-4 text-sm outline-none"
          />
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            type="password"
            className="h-11 rounded-md border border-gray-200 px-4 text-sm outline-none"
          />
          <input
            name="email2"
            value={form.email2 || ""}
            onChange={handleChange}
            placeholder="Email"
            className="h-11 rounded-md border border-gray-200 px-4 text-sm outline-none"
          />
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="h-11 rounded-md border border-gray-200 px-3 text-sm outline-none"
          >
            <option>Admin</option>
            <option>Super Admin</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-6 w-full h-11 rounded-md bg-indigo-600 text-white"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddNewUser;
