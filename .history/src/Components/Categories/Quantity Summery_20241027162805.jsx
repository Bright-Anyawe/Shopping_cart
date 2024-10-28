import { useEffect, useState } from "react";
import { useContext } from "react";
import { QtySummeryContext } from "../Layout/App";

export default function QuantitySummery() {
  const { qtySummery } = useContext(QtySummeryContext);
  const [costPrice, setCostPrice] = useState([]);

  useEffect(() => {
    function handleCostPrice() {
      console.log(qtySummery);
      // let total;

      if (qtySummery.length !== 0) {
        qtySummery.map((summery) => {
          // total = summery.productPrice * summery.QtySelected;

          return setCostPrice((prevSummery) => [
            ...prevSummery,
            summery.productPrice * summery.QtySelected,
          ]);
        });
        // console.log(total)
        

        //     qtySummery.reduce((acc, summery) => {
        //        setCostPrice(acc.productPrice * acc.QtySelected)
        //       }
        //  )
      }
    }
    
    handleCostPrice();
  }, [qtySummery]);

  useEffect(() => {

     let totalCost
    function handleTotalCost() {

 totalCost = costPrice.reduce((acc, cost) => {
   return acc + cost;
 }, 0);
    }

    handleTotalCost()
  })

  



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

          <div>Congratulation! on free shipping</div>

          <div className="totalContainer">
            <div className="subTotal">
              <p>subTotal</p>
              <p>{costPrice}</p>
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
      </div>
    </>
  );
}
