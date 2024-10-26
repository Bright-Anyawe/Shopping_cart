import { useEffect, useState } from "react";
import { useShopProduct } from "./GetShopProduct";
import { useContext } from "react";
import { QuantityContext } from "../Layout/App";

const Shop = () => {
  // const [onFocus, setOnFocus] = useState(false);
  const { quantityCount, setQuantityCount, quantity, setQuantity } =
    useContext(QuantityContext);

  const { items, error, loading } = useShopProduct();

  // const [itemId, setItemId] = useState("");
  const [costPrice, setCostPrice] = useState({});

  const increment = (e, itemId) => {
    let sibling = e.target.previousElementSibling.value;
    console.log(sibling);

    // console.log(quantity[itemId]);
    const increaseQuantity = parseInt(sibling) + 1;
    console.log(increaseQuantity);

    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: increaseQuantity,
    }));
  };

  const decrease = (e,itemId) => {
    let sibling = e.target.nextElementSibling.value;
    console.log(sibling);

    // console.log(quantity[itemId]);
    const increaseQuantity = parseInt(sibling) - 1;
    console.log(increaseQuantity);

    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: increaseQuantity,
    }));
  };

  useEffect(() => {
    if (items.length !== 0) {
      const initialQuantity = items.reduce((acc, item) => {
        if (item.id !== undefined && item.id !== null) {
          acc[item.id] = 0;
        }
        return acc;
      }, {});

      setQuantity(initialQuantity);
    }
  }, [items, setQuantity]);

  useEffect(() => {
    if (items.length !== 0) {
      const initialCost = items.reduce((acc, item) => {
        if (item.price !== undefined && item.id !== null) {
          acc[item.price] = item.price ? item.price : null;
        }
        return acc;
      }, {});

      setCostPrice(initialCost);
    }
  }, [items]);

  function handleQuantity(e, itemId) {

    const newQuantity = parseInt(e.target.value);

    if (quantity !== undefined) {
      setQuantity((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: newQuantity,
      }));
    }

    // if (onFocus) {
    //   console.log("Input is focus!");
    //   const inputIndex = e.target.dataset.index;
    //   const quantityDisplayIndex =
    //     e.target.previousElementSibling.dataset.index;
    //   // let quantityDisplayEl = quantityDisplayIndex.textContent

    //   if (quantityDisplayIndex === inputIndex) {
    //     setDisplayQuantity(quantity);
    //   }
    // }
  }

  function handleQuantityCost(e, price, id) {
    const itemCost = price * quantity[id];
    console.log(itemCost);

    setCostPrice((prevPrice) => ({ ...prevPrice, [price]: itemCost }));
    console.log(costPrice[price]);
  }

  function addToCart(itemId) {
    setQuantityCount(quantity[itemId]);
  }

  return (
    <>
      <ul>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : error ? (
          <p className="errorDisplay">A network error was encountered</p>
        ) : (
          items.map((item) => (
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
                  <button onClick={(e) => decrease(e, item.id)}>-</button>

                  <input
                    type="number"
                    data-index={item.id}
                    // onFocus={() => setOnFocus(true)}
                    value={quantity[item.id]}
                    onChange={(e) => handleQuantity(e, item.id)}
                  />

                  <button onClick={(e) => increment(e, item.id)}>+</button>
                </div>

                <div className="priceOrderEl">
                  <button className="orderBtn" onClick={(e) => addToCart(e, item.id)}>
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

export default Shop;
