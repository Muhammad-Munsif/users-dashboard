import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [keepUpdated, setKeepUpdated] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Helper: Validate email format
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }
    if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const exists = users.some((u) => u.email === formData.email);

    if (exists) {
      setError("An account with this email already exists.");
      return;
    }

    // Save new user
    const newUser = {
      ...formData,
      keepUpdated,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setSuccess("Signup Successful! You can now log in.");
    setFormData({ name: "", email: "", password: "" });
    setKeepUpdated(false);
  };

  return (
    <div className="min-h-dvh grid place-items-center bg-gray-50 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-purple-500 text-white text-center py-5">
          <h2 className="text-xl font-semibold tracking-wide">Register</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full h-11 rounded-md border border-gray-200 px-4 text-sm outline-none focus:ring-2 focus:ring-purple-300"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full h-11 rounded-md border border-gray-200 px-4 text-sm outline-none focus:ring-2 focus:ring-purple-300"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full h-11 rounded-md border border-gray-200 px-4 text-sm outline-none focus:ring-2 focus:ring-purple-300"
              minLength={6}
            />
            <label className="flex items-center gap-2 text-sm text-gray-600 select-none">
              <input
                type="checkbox"
                checked={keepUpdated}
                onChange={(e) => setKeepUpdated(e.target.checked)}
                className="size-4 rounded border-gray-300"
              />
              Keep me up to date
            </label>
            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}
            {success && (
              <div className="text-green-600 text-sm">{success}</div>
            )}
            <button
              type="submit"
              className="h-10 w-full rounded-md bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors"
            >
              Sign Up
            </button>
          </div>

          <div className="mt-5 space-y-2 text-center text-sm text-gray-600">
            <p>
              Already have an account? <a href="/signin" className="text-purple-600 font-medium">Log in</a>
            </p>
            <p>
              <a href="/forgot" className="hover:underline">Forget Password?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;