import React, { useEffect } from "react";
import { useState } from "react";

const seatAvailability = ["available", "booked", "selected"];

const Seat = ({ row, index, availability, addSeat, unselectSeat }: any) => {
  const seatId = row + index;
  const [bookingStatus, setBookingStatus] = useState(availability);

  const selectSeat = (seatId: string) => {
    console.log(availability);
    if (availability === 0) {
      setBookingStatus(2);
      addSeat(seatId);
    } else if (availability === 2) {
      unselectSeat(seatId);
      setBookingStatus(0);
    }
  };

  useEffect(() => {
    //
  }, [bookingStatus]);

  return (
    <div
      className={`seat seat-${seatAvailability[bookingStatus]}`}
      key={seatId}
      style={{ cursor: availability ? "" : "pointer" }}
      onClick={() => selectSeat(seatId)}
    >
      {[row]}
      {index + 1}
    </div>
  );
};

export default Seat;
