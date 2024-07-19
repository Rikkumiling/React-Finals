import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../Services/AuthService";
import { getBudgetOnUID } from "../Services/BudgetService";
import { getExpensesOnUID } from "../Services/ExpensesService";
import { UserContext } from "../Contexts/UserContext";
import Navbar from "./Navbar";

export default function Home() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState(null);
  const [budget, setBudget] = useState(null);

  useEffect(() => {
    const fetchBudget = async () => {
      const docs = await getBudgetOnUID(user.user.uid);
      setBudget(docs);
    };
    const fetchExpenses = async () => {
      const docs = await getExpensesOnUID(user.user.uid);
      setExpenses(docs);
    };

    fetchBudget();
    fetchExpenses();
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <div className="budgetContainer">
        <h1>Current Budget</h1>
        {budget &&
          budget.map((budget) => (
            <div className="budget" key={budget.id}>
              <p>{budget.initial_balance}</p>
            </div>
          ))}
      </div>

      <div className="expensesContainer">
        <h1>Expenses</h1>
        {expenses &&
          expenses.map((expense) => (
            <div className="expense" key={expense.id}>
              <h2>{expense.title}</h2>
              <p>{expense.amount}</p>
            </div>
          ))}
      </div>

      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
}
