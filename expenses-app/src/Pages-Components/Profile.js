import React from "react";
import { logout } from "../Services/AuthService";
import { useNavigate } from "react-router-dom";

import dp from "../Assets/profile.svg";

import "./profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <section className="profilePage">
      <div>
        <p>User Profile</p>
        <img src={dp} id="dp" />
        <p>Username</p>
      </div>
      <div>
        <p>Budget</p>
        <p>Update Budget</p>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </section>
  );
}
