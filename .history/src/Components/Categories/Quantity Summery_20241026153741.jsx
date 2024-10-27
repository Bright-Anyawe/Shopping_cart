import { useState } from "react";
import { useContext } from "react";
import { QtySummeryContext } from "../Layout/App";

export default function QuantitySummery() {
  const { qtySummery, setSummery } = useContext(QtySummeryContext);

  return (
    <>
      <div>
        {qtySummery.map((summery, index) => {
          <li className="summerList" key={index}>
            <img src={summery.productUrl} alt={summery.productTitle} />
            <div className="summeryTextContainer">{summery}
               <h4>summery.productTitle</h4>
               <div className="">summery.produ</div>
                </div>
          </li>;
        })}
      </div>
    </>
  );
}
