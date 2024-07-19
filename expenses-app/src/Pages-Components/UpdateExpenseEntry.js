import React, { useEffect, useState } from "react";
import { user } from "../Services/AuthService";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase/config";
import { updateExpense, getExpense } from "../Services/ExpensesService";

export default function UpdateExpenseEntry() {
  const { expID } = useParams();
  const [expense, setExpense] = useState(null);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    let updateEntry = {
      title: title,
      UID: expense.id,
      amount: amount,
    };
    updateExpense(expID, updateEntry);
    navigate("/Home");
  };

  useEffect(() => {
    getExpense(expID).then((snapshot) => {
      setExpense(snapshot.data());
      setTitle(expense.title);
      setAmount(expense.amount);
    });
  }, [expense]);

  return (
    <div>
      <div key={expense.id}>
        <form onSubmit={handleUpdate()}>
          <span>Title: </span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          ></input>
          <span>Amount:</span>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            required
          ></input>
        </form>
      </div>
    </div>
  );
}
