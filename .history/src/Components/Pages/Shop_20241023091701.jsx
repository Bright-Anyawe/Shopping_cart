import { useEffect, useState } from "react";
import { useShopProduct } from "./GetShopProduct";

const Shop = () => {
  // const [onFocus, setOnFocus] = useState(false);

  const [items, error, loading] = useShopProduct();

  const [quantity, setQuantity] = useState({});
  const [costPrice, setCostPrice] = useState({});


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
  }, [items]);

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
    console.log(quantity);
    console.log(itemId);

    const newQuantity = e.target.value;

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

    setCostPrice((prevPrice) => ({ ...prevPrice, totalCost: itemCost }));
    console.log(costPrice);
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
                <h4>{item.title}</h4>
              </li>
              <div className="quantityContainer">
                <p className="quantity" data-index={item.id}>
                  Qty:{quantity[item.id]}{" "}
                </p>
                <input
                  type="number"
                  data-index={item.id}
                  // onFocus={() => setOnFocus(true)}
                  value={quantity[item.id]}
                  onChange={(e) => handleQuantity(e, item.id)}
                />
              </div>

              <div className="priceOrderEl">
                <p>{`price: $${{ costPrice[item.price] }`}</p>
                <button
                  className="orderBtn"
                  onClick={(e) => handleQuantityCost(e, item.price, item.id)}
                >
                  Order now!
                </button>
              </div>
            </div>
          ))
        )}
      </ul>
    </>
  );
};

export default Shop;
