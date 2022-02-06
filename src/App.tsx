import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Billing from "./Billing";
import Hall from "./Hall";

import "./App.css";

export const HallContext = createContext<any>("");

function App() {
  const [selectedSeats, setSelectedSeats] = useState<Array<string>>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [timer, setTimer] = useState<Date>(new Date());
  return (
    <div className="App">
      <HallContext.Provider
        value={{
          seatsData: [selectedSeats, setSelectedSeats],
          billData: [totalAmount, setTotalAmount],
          timerData: [timer, setTimer],
        }}
      >
        <Routes>
          <Route path="/" element={<Hall />} />
          <Route path="billing" element={<Billing />} />
        </Routes>
      </HallContext.Provider>
    </div>
  );
}

export default App;
