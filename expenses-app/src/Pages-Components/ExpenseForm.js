import React, { useContext, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  updateExpense,
  getExpense,
  addExpense,
} from "../Services/ExpensesService";
import { UserContext } from "../Contexts/UserContext";

export default function ExpenseForm() {
  const titleRef = useRef();
  const amountRef = useRef();

  const { expId } = useParams();

  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updateEntry = {
      title: titleRef.current.value,
      UID: user.uid,
      amount: amountRef.current.value,
    };
    if (expId) {
      await updateExpense(expId, updateEntry);
    } else {
      await addExpense(updateEntry);
    }

    navigate("/Home");
  };

  useEffect(() => {
    if (expId) {
      getExpense(expId).then((snapshot) => {
        const expenseSnap = snapshot.data();
        if (expenseSnap) {
          titleRef.current.value = expenseSnap.title;
          amountRef.current.value = expenseSnap.amount;
        } else {
          navigate("/Home");
        }
      });
    }
  }, []);

  return (
    <div>
      <div>
        <h1>{!expId ? "Add Expense" : "Update Expense"}</h1>
        <form onSubmit={handleUpdate}>
          <span>Title: </span>
          <input type="text" ref={titleRef} required></input>
          <span>Amount:</span>
          <input type="number" ref={amountRef} required></input>
          <button className="btn">
            {!expId ? "Add Expense" : "Update Expense"}
          </button>
        </form>
      </div>
    </div>
  );
}
