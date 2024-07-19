import React from "react";
import logo from "../Assets/logo.svg";

import { useState, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom"; // do 'npm install react-router-dom' in terminal
import { login } from "../Services/AuthService";

//styling
import "./login.css";

export default function Login() {
  const email = useRef(); // Test email: Rikku@email.com
  // Test email#2: Register@email.com
  const password = useRef(); // Test Password: Testing
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    login(email.current.value, password.current.value)
      .then(() => {
        setIsPending(false);
        navigate("/home");
      })
      .catch((error) => {
        // Handle Errors here.
        setIsPending(false);
        setError(error.message);
      });
  };

  return (
    <section className="content">
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="inputBox"
              type="email"
              placeholder="Email"
              ref={email}
            ></input>
          </div>
          <div>
            <input
              className="inputBox"
              type="password"
              placeholder="Password"
              ref={password}
            ></input>
          </div>
          {!isPending && <button className="btn">Login</button>}
          {isPending && (
            <button className="btn" disabled>
              loading
            </button>
          )}
          {error && <p>{error}</p>}
        </form>
        <p id="regText">
          Don't have an account?{" "}
          <NavLink id="regBtn" to="/Register">
            {" "}
            Register{" "}
          </NavLink>
        </p>
      </div>
      <div className="loginText">
        <img src={logo} alt="logo" className="loginLogo" />
        <h1 className="name">
          Tr<span>o</span>tter
        </h1>
        <p>Your Little Treasure Tracker.</p>
      </div>
    </section>
  );
}
