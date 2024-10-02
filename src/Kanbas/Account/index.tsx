import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";

export default function Account() {
  return (
    <div id="wd-account-screen" className="container mt-5">
      <div className="row">
        {/* Left Navigation Bar */}
        <div className="col-md-3">
          <AccountNavigation />
        </div>
        <div className="col-md-9">
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
