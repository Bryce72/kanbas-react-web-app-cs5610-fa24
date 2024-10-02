import React from "react";
import { Link } from "react-router-dom";
import './Signup.css'; 

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="p-4">
      <h2 className="mb-4">Signup</h2>
      <input
        id="wd-username"
        className="form-control mb-3"
        placeholder="username"
      />
      <input
        id="wd-password"
        className="form-control mb-3"
        placeholder="password"
        type="password"
      />
      <input
        id="wd-verify-password"
        className="form-control mb-3"
        placeholder="verify password"
        type="password"
      />
      <Link
        id="wd-signup-btn"
        className="btn btn-primary btn-block mb-3"
        to="/Kanbas/Account/Profile"
      >
        Signup
      </Link>
      <Link
        id="wd-signin-link"
        className="text-primary"
        to="/Kanbas/Account/Signin"
      >
        Signin
      </Link>
    </div>
  );
}
