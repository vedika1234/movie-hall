import React, { createContext } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Billing from "./Billing";
import Seat from "./Seat";

// export const HallContext = createContext<any>("");

export interface Ihall {}
const Hall = () => {
  const [selectedSeats, setSelectedSeats] = useState<Array<string>>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const [showBilling, setBilling] = useState(false);
  const navigate = useNavigate();

  const hallStructure: any = {
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
  };

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

    selectedSeats.forEach((seatId) => {
      let copiedSeatId = seatId;
      let row = copiedSeatId.replace(/\d/g, "");
      totalAmount += hallStructure[row].price;
    });
    setTotalAmount(totalAmount);
  };

  const bookSeats = () => {
    calculateBill();
    // navigate("billing");
    setBilling(true);
  };

  console.log(selectedSeats);

  return (
    <>
      {/* <HallContext.Provider value={selectedSeats}> */}
      <div className="hall">
        <div className="screen" />
        {Object.keys(hallStructure).map((row: any) => (
          <div className="row">
            {hallStructure[row].seats.map((availability: any, index: any) =>
              availability > -1 ? (
                <Seat
                  row={row}
                  index={index}
                  availability={availability}
                  addSeat={(seatId: string) => addSeat(seatId)}
                  unselectSeat={(seatId: string) => unselectSeat(seatId)}
                />
              ) : (
                <div className="passage"></div>
              )
            )}
          </div>
        ))}
      </div>

      <button onClick={bookSeats}>Proceed</button>
      {totalAmount}

      {/* {showBilling && <Billing />} */}
      {/* </HallContext.Provider> */}
    </>
  );
};

export default Hall;
function useHistory() {
  throw new Error("Function not implemented.");
}
