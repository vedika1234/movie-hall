import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Billing from "./Billing";
import Hall from "./Hall";
import Error from "./Error";

import "./App.css";

// Have used Context APi to maintain the global state of the app.
//  Can be replaced with Redux or any other state management library as the app size increases
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
          <Route
            path="billing"
            element={selectedSeats.length ? <Billing /> : <Error />}
          />
        </Routes>
      </HallContext.Provider>
    </div>
  );
}

export default App;
