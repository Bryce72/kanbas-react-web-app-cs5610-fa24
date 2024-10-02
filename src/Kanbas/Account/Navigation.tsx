import { Link, useLocation } from "react-router-dom";
import './Navigation.css'; 

export default function Navigation() {
  const location = useLocation();

  return (
    <div id="wd-account-navigation" className="nav flex-column">
      <Link
        to="/Kanbas/Account/Signin"
        className={`nav-link ${location.pathname === "/Kanbas/Account/Signin" ? "active" : ""}`}
      >
        Sign in
      </Link>
      <Link
        to="/Kanbas/Account/Signup"
        className={`nav-link ${location.pathname === "/Kanbas/Account/Signup" ? "active" :"text-danger"}`}
      >
        Sign up
      </Link>
      <Link
        to="/Kanbas/Account/Profile"
        className={`nav-link ${location.pathname === "/Kanbas/Account/Profile" ?"active" : "text-danger"}`}
      >
        Profile
      </Link>
    </div>
  );
}
