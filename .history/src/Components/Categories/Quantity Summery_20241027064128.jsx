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

              
        <div className="totalSummery">
          <h2>Summery</h2>

          <div>Congratulation! on free shipping</div>

          <div className="totalContainer">
            <div className="subTotal">
              <p>subTotal</p>
              <p>{}</p>
            </div>
            <div className="shippingFee">
              <p>Free Shipping</p>
              <p>$00. 00</p>
            </div>

            <div className="total">
              <p>Total: </p>
              <p>{}</p>
            </div>
          </div>
        </div>
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
