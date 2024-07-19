import React from "react";
import "./login.css";

import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export default function Register() {
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
    <section>
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
    </section>
  );
}
