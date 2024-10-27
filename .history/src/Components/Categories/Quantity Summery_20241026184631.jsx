import { useState } from "react";
import { useContext } from "react";
import { QtySummeryContext } from "../Layout/App";

export default function QuantitySummery() {
  const { qtySummery } = useContext(QtySummeryContext);

  return (
    <>
      <div>
        {qtySummery.length !== 0
          ? qtySummery.map((summery, index) => {
              return (
                <li className="summerList" key={index}>
                  <img src={summery.productUrl} alt={summery.productTitle} />

                  <div className="summeryTextContainer">
                    <h4>{summery.productTitle}</h4>
                    <div className="">{summery.productPrice}</div>

                    <div></div>
                  </div>
                </li>
              );
            })
          :   
           ( <p>You have not selected any product yet! </p>)
          }
      </div>
    </>
  );
}
