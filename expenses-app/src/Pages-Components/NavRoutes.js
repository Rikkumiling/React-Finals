//Dependencies
import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Navigate, Route, Routes } from "react-router-dom"; // do 'npm install react-router-dom' in terminal
//Pages
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import AboutUs from "./AboutUs";
import Profile from "./Profile";
import AddExpenseEntry from "./AddExpenseEntry";
import UpdateExpenseEntry from "./UpdateExpenseEntry";

export default function NavRoutes() {
  const { user } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Login />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Profile/:accId" element={<Profile />} />
      <Route path="/AddExpense/:expId" element={<AddExpenseEntry />} />
      <Route path="/UpdateExpense/:expId" element={<UpdateExpenseEntry />} />
    </Routes>
  );
}
