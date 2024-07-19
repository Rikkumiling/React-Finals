import React from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import { logout } from "../Services/AuthService";
//styling
import "./navbar.css";

export default function Navbar() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <nav>
      <h1>Home</h1>
    </nav>
  );
}
