import { Link } from "react-router-dom";
import './Signin.css';  

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="p-4">
      <h2 className="mb-4">Sign in</h2>
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
      <Link id="wd-signin-btn" className="btn btn-primary btn-block mb-3" to="/Kanbas/Dashboard">
        Sign in
      </Link>
      <Link id="wd-signup-link" className="text-primary" to="/Kanbas/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}
