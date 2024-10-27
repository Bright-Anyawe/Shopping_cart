import { useState } from "react";
import { useContext } from "react";
import { QtySummeryContext } from "../Layout/App";

export default function QuantitySummery() {
  const { qtySummery } = useContext(QtySummeryContext);

  return (
    <>
      <div className="summeryListContainer">
        <ul className="summeryListSubContainer">
          {qtySummery.length !== 0 ? (
            qtySummery.map((summery, index) => {
              return (
                <li className="summerList" key={index}>
                  <img src={summery.productUrl} alt={summery.productTitle} />

                  <div className="summeryTextContainer">
                    <h4>{summery.productTitle}</h4>
                    <div className="">{`$${summery.productPrice}`}</div>

                    <h5>{`Qty: ${summery.QtySelected}`}</h5>
                  </div>
                </li>
              );
            })
          ) : (
            <p className="itemNotSelected">
              You have not selected any product yet!{" "}
            </p>
          )}
        </ul>

        <div className="totalSummery">
          <h2>Summery</h2>

          <div>
               Congratulation
          </div>

          <div className="subTotal">
            <p>subTotal</p>
            <p>{}</p>
          </div>
          <div className="shippingFee">
            <p>Free Shipping</p>
            <p>$00. 00</p>
          </div>

          <div className="totalContainer">
            <p>Total: </p>
            <p>{}</p>
          </div>
        </div>
      </div>
    </>
  );
}
