import React from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center min-h-dvh gap-4 bg-gray-50">
      <h1 className="text-6xl font-bold text-purple-600">404</h1>
      <p className="text-lg text-gray-600 mb-2">Page Not Found</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Error404;
