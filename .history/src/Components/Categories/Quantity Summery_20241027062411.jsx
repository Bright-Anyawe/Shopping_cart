import { useState } from "react";
import { useContext } from "react";
import { QtySummeryContext } from "../Layout/App";

export default function QuantitySummery() {
  const { qtySummery } = useContext(QtySummeryContext);

  return (
    <>
      <div className="summeryListContainer">
        <ul>
          
        </ul>
      </div>
    </>
  );
}
