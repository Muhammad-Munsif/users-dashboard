import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import AddNewUser from "./pages/AddNewUser";
import AdminList from "./pages/AdminList";
import AddNewAdmin from "./pages/AddNewAdmin";
import SigninForm from "./Components/SigninForm";
import SignupForm from "./Components/SignupForm";
import ForgotPassword from "./Components/ForgotPassword";
import RolesPermissions from "./pages/RolesPermissions";
import Error404 from "./Components/Error404";
import ModuleSetting from "./Components/ModuleSetting";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <div className="md:ml-64 min-h-dvh bg-gray-50 overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/*" element={<Home />} />
            {/* User routes */}
            <Route path="/users" element={<UserList />} />
            <Route path="/users/new" element={<AddNewUser />} />
            {/* Admin routes */}
            <Route path="/admins" element={<AdminList />} />
            <Route path="/admins/new" element={<AddNewAdmin />} />
            {/* Auth routes */}
            <Route path="/signin" element={<SigninForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            {/* Other */}
            <Route path="/roles" element={<RolesPermissions />} />
            <Route path="/module-setting" element={<ModuleSetting />} />
            {/* 404 */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
