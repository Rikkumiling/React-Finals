import React from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { create_user } from "../Services/AuthService";

//styling
import "./login.css";

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await create_user(emailRef.current.value, passwordRef.current.value);
      alert("User Successfully made");
      navigate("/");
      setIsPending(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return (
    <section className="content">
      <h1>
        Register to Tr<span>o</span>tter
      </h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="inputBox"
              type="email"
              placeholder="email"
              ref={emailRef}
            ></input>
          </div>
          <div>
            <input
              className="inputBox"
              type="password"
              placeholder="Password"
              ref={passwordRef}
            ></input>
          </div>
          {!isPending && <button className="btn">sign up</button>}
          {isPending && (
            <button className="btn" disabled>
              loading
            </button>
          )}
          {error && <p>{error}</p>}
        </form>
        <p id="regText">
          Go back to{" "}
          <NavLink id="regBtn" to="/Login">
            Login
          </NavLink>
        </p>
      </div>
    </section>
  );
}
