import React from "react";
import { useNavigate } from "react-router-dom";

import { logout } from "../Services/AuthService";
import Navbar from "./Navbar";

export default function Home() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <>
      <Navbar />
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
}
