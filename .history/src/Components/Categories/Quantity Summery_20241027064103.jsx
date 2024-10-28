import { useState } from "react";
import { useContext } from "react";
import { QtySummeryContext } from "../Layout/App";

export default function QuantitySummery() {
  const { qtySummery } = useContext(QtySummeryContext);

  return (
    <>
      <div className="summeryListContainer">
        {qtySummery.length !== 0 ? (
          qtySummery.map((summery, index) => {
            return (
              <ul className="summeryListSubContainer" key={index}>
                <li className="summerList">
                  <img src={summery.productUrl} alt={summery.productTitle} />

                  <div className="summeryTextContainer">
                    <h4>{summery.productTitle}</h4>
                    <div className="">{`$${summery.productPrice}`}</div>

                    <h5>{`Qty: ${summery.QtySelected}`}</h5>
                  </div>
                </li>
              </ul>
            );
          })
        ) : (
          <p className="itemNotSelected">
            You have not selected any product yet!{" "}
          </p>
        )}

      </div>
    </>
  );
}