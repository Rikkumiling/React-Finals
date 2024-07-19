import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getBudgetOnUID } from "../Services/BudgetService";
import { getExpensesOnUID } from "../Services/ExpensesService";
import { UserContext } from "../Contexts/UserContext";
import { deleteExpense } from "../Services/ExpensesService";

import dlt from "../Assets/delete.svg";
import edt from "../Assets/edit.svg";

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
          <section className="glass" id="current">
            <h1>Current Budget</h1>
            {budget &&
              budget.map((budget) => (
                <div className="budget" key={budget.id}>
                  <p className="debit">
                    PHP <span id="debitC">{budget.initial_balance}</span>
                  </p>
                </div>
              ))}
          </section>
          <section className="glass" id="total">
            <h1>Total Expenses</h1>
          </section>
        </div>

        <div className="expensesContainer">
          <h1 id="expTitle">List of Expenses</h1>
          <button className="btn" id="addExpBtn" onClick={handleAddExpense}>
            Add Expense
          </button>
          {expenses &&
            expenses.map((expense) => (
              <div className="expense" key={expense.id}>
                <div className="expLabel">
                  <h2>{expense.title}</h2>
                  <p>PHP {expense.amount}</p>
                </div>
                <div className="expUD">
                  <Link to={`/edit/${expense.id}`}>
                    <img className="edtBtn" src={edt} />
                  </Link>
                  <button className="dltBtn" onClick={() => handleDeleteExpense(expense.id)}>
                    <img className="dlt" src={dlt} />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
