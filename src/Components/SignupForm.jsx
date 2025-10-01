import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [keepUpdated, setKeepUpdated] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup:", { ...formData, keepUpdated });
    alert("Signup Successful!");
  };

  return (
    <div className="min-h-dvh grid place-items-center bg-gray-50 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-purple-500 text-white text-center py-5">
          <h2 className="text-xl font-semibold tracking-wide">Resister</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          <div className="space-y-4 flex flex-col">
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
            <button
              type="submit"
              className="h-10 w-full rounded-md bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors"
            >
              Sign Up
            </button>
          </div>

          <div className="mt-5 space-y-2 text-center text-sm text-gray-600">
            <p>
              Need an account? <a href="/signin" className="text-purple-600 font-medium">Log in</a>
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

