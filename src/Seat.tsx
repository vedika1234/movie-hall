import React, { useEffect } from "react";
import { useState } from "react";

const seatAvailability = ["available", "booked", "selected"];

const Seat = ({ row, index, availability, addSeat, unselectSeat }: any) => {
  const seatId = `${row}:${index}`;
  const [bookingStatus, setBookingStatus] = useState(availability);

  const selectSeat = (seatId: string) => {
    if (bookingStatus === 0) {
      setBookingStatus(2);
      addSeat(seatId);
    } else if (bookingStatus === 2) {
      unselectSeat(seatId);
      setBookingStatus(0);
    }
  };

  useEffect(() => {
    setBookingStatus(availability);
  }, [availability]);

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
