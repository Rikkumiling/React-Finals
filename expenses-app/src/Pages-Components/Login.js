import React from "react";
import logo from "../Assets/logo.svg";
import "./login.css";

export default function Login() {
  return (
    <section className="content">
      <div className="login">
        DITO YUNG LOGIN AREA. LIKE YUNG FORMS AND STUFF
      </div>
      <div>
      <img src={logo} alt="logo" className="loginLogo" />
      <h1 className="name">Name of app</h1>
      <p>tagline</p>
      </div>
    </section>
  );
}
