import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { HallContext } from "./App";

import "./Billing.css";

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
    <div className="billing-screen">
      {/* {selectedSeats.map((seat: string) => (
        <>seat</>
      ))} */}

      {totalAmount}

      <button onClick={confirmBill}>Proceed</button>

      <div className="ticket">
        <div className="holes-top"></div>
        <div className="title">
          <p className="cinema">ODEON CINEMA PRESENTS</p>
          <p className="movie-title">ONLY GOD FORGIVES</p>
        </div>
        <div className="poster">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/25240/only-god-forgives.jpg"
            alt="Movie: Only God Forgives"
          />
        </div>
        <div className="info">
          <table>
            <tr>
              <th>SCREEN</th>
              <th>Seats</th>
            </tr>
            <tr>
              <td className="bigger">18</td>
              <td>
                {selectedSeats.map((seat: string) => (
                  <>{seat}</>
                ))}
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <th>PRICE</th>
              <th>DATE</th>
              <th>TIME</th>
            </tr>
            <tr>
              <td>₹{totalAmount}</td>
              <td>1/13/17</td>
              <td>19:30</td>
            </tr>
          </table>
        </div>
        <div className="holes-lower"></div>
      </div>
    </div>
  );
};

export default Billing;
