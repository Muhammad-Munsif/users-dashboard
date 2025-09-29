import React, { useState } from "react";

const SigninForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Helper: Validate email format
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
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
    const user = users.find(
      (u) =>
        u.email === formData.email &&
        u.password === formData.password
    );

    if (user) {
      alert("Sign In Successful!");
      // Optionally, set user session here
      // window.location.href = "/"; // Redirect after login
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-dvh grid place-items-center bg-gray-50 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-purple-500 text-white text-center py-5">
          <h2 className="text-xl font-semibold tracking-wide">Log in</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          <div className="space-y-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full h-11 rounded-md border border-gray-200 px-4 text-sm outline-none focus:ring-2 focus:ring-purple-300"
              aria-label="Email"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full h-11 rounded-md border border-gray-200 px-4 text-sm outline-none focus:ring-2 focus:ring-purple-300"
              aria-label="Password"
              minLength={6}
            />
            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}
            <button
              type="submit"
              className="h-10 w-full rounded-md bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors"
            >
              Log In
            </button>
          </div>

          <div className="mt-5 space-y-2 text-center text-sm text-gray-600">
            <p>
              Need an account? <a href="/signup" className="text-purple-600 font-medium">Sign Up</a>
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

export default SigninForm;