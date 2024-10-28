import { useEffect, useState } from "react";
import { useShopProduct } from "./GetShopProduct";
import { useContext } from "react";
import { QuantityContext } from "./App";
import { QtySummeryContext } from "./App";

const Shop = () => {
  // const [onFocus, setOnFocus] = useState(false);
  const { setQuantityCount, quantity, setQuantity } =
    useContext(QuantityContext);
  const { qtySummery, setSummery } = useContext(QtySummeryContext);

  const { items, error, loading } = useShopProduct();

  const increment = (e, itemId) => {
    let siblingValue = e.target.previousElementSibling.value;

    console.log(itemId);

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
          console.log(acc[item.id]);
        }
        return acc;
      }, {});

      setQuantity(initialQuantity);
    }
  }, [items, setQuantity]);

  function handleQuantity(e, itemId) {
    const newQuantity = parseInt(e.target.value);

    if (quantity !== undefined) {
      setQuantity((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: newQuantity,
      }));
    }
  }

  function addToCart(e, itemId, product) {
    e.persist();
    console.log(itemId);
    console.log(quantity[itemId]);
    console.log(quantity);
    let totalQuantity = Object.values(quantity).reduce((acc, qty) => {
      return acc + qty;
    }, 0);

    setQuantityCount(totalQuantity);

    const existingProductIndex = qtySummery.findIndex(
      (product) => product.productUrl === product.image
    );

    if (existingProductIndex !== -1) {
      
      set

      return updateSummery;
    } else {
      handleSelectedProductDetails(itemId, product);
    }
  }

  function handleSelectedProductDetails(itemId, product) {
    setSummery((summery) => [
      ...summery,
      {
        productTitle: product.title,
        productUrl: product.image,
        productPrice: product.price,
        QtySelected: quantity[itemId],
      },
    ]);
    console.log(qtySummery);
  }

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    <p className="errorDisplay">A network error was encountered</p>;
  }

  return (
    <>
      <ul className="shopProductContainer">
        {items.map((product) => (
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
              {/* <p>{`Price: $${costPrice[item.price]}`}</p> */}
              <p>{`Price: $${product.price}`}</p>

              <div className="quantityContainer">
                <button onClick={(e) => decrease(e, product.id)}>-</button>

                <input
                  type="number"
                  data-index={product.id}
                  maxLength="20"
                  // onFocus={() => setOnFocus(true)}
                  value={quantity[product.id]}
                  onChange={(e) => handleQuantity(e, product.id)}
                />

                <button onClick={(e) => increment(e, product.id)}>+</button>
              </div>

              <div className="priceOrderEl">
                <button
                  className="orderBtn"
                  onClick={(e) => addToCart(e, product.id, product)}
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

export default Shop;
