import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getBudgetOnUID } from "../Services/BudgetService";
import { getExpensesOnUID } from "../Services/ExpensesService";
import { UserContext } from "../Contexts/UserContext";
import { deleteExpense } from "../Services/ExpensesService";

// styling
import "./home.css";

export default function Home() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState(null);
  const [budget, setBudget] = useState(null);

  function handleAddExpense() {
    navigate("/add");
  }

  const handleDeleteExpense = async (id) => {
    await deleteExpense(id);
  };

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
  }, [user.user.uid]);

  return (
    <>
      <div className="homeContent">
        <div className="budgetContainer">
          <h1>Current Budget</h1>
          {budget &&
            budget.map((budget) => (
              <div className="budget" key={budget.id}>
                <p>PHP {budget.initial_balance}</p>
              </div>
            ))}

          <h1>Total Expenses</h1>
        </div>

        <div className="expensesContainer">
          <h1>Expenses</h1>
          {expenses &&
            expenses.map((expense) => (
              <div className="expense" key={expense.id}>
                <h2>{expense.title}</h2>
                <p>PHP {expense.amount}</p>
                <Link to={`/edit/${expense.id}`}>Edit Expense</Link>
                <button onClick={() => handleDeleteExpense(expense.id)}>
                  Delete Expense
                </button>
              </div>
            ))}
        </div>
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
    </>
  );
}
