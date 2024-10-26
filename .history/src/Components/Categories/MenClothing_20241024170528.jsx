
import { useEffect, useState } from "react";
// import { useShopProduct } from "./GetShopProduct";
// import { useContext } from "react";
// import { QuantityContext } from "../Layout/App";

const MensClothing = () => {

const [menProduct, setMenProduct] = useState([]);
const [loading, setLoading] = useState(true)
const [error, setError] = useState(true);


   useEffect(() => {
     async function fetchData() {
       let response;

       try {
         response = await fetch(
           "https://fakestoreapi.com/products/category/jewelery",
           {
             mode: "cors",
           }
         );

         const menProduct = await response.json();
         console.log(menProduct);

         setMenProduct(menProduct);
         
       } catch (error) {
         setError(error);
         console.log("Not found");
       } finally {
         setLoading(false);
       }
     }
     fetchData();
   }, []);


  return (
    <>
      <ul>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : error ? (
          <p className="errorDisplay">A network error was encountered</p>
        ) : (
          menProduct.map((product) => (
            <div className="container" key={item.id}>
              <li className="imageContainer">
                <img src={item.image} alt={item.title} />
              </li>

              <div className="additionalInfoContainer">
                <div className="titleContainer">
                  {" "}
                  <h4>{item.title}</h4>
                  <span className="rateEl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>star</title>
                      <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                    </svg>
                    {item.rating.rate}
                  </span>
                </div>
                <p>{`Price: $${costPrice[item.price]}`}</p>

                <div className="quantityContainer">
                  <button onClick={decrease}>-</button>

                  <input
                    type="number"
                    data-index={item.id}
                    // onFocus={() => setOnFocus(true)}
                    value={quantityCount[item.id]}
                    onChange={(e) => handleQuantity(e, item.id)}
                  />

                  <button onClick={increment}>+</button>
                </div>

                <div className="priceOrderEl">
                  <button
                    className="orderBtn"
                    onClick={(e) => handleQuantityCost(e, item.price, item.id)}
                  >
                    Order now!
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </ul>
    </>
  );
};

export default MensClothing;
