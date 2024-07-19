import React from "react";
import { useContext } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import { logout } from "../Services/AuthService";

import logo from "../Assets/logo.svg";

//styling
import "./navbar.css";

export default function Navbar() {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <nav className="navContainer">
      <div className="navBar">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h1>
            Tr<span>o</span>tter
          </h1>
        </div>
        <div className="navLinks">
          <NavLink className="listItem" to="/Home">
            Home
          </NavLink>
          <NavLink className="listItem" to="/AboutUs">
            About Us
          </NavLink>
          <NavLink className="listItem" to={`/Profile/${user.uid}`}>
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
