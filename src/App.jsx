
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import AddNewUser from "./pages/AddNewUser";
import RolesPermissions from "./pages/RolesPermissions";
import SigninForm from "./Components/SigninForm";
import SignupForm from "./Components/SignupForm";
import ForgotPassword from "./Components/ForgotPassword";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is logged in on mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(loggedIn);
  }, []);

  // Handler to set authentication after login/signup
  const handleAuth = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  // Handler to logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  if (!isAuthenticated) {
    // Only show SignupForm if not authenticated
    return <SignupForm onSignup={handleAuth} />;
  }

  return (
    <Router>
      <div className="flex">
        <Sidebar onLogout={handleLogout} />
        <div className="flex-1 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 bg-gray-50 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/add-user" element={<AddNewUser />} />
              <Route path="/roles" element={<RolesPermissions />} />
              <Route path="/signin" element={<SigninForm onLogin={handleAuth} />} />
              <Route path="/signup" element={<SignupForm onSignup={handleAuth} />} />
              <Route path="/forgot" element={<ForgotPassword />} />
              {/* Add more routes as needed */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
