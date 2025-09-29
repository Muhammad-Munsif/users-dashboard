import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import SigninForm from "./Components/SigninForm";
import SignupForm from "./Components/SignupForm";
import RolesPermissions from "./pages/RolesPermissions";
import UserList from "./pages/UserList";
import ForgotPassword from "./Components/ForgotPassword";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <div className="md:ml-64 min-h-dvh bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SigninForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/roles" element={<RolesPermissions />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
