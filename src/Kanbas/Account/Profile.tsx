import { Link } from "react-router-dom";
import './Profile.css'; 

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-4">
      <h2 className="mb-4">Profile</h2>
      <input
        id="wd-username"
        className="form-control mb-3"
        value="alice"
        placeholder="username"
      />
      <input
        id="wd-password"
        className="form-control mb-3"
        value="123"
        placeholder="password"
        type="password"
      />
      <input
        id="wd-firstname"
        className="form-control mb-3"
        value="Alice"
        placeholder="First Name"
      />
      <input
        id="wd-lastname"
        className="form-control mb-3"
        value="Wonderland"
        placeholder="Last Name"
      />
      <input
        id="wd-dob"
        className="form-control mb-3"
        value="mm/dd/yyyy"
        type="text"
        placeholder="mm/dd/yyyy"
      />
      <input
        id="wd-email"
        className="form-control mb-3"
        value="alice@wonderland.com"
        type="email"
      />
      <select id="wd-role" className="form-control mb-4">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link
        to="/Kanbas/Account/Signin"
        className="btn btn-danger btn-block"
      >
        Signout
      </Link>
    </div>
  );
}
