import { useState } from "react";
import { useContext } from "react";
import { QtySummeryContext } from "../Layout/App";

export default function QuantitySummery() {
  const { qtySummery, setSummery } = useContext(QtySummeryContext);

  return (
    <>
      {qtySummery.map((summery, index) => {
        <div className="summeryContainer" key={index}>
          <img src={summery.productUrl} alt={summery.productTitle} />
          <div className="summerList">{summery} </div>
        </div>;
      })}
    </>
  );
}
