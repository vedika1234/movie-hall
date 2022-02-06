import React, { useContext, useEffect, useState } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { HallContext } from "./App";
import Seat from "./Seat";

const Hall = () => {
  const { seatsData, billData, timerData } = useContext(HallContext);

  const [selectedSeats, setSelectedSeats] = seatsData;
  const [totalAmount, setTotalAmount] = billData;
  const [timer, setTimer] = timerData;

  const navigate = useNavigate();

  const [hallStructure, setHallstructure] = useState<any>({
    A: {
      seats: [0, 0, 0, 0, -1, 0, 0, 0, 0],
      price: 150,
    },
    B: {
      seats: [0, 0, 0, 0, -1, 0, 0, 0, 0],
      price: 150,
    },
    C: {
      seats: [0, 1, 0, 0, -1, 1, 0, 1, 0],
      price: 150,
    },
    D: {
      seats: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      price: 250,
    },
  });

  const addSeat = useCallback(
    (seatId) => {
      setSelectedSeats([...selectedSeats, seatId]);
    },
    [selectedSeats]
  );

  const unselectSeat = useCallback(
    (seatId) => {
      let seatIndex = selectedSeats.indexOf(seatId);
      selectedSeats.splice(seatIndex, 1);

      setSelectedSeats(selectedSeats);
    },
    [selectedSeats]
  );

  const calculateBill = () => {
    let totalAmount = 0;

    selectedSeats.forEach((seatId: any) => {
      let seat = seatId.split(":");
      totalAmount += hallStructure[seat[0]].price;
    });
    setTotalAmount(totalAmount);
  };

  const bookSeats = () => {
    if (selectedSeats.length) {
      calculateBill();
      setTimer(new Date());
      navigate("billing");
    } else {
      alert("We hope you want to watch the movie!");
    }
  };

  useEffect(() => {
    let currentTime: any = new Date();
    if (currentTime.getMinutes() - timer.getMinutes() <= 5) {
      selectedSeats.forEach((seatId: string) => {
        let { 0: row, 1: index } = seatId.split(":");
        hallStructure[row].seats[index] = 2;
      });
      setHallstructure({ ...hallStructure });
    } else {
      setSelectedSeats([]);
    }
  }, [timer]);

  return (
    <div className="hall-screen">
      <div className="hall">
        <div className="screen" />
        {Object.keys(hallStructure).map((row: any) => (
          <div className="row" key={row}>
            {hallStructure[row].seats.map((availability: any, index: any) =>
              availability > -1 ? (
                <Seat
                  row={row}
                  index={index}
                  availability={availability}
                  addSeat={(seatId: string) => addSeat(seatId)}
                  unselectSeat={(seatId: string) => unselectSeat(seatId)}
                  key={row + index}
                />
              ) : (
                <div className="passage"></div>
              )
            )}
          </div>
        ))}
      </div>

      <button onClick={bookSeats}>Proceed</button>
    </div>
  );
};

export default Hall;
function useHistory() {
  throw new Error("Function not implemented.");
}
