import React from "react";
import "./Ticket.css";
const Ticket = ({ totalAmount, selectedSeats }: any) => {
  return (
    <>
      <div className="ticket">
        <div className="holes-top"></div>
        <div className="title">
          <p className="cinema">CINEMA PRESENTS</p>
          <p className="movie-title">RED NOTICE</p>
        </div>
        <div className="poster">
          <img
            src="https://www.koimoi.com/wp-content/new-galleries/2021/10/red-notice-actors-dwayne-johnson-gal-gadot-ryan-reynolds-expected-salary-for-their-work-will-blow-your-mind-001.jpg"
            alt="Movie: Red Notice"
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
                {selectedSeats.map((seat: string) => {
                  let splitseat = seat.split(":");
                  return <>{`${splitseat[0]}${parseInt(splitseat[1]) + 1} `}</>;
                })}
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
    </>
  );
};

export default Ticket;
