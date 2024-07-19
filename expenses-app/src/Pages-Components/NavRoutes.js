//Dependencies
import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Navigate, Route, Routes, useLocation } from "react-router-dom"; // do 'npm install react-router-dom' in terminal
//Pages
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import AboutUs from "./AboutUs";
import Profile from "./Profile";
import AddExpenseEntry from "./AddExpenseEntry";
import ExpenseForm from "./ExpenseForm";

export default function NavRoutes() {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const isLoginPage = location.pathname === ("/login" || "/Login");
  return (
    <>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/profile/:accId" element={<Profile />} />
        <Route path="/addExpense/:expId" element={<AddExpenseEntry />} />
        <Route path="/edit/:expId" element={<ExpenseForm />} />
        <Route path="/add" element={<ExpenseForm />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}
