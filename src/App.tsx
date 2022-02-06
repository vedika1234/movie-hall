import React from "react";
import { Route, Routes } from "react-router-dom";

import Billing from "./Billing";
import Hall from "./Hall";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hall />} />
        <Route path="billing" element={<Billing />} />
      </Routes>
    </div>
  );
}

export default App;
