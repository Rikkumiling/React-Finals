import React from "react";
import "./login.css";

export default function Register() {
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
