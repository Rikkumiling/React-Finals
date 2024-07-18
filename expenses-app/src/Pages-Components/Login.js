import React from "react";
import logo from "../Assets/logo.svg";
import "./login.css";

import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export default function Login() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  //test username: Rikku
  const [password, setPassword] = useState("");
  //test password: Test

  const Validate = async (e) => {
    e.preventDefault();
    try {
      const querySnapshot = await getDocs(collection(db, "accounts"));
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData.username === username && userData.password === password) {
          setLogin(true);
          console.log("logged in");
        } else {
          alert("Invalid username or password");
        }
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <section className="content">
      <div className="login">
        <h1>Login</h1>
        <form>
          <div>
            <input
              className="inputBox"
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              className="inputBox"
              type="text"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button className="loginBtn" onClick={Validate}>
            Login
          </button>
        </form>
        <p id="regText">
          Don't have an account? <button id="regBtn">Sign Up</button>
        </p>
      </div>
      <div>
        <img src={logo} alt="logo" className="loginLogo" />
        <h1 className="name">
          Tr<span>o</span>tter
        </h1>
        <p>Your Little Treasure Tracker.</p>
      </div>
    </section>
  );
}
