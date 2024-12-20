import { useState } from "react";
import { useContext } from "react";
import { QtySummeryContext } from "../Layout/App";

export default function QuantitySummery() {
  const { qtySummery, setSummery } = useContext(QtySummeryContext);

  return (
    <>
      {qtySummery.map((summery, index) => {
        <div className="summeryContainer" key={index}>
          <img src={productUrl} alt="" />
          <li className="summerList">{summery} </li>
        </div>;
      })}
    </>
  );
}
