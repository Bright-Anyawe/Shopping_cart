import { useEffect, useState } from "react";
import { useShopProduct } from "../Layout/GetShopProduct";
import { useContext } from "react";
import { QtySummeryContext } from "../Layout/App";
import { QuantityContext } from "../Layout/App";

const Jewelry = () => {
  const { quantityCount, setQuantityCount, quantity, setQuantity } =
    useContext(QuantityContext);
  const { qtySummery, setSummery } = useContext(QtySummeryContext);


  const { items, error, loading } = useShopProduct();

  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    const removeItems = (startIndex, endIndex) => {
      if (startIndex < 0 || endIndex + 1 > items.length) {
        return [];
      }
      const removeItems = items.slice(startIndex, endIndex + 1);

      setJewelry(removeItems);
    };

    removeItems(4, 7);
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

    const increaseQuantity = parseInt(sibling) - 1;

    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: increaseQuantity,
    }));
  };

  useEffect(() => {
    if (jewelry.length !== 0) {
      const initialQuantity = jewelry.reduce((acc, product) => {
        if (product.id !== undefined && product.id !== null) {
          acc[product.id] = 0;
        }

        return acc;
      }, {});

      setQuantity(initialQuantity);
    }
  }, [jewelry, setQuantity]);

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

  function addToCart(e, itemId, product) {
    e.persist();
    console.log(itemId);
    console.log(quantity[itemId]);
    let totalQuantity = Object.values(quantity).reduce((acc, qty) => {
      return acc + qty;
    }, 0);
    console.log(totalQuantity);
    setQuantityCount(totalQuantity);

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
    return <p className="errorDisplay">A network error was encountered</p>;
  }

  return (
    <>
      <ul className="jewelryContainer">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : error ? (
          <p className="errorDisplay">A network error was encountered</p>
        ) : (
          jewelry.map((product) => (
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
                  <button onClick={decrease}>-</button>

                  <input
                    type="number"
                    data-index={product.id}
                    // onFocus={() => setOnFocus(true)}
                    maxLength="20"
                    value={quantity[product.id]}
                    onChange={(e) => handleQuantity(e, product.id)}
                  />

                  <button onClick={(e) => increment(e, product.id)}>+</button>
                </div>

                <div className="priceOrderEl">
                  <button
                    className="orderBtn"
                    onClick={(e) => addToCart(e, product.id, product)}

                    // onClick={(e) =>
                    //   // handleQuantityCost(e, product.price, product.id)

                    // }
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

export default Jewelry;
