import { React, useState } from "react";
import { ChevronDown } from "lucide-react";
import CardHeader from "./CardHeader";

const MemberMail = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "Role",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending invitation for:", formData);
    // In a real app, you would handle API submission here
  };

  // Placeholder URL for the custom illustration
  const ILLUSTRATION_URL =
    "https://placehold.co/180x150/FFFFFF/5B6CFF?text=Invite+Illustration";

  return (
    <div className="bg-white rounded-xl shadow-lg h-full overflow-hidden">
      <CardHeader title="Member request to mail." />
      <div className="p-6 flex flex-col items-center">
        {/* Illustration Section */}
        <div className="w-full mb-6">
          <img
            src={ILLUSTRATION_URL}
            alt="Person sending mail illustration"
            className="w-full max-w-xs mx-auto object-contain"
            // Simple fallback if image loading fails
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/180x150/FFFFFF/8B5CF6?text=Invite+Illustration";
            }}
          />
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 ">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="flex-1 px-4 w-[50%] py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="flex-1 px-4 w-[50%] py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            required
          />

          {/* Role Dropdown Mock */}
          <div className="relative">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={`appearance-none w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition ${
                formData.role === "Role" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              <option disabled value="Role">
                Role
              </option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 text-white font-semibold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition duration-300 shadow-md shadow-indigo-300 active:scale-[0.99]"
          >
            Send The Invitation Link
          </button>
        </form>
      </div>
    </div>
  );
};
export default MemberMail;
