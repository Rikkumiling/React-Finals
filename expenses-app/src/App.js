import "./App.css";
import React from "react";
import { UserProvider } from "./Contexts/UserContext";
import { BrowserRouter } from "react-router-dom";

import NavRoutes from "./Pages-Components/NavRoutes";
import Navbar from "./Pages-Components/Navbar";

// Use camel case for naming classes. e.g.: btnLoginContainer

function App() {
  return (
    <div className="app">
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <NavRoutes />
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
