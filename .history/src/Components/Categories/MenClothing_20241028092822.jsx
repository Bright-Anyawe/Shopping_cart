import { useEffect, useState } from "react";
import { useContext } from "react";
import { QuantityContext } from "../Layout/App";
import { useShopProduct } from "../Layout/GetShopProduct";
import { QtySummeryContext } from "../Layout/App";
// import { useShopProduct } from "./GetShopProduct";
// import { useContext } from "react";
// import { QuantityContext } from "../Layout/App";

const MenClothing = () => {
  const { items, error, loading } = useShopProduct();

  const { setQuantityCount, quantity, setQuantity } =
    useContext(QuantityContext);

  const { qtySummery, setSummery } = useContext(QtySummeryContext);

  const [menProduct, setMenProduct] = useState([]);

  // const [costPrice, setCostPrice] = useState({});

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
    if (menProduct.length !== 0) {
      const initialQuantity = menProduct.reduce((acc, product) => {
        if (product.id !== undefined && product.id !== null) {
          acc[product.id] = 0;
        }

        return acc;
      }, {});

      setQuantity(initialQuantity);
    }
  }, [menProduct, setQuantity]);

  useEffect(() => {
    const removeItems = (startIndex, endIndex) => {
      if (startIndex < 0 || endIndex + 1 > items.length) {
        return [];
      }
      const removeItems = items.slice(startIndex, endIndex + 1);

      setMenProduct(removeItems);
    };

    removeItems(0, 3);
  }, [items]);

  function handleQuantity(e, itemId) {
    const newQuantity = parseInt(e.target.value);

    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  }
  function addToCart(e, itemId, product) {
    e.persist();
    console.log(itemId);
    console.log(quantity[itemId]);
    let totalQuantity = Object.values(quantity).reduce((acc, qty) => {
      return acc + qty;
    }, 0);
    console.log(totalQuantity);
    setQuantityCount(totalQuantity);

    console.log(product);
    const existingProductIndex = qtySummery.findIndex(
      (item) => item.productUrl === product.image
    );

    const newQuantity = quantity[itemId];

    if (existingProductIndex !== -1) {
      preventDuplicateOfExistingProduct(newQuantity, existingProductIndex);
    } else {
      handleSelectedProductDetails(itemId, product);
    }
  }

  function preventDuplicateOfExistingProduct(
    newQuantity,
    existingProductIndex
  ) {
    setSummery((prevSummery) => {
      const updateSummery = prevSummery.map((item, index) => {
        if (index === existingProductIndex) {
          return {
            ...item,
            QtySelected: item.QtySelected + newQuantity,
          };
        }
        return item;
      });
      return updateSummery;
    });
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
      <ul className="menProductContainer">
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

export default MenClothing;