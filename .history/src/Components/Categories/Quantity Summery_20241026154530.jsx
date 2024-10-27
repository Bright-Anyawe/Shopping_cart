import { useState } from "react";
import { useContext } from "react";
import { QtySummeryContext } from "../Layout/App";

export default function QuantitySummery() {
  const { qtySummery} = useContext(QtySummeryContext);

  return (
    <>
      <div>
        {qtySummery.map((summery, index) => {
          return
        })}
      </div>
    </>
  );
}
