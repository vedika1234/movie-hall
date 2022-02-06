import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { HallContext } from "./App";

const Billing = () => {
  const { seatsData, timerData, billData } = useContext(HallContext);
  const navigate = useNavigate();

  const [selectedSeats] = seatsData;
  const [totalAmount] = billData;
  const [timer, setTimer] = timerData;

  const confirmBill = () => {
    let currentTime: any = new Date();
    if (currentTime.getMinutes() - timer.getMinutes() <= 5) {
      alert("Meet you at the theater!");
      // api call to book seats
    } else {
      alert("Sorry, you are late. Please select the seats again");
      navigate("/");
    }
  };

  return (
    <>
      {/* {selectedSeats.map((seat: string) => (
        <>seat</>
      ))} */}

      {totalAmount}

      {<button onClick={confirmBill}>Proceed</button>}
    </>
  );
};

export default Billing;
