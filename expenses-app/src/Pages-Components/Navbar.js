import React from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import { logout } from "../Services/AuthService";

import logo from "../Assets/logo.svg";

//styling
import "./navbar.css";

export default function Navbar() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <nav className="navContainer">
      <div className="navBar">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h1>Trotter</h1>
        </div>
        <div className="navLinks">
          <h1>Home</h1>
          <h1>About Us</h1>
          <h1>Logout</h1>
        </div>
      </div>
    </nav>
  );
}
