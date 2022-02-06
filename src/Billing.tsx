import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { HallContext } from "./App";

import "./Billing.css";
import Ticket from "./Ticket";

const Billing = () => {
  const { seatsData, timerData, billData } = useContext(HallContext);
  const navigate = useNavigate();

  const [selectedSeats] = seatsData;
  const [totalAmount] = billData;
  const [timer, setTimer] = timerData;

  const [showTicket, setShowTicket] = useState<boolean>(false);

  const confirmBill = () => {
    let currentTime: any = new Date();
    // Timer to check if the current time has exceeded the session time
    if (currentTime.getMinutes() - timer.getMinutes() <= 5) {
      setShowTicket(true);
      alert("Meet you at the theater!");
      // api call to book seats
    } else {
      alert("Sorry, you are late. Please select the seats again");
      navigate("/");
    }
  };

  return (
    <div className="billing-screen">
      {showTicket ? (
        <Ticket totalAmount={totalAmount} selectedSeats={selectedSeats} />
      ) : (
        <div className="bill">
          <p>BOOKING SUMMARY</p>
          <table className="bill-table">
            <tr>
              {/* More rows containing data regarding taxes and total can be added */}
              <td>Subtotal: </td>
              <td>₹{totalAmount}</td>
            </tr>
          </table>
          <button onClick={confirmBill}>Proceed to Pay</button>
        </div>
      )}
    </div>
  );
};

export default Billing;
