import React, { useId } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationsSlice";
import { addCustomer } from "../features/customerSlice";

interface ReservationCardTypes {
  name: string;
  index: number;
}

const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch();
  const id = useId();

  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(
          addCustomer({
            id,
            name,
            food: [],
          })
        );
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
};

export default ReservationCard;
