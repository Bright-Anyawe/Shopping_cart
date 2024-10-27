import { useEffect, useState } from "react";
import { useShopProduct } from "../Pages/GetShopProduct";
import { useContext } from "react";
import { QuantityContext } from "../Layout/App";

const Electronics = () => {
  const { quantityCount, setQuantityCount, quantity, setQuantity } =
    useContext(QuantityContext);

  const { items, error, loading } = useShopProduct();

  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    const removeItems = (startIndex, endIndex) => {
      if (startIndex < 0 || endIndex + 1 > items.length) {
        return [];
      }
      const removeItems = items.slice(startIndex, endIndex + 1);

      setElectronics(removeItems);
    };

    removeItems(8, 13);
  }, [items]);

  const increment = (e, itemId) => {
    let siblingValue = e.target.previousElementSibling.value;
    console.log(siblingValue);
    // console.log(quantity[itemId]);
    const increaseQuantity = parseInt(siblingValue) + 1;
    console.log(increaseQuantity);

    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: increaseQuantity,
    }));
  };

  const decrease = (e, itemId) => {
    let sibling = e.target.nextElementSibling.value;
    console.log(sibling);

    const increaseQuantity = parseInt(sibling) - 1;
    console.log(increaseQuantity);

    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: increaseQuantity,
    }));
  };

  useEffect(() => {
    if (electronics.length !== 0) {
      const initialQuantity = electronics.reduce((acc, product) => {
        if (product.id !== undefined && product.id !== null) {
          acc[product.id] = 0;
        }

        return acc;
      }, {});

      setQuantity(initialQuantity);
    }
  }, [electronics, setQuantity]);

  function handleQuantity(e, itemId) {
    console.log(quantityCount);
    console.log(itemId);

    const newQuantity = Number(e.target.value);

    if (quantityCount !== undefined) {
      setQuantityCount((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: newQuantity,
      }));

      setQuantity(itemId);
    }
  }

  function addToCart(e) {
    e.persist();

    let totalQuantity = Object.values(quantity).reduce((acc, qty) => {
      return acc + qty;
    }, 0);
    console.log(totalQuantity);
    setQuantityCount(totalQuantity);
  }

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="errorDisplay">A network error was encountered</p>;
  }

  return (
    <>
      <ul className="electronicsProductContainer">
        {electronics.map((product) => (
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
              {/* <p>{`Price: $${costPrice[product.price]}`}</p> */}
              <p>{`Price: $${product.price}`}</p>

              <div className="quantityContainer">
                <button onClick={(e) => decrease(e, product.id)}>-</button>

                <input
                  type="number"
                  data-index={product.id}
                  // onFocus={() => setOnFocus(true)}
                  value={quantity[product.id]}
                  maxLength="20"
                  onChange={(e) => handleQuantity(e, product.id)}
                />

                <button onClick={(e) => increment(e, product.id)}>+</button>
              </div>

              <div className="priceOrderEl">
                <button
                  className="orderBtn"
                  onClick={(e) => addToCart(e, product.id)}

                  // onClick={(e) =>
                  //   handleQuantityCost(e, product.price, product.id)
                  // }
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

export default Electronics;
