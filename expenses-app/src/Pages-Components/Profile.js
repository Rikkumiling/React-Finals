import React from "react";

import { logout } from "../Services/AuthService";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Profile() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <div>
      <p>Profile</p>
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
