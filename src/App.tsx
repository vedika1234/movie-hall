import React, { createContext } from "react";
import { Route, Routes } from "react-router-dom";

import Hall from "./Hall";

// import logo from "./logo.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hall />} />
      </Routes>
    </div>
  );
}

export default App;
