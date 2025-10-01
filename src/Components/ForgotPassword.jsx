import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot Password email:", email);
    alert("Reset link sent (demo)");
  };

  return (
    <div className="min-h-dvh grid place-items-center bg-gray-50 px-4 ">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-purple-500 text-white py-5 px-6">
          <h2 className="text-xl font-semibold">Forget Password</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          <div className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full h-11 rounded-md border border-gray-200 px-4 text-sm outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button
              type="submit"
              className="h-10 w-full rounded-md bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;


