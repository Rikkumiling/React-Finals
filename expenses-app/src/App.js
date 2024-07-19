import "./App.css";
import React from "react";
import { UserProvider } from "./Contexts/UserContext";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import NavRoutes from "./Pages-Components/NavRoutes";

// Use camel case for naming classes. e.g.: btnLoginContainer

function App() {

  return (
    <div className="app">
      <UserProvider>
        <BrowserRouter>
          <NavRoutes />
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
