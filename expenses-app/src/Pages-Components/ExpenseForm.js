import React, { useContext, useEffect, useRef, useState } from "react";
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
  const [amount, setAmount] = useState(0);

  const { expId } = useParams();

  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updateEntry = {
      title: titleRef.current.value,
      UID: user.uid,
      amount: amount,
    };
    if (expId) {
      await updateExpense(expId, updateEntry);
    } else {
      await addExpense(updateEntry);
    }

    navigate("/Home");
  };

  const handleInputChange = () => {
    const inputValue = amountRef.current.value;
    const formattedNumber = parseInt(inputValue, 10);
    if (!isNaN(formattedNumber)) {
      setAmount(formattedNumber);
    }
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
  }, [expId, navigate]);

  return (
    <div>
      <div>
        <h1>{!expId ? "Add Expense" : "Update Expense"}</h1>
        <form onSubmit={handleUpdate}>
          <span>Title: </span>
          <input type="text" ref={titleRef} required></input>
          <span>Amount:</span>
          <input
            type="number"
            ref={amountRef}
            onChange={handleInputChange}
            required
          ></input>
          <button className="btn">
            {!expId ? "Add Expense" : "Update Expense"}
          </button>
        </form>
      </div>
    </div>
  );
}
