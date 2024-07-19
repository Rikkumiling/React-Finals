import React from "react";
import { useNavigate } from "react-router-dom";

import { logout } from "../Services/AuthService";

export default function Home() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <>
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
}
