import React from "react";
import Navbar from "./Navbar";

//styling
import "./aboutUs.css";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <section className="ABtext">
        <p>
          Welcome to Trotter, your go-to expenses tracking app designed to
          simplify your financial management and help you achieve your financial
          goals.
        </p>
        <p>
          Our app is built with a user-friendly interface that makes it easy for
          you to list down expenses.
        </p>
        <p>
          Be it traversing the stars or collecting debt, Trotter will be here.
        </p>
      </section>
    </div>
  );
}
