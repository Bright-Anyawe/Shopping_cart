
import { useEffect, useState } from "react";
import { useContext } from "react";
import { QuantityContext } from "../Layout/App";
// import { useShopProduct } from "./GetShopProduct";
// import { useContext } from "react";
// import { QuantityContext } from "../Layout/App";

const MenClothing = () => {
const { quantityCount, setQuantityCount, quantity, setQuantity } =
  useContext(QuantityContext);

  const [menProduct, setMenProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  const [costPrice, setCostPrice] = useState({});

  const increment = () =>
    setQuantityCount((prevQuantities) => prevQuantities[quantity] + 1);

  const decrease = () =>
    setQuantityCount((prevQuantities) => prevQuantities[quantity] - 1);


  useEffect(() => {
    async function fetchData() {
      let response;

      try {
        response = await fetch(
          "https://fakestoreapi.com/products/category/men's%20clothing",
          {
            mode: "cors",
          }
        );

        const menProduct = await response.json();
        console.log(menProduct);

        setMenProduct(menProduct);
      } catch (error) {

           console.log("Not found");
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  
  useEffect(() => {
    if (menProduct.length !== 0) {
      const initialCost = menProduct.reduce((acc, item) => {
        if (item.price !== undefined && item.id !== null) {
          acc[item.price] = item.price ? item.price : null;
        }
        return acc;
      }, {});

      setCostPrice(initialCost);
    }
  }, [menProduct]);

  function handleQuantity(e, itemId) {
    console.log(quantityCount);
    console.log(itemId);

    const newQuantity = e.target.value;

    if (quantityCount !== undefined) {
      setQuantityCount((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: newQuantity,
      }));

      setQuantity(itemId);
    }

  
  }

  if(loading) {
          <p className="loading">Loading...</p>;

  }

  if(error) {
               <p className="errorDisplay">A network error was encountered</p>;

  }

  return (
    <>
      <ul>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : error ? (
          <p className="errorDisplay">A network error was encountered</p>
        ) : null}

        {menProduct.map((product) => (
          <div className="container" key={product.id}>
            <li className="imageContainer">
              <img src={product.image} alt={product.title} />
            </li>

            <div className="additionalInfoContainer">
              <div className="titleContainer">
                {" "}
                <h4>{product.title}</h4>
                <span className="rateEl">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>star</title>
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                  </svg>
                  {product.rating.rate}
                </span>
              </div>
              <p>{`Price: $${costPrice[product.price]}`}</p>

              <div className="quantityContainer">
                <button onClick={decrease}>-</button>

                <input
                  type="number"
                  data-index={product.id}
                  // onFocus={() => setOnFocus(true)}
                  value={quantityCount[product.id]}
                  onChange={(e) => handleQuantity(e, product.id)}
                />

                <button onClick={increment}>+</button>
              </div>

              <div className="priceOrderEl">
                <button
                  className="orderBtn"
               //    onClick={(e) =>
               //      handleQuantityCost(e, product.price, product.id)
               //    }
                >
                  Order now!
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};

export default MenClothing;
