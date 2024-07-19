//Dependencies
import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Navigate, Route, Routes } from "react-router-dom"; // do 'npm install react-router-dom' in terminal
//Pages
import Home from "./Home";
import Login from "./Login";

export default function NavRoutes() {
  const { user } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Login />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}
